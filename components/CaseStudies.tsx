import Link from "next/link"

export default function CaseStudies() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Real Stories, Real Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped families and professionals navigate senior relocations with compassion and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Residential Case Study */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">
              Residential Case Study
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Millers' Relocation</h3>
            <p className="text-gray-600 mb-6">
              John and Mary Miller, both in their early 80s, needed to move from their 4-bedroom family home of 45 years
              to a 2-bedroom senior living apartment. Their adult children lived out-of-state and couldn't manage the
              logistics.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
              <p className="text-gray-700 text-sm">
                Overwhelming emotional and physical burden of sorting through 45 years of memories, with safety concerns
                and family stress.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">The Outcome:</h4>
              <p className="text-gray-700 text-sm">
                Seamless transition with specialty packing for Mary's porcelain doll collection, complete home setup,
                and a stress-free experience that preserved family relationships.
              </p>
            </div>
            <Link href="/case-study-residential" className="btn-primary">
              Read Full Case Study
            </Link>
          </div>

          {/* Commercial Case Study */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">Commercial Case Study</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Maple Creek Partnership</h3>
            <p className="text-gray-600 mb-6">
              Maple Creek Senior Living needed a standardized move-in protocol to eliminate chaos and property damage
              while enhancing their premium brand experience.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
              <p className="text-gray-700 text-sm">
                Inconsistent move-ins with different moving companies causing property damage, scheduling conflicts, and
                stressed new residents.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">The Outcome:</h4>
              <p className="text-gray-700 text-sm">
                Zero property damage incidents, eliminated complaints, freed staff to focus on resident care, and
                improved satisfaction scores.
              </p>
            </div>
            <Link href="/case-study-commercial" className="btn-primary">
              Read Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
