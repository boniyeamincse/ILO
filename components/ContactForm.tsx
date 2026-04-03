"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const f = dict.contact.form;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-gray-800 text-sm transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.name}</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder={f.namePlaceholder}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.email}</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder={f.emailPlaceholder}
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{f.subject}</label>
        <input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          placeholder={f.subjectPlaceholder}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{f.message}</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          rows={5}
          required
          className={inputClass}
        />
      </div>

      {status === "success" && (
        <p className="text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
          {f.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? dict.common.loading : f.submit}
      </button>
    </form>
  );
}
