"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Shield, Zap, Settings, Users, Phone, Mail, MapPin, Network, Database, Cpu, Globe, Building, Wrench } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ServicesPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');

  const services = [
    {
      id: 'fiber-installation',
      icon: Network,
      title: t('service1.title'),
      description: t('service1.description'),
      category: t('servicesPage.infrastructure'),
      features: [
        t('servicesPage.features.siteSurvey'),
        t('servicesPage.features.fiberInstallation'),
        t('servicesPage.features.equipmentConfig'),
        t('servicesPage.features.qualityAssurance')
      ],
      benefits: [
        'Minimal downtime during installation',
        'Future-proof infrastructure',
        'Professional project management',
        '24/7 installation support'
      ]
    },
    {
      id: 'network-solutions',
      icon: Building,
      title: t('service2.title'),
      description: t('service2.description'),
      category: t('servicesPage.enterpriseFiberSolutions'),
      features: [
        t('servicesPage.features.networkArchitecture'),
        t('servicesPage.features.highBandwidth'),
        t('servicesPage.features.redundancy'),
        t('servicesPage.features.monitoring')
      ],
      benefits: [
        'Scalable network infrastructure',
        'Enhanced security protocols',
        'Improved business continuity',
        'Cost-effective operations'
      ]
    },
    {
      id: 'technical-support',
      icon: Settings,
      title: t('service3.title'),
      description: t('service3.description'),
      category: t('servicesPage.support'),
      features: [
        t('servicesPage.features.networkMonitoring'),
        t('servicesPage.features.incidentResponse'),
        t('servicesPage.features.maintenance'),
        t('servicesPage.features.diagnostics')
      ],
      benefits: [
        'Maximum network uptime',
        'Proactive issue resolution',
        'Expert technical assistance',
        'Comprehensive service coverage'
      ]
    }
  ];

  const supportOptions = [
    {
      title: t('servicesPage.supportOptions.emergency'),
      description: t('servicesPage.supportOptions.emergencyDesc'),
      icon: Phone,
      contact: '+852 2123 4567',
      response: '< 1 hour'
    },
    {
      title: t('servicesPage.supportOptions.consultation'),
      description: t('servicesPage.supportOptions.consultationDesc'),
      icon: Mail,
      contact: 'technical@fiberlink.com',
      response: '< 4 hours'
    },
    {
      title: t('servicesPage.supportOptions.onsite'),
      description: t('servicesPage.supportOptions.onsiteDesc'),
      icon: MapPin,
      contact: 'Schedule via client portal',
      response: 'Same day'
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
              {t('servicesPage.professionalServices')}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              {t('servicesPage.fiberOpticServices')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed">
              {t('servicesPage.heroDescription')}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>{t('servicesPage.enterpriseGrade')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>{t('servicesPage.support247')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>{t('servicesPage.slaGuaranteed')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('servicesPage.ourServices')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('servicesPage.servicesDescription')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group bg-gray-900/30 backdrop-blur-sm border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                      <Badge variant="secondary" className="bg-gray-800/50 text-gray-300">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 flex-grow">
                      <h4 className="text-white font-medium text-sm">{t('servicesPage.keyFeatures')}</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-xs text-gray-400">
                            <CheckCircle2 className="mr-2 h-3 w-3 text-blue-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4">
                      <Link href={`/${locale}/services/${service.id}`}>
                        <Button variant="outline" className="w-full border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 text-sm">
                          {t('servicesPage.learnMore')}
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-950/40 to-blue-900/40">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t('servicesPage.ctaTitle')}
            </h2>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed">
              {t('servicesPage.ctaDescription')}
            </p>
            <Link href={`/${locale}/case-studies`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                {t('servicesPage.ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 