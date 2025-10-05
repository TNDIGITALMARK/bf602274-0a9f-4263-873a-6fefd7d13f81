import Navigation from '@/components/Navigation'
import { Check, Search, Users, TrendingUp, Award, BarChart3, Globe, PenTool, Megaphone } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO & Search Marketing",
      description: "Dominate search results with data-driven SEO strategies",
      features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Link Building", "Content Strategy"],
      price: "$2,500",
      period: "/month"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build engaged communities across all major platforms",
      features: ["Content Creation", "Community Management", "Social Advertising", "Influencer Partnerships", "Analytics"],
      price: "$1,800",
      period: "/month"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Scale your business with proven growth strategies",
      features: ["Conversion Optimization", "A/B Testing", "Funnel Analysis", "User Acquisition", "Retention Strategies"],
      price: "$3,200",
      period: "/month"
    },
    {
      icon: Award,
      title: "Brand Strategy & Design",
      description: "Create powerful brand experiences that resonate",
      features: ["Brand Identity", "Visual Design", "Brand Guidelines", "Creative Strategy", "Brand Positioning"],
      price: "$2,800",
      period: "/month"
    },
    {
      icon: BarChart3,
      title: "Digital Analytics",
      description: "Make data-driven decisions with comprehensive analytics",
      features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Competitive Intelligence", "Monthly Reports"],
      price: "$1,500",
      period: "/month"
    },
    {
      icon: Globe,
      title: "Website Optimization",
      description: "Convert more visitors with optimized user experiences",
      features: ["UX/UI Optimization", "Page Speed", "Mobile Optimization", "CRO Testing", "Performance Monitoring"],
      price: "$2,200",
      period: "/month"
    }
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small businesses ready to grow",
      features: [
        "SEO & Search Marketing",
        "Social Media Management",
        "Monthly Performance Reports",
        "Email Support",
        "Basic Analytics Setup"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Comprehensive marketing for growing companies",
      features: [
        "Everything in Starter",
        "Growth Marketing",
        "Brand Strategy & Design",
        "Advanced Analytics",
        "Priority Support",
        "Bi-weekly Strategy Calls"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "Full-service marketing for industry leaders",
      features: [
        "Everything in Professional",
        "Website Optimization",
        "Dedicated Account Manager",
        "Custom Integrations",
        "24/7 Support",
        "Weekly Strategy Sessions",
        "Custom Reporting Dashboard"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Services Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            OUR <span className="text-orange">SERVICES</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Comprehensive digital marketing solutions designed to accelerate your business growth and maximize ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we provide end-to-end marketing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover-lift">
                <service.icon className="w-12 h-12 text-orange mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-bold text-navy">{service.price}</span>
                    <span className="text-gray-500">{service.period}</span>
                  </div>
                  <button className="btn-primary px-6 py-2 rounded-lg font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Choose Your Growth Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect package to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 hover-lift relative ${
                  tier.popular
                    ? 'border-2 border-orange shadow-2xl scale-105'
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange text-white px-4 py-2 rounded-full font-semibold text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-navy">{tier.price}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Check className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    tier.popular
                      ? 'btn-primary'
                      : 'bg-white border-2 border-orange text-orange hover:bg-orange hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Service Comparison</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare our service offerings across different tiers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-navy font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-navy font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center text-navy font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center text-navy font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">SEO & Search Marketing</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Social Media Management</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Growth Marketing</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Brand Strategy & Design</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Website Optimization</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Dedicated Account Manager</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-orange mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your marketing goals and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
              Schedule Consultation
            </button>
            <button className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}