import React from "react";

export default function Page() {
  const plans = [
    { name: "TV Basic Pack", price: "₹300/month", extra: "₹3200/year" },
    { name: "Fiber 20 Mbps", price: "₹200/month" },
    { name: "Fiber 30 Mbps", price: "₹300/month" },
    { name: "Fiber 40 Mbps", price: "₹400/month" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-16 px-6 text-center">
        <img
          src="/images/logo.png"
          alt="Om Sai Cable Logo"
          className="w-80 md:w-[500px] mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Om Sai Cable & Fiber Net
        </h1>

        <p className="text-lg md:text-xl">
          Fast Fiber Internet • Digital TV • OTT Services
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919440369950"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919010653125"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Plans & Pricing
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
              <p className="text-blue-700 font-bold">{plan.price}</p>
              {plan.extra && <p className="text-gray-600 mt-2">{plan.extra}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          TV Accessories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "SSC Remote", image: "/images/remote.jpeg" },
            { name: "Power Adapter", image: "/images/adapter.jpeg" },
            { name: "HDMI Cable", image: "/images/hdmi.jpeg" },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg p-5 text-center hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-contain"
              />
              <h3 className="text-xl font-bold mt-4">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Mittu", "Excellent internet speed and quick service."],
            ["Ramulu", "Best cable TV service in our area."],
            ["Ramesh", "Affordable plans and very good support."],
          ].map(([name, review]) => (
            <div key={name} className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-3">{review}</p>
              <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          OTT Services Available
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {["Netflix", "Disney+ Hotstar", "Amazon Prime", "Zee5 & More"].map(
            (ott) => (
              <div
                key={ott}
                className="bg-blue-700 text-white p-6 rounded-2xl text-center font-bold shadow-lg"
              >
                {ott}
              </div>
            )
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Check Your Internet Speed
          </h2>
          <p className="mb-8 text-lg">Test your broadband speed instantly.</p>

          <a
            href="https://fast.com"
            target="_blank"
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold"
          >
            Run Speed Test
          </a>
        </div>
      </section>

      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-4xl font-extrabold mb-6">Contact Us</h2>
        <p>Konasamundar, Nizamabad, Telangana</p>
        <p className="mt-2">📞 +91 9440369950</p>
        <p>📞 +91 9010653125</p>
      </section>
      {/* Google Maps */}
<section className="py-16 bg-gray-100">
  <h2 className="text-4xl font-extrabold text-center mb-10">
    Our Location
  </h2>

  <div className="max-w-6xl mx-auto px-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1781867269412!5m2!1sen!2sin!6m8!1m7!1siEVni0azeJbS8zMkXDW-BQ!2m2!1d18.7283548220421!2d78.52411561027591!3f311.39431345277706!4f11.987207761764381!5f0.7820865974627469"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl shadow-lg"
    ></iframe>
  </div>
</section>

      <footer className="bg-black text-white py-8 text-center px-6">
        <h3 className="text-2xl font-bold mb-3">Om Sai Cable & Fiber Net</h3>
        <p>Konasamundar, Nizamabad, Telangana</p>
        <p className="mt-2">📞 +91 9440369950 | +91 9010653125</p>
        <p className="mt-4 text-gray-400">
          © 2026 Om Sai Cable & Fiber Net. All Rights Reserved.
        </p>
      </footer>

      <a
        href="https://wa.me/919010653125"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-xl font-bold hover:scale-110 transition"
      >
        WhatsApp
      </a>
    </main>
  );
}