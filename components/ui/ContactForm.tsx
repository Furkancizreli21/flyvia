"use client";

export default function ContactForm() {
  return (
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
  );
}
