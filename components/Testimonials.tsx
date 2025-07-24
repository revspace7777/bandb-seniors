export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "You didn't just move our things; you moved our parents' lives with the dignity and respect they deserved. You took the weight of the world off our family's shoulders.",
      author: "The Miller Family",
      role: "Senior Relocation Client",
    },
    {
      quote:
        "Partnering with B&B has transformed our move-in process from our biggest headache into one of our strongest selling points. They operate as a true extension of my team.",
      author: "Linda Hayes",
      role: "Executive Director, Maple Creek Senior Living",
    },
    {
      quote:
        "The care and attention they showed my mother during her move was extraordinary. Every detail was handled with such compassion and professionalism.",
      author: "Sarah Johnson",
      role: "Family Member",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Families Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">B&B Movers, where every move is a success</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="text-red-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
