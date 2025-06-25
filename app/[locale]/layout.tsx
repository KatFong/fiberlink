import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-Hant' }, { locale: 'zh-Hans' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <body className={inter.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="p-4">
          {children}
        </div>
      </NextIntlClientProvider>
    </body>
  );
} 