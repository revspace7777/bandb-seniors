import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-red-600 text-white section-padding">
      <div className="container-wide">
        <div className="grid lg-grid-cols-2 items-center" style={{ gap: "4rem" }}>
          <div>
            <div className="mb-6">
              <span
                className="text-red-200 text-sm"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                }}
              >
                Senior Relocation Services
              </span>
            </div>
            <h1 className="mb-8 text-white">A Compassionate Approach to Senior Moving</h1>
            <p className="text-xl mb-10" style={{ opacity: 0.9, lineHeight: 1.6 }}>
              Moving at any stage of life is significant, but transitioning from a home filled with a lifetime of
              memories requires special care. We transform potentially stressful relocations into smooth, dignified new
              beginnings.
            </p>
            <div className="flex flex-col space-y-4" style={{ gap: "1rem" }}>
              <a href="#contact" className="btn-primary text-center">
                Get Free Consultation
              </a>
              <a href="/families" className="btn-secondary text-center">
                Learn More
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Image
              src="/images/happy-senior-couple.webp"
              alt="Happy senior couple with moving boxes"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
