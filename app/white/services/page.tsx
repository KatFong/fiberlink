import Link from "next/link"
import { ArrowRight, Zap, Shield, Headphones, Network, Settings, Clock } from "lucide-react"

export default function WhiteServicesPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">我們的服務</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            提供全方位的光纖網絡服務，從安裝到維護，滿足企業各種需求
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">光纖安裝</h3>
            <p className="text-gray-600 mb-6">
              專業的光纖網絡安裝服務，包括現場勘察、設計規劃、專業施工和測試驗收。
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• 現場勘察與評估</li>
              <li>• 專業設計規劃</li>
              <li>• 高品質施工安裝</li>
              <li>• 完整測試驗收</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Network className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">網絡方案</h3>
            <p className="text-gray-600 mb-6">
              為不同規模的企業提供定制化網絡解決方案，確保高速穩定的網絡連接。
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• 企業園區網絡</li>
              <li>• 數據中心互連</li>
              <li>• 城域網絡方案</li>
              <li>• 雲端連接服務</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">技術支援</h3>
            <p className="text-gray-600 mb-6">
              24/7 專業技術支援服務，確保您的網絡系統持續穩定運行。
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• 24/7 網絡監控</li>
              <li>• 快速故障響應</li>
              <li>• 預防性維護</li>
              <li>• 技術諮詢服務</li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">其他專業服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">網絡優化</h3>
                <p className="text-gray-600">
                  定期評估和優化網絡性能，確保最佳運行效率
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">安全防護</h3>
                <p className="text-gray-600">
                  企業級安全解決方案，保護網絡和數據安全
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">緊急修復</h3>
                <p className="text-gray-600">
                  快速響應緊急故障，最短時間內恢復網絡服務
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Network className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">網絡擴展</h3>
                <p className="text-gray-600">
                  配合業務發展需求，提供靈活的網絡擴展方案
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">需要專業的網絡服務？</h2>
          <p className="text-xl text-gray-600 mb-8">
            聯絡我們的專業團隊，為您提供最適合的網絡解決方案
          </p>
          <Link 
            href="/white/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            立即諮詢
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
} 