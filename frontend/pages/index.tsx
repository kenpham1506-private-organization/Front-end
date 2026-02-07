import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Premium Packaging
            <span className="text-blue-600"> That Elevates Brands</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            High-quality, sustainable, and custom packaging solutions designed
            to protect your products and strengthen your brand.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="/images/hero-packaging.png"
            alt="Packaging products"
            width={600}
            height={500}
            className="rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <Feature
              img="/images/quality.png"
              title="High Quality"
              description="Durable materials that protect your products end-to-end."
            />
            <Feature
              img="/images/custom.png"
              title="Custom Design"
              description="Packaging tailored to your brand identity."
            />
            <Feature
              img="/images/delivery.png"
              title="Fast Delivery"
              description="Reliable production timelines you can trust."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to upgrade your packaging?
        </h2>
        <p className="mt-4 text-gray-600">
          Explore our solutions and find the perfect fit.
        </p>

        <Link
          href="/products"
          className="inline-block mt-8 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </motion.section>
    </main>
  );
}

function Feature({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center"
    >
      <Image
        src={img}
        alt={title}
        width={80}
        height={80}
        className="mx-auto mb-6"
      />

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </motion.div>
  );
}
