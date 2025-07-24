"use client"

import { useState } from "react"
import Image from "next/image"

export default function Services() {
  const [activeTab, setActiveTab] = useState("services")

  const services = [
    {
      title: "Senior Relocations",
      description:
        "Comprehensive support for senior moves, from packing to setting up your new living space – B&B Movers handles every detail with care.",
      image: "/senior-couple-moving.png",
      features: ["Free consultation", "Downsizing support", "White-glove setup"],
    },
    {
      title: "Local Moves",
      description:
        "Simplify your nearby move with reliable service and comprehensive solutions – B&B Movers ensures an easy and efficient experience.",
      image: "/local-moving-truck.png",
      features: ["Same-day service", "Professional packing", "Furniture protection"],
    },
    {
      title: "Long-Distance Moves",
      description:
        "Experience a stress-free transition with our nationwide Long-Distance Moves – B&B Movers extends expertise for a seamless cross-country relocation.",
      image: "/long-distance-moving-truck.png",
      features: ["Nationwide coverage", "GPS tracking", "Storage options"],
    },
    {
      title: "Storage Solutions",
      description:
        "Secure, climate-controlled storage facilities to keep your belongings safe during transition periods or long-term storage needs.",
      image: "/storage-facility.png",
      features: ["Climate controlled", "24/7 security", "Flexible terms"],
    },
  ]

  const benefits = [
    {
      title: "40+ Years of Experience",
      description:
        "Four decades of trusted service in Jacksonville and beyond, building lasting relationships with families.",
      icon: "🏆",
    },
    {
      title: "Family-Owned & Operated",
      description:
        "We treat your family like our own with personal care, attention, and genuine compassion throughout the process.",
      icon: "❤️",
    },
    {
      title: "Licensed & Insured",
      description:
        "Complete protection and peace of mind for your family with full licensing and comprehensive insurance coverage.",
      icon: "🛡️",
    },
    {
      title: "White-Glove Service",
      description:
        "From initial consultation to final setup, we handle every detail with meticulous care and professionalism.",
      icon: "✨",
    },
    {
      title: "Senior-Focused Training",
      description:
        "Our team is specially trained in senior sensitivity, patience, and understanding of unique moving challenges.",
      icon: "🎓",
    },
    {
      title: "Transparent Pricing",
      description:
        "Honest, upfront pricing with no hidden fees – you'll know exactly what to expect from start to finish.",
      icon: "💰",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Relocations from Beginning to End
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We provide an end-to-end suite of services designed to address every challenge associated with a senior
            move.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8 border-b border-gray-200">
            <button
              className={`tab-button ${activeTab === "services" ? "active" : ""}`}
              onClick={() => setActiveTab("services")}
            >
              Types of Services
            </button>
            <button
              className={`tab-button ${activeTab === "benefits" ? "active" : ""}`}
              onClick={() => setActiveTab("benefits")}
            >
              Benefits & Features
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "services" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="service-box group">
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="text-red-600 font-semibold text-sm uppercase tracking-wide hover:text-red-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="service-box text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
