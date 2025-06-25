"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Calendar, Clock, MapPin, Users, Zap, Shield, TrendingUp, Award } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function CaseStudiesPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');

  const caseStudies = [
    {
      id: 'submarine-cable',
      title: t('caseStudy1.title'),
      date: t('caseStudy1.date'),
      heading: t('caseStudy1.heading'),
      description: t('caseStudy1.description'),
      image: '/images/corporate-network.png',
      imageAlt: t('caseStudy1.imageAlt'),
      category: t('caseStudiesPage.infrastructure'),
      readTime: `5 ${t('caseStudiesPage.minRead')}`,
      featured: true,
      stats: [
        { label: t('caseStudiesPage.fiberCores'), value: '2,016' },
        { label: t('caseStudiesPage.distance'), value: '2.76km' },
        { label: t('caseStudiesPage.latency'), value: '15μs' }
      ]
    },
    {
      id: 'lamma-island',
      title: t('caseStudy2.title'),
      date: t('caseStudy2.date'),
      heading: t('caseStudy2.heading'),
      description: t('caseStudy2.description'),
      image: '/images/lamma.jpg',
      imageAlt: t('caseStudy2.imageAlt'),
      category: t('caseStudiesPage.communityNetwork'),
      readTime: `4 ${t('caseStudiesPage.minRead')}`,
      featured: true,
      stats: [
        { label: t('caseStudiesPage.villagesCovered'), value: '19' },
        { label: t('caseStudiesPage.maxSpeed'), value: '10Gbps' },
        { label: t('caseStudiesPage.serviceType'), value: t('caseStudiesPage.symmetric') }
      ]
    },
    {
      id: '800g-ai-superhighway',
      title: t('caseStudy3.title'),
      date: t('caseStudy3.date'),
      heading: t('caseStudy3.heading'),
      description: t('caseStudy3.description'),
      image: '/images/800G-AI Superhighway.jpg',
      imageAlt: t('caseStudy3.imageAlt'),
      category: t('caseStudiesPage.aiInfrastructure'),
      readTime: `6 ${t('caseStudiesPage.minRead')}`,
      featured: true,
      stats: [
        { label: t('caseStudiesPage.speed'), value: '800G' },
        { label: t('caseStudiesPage.coverage'), value: t('caseStudiesPage.regionWide') },
        { label: t('caseStudiesPage.purpose'), value: t('caseStudiesPage.aiHpc') }
      ]
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
              {t('caseStudiesPage.successStories')}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              {t('caseStudiesPage.caseStudies')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed">
              {t('caseStudiesPage.heroDescription')}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span>{t('caseStudiesPage.awardWinningProjects')}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-400" />
                <span>{t('caseStudiesPage.provenResults')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span>{t('caseStudiesPage.customerSuccess')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('caseStudiesPage.featuredProjects')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('caseStudiesPage.featuredProjectsDesc')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="group bg-gray-900/30 backdrop-blur-sm border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-blue-600/90 text-white">
                      {study.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{study.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{study.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {study.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {study.description.substring(0, 120)}...
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-blue-900/30">
                    {study.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-blue-400 font-bold text-sm">{stat.value}</div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/${locale}/case-studies/${study.id}`}>
                    <Button variant="outline" className="w-full border-blue-500/30 hover:bg-blue-600 hover:border-blue-500">
                      {t('caseStudiesPage.readFullCaseStudy')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 