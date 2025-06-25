'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="選擇語言" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh-Hant">繁體中文</SelectItem>
        <SelectItem value="zh-Hans">简体中文</SelectItem>
      </SelectContent>
    </Select>
  );
}

// White version language switcher - redirects to main site with language
export function WhiteLanguageSwitcher() {
  const handleLanguageChange = (newLocale: string) => {
    // Redirect to main site with selected language and correct basePath
    window.location.href = `/fiberlink/${newLocale}`;
  };

  return (
    <Select defaultValue="zh-Hant" onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] border-gray-300 text-gray-900 hover:border-gray-400 bg-white hover:bg-gray-50 focus:text-gray-900">
        <SelectValue className="text-gray-900" />
      </SelectTrigger>
      <SelectContent className="bg-white border-gray-200">
        <SelectItem value="en" className="hover:bg-gray-50 text-gray-900">English</SelectItem>
        <SelectItem value="zh-Hant" className="hover:bg-gray-50 text-gray-900">繁體中文</SelectItem>
        <SelectItem value="zh-Hans" className="hover:bg-gray-50 text-gray-900">简体中文</SelectItem>
      </SelectContent>
    </Select>
  );
} 