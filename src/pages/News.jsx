import React from "react";
import { Calendar, Bell, Trophy, ArrowRight } from "lucide-react";

export default function News() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            News & Announcements
          </h1>
          <p className="mt-4 text-slate-600">
            Latest updates on upcoming exams, important notices, and results.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* -------- UPCOMING EXAMS -------- */}
          <NewsColumn
            title="Upcoming Exams"
            icon={<Calendar size={20} />}
            items={[
              {
                title: "Olympiad Registration Open",
                desc: "Registrations for IMO, NSO, and IEO are now open.",
                date: "August 2026",
              },
              {
                title: "NTSE Foundation Batch",
                desc: "New batch starting for Class 7 & 8 students.",
                date: "September 2026",
              },
            ]}
          />

          {/* -------- NOTIFICATIONS -------- */}
          <NewsColumn
            title="Important Notices"
            icon={<Bell size={20} />}
            items={[
              {
                title: "Holiday Notice",
                desc: "Institute will remain closed on national holidays.",
                date: "As per calendar",
              },
              {
                title: "Parent-Teacher Meeting",
                desc: "Monthly PTM scheduled for all classes.",
                date: "Last Saturday",
              },
            ]}
          />

          {/* -------- RESULTS -------- */}
          <NewsColumn
            title="Results & Achievements"
            icon={<Trophy size={20} />}
            items={[
              {
                title: "Olympiad Results",
                desc: "Several students secured top ranks in Olympiads.",
                date: "Declared",
              },
              {
                title: "Scholarship Exam Success",
                desc: "Students qualified for state-level scholarships.",
                date: "2026 Session",
              },
            ]}
          />

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated With Important Announcements
          </h2>
          <p className="mb-8 font-medium">
            For exam notifications, results, and academic updates, stay connected
            with Parth Academy.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */

function NewsColumn({ title, icon, items }) {
  return (
    <div className="bg-white border rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 text-yellow-600">
        {icon}
        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <ul className="space-y-6">
        {items.map((item, i) => (
          <li key={i}>
            <p className="font-medium text-slate-800">
              {item.title}
            </p>
            <p className="text-sm text-slate-600">
              {item.desc}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {item.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
