import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Premium Packaging Solutions
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide high-quality, custom packaging for businesses of all sizes.
          Durable, sustainable, and designed to elevate your brand.
        </p>

        <div className="mt-10 flex justify-center gap-4">
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
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Feature
              title="High Quality"
              description="Strong, reliable materials that protect your products."
            />
            <Feature
              title="Custom Design"
              description="Tailored packaging to match your brand identity."
            />
            <Feature
              title="Fast Delivery"
              description="Efficient production and on-time delivery."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to upgrade your packaging?
        </h2>
        <p className="mt-4 text-gray-600">
          Explore our products and find the perfect solution.
        </p>

        <Link
          href="/products"
          className="inline-block mt-8 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </section>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
