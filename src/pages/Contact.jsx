import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
// import {MapPinIcon} from "@heroicons/react/24/outline";
export default function Contact() {
  const mapLocation = {
    lat: 30.3837,
    lng: 78.0907,
  };
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-yellow-600 mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Contact & Parent Counselling
          </h1>
          <p className="mt-4 text-slate-600">
            Have questions about classes or competitive preparation?  
            Speak directly with our counsellors and get clear guidance.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* -------- CONTACT INFO -------- */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Get in Touch
            </h2>

            <ContactItem
              icon={<Phone size={22} />}
              title="Call Us"
              value="+91 8349902861"
              note="Mon–Sat · 9:00 AM – 7:00 PM"
            />

            <ContactItem
              icon={<MessageCircle size={22} />}
              title="WhatsApp"
              value="+91 8349902861"
              note="Quick responses for parents"
            />

            <ContactItem
              icon={<Mail size={22} />}
              title="Email"
              value="tomaramitsingh19@gmail.com"
              note="We reply within 24 hours"
            />

            <ContactItem
              icon={<MapPin size={22} />}
              title="Visit Us"
              value="Parth Academy, Near C.L Garden Ater Road Porsa, Madhya Pradesh"
              note="Safe & student-friendly environment"
            />

            {/* Google Map Placeholder */}
            <div className="mt-8 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                <iframe
                  title="Office Location"
                  src={`https://www.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
            </div>
          </div>

          {/* -------- FORM -------- */}
          <div className="bg-white border rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Book Parent Counselling
            </h2>

            <form className="space-y-6">
              <Input label="Parent Name" placeholder="Enter your name" />
              <Input label="Student Class" placeholder="e.g. Class 5" />
              <Input label="Phone Number" placeholder="Enter phone number" />
              <Input label="Email (optional)" placeholder="Enter email" />

              <div>
                <label className="block text-sm font-medium mb-1 text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your child’s learning needs"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:brightness-105 transition"
              >
                Request Counselling
              </button>

              <p className="text-xs text-slate-500 text-center">
                We respect your privacy. No spam. No sales pressure.
              </p>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ContactItem({ icon, title, value, note }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-slate-700">{value}</p>
        <p className="text-xs text-slate-500">{note}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-slate-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}
