export default function Stats() {
  const stats = [
    { number: "42+", label: "Years in Business", description: "Decades of trusted service" },
    { number: "30,000+", label: "Successful Moves", description: "Families served with care" },
    { number: "20+", label: "Team Members", description: "Dedicated professionals" },
    { number: "4.5/5", label: "Google Rating", description: "Customer satisfaction" },
  ]

  return (
    <section className="stats-section section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Trusted by Jacksonville Families</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our numbers tell the story of four decades of compassionate service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-400 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
