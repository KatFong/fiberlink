"use client"

import React from "react";
import { use } from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Server, Network, Database, CheckCircle2, Quote } from "lucide-react"
import HeroBanner from "@/components/hero-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function Home() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroBanner />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('ourStory')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('ourStoryDesc')}
            </p>
          </div>

          {/* Services content */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: t('service1.title'),
                description: t('service1.description'),
                icon: <Network className="h-10 w-10 text-blue-400" />,
              },
              {
                title: t('service2.title'),
                description: t('service2.description'),
                icon: <Server className="h-10 w-10 text-blue-400" />,
              },
              {
                title: t('service3.title'),
                description: t('service3.description'),
                icon: <Database className="h-10 w-10 text-blue-400" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-blue-900/20 bg-blue-950/20 p-6 backdrop-blur-sm transition-all hover:border-blue-800/30 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-4 text-gray-400">{service.description}</p>
                <Link href={`/${locale}/services`} className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  {t('learnMore')} <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('successStories')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('successStoriesDesc')}
            </p>
          </div>

          <Tabs defaultValue="corporate" className="space-y-8">
            <TabsList className="mx-auto flex w-full max-w-md justify-center bg-blue-950/30 p-1">
              <TabsTrigger value="corporate" className="flex-1 data-[state=active]:bg-blue-600">
                {t('caseStudy1.title')}
              </TabsTrigger>
              <TabsTrigger value="education" className="flex-1 data-[state=active]:bg-blue-600">
                {t('caseStudy2.title')}
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex-1 data-[state=active]:bg-blue-600">
                {t('caseStudy3.title')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="corporate" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                  <Image
                    src="/images/corporate-network.png"
                    alt={t('caseStudy1.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    {t('caseStudy1.date')}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('caseStudy1.heading')}</h3>
                  <p className="text-gray-400">
                    {t('caseStudy1.description')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-400">{t(`caseStudy1.points.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {t('readCaseStudy')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                  <Image
                    src="/images/lamma.jpg"
                    alt={t('caseStudy2.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    {t('caseStudy2.date')}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('caseStudy2.heading')}</h3>
                  <p className="text-gray-400">
                    {t('caseStudy2.description')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-400">{t(`caseStudy2.points.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {t('readCaseStudy')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                  <Image
                    src="/images/800G-AI Superhighway.jpg"
                    alt={t('caseStudy3.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    {t('caseStudy3.date')}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('caseStudy3.heading')}</h3>
                  <p className="text-gray-400">
                    {t('caseStudy3.description')}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-400">{t(`caseStudy3.points.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {t('readCaseStudy')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('testimonials')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('testimonialsDesc')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-blue-900/20 bg-blue-950/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-blue-400" />
                  <p className="mb-4 text-gray-400">{t(`testimonial${i}.quote`)}</p>
                  <div className="flex items-center">
                    <Image
                      src={t(`testimonial${i}.image`)}
                      alt={t(`testimonial${i}.author`)}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-white">{t(`testimonial${i}.author`)}</p>
                      <p className="text-sm text-gray-400">{t(`testimonial${i}.position`)}</p>
                      <p className="text-sm text-gray-400">{t(`testimonial${i}.company`)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
} 