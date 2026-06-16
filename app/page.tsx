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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Om Sai Cable & Fiber Net
          <img
  src="/images/logo.png"
  alt="Om Sai Cable Logo"
  className="w-40 mx-auto mb-6"
/>
        </h1>

        <p className="text-xl">
          Fast Fiber Internet • Digital TV • OTT Services
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="tel:+919440369950"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919010653125"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-xl font-bold"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Plans & Pricing
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-black mb-3">
                {plan.name}
              </h3>

              <p className="text-blue-700 font-semibold">
                {plan.price}
              </p>

              {plan.extra && (
                <p className="text-gray-500 mt-2">
                  {plan.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Accessories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          TV Accessories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <img
              src="/images/remote.jpeg"
              alt="Remote"
              className="w-full h-56 object-contain"
            />
            <h3 className="text-xl font-bold mt-4">SSC Remote</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <img
              src="/images/adapter.jpeg"
              alt="Adapter"
              className="w-full h-56 object-contain"
            />
            <h3 className="text-xl font-bold mt-4">Power Adapter</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <img
              src="/images/hdmi.jpeg"
              alt="HDMI Cable"
              className="w-full h-56 object-contain"
            />
            <h3 className="text-xl font-bold mt-4">HDMI Cable</h3>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">Mittu</h3>
            <p className="mt-3">
              Excellent internet speed and quick service.
            </p>
            <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">Ramulu</h3>
            <p className="mt-3">
              Best cable TV service in our area.
            </p>
            <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">Ramesh</h3>
            <p className="mt-3">
              Affordable plans and very good support.
            </p>
            <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section>

      {/* OTT */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          OTT Services Available
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
          <div className="bg-red-600 text-white p-6 rounded-2xl text-center">
            Netflix
          </div>

          <div className="bg-blue-700 text-white p-6 rounded-2xl text-center">
            Disney+ Hotstar
          </div>

          <div className="bg-purple-700 text-white p-6 rounded-2xl text-center">
            Amazon Prime
          </div>

          <div className="bg-green-600 text-white p-6 rounded-2xl text-center">
            Zee5 & More
          </div>
        </div>
      </section>

      {/* Speed Test */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Check Your Internet Speed
          </h2>

          <p className="mb-8 text-lg">
            Test your broadband speed instantly.
          </p>

          <a
            href="https://fast.com"
            target="_blank"
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold"
          >
            Run Speed Test
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Us
        </h2>

        <p>Konasamundar, Nizamabad, Telangana</p>
        <p className="mt-2">📞 +91 9440369950</p>
        <p>📞 +91 9010653125</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <h3 className="text-2xl font-bold mb-3">
          Om Sai Cable & Fiber Net
        </h3>

        <p>Konasamundar, Nizamabad, Telangana</p>

        <p className="mt-2">
          📞 +91 9440369950 | +91 9010653125
        </p>

        <p className="mt-4 text-gray-400">
          © 2026 Om Sai Cable & Fiber Net. All Rights Reserved.
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919010653125"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-xl font-bold"
      >
        WhatsApp
      </a>
    </main>
  );
}