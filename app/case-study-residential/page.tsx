import Header from "@/components/Header"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function CaseStudyResidentialPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Study: The Millers' Relocation</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              A compassionate, full-service move for a couple transitioning from their family home of 45 years
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Profile & The Challenge</h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Client:</strong> John and Mary Miller, both in their early 80s.
                </li>
                <li>
                  <strong>Situation:</strong> Moving from a 4-bedroom family home in Jacksonville to a 2-bedroom
                  apartment in a local senior living community to be closer to healthcare and amenities.
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              The primary challenge was emotional and physical. The Millers were overwhelmed by the prospect of sorting
              through 45 years of accumulated memories, furniture, and belongings. Their adult children lived
              out-of-state and, while supportive, could not manage the day-to-day logistics. The family's main concerns
              were ensuring their parents' physical safety during the process and minimizing the emotional stress of
              leaving their long-time home.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Planning & Proposal</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our approach was to provide not just a service, but a fully managed project that addressed every one of
              the family's concerns.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">1. The Family Consultation</h3>
                <p className="text-gray-600">
                  Our process began with a comprehensive, in-home consultation with John, Mary, and their daughter via
                  video call. We walked through every room, listening to their stories and concerns. We didn't just see
                  furniture; we saw 45 years of life. This allowed us to build immediate trust and create a detailed
                  inventory, noting items of special sentimental value.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">2. The Strategic Proposal</h3>
                <p className="text-gray-600 mb-4">
                  We presented a "White-Glove Full-Service Relocation" proposal. This wasn't just a moving quote; it was
                  a project plan. It included:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    A multi-day schedule for gentle, patient downsizing and packing, ensuring the Millers never felt
                    rushed.
                  </li>
                  <li>
                    Detailed floor planning for the new apartment to pre-determine furniture placement and eliminate
                    guesswork on move-in day.
                  </li>
                  <li>Coordination with a local charity for the pickup of donated items.</li>
                  <li>
                    Arrangements for the professional packing and shipping of specific heirlooms to their children in
                    different states.
                  </li>
                  <li>
                    A single, guaranteed, all-inclusive price covering all services, from packing materials to final
                    setup, for complete budget clarity.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">3. Client Assessment & Refinements</h3>
                <p className="text-gray-600 mb-4">
                  The Millers were relieved by the thoroughness of the plan but had one special request: Mary's prized
                  collection of delicate porcelain dolls. She was deeply anxious about them being handled by strangers.
                  This was her biggest point of stress.
                </p>
                <p className="text-gray-600">
                  In response, we amended the plan to include a "Specialty Packing" session. Our most experienced
                  packer, Jane, would work one-on-one with Mary for an entire afternoon. Together, they would pack each
                  doll into custom-built, padded crates. This ensured Mary personally oversaw the process for her most
                  treasured items, turning her biggest anxiety into a point of confidence and trust.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Execution & The B&B Commitment</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment was to transform a potentially traumatic event into a positive, managed transition. Our
              team worked over three days at the Miller's home, carefully sorting and packing. They took frequent breaks
              to chat with John and Mary, always prioritizing their comfort and emotional well-being over speed. The
              specialty packing session for Mary's dolls was a resounding success and a highlight of the pre-move
              process.
            </p>

            <p className="text-gray-600 mb-6">
              On move day, our crew executed the plan flawlessly. We coordinated with the senior living community's
              move-in coordinator to ensure a smooth, non-disruptive arrival. By the time John and Mary arrived at their
              new apartment that evening, the scene was one of peace, not chaos:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>Their bed was made.</li>
              <li>The kitchen was functional, with essentials unpacked.</li>
              <li>Their favorite armchairs were arranged by the window, just as planned.</li>
              <li>And Mary's dolls were safely unpacked and displayed in their new curio cabinet.</li>
            </ul>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Result: A Seamless New Beginning</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Millers were able to transition into their new life without the physical and emotional toll a
                self-managed move would have entailed. They could immediately begin enjoying their new community. Their
                daughter, who received photo and video updates throughout the process, expressed immense gratitude for
                the care and communication.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg text-gray-700">
                "You didn't just move our things; you moved our parents' lives with the dignity and respect they
                deserved. You took the weight of the world off our family's shoulders."
                <footer className="mt-2 text-sm text-gray-600">— Quote from the Millers' daughter</footer>
              </blockquote>

              <p className="text-gray-600 mt-6">
                This case demonstrates our core philosophy: senior relocation is not about boxes and trucks. It's about
                listening, planning, and providing a comprehensive service that honors a lifetime of memories while
                enabling a safe, comfortable, and positive new chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
