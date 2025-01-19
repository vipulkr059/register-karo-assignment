import { Apple, Facebook, Instagram } from "lucide-react";
import { ScrollToTop } from "../common/ScrollToTop";

export function Footer() {
  return (
    <footer className="bg-[#011B5B] px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="mb-6 text-gray-300">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Google"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Apple"
              >
                <Apple className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-[#F5A623]">
              START A BUSINESS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-[#F5A623]">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-[#F5A623]">
              COMPLIANCE & TAX
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Channels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Scale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Watch the Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Our Competition
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-[#F5A623]">
              BIS & CDSCO
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          © 2025 Vipulkr. All Rights Reserved.
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
