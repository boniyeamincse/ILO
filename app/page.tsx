import { redirect } from "next/navigation";

/** 
 * Redirect to local version
 */
export default function RootPage() {
  redirect("/en");
}
