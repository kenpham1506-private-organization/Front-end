import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";

const products = [
  {
    name: "Industrial Carton Boxes",
    image: "/images/product-box.png",
    description:
      "Heavy-duty multi-layer carton boxes designed for industrial and export packaging.",
  },
  {
    name: "Protective Wrapping",
    image: "/images/product-wrap.png",
    description:
      "Shock-absorbing and moisture-resistant wrapping solutions for fragile goods.",
  },
  {
    name: "Custom Molded Packaging",
    image: "/images/product-mold.png",
    description:
      "Precision-engineered molded packaging tailored to your product dimensions.",
  },
  {
    name: "Eco Packaging",
    image: "/images/product-eco.png",
    description:
      "Sustainable and biodegradable packaging solutions for modern brands.",
  },
];

export default function Products() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 min-h-screen">

        {/* ================= HERO ================= */}
        <section className="py-20 text-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-b border-gray-200">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500 blur-3xl"
          />

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold relative z-10 text-gray-900"
          >
            Our Products
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto relative z-10"
          >
            Engineered packaging solutions designed for durability,
            scalability, and brand impact.
          </motion.p>
        </section>

        {/* ================= PRODUCT GRID ================= */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg group"
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
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {product.description}
                    </p>

                    <Link
                      href="/customize"
                      className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-700 transition"
                    >
                      Customize Now →
                    </Link>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-gray-50 text-gray-900 text-center border-b border-gray-200">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold">
              Ready to Design Your Package?
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Use our custom packaging designer to create the perfect solution for your products.
            </p>

            <Link
              href="/customize"
              className="inline-block mt-10 px-10 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Start Designing Now
            </Link>
          </motion.div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gray-900 py-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Premium Packaging Solutions. All rights reserved.
        </footer>

      </main>
    </>
  );
}