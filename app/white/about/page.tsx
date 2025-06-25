import Image from "next/image"
import { Users, Award, Globe, Zap } from "lucide-react"

export default function WhiteAboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">關於 Fiberlink</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            作為 HKT 集團的成員企業，Fiberlink 專注於為香港企業提供專業的光纖網絡基建服務
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">我們的使命</h2>
            <p className="text-gray-600 mb-4">
              致力於為香港企業提供高品質、高可靠性的光纖網絡基建服務，支持企業數字化轉型和業務增長。
            </p>
            <p className="text-gray-600 mb-6">
              作為專業的工程技術公司，我們擁有豐富的網絡基建經驗和專業的技術團隊，為客戶提供從規劃設計到安裝維護的一站式服務。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="text-blue-800 font-medium">
                HKT 集團成員企業，擁有豐富的電信行業經驗和專業技術實力
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <Image 
                src="/images/aboutUs.jpeg" 
                alt="Fiberlink 團隊" 
                width={400} 
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">企業實力</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">服務客戶</div>
            </div>
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-gray-600">網絡可靠性</div>
            </div>
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">年行業經驗</div>
            </div>
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">技術支援</div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">核心價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">專</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">專業技術</h3>
              <p className="text-gray-600">
                擁有專業的技術團隊和豐富的工程經驗，確保項目高品質交付
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">可</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">可靠服務</h3>
              <p className="text-gray-600">
                提供穩定可靠的網絡服務，99.99% 的網絡可用率保障
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">創</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">創新發展</h3>
              <p className="text-gray-600">
                持續投入技術創新，為客戶提供最先進的光纖網絡解決方案
              </p>
            </div>
          </div>
        </div>

        {/* PCCW Group */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HKT 集團成員</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              作為 HKT 集團的重要成員，我們承繼集團在電信行業的豐富經驗和技術優勢，為客戶提供更優質的服務
            </p>
            <div className="flex justify-center">
              <Image 
                src="/images/HKT_Logo.svg" 
                alt="HKT Group Member" 
                width={300} 
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 