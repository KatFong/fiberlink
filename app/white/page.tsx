"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Cable, Zap } from "lucide-react"
import HeroBannerWhite from "@/components/hero-banner-white"
import { Button } from "@/components/ui/button"

export default function WhiteHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBannerWhite />

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">關於我們</h2>
            <p className="text-blue-600 mb-6 font-medium">HKT 集團成員企業</p>
            <p className="text-gray-600 text-lg leading-relaxed">
              作為專業的工程技術公司，我們專注於為香港企業提供高品質的光纖網絡基建服務，支持企業數字化轉型和業務增長。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">主要工程項目</h2>
            <div className="mx-auto mb-4 h-1 w-24 bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-gray-600">
              探索我們在光纖網絡基建領域的專業工程項目和技術實施案例
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-white rounded-lg border border-blue-200/60 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/fiberlink/images/corporate-network.png"
                  alt="企業網絡解決方案"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 border border-blue-200 mb-3">
                  企業網絡
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">企業園區光纖網絡</h3>
                <p className="text-gray-600 mb-4">為大型企業提供完整的園區級光纖網絡基建，確保高速穩定的企業內部連接。</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                    高速光纖骨幹網絡建設
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                    多樓宇間連接方案
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg border border-blue-200/60 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/fiberlink/images/lamma.jpg"
                  alt="南丫島光纖網絡覆蓋項目"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 border border-blue-200 mb-3">
                  基建項目
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">南丫島光纖網絡覆蓋</h3>
                <p className="text-gray-600 mb-4">為南丫島提供全面的光纖網絡覆蓋，克服地理挑戰，實現高品質網絡連接。</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                    海底光纜鋪設工程
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                    全島網絡覆蓋方案
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg border border-blue-200/60 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/fiberlink/images/800G-AI Superhighway.jpg"
                  alt="800G AI 超級公路"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 border border-blue-200 mb-3">
                  技術創新
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">800G AI 超級公路</h3>
                <p className="text-gray-600 mb-4">亞洲首條 800Gbps 廣域網絡，專為 AI 和超級計算應用而設計的先進技術基建。</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                    800Gbps 超高速網絡
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                    AI 專用網絡優化
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/white/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                查看更多項目 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services content */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">核心技術</h2>
            <p className="mx-auto max-w-2xl text-gray-600 mb-8">先進的光纖技術和創新的網絡解決方案</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-blue-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300/60 hover:shadow-lg hover:shadow-blue-100/50">
              <div className="mb-4">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">800G AI 超級公路</h3>
              <p className="mb-4 text-gray-600">亞洲首條 800Gbps 廣域網絡，專為 AI 和超級計算應用而設計</p>
              <p className="text-gray-600 text-sm mt-2">超高速數據傳輸，支持下一代 AI 和雲端應用</p>
            </div>

            <div className="rounded-lg border border-blue-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300/60 hover:shadow-lg hover:shadow-blue-100/50">
              <div className="mb-4">
                <Cable className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">5G 光纖回程網絡</h3>
              <p className="mb-4 text-gray-600">為 5G 網絡優化的光纖回程解決方案，確保超低延遲和高可靠性</p>
              <p className="text-gray-600 text-sm mt-2">支持下一代移動網絡的無縫覆蓋擴展</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/white/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                探索完整技術能力
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 