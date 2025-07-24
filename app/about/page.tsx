import Header from "@/components/Header"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About B&B Movers</h1>
            <p className="text-xl lg:text-2xl opacity-90">Jacksonville's trusted moving company for over 40 years</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-700 mb-8">
              Welcome to B&B Movers, your premier destination for comprehensive moving solutions in Jacksonville, FL. As
              a family-owned and operated full-service moving company, we pride ourselves on offering a wide array of
              services tailored to meet all your moving needs.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Whether you're planning a local move, a long-distance journey, or require specialized services such as
              commercial moving, senior relocations, storage, or packing, our dedicated team is here to ensure every
              aspect of your move is handled with care and precision. At B&B Movers, we believe in delivering not just a
              service but an experience, combining our decades of expertise with a personal touch to make your move a
              success from start to finish.
            </p>

            <div className="bg-red-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Senior Relocation Expertise</h2>
              <p className="text-lg text-gray-600 mb-4">
                Moving at any stage of life is a significant event, but transitioning from a home filled with a lifetime
                of memories requires a special kind of care. At B&B Moving and Storage, we recognize that a senior
                relocation is not just about logistics; it's a deeply personal journey that involves emotional,
                physical, and familial considerations.
              </p>
              <p className="text-gray-600">
                Our mission is to lift the burden from seniors and their families, transforming a potentially stressful
                process into a smooth, dignified, and positive start to a new chapter. We are more than movers; we are
                compassionate partners dedicated to managing every detail with the patience, respect, and
                professionalism your family deserves.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose B&B Movers?</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-3">40+ Years of Local Trust</h3>
                <p className="text-gray-600">A family-owned legacy in Jacksonville with deep community roots.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-3">Compassion & Patience</h3>
                <p className="text-gray-600">A team trained to support the emotional side of moving.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-3">One-Stop-Shop</h3>
                <p className="text-gray-600">From downsizing to settling in, we handle it all.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-3">Licensed, Insured & Secure</h3>
                <p className="text-gray-600">Complete peace of mind for your family.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
              <p className="text-lg text-gray-600 mb-4">
                As a family-owned and operated company, B&B Movers brings over 40 years of expertise to each move,
                treating our clients like family and building a reputation for unwavering trust, quality work, and a
                commitment to being your dependable partner in every move.
              </p>
              <p className="text-gray-600">
                Because in Jacksonville, we're not just movers, we're your neighbors, and we're here to stay.
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
