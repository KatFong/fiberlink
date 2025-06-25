"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Building, Globe, Shield, Zap, Users, Database, Network, Settings } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function NetworkSolutionsPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');
  const tPage = useTranslations('networkSolutionsPage');

  const features = [
    {
      icon: Building,
      title: tPage('features.customArchitecture.title'),
      description: tPage('features.customArchitecture.description')
    },
    {
      icon: Zap,
      title: tPage('features.highBandwidth.title'),
      description: tPage('features.highBandwidth.description')
    },
    {
      icon: Shield,
      title: tPage('features.redundancy.title'),
      description: tPage('features.redundancy.description')
    },
    {
      icon: Settings,
      title: tPage('features.monitoring.title'),
      description: tPage('features.monitoring.description')
    }
  ];

  const solutions = [
    {
      title: tPage('solutions.enterprise.title'),
      description: tPage('solutions.enterprise.description'),
      icon: Building,
      specs: [
        tPage('solutions.enterprise.specs.speed'),
        tPage('solutions.enterprise.specs.connectivity'),
        tPage('solutions.enterprise.specs.architecture')
      ]
    },
    {
      title: tPage('solutions.dataCenter.title'),
      description: tPage('solutions.dataCenter.description'),
      icon: Database,
      specs: [
        tPage('solutions.dataCenter.specs.capacity'),
        tPage('solutions.dataCenter.specs.latency'),
        tPage('solutions.dataCenter.specs.uptime')
      ]
    },
    {
      title: tPage('solutions.metro.title'),
      description: tPage('solutions.metro.description'),
      icon: Globe,
      specs: [
        tPage('solutions.metro.specs.coverage'),
        tPage('solutions.metro.specs.reliability'),
        tPage('solutions.metro.specs.bandwidth')
      ]
    }
  ];

  const benefits = [
    tPage('benefits.scalable'),
    tPage('benefits.security'),
    tPage('benefits.continuity'),
    tPage('benefits.costEffective'),
    tPage('benefits.futureProof'),
    tPage('benefits.monitoring'),
    tPage('benefits.deployment'),
    tPage('benefits.support')
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-950/40 to-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Link href={`/${locale}/services`} className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {tPage('backToServices')}
            </Link>
            <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
              {tPage('category')}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              {t('service2.title')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
              {tPage('heroDescription')}
            </p>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>{tPage('badges.customDesign')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>{tPage('badges.enterpriseSecurity')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-400" />
                <span>{tPage('badges.highPerformance')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{tPage('keyFeaturesTitle')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {tPage('keyFeaturesSubtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-20 bg-gray-950/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{tPage('solutionsTitle')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {tPage('solutionsSubtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="space-y-2">
                      {solution.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                          <span className="text-sm text-gray-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{tPage('benefitsTitle')}</h2>
              <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-blue-900/30">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 