import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支援的語言列表
  locales: ['en', 'zh-Hant', 'zh-Hans'],
  
  // 默認語言
  defaultLocale: 'zh-Hant'
});

export const config = {
  // 匹配所有路徑除了 api, _next, 和靜態文件
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 