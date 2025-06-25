"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Phone, Settings, Wrench, Shield, Users, Mail, MapPin, Headphones, AlertTriangle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function TechnicalSupportPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('common');

  const features = [
    {
      icon: Clock,
      title: "24/7 Network Monitoring",
      description: "Continuous monitoring of your network infrastructure to detect and prevent issues before they impact your business."
    },
    {
      icon: AlertTriangle,
      title: "Rapid Incident Response",
      description: "Fast response times for critical network issues with escalation procedures to ensure minimal downtime."
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance and updates to keep your network running at optimal performance levels."
    },
    {
      icon: Settings,
      title: "Remote Diagnostics and Troubleshooting",
      description: "Advanced remote diagnostic tools to identify and resolve network issues quickly and efficiently."
    }
  ];

  const supportLevels = [
    {
      title: "Emergency Support",
      description: "24/7 emergency response for critical network issues",
      icon: Phone,
      response: "< 1 hour",
      availability: "24/7/365",
      features: ["Critical issue priority", "Emergency hotline", "Immediate escalation", "On-site dispatch"]
    },
    {
      title: "Technical Consultation",
      description: "Expert advice for network planning and optimization",
      icon: Headphones,
      response: "< 4 hours",
      availability: "Business hours",
      features: ["Expert consultation", "Performance optimization", "Planning assistance", "Best practice guidance"]
    },
    {
      title: "On-site Service",
      description: "Professional technicians for installation and maintenance",
      icon: MapPin,
      response: "Same day",
      availability: "Scheduled",
      features: ["Certified technicians", "Equipment replacement", "Installation support", "Maintenance services"]
    }
  ];

  const benefits = [
    "Maximum network uptime",
    "Proactive issue resolution",
    "Expert technical assistance",
    "Comprehensive service coverage",
    "Cost-effective maintenance",
    "Performance optimization",
    "Security monitoring",
    "Documentation and reporting"
  ];

  const stats = [
    { value: "99.9%", label: "Network Uptime" },
    { value: "< 15min", label: "Average Response" },
    { value: "24/7", label: "Monitoring" },
    { value: "95%", label: "First Call Resolution" }
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
              Back to Services
            </Link>
            <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
              Support
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              {t('service3.title')}
            </h1>
            <p className="mb-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
              {t('service3.description')} Our expert support team ensures your network operates at peak performance with minimal downtime.
            </p>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>SLA Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-950/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Key Features</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              Comprehensive technical support services to keep your network running smoothly.
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

      {/* Support Levels */}
      <section className="py-20 bg-gray-950/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Support Levels</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-400">
              Choose the support level that best fits your business requirements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {supportLevels.map((level, index) => {
              const IconComponent = level.icon;
              return (
                <Card key={index} className="bg-gray-900/30 backdrop-blur-sm border-blue-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">
                      {level.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{level.response}</span>
                      </div>
                      <div>{level.availability}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                      {level.description}
                    </p>
                    <div className="space-y-2">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Why Choose Our Technical Support</h2>
              <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-blue-900/30">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
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