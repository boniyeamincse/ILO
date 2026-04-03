import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'bn']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language') || ''
  if (acceptLang.toLowerCase().includes('bn') || acceptLang.toLowerCase().includes('beng')) {
    return 'bn'
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) {
    const locale = pathname.split('/')[1]
    const response = NextResponse.next()
    response.headers.set('x-locale', locale)
    return response
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)'],
}
