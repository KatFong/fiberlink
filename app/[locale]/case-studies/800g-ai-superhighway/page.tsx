"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Clock, MapPin, Zap, Cpu, Brain, Database, Network, Shield, TrendingUp } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function AI800GSuperhighwayPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-950/40 to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link href={`/${locale}/case-studies`} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
                AI Infrastructure
              </Badge>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                {t('caseStudy3.heading')}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{t('caseStudy3.date')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Asia-Pacific Region</span>
                </div>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t('caseStudy3.description')}
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-purple-900/20">
                <Image 
                  src="/images/800G-AI Superhighway.jpg" 
                  alt={t('caseStudy3.imageAlt')} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-purple-500/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-purple-500/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-b from-background to-purple-950/20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 text-center p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">800G</div>
              <div className="text-gray-400">Ultra-High Speed</div>
              <div className="text-sm text-gray-500 mt-2">Optical fibre backbone</div>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 text-center p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">Asia's</div>
              <div className="text-gray-400">First 800Gbps WAN</div>
              <div className="text-sm text-gray-500 mt-2">For AI and supercomputing</div>
            </Card>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 text-center p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">AI/HPC</div>
              <div className="text-gray-400">Purpose-Built</div>
              <div className="text-sm text-gray-500 mt-2">Data center interconnection</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Revolutionary AI Infrastructure</h2>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  FiberLink's 800G AI Superhighway represents a paradigm shift in network infrastructure, specifically designed for the demands of artificial intelligence, machine learning, and high-performance computing applications.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This dedicated, fiber-based private network delivers unprecedented speeds with ultra-low latency, providing the reliable and highly secure connections that modern AI workloads demand. The infrastructure supports everything from large language model training to real-time AI inference.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  As Asia's first 800Gbps wide area network optimized for AI and supercomputing, it enables rapid transfer of massive datasets and supports advanced computing resources across multiple locations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Capabilities</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-purple-900/20">
                    <CheckCircle2 className="mr-4 h-6 w-6 text-purple-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-2">{t(`caseStudy3.points.${i}`)}</p>
                      <p className="text-gray-400 text-sm">
                        {i === 1 && "Cutting-edge optical infrastructure providing massive bandwidth for data-intensive AI applications."}
                        {i === 2 && "Flexible architecture supporting rapid deployment and expansion of AI computing resources."}
                        {i === 3 && "Comprehensive support for research institutions, technology companies, and academic centers."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gradient-to-b from-background to-purple-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Technical Features</h2>
            <div className="mx-auto h-1 w-24 bg-purple-500 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              Purpose-built infrastructure designed specifically for AI and high-performance computing workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-6">
              <Shield className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-3">Robust Protection</h3>
              <p className="text-gray-400 text-sm">Private circuit ensuring robust security for sensitive data transfers and proprietary AI models.</p>
            </Card>
            
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-6">
              <Zap className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-3">Enhanced Productivity</h3>
              <p className="text-gray-400 text-sm">Unmatched speed enabling real-time data processing and instantaneous model training feedback.</p>
            </Card>
            
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-6">
              <TrendingUp className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-3">Scalability</h3>
              <p className="text-gray-400 text-sm">Easy bandwidth upgrades and rapid deployment of new AI services as computational needs grow.</p>
            </Card>
            
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-6">
              <Network className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-3">High Reliability</h3>
              <p className="text-gray-400 text-sm">Superior reliability with robust redundancy and failover mechanisms for mission-critical AI operations.</p>
            </Card>
            
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-6">
              <Database className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-3">Cost Effectiveness</h3>
              <p className="text-gray-400 text-sm">Consolidating multiple connections into single ultra-speed link reduces operational complexity and costs.</p>
            </Card>
            
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-6">
              <Brain className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-3">AI Optimized</h3>
              <p className="text-gray-400 text-sm">Network architecture specifically tuned for AI workloads including machine learning and deep learning applications.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Real-World Applications</h2>
            <div className="mx-auto h-1 w-24 bg-purple-500 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              The 800G AI Superhighway enables breakthrough applications across multiple industries and research domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-8">
              <Cpu className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Large Language Model Training</h3>
              <p className="text-gray-400 mb-4">
                Enables rapid transfer of massive datasets required for training state-of-the-art language models and AI systems.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Multi-terabyte dataset synchronization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Distributed model training across data centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Real-time model parameter updates
                </li>
              </ul>
            </Card>

            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-900/30 p-8">
              <Brain className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI Inference & HPC Applications</h3>
              <p className="text-gray-400 mb-4">
                Supports high-performance computing resources for genomics, scientific simulations, and AI-powered business applications.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Genomics research and analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  AI agent assistance in contact centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 shrink-0"></span>
                  Virtual agents and chatbot infrastructure
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-b from-background to-purple-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Transforming AI Infrastructure</h2>
            <div className="mx-auto h-1 w-24 bg-purple-500 mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              The 800G AI Superhighway is positioning Asia-Pacific as a global leader in AI infrastructure, enabling breakthrough research and commercial applications that were previously impossible due to bandwidth limitations.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/20">
            <blockquote className="text-xl text-white italic text-center mb-6">
              "This infrastructure enables us to push the boundaries of what's possible in AI research and development, providing the computational backbone for next-generation artificial intelligence applications."
            </blockquote>
            <div className="text-center text-gray-400">
              <p className="font-medium">Dr. Sarah Zhang</p>
              <p className="text-sm">Director of AI Research, Hong Kong Science Park</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Explore More Success Stories</h2>
            <p className="text-gray-400">Discover the full range of FiberLink's innovative infrastructure projects.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/case-studies/submarine-cable`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Next: Submarine Cable Project
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