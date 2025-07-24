import Header from "@/components/Header"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function CaseStudyCommercialPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Study: The Maple Creek Partnership</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Developing a standardized, white-glove move-in protocol for a premier senior living community
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
                  <strong>Client:</strong> Maple Creek Senior Living, a high-end community with 150 independent and
                  assisted living units.
                </li>
                <li>
                  <strong>Key Contact:</strong> Linda Hayes, Executive Director.
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Maple Creek's challenge was operational inconsistency that threatened its brand promise. Their excellent
              reputation was being undermined by a chaotic, unpredictable, and often stressful move-in process for new
              residents. Families would hire different, unvetted moving companies, leading to frequent issues:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>
                <strong>Property Damage:</strong> Scuffed walls and damaged elevators from careless movers.
              </li>
              <li>
                <strong>Scheduling Conflicts:</strong> Movers arriving outside of designated hours, disrupting community
                life.
              </li>
              <li>
                <strong>A Stressful First Impression:</strong> New residents arriving to a chaotic scene, diminishing
                the "premium" experience Maple Creek promised from day one.
              </li>
            </ul>

            <p className="text-gray-600 mb-8">
              Linda's team was frequently pulled away from their core duties of resident care and hospitality to manage
              moving logistics. This was causing staff burnout and creating a significant gap between the community's
              brand and the actual move-in experience.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partnership Proposal</h2>
            <p className="text-lg text-gray-600 mb-6">
              We approached Maple Creek not as a vendor, but as a strategic partner aiming to solve a core business
              problem.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">1. Operational Deep Dive</h3>
                <p className="text-gray-600">
                  We initiated a partnership meeting with Linda and her move-in coordinator. We didn't just talk about
                  moving; we discussed their business goals. We reviewed their move-in policies, elevator reservation
                  system, resident welcome packet, and staff pain points. This deep dive allowed us to identify the
                  critical need for a standardized, predictable process that could be easily communicated to incoming
                  families and executed flawlessly every time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">2. The "Preferred Partner Protocol"</h3>
                <p className="text-gray-600 mb-4">
                  We proposed a formal partnership where B&B Movers would become Maple Creek's exclusive "Certified
                  Relocation Partner." This was a comprehensive service level agreement (SLA) designed to address every
                  failure point in their old system. The protocol included:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    A dedicated B&B coordinator for all Maple Creek moves, creating a single, accountable point of
                    contact for Linda's team.
                  </li>
                  <li>
                    Strict adherence to Maple Creek's schedule, including designated moving hours, parking, and service
                    elevator use.
                  </li>
                  <li>
                    Mandatory use of comprehensive property protection (floor runners, wall guards, padded elevator
                    walls) for every single move.
                  </li>
                  <li>
                    A co-branded information packet for new residents, professionally designed, explaining the benefits
                    of using the certified partner and setting clear expectations.
                  </li>
                  <li>
                    A core commitment to have every new resident's apartment fully unpacked and set up by the end of
                    move-in day.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">3. Community Refinements & Value-Add</h3>
                <p className="text-gray-600">
                  Linda was impressed with the operational focus but wanted to ensure the partnership provided clear,
                  marketable value to her residents, not just her staff. We added a key refinement to the protocol: any
                  Maple Creek resident using our service would receive our complimentary "First Night" setup. This
                  included not just furniture placement, but also making the bed, setting up the coffee maker,
                  connecting the TV, and hanging a few pictures. These small, thoughtful touches make a huge difference
                  in creating a welcoming experience. This allowed Linda's marketing team to frame the partnership as a
                  tangible, premium amenity for new residents.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Execution & The Partnership Commitment</h2>
            <p className="text-lg text-gray-600 mb-6">
              We launched the partnership with a catered "Lunch & Learn" for the Maple Creek marketing and admissions
              team. We walked them through the new protocol, armed them with the co-branded materials, and ensured they
              could speak confidently about the benefits to prospective residents and their families.
            </p>

            <p className="text-gray-600 mb-6">
              The first move under the new protocol was for an incoming resident whose family was initially skeptical
              about using a "required" partner. Our B&B coordinator communicated proactively with the family, explaining
              the process and building trust. On move day, the execution was a textbook example of our protocol:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>Our crew arrived on time, in uniform, and checked in with the concierge.</li>
              <li>Property protection was laid down from the curb to the apartment door.</li>
              <li>The move was completed efficiently and discreetly within the pre-approved window.</li>
              <li>The resident's apartment was fully functional and debris-free by 4 PM.</li>
            </ul>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Result: Enhanced Reputation & Operational Peace
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                After three months and over a dozen successful moves, the results were clear and measurable.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Move-in day property damage incidents dropped to zero.</li>
                <li>Move-in related staff and resident complaints were eliminated.</li>
                <li>
                  Maple Creek's staff was no longer consumed by logistical problems, allowing them to focus on resident
                  welcome and integration.
                </li>
                <li>
                  Resident satisfaction surveys showed a marked improvement in the "move-in experience" category, which
                  became a new highlight in marketing tours.
                </li>
              </ul>

              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg text-gray-700">
                "Partnering with B&B has transformed our move-in process from our biggest headache into one of our
                strongest selling points. They operate as a true extension of my team, protecting our reputation and
                ensuring our residents feel cared for from the moment they choose Maple Creek."
                <footer className="mt-2 text-sm text-gray-600">— Linda Hayes, Executive Director</footer>
              </blockquote>

              <p className="text-gray-600 mt-6">
                This case highlights how a strategic partnership built on operational excellence, clear communication,
                and a shared commitment to the client experience can solve key business challenges for senior living
                communities, turning a logistical necessity into a powerful competitive advantage.
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
