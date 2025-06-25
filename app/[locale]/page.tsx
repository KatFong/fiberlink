"use client"

import React from "react";
import { use } from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Server, Network, Database, CheckCircle2, Quote, Cable, ShieldCheck, Zap } from "lucide-react"
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

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('ourStory')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">{t('ourStoryDesc')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-blue-900/20">
                <Image src="/images/aboutUs.jpeg" alt="FiberLink about us and our story" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-blue-900/30">
              <h3 className="text-2xl font-bold mb-6 text-white">{t('ourStoryTitle')}</h3>
              <p className="text-sm text-blue-400 mb-4 font-medium">{t('ourStorySubtitle')}</p>
              <p className="text-gray-400 mb-6">{t('ourStoryShort')}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{t('ourStoryStats.transactionValue')}</div>
              <div className="text-gray-400 text-sm">{t('ourStoryStats.transactionValueLabel')}</div>
            </div>
            <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{t('ourStoryStats.networkCoverage')}</div>
              <div className="text-gray-400 text-sm">{t('ourStoryStats.networkCoverageLabel')}</div>
            </div>
            <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{t('ourStoryStats.serviceReliability')}</div>
              <div className="text-gray-400 text-sm">{t('ourStoryStats.serviceReliabilityLabel')}</div>
            </div>
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

          {/* Services content */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
          <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('fibreTechnologies.title')}</h2>
            <p className="mx-auto max-w-2xl text-gray-400 mb-8">{t('fibreTechnologies.desc')}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: t('fibreTechnologies.800gDetails.title', { fallback: '800G AI Superhighway' }),
                description: t('fibreTechnologies.800gDetails.subtitle', { fallback: 'Asia\'s First 800Gbps Wide Area Network for AI and Supercomputing' }),
                icon: <Zap className="h-10 w-10 text-blue-400" />,
                extra: t('fibreTechnologies.800gDetails.description'),
              },
              {
                title: t('technicalCards.backhaulTitle', { fallback: 'Hollow Fiber' }),
                description: t('technicalCards.backhaulDesc', { fallback: 'Optimized fibre backhaul for 5G, ensuring ultra-low latency, high reliability, and seamless coverage expansion for next-generation mobile networks.' }),
                icon: <Cable className="h-10 w-10 text-blue-400" />,
                extra: t('technicalCards.hollowDesc'),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-blue-900/20 bg-blue-950/20 p-6 backdrop-blur-sm transition-all hover:border-blue-800/30 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-gray-400">{item.description}</p>
                {item.extra && <p className="text-gray-400 text-sm mt-2">{item.extra}</p>}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href={`/${locale}/technical-capabilities`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('technicalCards.cta', { fallback: 'Explore Full Technical Capabilities' })}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gradient-to-b from-blue-950/20 to-background">
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
      </section> */}

      <SiteFooter />
    </main>
  );
} 