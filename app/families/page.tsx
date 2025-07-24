import Header from "@/components/Header"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function FamiliesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Helping Your Parents Move with Compassion & Confidence
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              We understand the challenges families face during senior relocations. Let us handle the logistics so you
              can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-700 mb-8">
              Watching your parents transition to a new home is a major life event, filled with complex emotions and a
              mountain of logistical challenges. As their child, you want to ensure they are safe, respected, and happy,
              but the responsibility can be overwhelming. You're juggling your own life, career, and family, all while
              navigating difficult conversations and the physical labor of a move.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              At B&B Moving and Storage, we understand. For over 40 years, our family-owned business has been stepping
              in to lift this burden from families like yours. We are more than just a moving company; we are your
              project managers, your logistical experts, and your compassionate partners. Our mission is to handle every
              detail of your parents' relocation so you can focus on providing the emotional support they need,
              preserving your relationship and gaining complete peace of mind.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <Image
                src="/images/happy-senior-couple.webp"
                alt="Happy senior couple with moving boxes"
                width={600}
                height={400}
                className="w-full rounded-lg mb-6"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Comprehensive Service: Your Peace of Mind from Start to Finish
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide an end-to-end solution designed to eliminate the stress and anxiety of a senior move. You don't
              have to do this alone.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Phase 1: A Plan that Reduces Family Stress</h3>
                <p className="text-gray-600 mb-4">
                  The hardest part is often knowing where to start. We bring a calm, structured approach to the initial
                  planning and downsizing process.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Free Family Consultation:</strong> We begin by listening to your family's needs, concerns,
                    and timeline. This no-obligation meeting is designed to provide you with a clear path forward.
                  </li>
                  <li>
                    <strong>Neutral, Expert Downsizing Support:</strong> The conversation about letting go of
                    possessions is difficult. Our patient team acts as a gentle, neutral third party, guiding your
                    parents through the sorting process. This prevents family friction and ensures you don't have to be
                    the one making tough decisions.
                  </li>
                  <li>
                    <strong>Practical Space & Floor Planning:</strong> We help design the layout of the new home,
                    ensuring treasured furniture will fit safely and functionally, which helps your parents embrace
                    their new space.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  Phase 2: Meticulous Preparation You Don't Have to Manage
                </h3>
                <p className="text-gray-600 mb-4">
                  You don't need to spend countless weekends packing boxes. We'll handle the physical work so you can
                  spend quality time with your parents.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Professional Packing of All Belongings:</strong> Our trained crew securely packs everything,
                    from fragile heirlooms to entire kitchens, using high-quality materials to ensure their safety.
                  </li>
                  <li>
                    <strong>Coordination of Extra Items:</strong> We can arrange for items to be shipped to other family
                    members, delivered to donation centers, or managed by estate sale professionals, taking these tasks
                    completely off your plate.
                  </li>
                  <li>
                    <strong>Clear Inventory Management:</strong> You'll always be in the loop. We create organized,
                    detailed labels and lists so nothing gets lost in the shuffle.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  Phase 3: Relocation Handled with Professional Care
                </h3>
                <p className="text-gray-600 mb-4">
                  Whether your parents are moving down the street or across the country to be closer to you, we provide
                  a secure, reliable transit.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Experienced, Senior-Focused Crew:</strong> Our background-checked, uniformed movers are
                    specifically trained in senior sensitivity. They work with patience, courtesy, and respect.
                  </li>
                  <li>
                    <strong>Out-of-State Coordination:</strong> If you live far away, you can rely on us to be your
                    trusted hands on the ground. We provide constant communication and updates, so you feel in control
                    from a distance.
                  </li>
                  <li>
                    <strong>Modern & Secure Fleet:</strong> All possessions are transported in clean, fully-equipped
                    trucks, ensuring they arrive in the same condition they left.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  Phase 4: A Safe & Comfortable Home from Day One
                </h3>
                <p className="text-gray-600 mb-4">
                  Our goal is to create a soft landing. We ensure your parents' new home is safe, functional, and feels
                  like their own from the moment they walk in.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Complete Unpacking & Organization:</strong> We don't just drop off boxes. We unpack and
                    organize their belongings, setting up the kitchen, making the bed, and arranging the living room.
                  </li>
                  <li>
                    <strong>Furniture & Electronics Setup:</strong> We reassemble all furniture, connect TVs and other
                    electronics, and hang pictures, eliminating any technical or physical challenges for your parents.
                  </li>
                  <li>
                    <strong>Debris Removal:</strong> We take all the empty boxes and packing materials with us, leaving
                    a clean, safe, and move-in ready home.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-lg mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The B&B Movers Advantage: A Partner for Your Family
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <strong>40+ Years of Trust:</strong> A family-owned company you can depend on to care for your
                    parents.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Relief from Family Stress:</strong> We manage the tough conversations and the heavy lifting,
                    preserving your family harmony.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <strong>A True One-Stop Solution:</strong> We handle every detail, saving you the time and hassle of
                    coordinating multiple vendors.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Guaranteed Price & Service:</strong> You get a transparent, honest quote with no hidden
                    fees, so you can manage the budget with confidence.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Licensed & Insured:</strong> Complete assurance that your parents and their lifelong
                    memories are fully protected.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
