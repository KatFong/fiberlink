"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Shield, Network, MapPin, Users, Award, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function FiberInstallationPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');
  const tPage = useTranslations('fiberInstallationPage');

  const features = [
    {
      icon: MapPin,
      title: tPage('features.siteSurvey.title'),
      description: tPage('features.siteSurvey.description')
    },
    {
      icon: Network,
      title: tPage('features.fiberInstallation.title'),
      description: tPage('features.fiberInstallation.description')
    },
    {
      icon: Shield,
      title: tPage('features.equipmentConfig.title'),
      description: tPage('features.equipmentConfig.description')
    },
    {
      icon: Award,
      title: tPage('features.qualityAssurance.title'),
      description: tPage('features.qualityAssurance.description')
    }
  ];

  const benefits = [
    tPage('benefits.minimalDowntime'),
    tPage('benefits.futureProof'),
    tPage('benefits.projectManagement'),
    tPage('benefits.supportAvailable'),
    tPage('benefits.documentation'),
    tPage('benefits.optimization')
  ];

  const process = [
    {
      step: "01",
      title: tPage('process.consultation.title'),
      description: tPage('process.consultation.description')
    },
    {
      step: "02",
      title: tPage('process.survey.title'),
      description: tPage('process.survey.description')
    },
    {
      step: "03",
      title: tPage('process.installation.title'),
      description: tPage('process.installation.description')
    },
    {
      step: "04",
      title: tPage('process.testing.title'),
      description: tPage('process.testing.description')
    }
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
              {t('service1.title')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
              {tPage('heroDescription')}
            </p>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>{tPage('badges.certified')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>{tPage('badges.rapid')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>{tPage('badges.quality')}</span>
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

      {/* Installation Process */}
      <section className="py-20 bg-gray-950/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{tPage('processTitle')}</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              {tPage('processSubtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                    <span className="text-2xl font-bold text-blue-400">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-blue-900/30">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
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