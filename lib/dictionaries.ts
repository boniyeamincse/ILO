import 'server-only'

export async function getDictionary(locale: string) {
  if (locale === 'bn') {
    return (await import('../messages/bn.json')).default
  }
  return (await import('../messages/en.json')).default
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
