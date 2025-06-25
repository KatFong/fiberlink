import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-Hant' }, { locale: 'zh-Hans' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="p-4">
        {children}
      </div>
    </NextIntlClientProvider>
  );
} 