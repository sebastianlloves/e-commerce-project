import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="body-font relative w-full bg-gray-100 text-gray-700">
      <div className="custom-shape-divider-bottom-1707417843">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between py-8">
        <div className="flex h-full w-1/6 flex-col items-center justify-start">
          <Link to="/">
            <img
              src="/assets/your-brand-logos_white.png"
              className="logo-footer -mt-6 w-[5.5rem] text-[#F5F5F5] hover:scale-[102%]"
            />
          </Link>

          <div className="inline-flex justify-center gap-x-4">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex w-5/6 flex-wrap text-center lg:w-4/6">
          <div className="w-full px-4 md:w-1/4 lg:w-1/4">
            <h2 className="title-font mb-4 text-sm font-medium uppercase tracking-widest text-gray-900">
              About
            </h2>
            <nav className="list-none">
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Company
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/4 lg:w-1/4">
            <h2 className="title-font mb-4 text-sm font-medium uppercase tracking-widest text-gray-900">
              Support
            </h2>
            <nav className="list-none">
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Contact Support
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Help Resources
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/4 lg:w-1/4">
            <h2 className="title-font mb-4 text-sm font-medium uppercase tracking-widest text-gray-900">
              Platform
            </h2>
            <nav className="list-none">
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Terms &amp; Privacy
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/4 lg:w-1/4">
            <h2 className="title-font mb-4 text-sm font-medium uppercase tracking-widest text-gray-900">
              Contact
            </h2>
            <nav className="list-none">
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Send a Message
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/"
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  Request a Quote
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="mx-auto px-5 py-3">
          <p className="text-center text-sm capitalize text-gray-700">
            © 2024 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
