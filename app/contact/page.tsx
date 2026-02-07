import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

import FAQItem from "@/components/ui/FaqItem";
import ContactForm from "@/components/ui/ContactForm";

const faqs = [
  { question: "How long does it take to get a response?", answer: "Our support team usually responds within 2 hours." },
  { question: "Can I cancel my booking?", answer: "Yes, you can cancel your booking up to 24 hours before departure." },
  { question: "Do you offer 24/7 customer support?", answer: "Yes, our support team is available 24/7 via phone and email." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers." },
];

export default function ContactPage() {
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
        <ContactForm />

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

        <div className="w-full max-w-5xl columns-1 md:columns-2 gap-4 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
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
