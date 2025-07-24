export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="mb-8">
            <span
              className="text-red-600 text-sm"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontWeight: 600,
              }}
            >
              About B&B Movers
            </span>
          </div>
          <h2 className="text-gray-900 mb-8">Jacksonville's Premier Senior Moving Professionals</h2>
          <p className="text-xl text-gray-600 mb-10">
            For over 40 years, our family-owned business has been serving as a seamless, professional extension of the
            communities and healthcare providers we partner with.
          </p>
          <p className="text-lg text-gray-600 mb-12">
            We provide a white-glove relocation service designed not only to ensure a flawless transition for seniors
            but to actively enhance the trust they have placed in you. Our process is a reflection of your high
            standards. Our team embodies the compassion you deliver daily.
          </p>

          <div className="grid grid-cols-3 mt-16" style={{ gap: "3rem" }}>
            <div className="text-center">
              <div
                className="mb-6"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#fee2e2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <span className="text-3xl text-red-600" style={{ fontWeight: "bold" }}>
                  40+
                </span>
              </div>
              <h3 className="text-xl text-gray-900 mb-3" style={{ fontWeight: 600 }}>
                Years of Experience
              </h3>
              <p className="text-gray-600">Four decades of trusted service in Jacksonville and beyond</p>
            </div>

            <div className="text-center">
              <div
                className="mb-6"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#fee2e2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <span className="text-3xl text-red-600" style={{ fontWeight: "bold" }}>
                  1K+
                </span>
              </div>
              <h3 className="text-xl text-gray-900 mb-3" style={{ fontWeight: 600 }}>
                Senior Relocations
              </h3>
              <p className="text-gray-600">Successful senior moves completed with compassion</p>
            </div>

            <div className="text-center">
              <div
                className="mb-6"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#fee2e2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <span className="text-3xl text-red-600" style={{ fontWeight: "bold" }}>
                  100%
                </span>
              </div>
              <h3 className="text-xl text-gray-900 mb-3" style={{ fontWeight: 600 }}>
                Family Satisfaction
              </h3>
              <p className="text-gray-600">Committed to exceeding expectations every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
