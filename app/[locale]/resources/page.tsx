"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, HelpCircle, BookOpen, Zap, Cable, Network, Database, Server, ChevronRight, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ResourcesPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');
  const r = useTranslations('resources');

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-950/40 to-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
              {r('technicalResources')}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              {r('heroTitle')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed">
              {r('heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Fiber Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('fibreTechnologies.title')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400 mb-8">{t('fibreTechnologies.desc')}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 800G AI Superhighway */}
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">
                      {t('fibreTechnologies.800gDetails.title')}
                    </CardTitle>
                    <p className="text-blue-400 text-sm">
                      {t('fibreTechnologies.800gDetails.subtitle')}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">
                  {t('fibreTechnologies.800gDetails.description')}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-medium">{locale === 'en' ? 'Key Features:' : '主要特點：'}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{t('fibreTechnologies.800gDetails.features.robustProtection')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{t('fibreTechnologies.800gDetails.features.enhancedProductivity')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{t('fibreTechnologies.800gDetails.features.scalability')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{t('fibreTechnologies.800gDetails.features.highReliability')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{t('fibreTechnologies.800gDetails.features.costEffectiveness')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-900/30">
                  <h4 className="text-white font-medium mb-2">{locale === 'en' ? 'Applications:' : '應用領域：'}</h4>
                  <p className="text-gray-400 text-sm">
                    {t('fibreTechnologies.800gDetails.applications')}
                  </p>
                </div>


              </CardContent>
            </Card>

            {/* Hollow Fiber Technology */}
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Cable className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">
                      {t('technicalCards.backhaulTitle')}
                    </CardTitle>
                    <p className="text-blue-400 text-sm">
                      {locale === 'en' ? '5G Optimized Fiber Infrastructure' : '5G 優化光纖基礎設施'}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">
                  {t('technicalCards.backhaulDesc')}
                </p>
                
                <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-900/20">
                  <h4 className="text-white font-medium mb-2">{locale === 'en' ? 'Technical Details:' : '技術詳情：'}</h4>
                  <p className="text-gray-400 text-sm">
                    {t('technicalCards.hollowDesc')}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-medium">{locale === 'en' ? 'Benefits:' : '優勢：'}</h4>
                  <div className="space-y-2">
                    {(locale === 'en' ? [
                      "Ultra-low latency for 5G applications",
                      "High reliability and redundancy",
                      "Seamless coverage expansion",
                      "Optimized for next-generation networks"
                    ] : [
                      "5G 應用的超低延遲",
                      "高可靠性和冗餘",
                      "無縫覆蓋擴展",
                      "針對下一代網絡優化"
                    ]).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Link href={`/${locale}/technical-capabilities`}>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      {locale === 'en' ? 'Learn More' : '了解更多'} <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
                    {locale === 'en' ? 'Technical Specs' : '技術規格'} <FileText className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 100G/400G/800G Overview */}
          <div className="mt-12">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Network className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">
                      {t('technicalCards.fiberBackboneTitle')} {locale === 'en' ? 'Ultra-High Speed Networks' : '超高速網絡'}
                    </CardTitle>
                    <p className="text-blue-400 text-sm">
                      {t('technicalCards.fiberBackboneDesc')}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  {t('fibreTechnologies.100g400g800gDesc')}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {(locale === 'en' ? [
                    { speed: "100G", description: "Enterprise backbone networks", use: "Corporate connectivity" },
                    { speed: "400G", description: "Data center interconnection", use: "Cloud infrastructure" },
                    { speed: "800G", description: "AI and supercomputing", use: "Next-gen applications" }
                  ] : [
                    { speed: "100G", description: "企業骨幹網絡", use: "企業連接" },
                    { speed: "400G", description: "數據中心互連", use: "雲端基礎設施" },
                    { speed: "800G", description: "AI 和超級計算", use: "下一代應用" }
                  ]).map((tier, index) => (
                    <div key={index} className="bg-blue-950/30 rounded-lg p-4 border border-blue-900/20">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tier.speed}</div>
                      <div className="text-white font-medium mb-1">{tier.description}</div>
                      <div className="text-gray-400 text-sm">{tier.use}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Link href={`/${locale}/technical-capabilities`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      {t('technicalCards.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 