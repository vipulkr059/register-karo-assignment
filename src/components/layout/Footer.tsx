import { ScrollToTop } from "../common/ScrollToTop";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

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
              <a href="#" className="text-white " aria-label="Facebook">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white " aria-label="Google">
                <FaGoogle className="h-6 w-6" />
              </a>
              <a href="#" className="text-white " aria-label="Apple">
                <FaApple className="h-6 w-6" />
              </a>
              <a href="#" className="text-white " aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
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
