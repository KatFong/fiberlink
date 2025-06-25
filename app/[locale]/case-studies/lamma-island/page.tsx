"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Clock, MapPin, Zap, Users, Wifi, Home } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LammaIslandPage() {
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
              <Badge variant="secondary" className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
                Community Network
              </Badge>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                {t('caseStudy2.heading')}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{t('caseStudy2.date')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lamma Island, Hong Kong</span>
                </div>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t('caseStudy2.description')}
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-blue-900/20">
                <Image 
                  src="/fiberlink/images/lamma.jpg" 
                  alt={t('caseStudy2.imageAlt')} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-green-500/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-green-500/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center p-8">
              <div className="text-4xl font-bold text-green-400 mb-2">19</div>
              <div className="text-gray-400">Villages Covered</div>
              <div className="text-sm text-gray-500 mt-2">Complete island connectivity</div>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center p-8">
              <div className="text-4xl font-bold text-green-400 mb-2">10Gbps</div>
              <div className="text-gray-400">Maximum Speed</div>
              <div className="text-sm text-gray-500 mt-2">Symmetrical upload/download</div>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center p-8">
              <div className="text-4xl font-bold text-green-400 mb-2">First</div>
              <div className="text-gray-400">High-Speed Broadband</div>
              <div className="text-sm text-gray-500 mt-2">For island residents</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Bringing Connectivity to Remote Communities</h2>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  The Lamma Island Fibre Network Project represents a significant milestone in bridging the digital divide for Hong Kong's outlying islands. This ambitious infrastructure deployment brings high-speed fiber connectivity to a traditionally underserved community.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  For the first time in its history, Lamma Island residents now have access to residential high-speed broadband services, enabling them to participate fully in Hong Kong's digital economy. The project required innovative engineering solutions to overcome geographical challenges.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The network architecture supports not only current connectivity needs but also future services including 4K streaming, 5G services, and emerging digital applications that require high-bandwidth connections.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
                    <CheckCircle2 className="mr-4 h-6 w-6 text-green-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-2">{t(`caseStudy2.points.${i}`)}</p>
                      <p className="text-gray-400 text-sm">
                        {i === 1 && "Equal upload and download speeds ensuring optimal performance for video calls, cloud storage, and content creation."}
                        {i === 2 && "Comprehensive infrastructure deployment reaching all inhabited areas of the island."}
                        {i === 3 && "Future-ready network supporting next-generation digital services and applications."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenge */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Engineering Challenges Overcome</h2>
            <div className="mx-auto h-1 w-24 bg-green-500 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              Deploying fiber infrastructure on an outlying island required innovative solutions and careful planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Geographic Challenges</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Mountainous terrain requiring careful cable routing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Coastal areas with environmental protection requirements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Remote location requiring specialized logistics
                </li>
              </ul>
            </Card>

            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Technical Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Submarine fiber cable connection to mainland
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Distributed network architecture for island coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Weather-resistant infrastructure for marine environment
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Community Impact</h2>
            <div className="mx-auto h-1 w-24 bg-green-500 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              The fiber network has transformed daily life for Lamma Island residents and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Home className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Remote Work</h3>
              <p className="text-gray-400 text-sm">Enabling work-from-home opportunities</p>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Digital Inclusion</h3>
              <p className="text-gray-400 text-sm">Connecting communities to digital services</p>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Wifi className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Local Business</h3>
              <p className="text-gray-400 text-sm">Supporting tourism and local commerce</p>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 p-6 text-center">
              <Zap className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Future Ready</h3>
              <p className="text-gray-400 text-sm">Prepared for emerging technologies</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Explore More Success Stories</h2>
            <p className="text-gray-400">Discover how FiberLink continues to innovate across different projects.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/case-studies/800g-ai-superhighway`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Next: 800G AI Superhighway
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