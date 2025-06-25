import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'zh-Hant'; // 設置默認語言
  }
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
}); 