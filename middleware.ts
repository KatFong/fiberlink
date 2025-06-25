import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh-Hant', 'zh-Hans'],
  defaultLocale: 'zh-Hant',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next|white|.*\\..*).*)']
}; 