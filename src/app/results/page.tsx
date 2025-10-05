'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'
import { TrendingUp, Award, Users, BarChart3, Calendar, Mail, Phone, MapPin, Send } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function Results() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "SaaS Platform",
      challenge: "Low conversion rates and poor lead quality",
      solution: "Implemented comprehensive SEO strategy and conversion optimization",
      results: [
        { metric: "Lead Generation", improvement: "+300%" },
        { metric: "Conversion Rate", improvement: "+150%" },
        { metric: "Organic Traffic", improvement: "+280%" },
        { metric: "Cost Per Lead", improvement: "-65%" }
      ],
      testimonial: "Apex Digital transformed our entire marketing approach. The results speak for themselves - we've never seen growth like this before.",
      author: "Sarah Johnson",
      position: "VP of Marketing",
      image: "TC"
    },
    {
      company: "GrowthScale Inc",
      industry: "E-commerce",
      challenge: "Declining ROI and increased competition",
      solution: "Multi-channel growth marketing with advanced analytics",
      results: [
        { metric: "ROI Improvement", improvement: "+450%" },
        { metric: "Customer Acquisition", improvement: "+320%" },
        { metric: "Revenue Growth", improvement: "+380%" },
        { metric: "Market Share", improvement: "+45%" }
      ],
      testimonial: "The team at Apex Digital doesn't just execute - they innovate. Our ROI has never been higher.",
      author: "Michael Chen",
      position: "CEO",
      image: "GS"
    },
    {
      company: "MarketShare Pro",
      industry: "B2B Services",
      challenge: "Limited brand awareness and market penetration",
      solution: "Integrated brand strategy with content marketing and PR",
      results: [
        { metric: "Brand Visibility", improvement: "+500%" },
        { metric: "Website Traffic", improvement: "+420%" },
        { metric: "Lead Quality Score", improvement: "+200%" },
        { metric: "Market Recognition", improvement: "+350%" }
      ],
      testimonial: "Our brand transformation has been remarkable. We're now recognized as industry leaders thanks to Apex Digital's strategic approach.",
      author: "Jennifer Martinez",
      position: "Marketing Director",
      image: "MS"
    }
  ]

  const testimonials = [
    {
      name: "David Thompson",
      position: "Founder & CEO, InnovateTech",
      content: "Working with Apex Digital has been a game-changer for our business. Their strategic approach and attention to detail resulted in a 400% increase in qualified leads within just 4 months.",
      image: "DT"
    },
    {
      name: "Lisa Rodriguez",
      position: "CMO, ScaleUp Solutions",
      content: "The ROI we've achieved with Apex Digital is unprecedented. They don't just execute campaigns - they become true partners in your growth journey.",
      image: "LR"
    },
    {
      name: "James Wilson",
      position: "VP Marketing, GrowthCorp",
      content: "Apex Digital's data-driven approach helped us optimize our entire marketing funnel. Our conversion rates improved by 250% in the first quarter alone.",
      image: "JW"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Results Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            PROVEN <span className="text-orange">RESULTS</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            See how we've helped businesses achieve exceptional growth and measurable success across industries.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses that partnered with us for growth
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12 hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column - Company Info & Challenge */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">{study.image}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy">{study.company}</h3>
                        <p className="text-gray-500">{study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-navy mb-3">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-navy mb-3">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <blockquote className="text-gray-700 italic mb-4">"{study.testimonial}"</blockquote>
                      <cite className="not-italic">
                        <div className="font-semibold text-navy">{study.author}</div>
                        <div className="text-gray-500 text-sm">{study.position}</div>
                      </cite>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h4 className="text-2xl font-bold text-navy mb-8">Results Achieved</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-6 text-center hover-lift">
                          <div className="text-3xl font-bold text-orange mb-2">
                            {result.improvement}
                          </div>
                          <div className="text-gray-700 font-medium">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.image}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">"{testimonial.content}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These metrics represent the collective success of our client partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">250+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">$1.2M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">340%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Let's Start Your Success Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to achieve results like these? Contact our team to discuss your marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="seo">SEO & Search Marketing</option>
                  <option value="social">Social Media Management</option>
                  <option value="growth">Growth Marketing</option>
                  <option value="brand">Brand Strategy</option>
                  <option value="analytics">Digital Analytics</option>
                  <option value="web">Website Optimization</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn-primary w-full px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Calendar Booking */}
            <div className="space-y-8">
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-orange mr-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-orange mr-4" />
                    <span>hello@apexdigitalsolutions.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-orange mr-4" />
                    <span>123 Digital Ave, Marketing City, MC 12345</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="mb-6">Book a free 30-minute strategy session with our marketing experts.</p>
                <button className="bg-white text-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span>Proven track record with 250+ successful campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span>Data-driven strategies that deliver measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span>Dedicated team of marketing experts and strategists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span>Custom solutions tailored to your business goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}