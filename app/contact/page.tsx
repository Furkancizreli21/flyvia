"use client";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const faqs = [
  {
    question: "How long does it take to get a response?",
    answer: "Our support team usually responds within 2 hours.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking up to 24 hours before departure.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer: "Yes, our support team is available 24/7 via phone and email.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10">
      <div>
        <h1 className="font-bold text-4xl">Contact Our Support Team</h1>
        <p className="text-slate-500 mt-3 max-w-3xl">
          We are here to help with your bookings, cancellations, and any questions in between.
          <br />
          Our team typically responds within 2 hours.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="col-span-3 bg-white p-8 rounded-2xl shadow-md">
          <p className="font-bold text-xl mb-6">Send us a message</p>

          <form className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="flex flex-1 flex-col gap-2">
                <label className="font-medium">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-slate-200 p-3 rounded-xl focus:outline-none" />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label className="font-medium">Email</label>
                <input type="email" placeholder="john@example.com" className="bg-slate-200 p-3 rounded-xl focus:outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Subject</label>
              <input type="text" placeholder="Please write topic" className="bg-slate-200 p-3 rounded-xl focus:outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Your Message</label>
              <textarea
                rows={5}
                placeholder="How can we help you today?"
                className="bg-slate-200 p-3 rounded-xl focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-44 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition font-medium shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="col-span-1 flex flex-col gap-6 h-full">
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex gap-4">
            <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <FiPhoneCall className="text-blue-600 text-2xl" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">Phone Support</p>
              <p className="text-sm text-gray-500">24/7 Availability</p>
              <a href="tel:+18001234567" className="text-blue-600 font-medium">
                +1 (800) 123-4567
              </a>
              <a href="tel:+442079460958" className="text-blue-600 font-medium">
                +44 20 7946 0958
              </a>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex gap-4">
            <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <MdEmail className="text-blue-600 text-2xl" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">Email Support</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
              <a href="mailto:support@example.com" className="text-blue-600 font-medium">
                support@travelbooking.com
              </a>
              <a href="mailto:support@example.com" className="text-blue-600 font-medium">
                partners@travelbooking.com
              </a>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex gap-4">
            <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <TfiLocationPin className="text-blue-600 text-2xl" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">Office Address</p>
              <p className="text-sm text-gray-500">Visit Us</p>
              <p className="text-blue-600 font-medium">
                123 Main Street
                <br />
                New York, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

        <div className="w-full max-w-5xl columns-1 md:columns-2 gap-4 space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden break-inside-avoid mb-4 "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none cursor-pointer"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>

                <svg
                  className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-blue-500 font-medium hover:underline text-sm">
            See all help articles
          </a>
        </div>
      </div>
    </div>
  );
}
