import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background shape */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
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
              We engineer premium packaging solutions for brands that demand
              durability, precision, and visual impact.
            </p>

            <div className="mt-10 flex gap-6">
              <Link
                href="/products"
                className="px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:scale-105 transition"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-500 rounded-lg hover:bg-white hover:text-dark transition"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotate: -2, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero-packaging.png"
                alt="Packaging"
                width={600}
                height={500}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATEMENT STRIP */}
      <section className="py-20 bg-light text-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            ["10+ Years", "Manufacturing expertise"],
            ["500+ Clients", "Across industries"],
            ["Custom Built", "Tailored solutions"],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 40, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16"
          >
            Engineered Solutions
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Boxes", "Industrial Wrap", "Custom Molds"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-8 border border-gray-700 rounded-2xl bg-[#020617]"
              >
                <h3 className="text-2xl font-semibold">{item}</h3>
                <p className="mt-4 text-gray-400">
                  Precision-built packaging designed for protection and scale.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
