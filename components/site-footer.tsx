import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from 'next-intl';

export function SiteFooter() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-blue-950/30 backdrop-blur-sm">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">{t('fibralink')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('desc')}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">{t('services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#fiber-installation" className="text-muted-foreground hover:text-blue-400">
                  {t('professionalFiberInstallation')}
                </Link>
              </li>
              <li>
                <Link href="/services#network-solutions" className="text-muted-foreground hover:text-blue-400">
                  {t('enterpriseNetworkSolutions')}
                </Link>
              </li>
              <li>
                <Link href="/services#technical-support" className="text-muted-foreground hover:text-blue-400">
                  {t('technicalSupport')}
                </Link>
              </li>
              <li>
                <Link href="/services#managed-services" className="text-muted-foreground hover:text-blue-400">
                  {t('networkManagementServices')}
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-connectivity" className="text-muted-foreground hover:text-blue-400">
                  {t('cloudConnectivitySolutions')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">{t('resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-blue-400">
                  {t('caseStudies')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-blue-400">
                  {t('technicalWhitepapers')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-blue-400">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-blue-400">
                  {t('enterpriseNetworkBlog')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">{t('contactUs')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{t('phone')}</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{t('email')}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{t('address')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-900/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 Fibralink. {t('allRightsReserved')}
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-blue-400">
                {t('privacyPolicy')}
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400">
                {t('termsOfService')}
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400">
                {t('sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

