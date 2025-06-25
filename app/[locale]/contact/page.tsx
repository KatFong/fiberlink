"use client"

import React from "react";
import { Phone, Mail, MapPin, Clock, Send, Headphones, MessageSquare, Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ContactPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('contact');
  const f = useTranslations('footer');

  // Support options data
  const supportOptions = [
    {
      icon: Headphones,
      title: t('support24x7'),
      description: t('support24x7Desc'),
      contact: "+852 2123 4568"
    },
    {
      icon: MessageSquare,
      title: t('emailSupport'),
      description: t('emailSupportDesc'),
      contact: "support@fiberlink.com"
    },
    {
      icon: Clock,
      title: t('officeHours'),
      description: t('officeHoursDesc'),
      contact: t('officeHoursTime')
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-950/40 to-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
              {t('contactInformation')}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              {t('contactUs')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed">
              {t('getInTouch')}
            </p>
          </div>

          {/* Support Options Cards */}
          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center hover:bg-gray-900/40 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-600/20 rounded-lg">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                  <div className="space-y-2">
                    <div className="text-blue-400 font-medium">{option.contact}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('ourLocation')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('visitUs')}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 overflow-hidden">
              <div className="relative h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14767.078633171262!2d114.2088865!3d22.2883110!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f2f0d2a5e3%3A0x3f82c44dcdd5b4cf!2sCambridge%20House!5e0!3m2!1sen!2shk!4v1734000000000!5m2!1sen!2shk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'brightness(0.9) contrast(1.1)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="FiberLink Office Location"
                ></iframe>
                
                {/* Location info overlay */}
                <div className="absolute top-6 left-6 bg-black/90 backdrop-blur-md rounded-xl p-6 text-white border border-blue-500/20 shadow-2xl max-w-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="font-bold text-lg">FiberLink Limited</span>
                  </div>
                  <div className="text-sm text-gray-300 space-y-1">
                    <div className="font-medium text-white">
                      {locale === 'en' ? '39/F, Cambridge House' : '康和大廈39樓'}
                    </div>
                    <div>
                      {locale === 'en' ? 'Taikoo Place, 979 King Road' : '太古坊英皇道979號'}
                    </div>
                    <div>
                      {locale === 'en' ? 'Quarry Bay, Hong Kong' : '香港鰂魚涌'}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 