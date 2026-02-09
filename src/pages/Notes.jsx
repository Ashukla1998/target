import React from "react";
import { Download, BookOpen, FileText } from "lucide-react";

export default function Notes() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-yellow-600 mb-4">
            NOtes
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Study Notes & Resources
          </h1>
          <p className="mt-4 text-slate-600">
            Well-structured notes and practice material to support classroom
            learning and exam preparation.
          </p>
        </div>
      </section>

      {/* ================= NOTES SECTIONS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* -------- SCHOOL NOTES -------- */}
          <div>
            <SectionTitle
              icon={<BookOpen size={22} />}
              title="Class-wise Notes"
              subtitle="For Classes 1 to 8"
            />

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <NoteCard
                title="Class 1 – 2"
                desc="Basic concepts, worksheets, and practice material."
              />
              <NoteCard
                title="Class 3 – 4"
                desc="Concept notes, examples, and revision sheets."
              />
              <NoteCard
                title="Class 5 – 6"
                desc="Detailed explanations and practice questions."
              />
              <NoteCard
                title="Class 7 – 8"
                desc="Advanced concepts and exam-oriented notes."
              />
            </div>
          </div>

          {/* -------- COMPETITIVE NOTES -------- */}
          <div>
            <SectionTitle
              icon={<FileText size={22} />}
              title="Competitive Exam Notes"
              subtitle="Foundation & Competitive Preparation"
            />

            <div className="space-y-5 mt-8">
              <DownloadCard title="Olympiad Preparation Notes" />
              <DownloadCard title="NTSE Foundation Material" />
              <DownloadCard title="Mental Maths & Reasoning" />
              <DownloadCard title="Scholarship Exam Practice Sets" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-600">
            📌 Notes are regularly updated and aligned with the latest
            curriculum. Parents and students can download materials as per
            guidance from teachers.
          </p>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-yellow-600 mb-2">
        {icon}
        <span className="text-sm font-semibold uppercase tracking-wide">
          {subtitle}
        </span>
      </div>
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  );
}

function NoteCard({ title, desc }) {
  return (
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <h3 className="font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        {desc}
      </p>
      <button className="text-sm font-medium text-yellow-600 hover:underline">
        View Notes →
      </button>
    </div>
  );
}

function DownloadCard({ title }) {
  return (
    <div className="flex items-center justify-between bg-white border rounded-xl p-5 hover:shadow-md transition">
      <span className="font-medium text-slate-800">
        {title}
      </span>
      <button className="flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:underline">
        <Download size={16} />
        Download
      </button>
    </div>
  );
}
