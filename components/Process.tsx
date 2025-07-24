export default function Process() {
  const steps = [
    {
      title: "FREE Estimate and Consultation",
      description:
        "We begin by listening to your family's needs, concerns, and timeline. This no-obligation meeting provides you with a clear path forward.",
      icon: "💬",
    },
    {
      title: "Expert Coordination",
      description:
        "Our team meticulously plans and coordinates every aspect of your move, focusing on efficiency and precision for a smooth relocation experience.",
      icon: "📋",
    },
    {
      title: "Secure Transportation",
      description:
        "Trust us to handle belongings with utmost care using high-quality materials and our well-maintained fleet of vehicles.",
      icon: "🚛",
    },
    {
      title: "Seamless Arrival Process",
      description:
        "Our team assists with carefully placing furniture and belongings, ensuring you're comfortably situated in your new space.",
      icon: "🏠",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Simple 4-Step Process</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Redefining your moving experience with a proven approach that prioritizes your comfort and peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
                )}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
