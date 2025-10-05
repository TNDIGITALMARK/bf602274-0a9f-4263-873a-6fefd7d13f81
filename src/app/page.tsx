import Navigation from '@/components/Navigation'
import AnimatedCounter from '@/components/AnimatedCounter'
import { Search, Users, TrendingUp, Award } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                DIGITAL MARKETING
                <br />
                <span className="text-orange">SOLUTIONS</span> THAT DRIVE SUCCESS
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Transform your business with data-driven marketing strategies that deliver measurable results and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
                  START YOUR JOURNEY
                </button>
                <button className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right Content - Service Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
                <Search className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">SEO Optimization</h3>
                <p className="text-white/80 text-sm">Boost your search rankings and organic traffic</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
                <Users className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Social Media</h3>
                <p className="text-white/80 text-sm">Build engaged communities across platforms</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
                <TrendingUp className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Growth Marketing</h3>
                <p className="text-white/80 text-sm">Scale your business with proven strategies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
                <Award className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Brand Strategy</h3>
                <p className="text-white/80 text-sm">Create powerful brand experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">CLIENT SUCCESS STORIES</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve remarkable growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">TC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">TechCorp Solutions</h4>
                  <p className="text-gray-500 text-sm">SaaS Platform</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Apex Digital transformed our marketing approach, resulting in a 300% increase in qualified leads."
              </p>
              <div className="flex items-center text-orange font-semibold">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>+300% Lead Growth</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">GS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">GrowthScale Inc</h4>
                  <p className="text-gray-500 text-sm">E-commerce</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our ROI improved by 450% within 6 months of working with Apex Digital's team."
              </p>
              <div className="flex items-center text-orange font-semibold">
                <Award className="w-4 h-4 mr-2" />
                <span>+450% ROI</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">MarketShare Pro</h4>
                  <p className="text-gray-500 text-sm">B2B Services</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Exceptional results! Our brand visibility increased by 500% across all channels."
              </p>
              <div className="flex items-center text-orange font-semibold">
                <Users className="w-4 h-4 mr-2" />
                <span>+500% Visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">TESTIMONIALS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div>
              <AnimatedCounter
                end={250}
                suffix="+"
                className="text-6xl font-bold text-orange mb-4"
              />
              <p className="text-xl">Successful Projects</p>
            </div>
            <div>
              <AnimatedCounter
                end={1.2}
                suffix="M+"
                className="text-6xl font-bold text-orange mb-4"
              />
              <p className="text-xl">Revenue Generated</p>
            </div>
            <div>
              <AnimatedCounter
                end={150}
                suffix="+"
                className="text-6xl font-bold text-orange mb-4"
              />
              <p className="text-xl">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}