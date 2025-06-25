"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Clock, MapPin, Zap, Shield, Database, Network } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function SubmarineCablePage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-950/40 to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link href={`/${locale}/case-studies`} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                Infrastructure
              </Badge>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                {t('caseStudy1.heading')}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{t('caseStudy1.date')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Hong Kong</span>
                </div>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t('caseStudy1.description')}
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-blue-900/20">
                <Image 
                  src="/images/corporate-network.png" 
                  alt={t('caseStudy1.imageAlt')} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">2,016</div>
              <div className="text-gray-400">Optical Fiber Cores</div>
              <div className="text-sm text-gray-500 mt-2">Ultra-high capacity configuration</div>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">2.76km</div>
              <div className="text-gray-400">Cable Distance</div>
              <div className="text-sm text-gray-500 mt-2">Shortest submarine path</div>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">15μs</div>
              <div className="text-gray-400">Latency</div>
              <div className="text-sm text-gray-500 mt-2">Ultra-low round-trip time</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  The Ultra Express Link (UEL) represents a groundbreaking achievement in submarine cable technology. As the world's first submarine cable equipped with 2,016 optical fiber cores, it sets a new standard for high-capacity data transmission between critical data centers.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This innovative infrastructure directly connects the data centers in Tseung Kwan O and Chai Wan, providing an ultra-reliable and high-speed backbone for Hong Kong's digital economy. The project demonstrates FiberLink's commitment to pushing the boundaries of fiber optic technology.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The submarine cable's unique design ensures maximum protection against environmental factors while maintaining the shortest possible path between the two locations, resulting in industry-leading performance metrics.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Achievements</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
                    <CheckCircle2 className="mr-4 h-6 w-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-2">{t(`caseStudy1.points.${i}`)}</p>
                      <p className="text-gray-400 text-sm">
                        {i === 1 && "Revolutionary fiber core density enabling unprecedented data capacity for future-proof infrastructure."}
                        {i === 2 && "Optimized routing design minimizing signal degradation and maximizing transmission efficiency."}
                        {i === 3 && "Critical for real-time applications, financial trading, and high-frequency data synchronization."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Benefits */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Project Impact</h2>
            <div className="mx-auto h-1 w-24 bg-blue-500 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              The UEL submarine cable has transformed data connectivity between key locations in Hong Kong.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Network className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Enhanced Connectivity</h3>
              <p className="text-gray-400 text-sm">Seamless data flow between major data centers</p>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Zap className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Ultra-Low Latency</h3>
              <p className="text-gray-400 text-sm">Critical for financial and real-time applications</p>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Reliability</h3>
              <p className="text-gray-400 text-sm">Robust underwater protection and redundancy</p>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Database className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Future-Proof</h3>
              <p className="text-gray-400 text-sm">Massive capacity for decades of growth</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Explore More Success Stories</h2>
            <p className="text-gray-400">Discover how FiberLink continues to innovate across different projects.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/case-studies/lamma-island`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Next: Lamma Island Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={`/${locale}/case-studies`}>
              <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-600/10">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 