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
          {/* Animated background blob */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand blur-3xl"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            {/* TEXT SIDE */}
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

              {/* Magnetic CTA */}
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

            {/* IMAGE SIDE */}
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

        {/* ================= MASSIVE TYPO SECTION ================= */}
        <section className="py-40 bg-dark overflow-hidden">
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10rem] md:text-[14rem] font-extrabold whitespace-nowrap text-center"
          >
            ENGINEERED FOR IMPACT
          </motion.h2>
        </section>

        {/* ================= LIGHT CONTRAST STRIP ================= */}
        <section className="py-32 bg-light text-dark">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold"
            >
              Built for Performance.
            </motion.h2>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-xl text-gray-700 max-w-2xl"
            >
              Every material, structure, and dimension engineered for real-world
              durability and scalable production.
            </motion.p>
          </div>
        </section>

        {/* ================= PRODUCTS PREVIEW ================= */}
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
    </>
  );
}
