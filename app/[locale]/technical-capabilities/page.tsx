"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cable, ShieldCheck, RadioTower, CheckCircle2, ArrowRight } from "lucide-react";

export default function TechnicalCapabilitiesPage() {
  const t = useTranslations('common');
  const tech = useTranslations('technicalCapabilities');
  
  const techCards = [
    {
      icon: <Cable className="h-10 w-10 text-blue-400" />,
      title: t('technicalCards.fiberBackboneTitle'),
      desc: t('technicalCards.fiberBackboneDesc'),
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-400" />,
      title: t('technicalCards.dedicatedLineTitle', { fallback: 'Enterprise Dedicated Line' }),
      desc: t('technicalCards.dedicatedLineDesc'),
    },
    {
      icon: <RadioTower className="h-10 w-10 text-blue-400" />,
      title: t('technicalCards.backhaulTitle'),
      desc: t('technicalCards.backhaulDesc'),
    },
  ];
  
  const features = [
    tech('highReliability'),
    tech('flexibleScalability'),
    tech('smartOandM'),
    tech('security'),
    tech('lowLatency'),
    tech('professionalSupport'),
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-950/20">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{t('aboutPage.ourTechnical')}</h1>
          <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
          <p className="mx-auto max-w-2xl text-gray-400 text-lg">
            {tech('heroDesc')}
          </p>
        </div>
      </section>

      {/* 技術能力卡片 */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {techCards.map((item, idx) => (
              <div key={idx} className="rounded-lg border border-blue-900/20 bg-blue-950/20 p-6 backdrop-blur-sm text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-gray-400 min-h-[48px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fibre Technologies 區塊 */}
      <section className="py-16 bg-gradient-to-b from-background to-blue-950/10">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold text-white text-center">{t('fibreTechnologies.title')}</h2>
          <p className="mb-10 text-gray-400 text-center">{t('fibreTechnologies.desc')}</p>
          <div className="grid gap-8 md:grid-cols-4">
            {[{
              key: '100g',
              label: t('fibreTechnologies.100g'),
            }, {
              key: '400g',
              label: t('fibreTechnologies.400g'),
            }, {
              key: '800g',
              label: t('fibreTechnologies.800g'),
            }, {
              key: 'hollow',
              label: t('fibreTechnologies.hollow'),
            }].map((item) => (
              <div key={item.key} className="rounded-lg border border-blue-900/20 bg-blue-950/20 p-6 text-center">
                <span className="text-3xl font-bold text-blue-400 block mb-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 800G AI Superhighway 詳細區塊 */}
      <section className="py-16 bg-gradient-to-b from-blue-950/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('fibreTechnologies.800gDetails.title')}</h2>
            <p className="text-blue-400 text-lg mb-4">{t('fibreTechnologies.800gDetails.subtitle')}</p>
            <p className="mx-auto max-w-4xl text-gray-400">{t('fibreTechnologies.800gDetails.description')}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  'robustProtection',
                  'enhancedProductivity', 
                  'scalability',
                  'highReliability',
                  'costEffectiveness'
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-gray-300">{t(`fibreTechnologies.800gDetails.features.${feature}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[300px] rounded-lg overflow-hidden border border-blue-900/30">
                <Image
                  src="/fiberlink/images/800G-AI Superhighway.jpg"
                  alt="800G AI Superhighway infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-blue-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-blue-900/30 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">Applications</h3>
            <p className="text-gray-300">{t('fibreTechnologies.800gDetails.applications')}</p>
          </div>
        </div>
      </section>

      {/* 技術優勢/特色 */}
      <section className="py-16 bg-gradient-to-b from-blue-950/20 to-background">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-white text-center">{tech('advantages')}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-900/30 rounded-lg border border-blue-900/20">
                <CheckCircle2 className="text-blue-400 h-6 w-6" />
                <span className="text-gray-200 text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
} 