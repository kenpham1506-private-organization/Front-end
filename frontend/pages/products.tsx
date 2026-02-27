import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Industrial Carton Boxes",
    image: "/images/product-box.jpg",
    description:
      "Heavy-duty multi-layer carton boxes designed for industrial and export packaging.",
  },
  {
    name: "Protective Wrapping",
    image: "/images/product-wrap.jpg",
    description:
      "Shock-absorbing and moisture-resistant wrapping solutions for fragile goods.",
  },
  {
    name: "Custom Molded Packaging",
    image: "/images/product-mold.jpg",
    description:
      "Precision-engineered molded packaging tailored to your product dimensions.",
  },
  {
    name: "Eco Packaging",
    image: "/images/product-eco.jpg",
    description:
      "Sustainable and biodegradable packaging solutions for modern brands.",
  },
];

export default function Products() {
  return (
    <main className="bg-dark text-light min-h-screen">

      {/* ================= HERO ================= */}
      <section className="py-32 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand blur-3xl"
        />

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold relative z-10"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto relative z-10"
        >
          Engineered packaging solutions designed for durability,
          scalability, and brand impact.
        </motion.p>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-[#020617] border border-gray-700 rounded-2xl overflow-hidden shadow-xl group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {product.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-block mt-6 text-brand font-semibold hover:underline"
                  >
                    Request Quote →
                  </Link>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-light text-dark text-center">
        <h2 className="text-4xl font-bold">
          Need Custom Packaging?
        </h2>

        <p className="mt-6 text-lg text-gray-700">
          Contact our team for tailored packaging solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 px-10 py-5 bg-brand text-white font-bold rounded-lg hover:scale-105 transition"
        >
          Get a Quote
        </Link>
      </section>

    </main>
  );
}