import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left: Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900">
              CustomPackage
            </Link>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Products
            </Link>
            <Link href="/customize" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Customize
            </Link>
          </div>

          {/* Right: Login Button */}
          <button
            onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </header>

      {/* Login Sidebar Menu */}
      <AnimatePresence>
        {isLoginMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Right Side Menu */}
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 w-full max-w-md h-screen bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Account</h2>
                  <button
                    onClick={() => setIsLoginMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-900 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Login Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot password?
                    </a>
                  </div>

                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    Sign In
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
                    Sign up
                  </button>
                </div>

                {/* Footer Links */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                      Terms of Service
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
