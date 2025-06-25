"use client"

import React from "react";
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const t = useTranslations('common');

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {t('about')}
            </h1>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400 text-lg">
              {t('ourStoryDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-blue-900/20">
                <Image src="/fiberlink/images/aboutUs.jpeg" alt="FiberLink corporate network infrastructure" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-blue-900/30 rounded-lg -z-10"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{t('ourStoryTitle')}</h2>
              <p className="text-blue-400 font-medium">{t('ourStorySubtitle')}</p>
              <p className="text-gray-400 leading-relaxed">{t('ourStoryShort')}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-blue-900/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{t('ourStoryStats.transactionValue')}</div>
                  <div className="text-gray-400 text-sm">{t('ourStoryStats.transactionValueLabel')}</div>
                </div>
                <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-blue-900/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{t('ourStoryStats.networkCoverage')}</div>
                  <div className="text-gray-400 text-sm">{t('ourStoryStats.networkCoverageLabel')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('aboutPage.missionVision')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t('aboutPage.missionVisionDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-blue-900/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{t('aboutPage.ourMission')}</h3>
                </div>
                <p className="text-gray-400">
                  {t('aboutPage.missionText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 backdrop-blur-sm border-blue-900/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{t('aboutPage.ourVision')}</h3>
                </div>
                <p className="text-gray-400">
                  {t('aboutPage.visionText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('aboutPage.coreValues')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('aboutPage.excellence')}</h3>
              <p className="text-gray-400">
                {t('aboutPage.excellenceText')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('aboutPage.customerFirst')}</h3>
              <p className="text-gray-400">
                {t('aboutPage.customerFirstText')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-blue-900/20">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('aboutPage.innovation')}</h3>
              <p className="text-gray-400">
                {t('aboutPage.innovationText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 