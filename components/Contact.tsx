"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Senior Relocation",
    fromStreet: "",
    fromCity: "",
    fromState: "",
    fromZip: "",
    fromBedrooms: "",
    fromFloor: "",
    toStreet: "",
    toCity: "",
    toState: "",
    toZip: "",
    toBedrooms: "",
    toFloor: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Get Your FREE Quote</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to take the first step? Contact us today for a friendly, no-obligation consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">B&B Movers Is Here for You. How Can We Help?</h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Office:</div>
                  <div className="text-gray-600">6558 Beach Blvd, Jacksonville, FL 32216</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-red-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email:</div>
                  <div className="text-gray-600">bandbmovers@comcast.net</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-red-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone:</div>
                  <div className="text-gray-600">(904) 997-1844</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-red-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Office Hours:</div>
                  <div className="text-gray-600">Mon - Sat: 8 AM - 6 PM</div>
                  <div className="font-semibold text-gray-900 mt-2 mb-1">Warehouse Deliveries:</div>
                  <div className="text-gray-600">Mon - Sat: 8 AM - 4 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <select
                    name="service"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Senior Relocation">Senior Relocation</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>

                <div className="form-hr">FROM</div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fromStreet"
                    placeholder="Moving From Street"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.fromStreet}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="fromCity"
                    placeholder="City"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.fromCity}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    name="fromState"
                    placeholder="State"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.fromState}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="fromZip"
                    placeholder="Zip"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.fromZip}
                    onChange={handleChange}
                  />
                  <select
                    name="fromBedrooms"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.fromBedrooms}
                    onChange={handleChange}
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                  <select
                    name="fromFloor"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.fromFloor}
                    onChange={handleChange}
                  >
                    <option value="">Floor</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                <div className="form-hr">TO</div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="toStreet"
                    placeholder="Moving To Street"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.toStreet}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="toCity"
                    placeholder="City"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.toCity}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    name="toState"
                    placeholder="State"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.toState}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="toZip"
                    placeholder="Zip"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.toZip}
                    onChange={handleChange}
                  />
                  <select
                    name="toBedrooms"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.toBedrooms}
                    onChange={handleChange}
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                  <select
                    name="toFloor"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    value={formData.toFloor}
                    onChange={handleChange}
                  >
                    <option value="">Floor</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Description of major items or details we should know"
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button type="submit" className="w-full btn-primary text-center py-4 text-lg font-semibold">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
