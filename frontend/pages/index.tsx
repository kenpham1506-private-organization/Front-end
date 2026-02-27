import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import CursorGlow from "../components/CursorGlow";

export default function Home() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <>
      <CursorGlow />

      <main className="bg-dark text-light overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand blur-3xl"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Packaging
                <br />
                <span className="text-brand">That Performs</span>
              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                We engineer premium packaging solutions designed for durability,
                precision, and powerful brand impact.
              </p>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block mt-10"
              >
                <Link
                  href="/products"
                  className="relative z-10 px-10 py-5 bg-brand text-white font-bold rounded-lg"
                >
                  Explore Products
                </Link>

                <motion.div
                  className="absolute inset-0 bg-brand blur-xl opacity-40 rounded-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <motion.div
                style={{ y: heroImageY }}
                whileHover={{ rotate: -2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/hero-packaging.png"
                  alt="Packaging Products"
                  width={600}
                  height={500}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="py-28 bg-light text-dark">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">About Our Company</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Established in 2013, we specialize in industrial and custom packaging
              solutions across Vietnam and international markets. Our production
              system focuses on precision engineering, durability testing, and
              scalable manufacturing processes.
            </p>
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        <section className="py-28 bg-dark">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Leadership
            </h2>

            <div className="grid md:grid-cols-2 gap-16">

              {/* CEO */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-[#020617] border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/images/ceo.png"
                    alt="Tran Thien Y - CEO"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Tran Thien Y</h3>
                  <p className="text-brand mt-2">Founder & CEO</p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    Leads strategic direction, client partnerships, and innovation.
                    With over 10 years in industrial packaging, he focuses on
                    sustainable growth and production excellence.
                  </p>
                </div>
              </motion.div>

              {/* Operations Director */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="bg-[#020617] border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/images/operations.png"
                    alt="Nguyen Minh Anh - Operations Director"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Tran Thien Italy</h3>
                  <p className="text-brand mt-2">Operations Director</p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    Oversees production systems, logistics, and quality control.
                    Ensures every packaging unit meets strict durability
                    and performance standards.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= DELIVERY ================= */}
        <section className="py-28 bg-light text-dark">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16">Delivery & Logistics</h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-2xl font-bold">Delivery Range</h3>
                <p className="mt-4 text-gray-600">
                  Nationwide delivery across Vietnam. International shipping available.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Production Time</h3>
                <p className="mt-4 text-gray-600">
                  Standard orders: 3–7 working days.  
                  Custom bulk orders: 7–14 working days.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Shipping Partners</h3>
                <p className="mt-4 text-gray-600">
                  Trusted logistics partners ensuring safe and timely delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="py-28 bg-dark">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Contact Us</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-gray-300">
                <p><strong>Email:</strong> contact@yourcompany.com</p>
                <p><strong>Phone:</strong> +84 912 345 678</p>
                <p><strong>Zalo:</strong> +84 912 345 678</p>
                <p><strong>WhatsApp:</strong> +84 912 345 678</p>
                <p><strong>Address:</strong> Ho Chi Minh City, Vietnam</p>
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:contact@yourcompany.com"
                  className="px-6 py-4 bg-brand rounded-lg text-white font-semibold text-center hover:scale-105 transition"
                >
                  Send Email
                </a>

                <a
                  href="https://wa.me/84912345678"
                  target="_blank"
                  className="px-6 py-4 border border-gray-600 rounded-lg text-center hover:bg-white hover:text-dark transition"
                >
                  WhatsApp Chat
                </a>

                <a
                  href="https://zalo.me/84912345678"
                  target="_blank"
                  className="px-6 py-4 border border-gray-600 rounded-lg text-center hover:bg-white hover:text-dark transition"
                >
                  Zalo Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-black py-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Packaging Company. All rights reserved.
        </footer>

      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/84912345678"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        WhatsApp
      </a>
    </>
  );
}