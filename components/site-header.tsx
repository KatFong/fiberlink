"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export function SiteHeader() {
  const pathname = usePathname()
  const t = useTranslations('header')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-4 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] border-blue-900/20 bg-blue-950/90 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-6 pt-6">
              <Link href="/" className="text-lg font-bold tracking-tight text-white">
                Fiberlink
              </Link>
              <div className="grid gap-3">
                {[
                  { href: "/", label: t('home') },
                  { href: "/about", label: t('about') },
                  { href: "/services", label: t('services') },
                  { href: "/case-studies", label: t('successStories') },
                  { href: "/resources", label: t('resources') },
                  { href: "/contact", label: t('contact') },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center text-lg font-medium hover:text-blue-400",
                      pathname === item.href ? "text-blue-400" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-white">Fiberlink</span>
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {[
            { href: "/", label: t('home') },
            { href: "/about", label: t('about') },
            { href: "/services", label: t('services') },
            { href: "/case-studies", label: t('successStories') },
            { href: "/resources", label: t('resources') },
            { href: "/contact", label: t('contact') },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium hover:text-blue-400",
                pathname === item.href ? "text-blue-400" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/case-studies">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              {t('ourSuccessStories')}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

