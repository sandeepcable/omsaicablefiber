"use client";


export default function Page() {
  const plans = [
    { name: "TV Basic Pack", price: "₹300/month", extra: "₹3200/year" },
    { name: "Fiber 20 Mbps", price: "₹200/month" },
    { name: "Fiber 30 Mbps", price: "₹300/month" },
    { name: "Fiber 40 Mbps", price: "₹400/month" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden bg-slate-950 text-white py-24 px-6 text-center">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-500"></div>

  <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

  <div className="relative max-w-6xl mx-auto">
    <img
      src="/images/logo.png"
      alt="Om Sai Cable Logo"
      className="w-[320px] md:w-[500px] mx-auto mb-6"
    />

    <p className="inline-block bg-white/15 px-5 py-2 rounded-full text-sm md:text-base mb-6">
      Konasamundar • Nizamabad • Telangana
    </p>

    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
      High Speed Fiber Internet <br />
      & Digital TV Services
    </h1>

    <p className="text-lg md:text-2xl text-blue-100 mb-10">
      Reliable Cable TV, Fiber Internet, OTT Services & TV Accessories
    </p>

    <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
      <div className="bg-white/15 backdrop-blur p-5 rounded-2xl">
        <h3 className="text-3xl font-extrabold">350+</h3>
        <p>Happy Customers</p>
      </div>

      <div className="bg-white/15 backdrop-blur p-5 rounded-2xl">
        <h3 className="text-3xl font-extrabold">24/7</h3>
        <p>Customer Support</p>
      </div>

      <div className="bg-white/15 backdrop-blur p-5 rounded-2xl">
        <h3 className="text-3xl font-extrabold">40 Mbps</h3>
        <p>Affordable Fiber Plans</p>
      </div>
    </div>

    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href="tel:+919440369950"
        className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/919010653125"
        target="_blank"
        className="bg-green-500 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
      >
        📲 WhatsApp Us
      </a>
    </div>
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

<section className="py-16 bg-white px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-10">
      Service Coverage Areas
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        "Konasamundar",
        "Kammarpalli",
        "Bheemgal",
        "Nizamabad Rural",
        "Nearby Villages",
        "Telangana",
      ].map((area) => (
        <div
          key={area}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center font-bold text-lg shadow-md"
        >
          ✅ {area}
        </div>
      ))}
    </div>
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.67603655029365!2d78.52380242076168!3d18.728548732381622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcda47da063fea7%3A0x6e5bef8c71ea96!2sKonasamandar%2C%20Telangana%20503307!5e0!3m2!1sen!2sin!4v1781935027891!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl shadow-lg"
    ></iframe>
  </div>
</section>
{/* New Connection Form */}
<section className="py-16 bg-white px-6">
  <div className="max-w-3xl mx-auto bg-gray-100 rounded-3xl shadow-lg p-8">
    <h2 className="text-4xl font-extrabold text-center mb-6">
      New Connection Request
    </h2>

    <p className="text-center text-gray-600 mb-8">
      Fill your details and send enquiry directly on WhatsApp.
    </p>

    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const mobile = (form.elements.namedItem("mobile") as HTMLInputElement).value;
        const village = (form.elements.namedItem("village") as HTMLInputElement).value;
        const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        const text = `New Connection Request%0AName: ${name}%0AMobile: ${mobile}%0AVillage: ${village}%0AService: ${service}%0AMessage: ${message}`;
        window.open(`https://wa.me/919010653125?text=${text}`, "_blank");
      }}
    >
      <input
        name="name"
        required
        placeholder="Your Name"
        className="p-4 rounded-xl border"
      />

      <input
        name="mobile"
        required
        placeholder="Mobile Number"
        className="p-4 rounded-xl border"
      />

      <input
        name="village"
        required
        placeholder="Village Name"
        className="p-4 rounded-xl border"
      />

      <select name="service" className="p-4 rounded-xl border">
        <option>Fiber Internet</option>
        <option>Cable TV</option>
        <option>OTT Services</option>
        <option>TV Accessories</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        className="p-4 rounded-xl border"
      />

      <button
        type="submit"
        className="bg-green-500 text-white p-4 rounded-xl font-bold"
      >
        Submit on WhatsApp
      </button>
    </form>
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