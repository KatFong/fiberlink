"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroBannerWhite() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/in-an-industrial-or-server-room-setting-_knH9HXCfSpeweaz2tYxJyw_lbUFtMTAQ36kJ6uAajcjKQ.png-wgSX8dOXWbXmezFLaeTi4hL2hObH8S.jpeg"
          alt="Professional technicians installing fiber optic network"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        {/* Blue light effect */}
        <div className="absolute inset-0 bg-blue-50/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 border border-blue-200">
              專業光纖網絡解決方案
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">企業級</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                光纖網絡
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              我們的專家團隊為您提供高速、穩定、安全的光纖基建，確保您的業務順利運作
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/white/services">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white">
                  查看我們的服務
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/white/about">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-white">
                  了解我們的技術
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating data card */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="w-64 rounded-lg border border-gray-200 bg-white/90 p-4 backdrop-blur-md shadow-lg">
          <h3 className="mb-2 text-sm font-medium text-blue-600">服務覆蓋範圍</h3>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-600">商業客戶</span>
            <span className="text-sm font-medium text-gray-900">1,000+</span>
          </div>
          <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-600">網絡可用率</span>
            <span className="text-sm font-medium text-gray-900">99.99%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
        </div>
      </div>

      {/* Technical indicator */}
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg">
            <div className="h-3 w-3 rounded-full bg-blue-400"></div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/90 px-4 py-2 backdrop-blur-md shadow-lg">
            <span className="text-sm text-blue-600">24/7 技術支援</span>
          </div>
        </div>
      </div>
    </section>
  )
} 