import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { WhiteLanguageSwitcher } from "@/components/LanguageSwitcher"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fiberlink - 專業光纖網絡服務",
  description: "專業企業光纖服務，為各類型企業提供高速、穩定、安全的網絡基建。",
}

function WhiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/white" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-gray-900">Fiberlink</span>
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {[
            { href: "/white", label: "首頁" },
            { href: "/white/about", label: "關於我們" },
            { href: "/white/services", label: "服務" },
            { href: "/white/contact", label: "聯絡我們" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-blue-600 text-gray-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <WhiteLanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

function WhiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Fiberlink</h3>
            <p className="text-sm text-gray-600">
              專業企業光纖服務，為各類型企業提供高速、穩定、安全的網絡基建。
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-gray-900">服務</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/white/services" className="text-gray-600 hover:text-blue-600">
                  專業光纖安裝
                </Link>
              </li>
              <li>
                <Link href="/white/services" className="text-gray-600 hover:text-blue-600">
                  企業網絡解決方案
                </Link>
              </li>
              <li>
                <Link href="/white/services" className="text-gray-600 hover:text-blue-600">
                  技術支援
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-gray-900">工程項目</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/white/services" className="text-gray-600 hover:text-blue-600">
                  800G AI 超級公路
                </Link>
              </li>
              <li>
                <Link href="/white/services" className="text-gray-600 hover:text-blue-600">
                  南丫島光纖網絡覆蓋
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-gray-900">聯絡我們</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/white/contact" className="text-gray-600 hover:text-blue-600">
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link href="/white/about" className="text-gray-600 hover:text-blue-600">
                  關於我們
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-gray-900">公司資訊</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                39/F, Cambridge House<br />
                Taikoo Place, 979 King's Road<br />
                Quarry Bay, Hong Kong
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center text-sm text-gray-600 md:text-left">
              © 2025 Fiberlink. 版權所有。
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <Image
                  src='/fiberlink/images/logo-site-footer-tc.png'
                  alt='電訊盈科集團成員'
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function WhiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <WhiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <WhiteFooter />
    </div>
  )
} 