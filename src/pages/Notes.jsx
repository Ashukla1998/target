import { useState } from "react";
import {
  Download,
  BookOpen,
  FileText,
  ChevronRight,
} from "lucide-react";

export default function Notes() {
  const [activeTab, setActiveTab] = useState("school");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const schoolData = {
    "Class 5": {
      Mathematics: ["Fractions", "Decimals", "Geometry"],
      Science: ["Plants", "Human Body", "Energy"],
    },
    "Class 6": {
      Mathematics: ["Algebra", "Integers"],
      English: ["Grammar", "Writing Skills"],
    },
  };

  const competitiveData = {
    Olympiad: ["Paper 2024", "Practice Set", "Solutions"],
    NTSE: ["Stage 1 Paper", "Mental Ability", "Previous Year Paper"],
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen pb-24">

      {/* HERO */}
      <section className="pt-28 pb-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Learning Resources <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Structured class-wise notes and competitive exam materials.
          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="flex justify-center mb-16">
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-2 flex gap-2 border">
          <TabButton
            active={activeTab === "school"}
            onClick={() => setActiveTab("school")}
            icon={<BookOpen size={18} />}
            label="School Notes"
          />
          <TabButton
            active={activeTab === "competitive"}
            onClick={() => setActiveTab("competitive")}
            icon={<FileText size={18} />}
            label="Competitive Exams"
          />
        </div>
      </div>

      {/* SCHOOL SECTION */}
      {activeTab === "school" && (
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          {/* Breadcrumb */}
          {(selectedClass || selectedSubject) && (
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <span>School</span>
              {selectedClass && (
                <>
                  <ChevronRight size={14} />
                  <span>{selectedClass}</span>
                </>
              )}
              {selectedSubject && (
                <>
                  <ChevronRight size={14} />
                  <span>{selectedSubject}</span>
                </>
              )}
            </div>
          )}

          {/* Class Selection */}
          {!selectedClass && (
            <div className="grid md:grid-cols-3 gap-8">
              {Object.keys(schoolData).map((cls, index) => (
                <SelectionCard
                  key={index}
                  title={cls}
                  count={Object.keys(schoolData[cls]).length}
                  onClick={() => setSelectedClass(cls)}
                />
              ))}
            </div>
          )}

          {/* Subject Selection */}
          {selectedClass && !selectedSubject && (
            <>
              <BackButton onClick={() => setSelectedClass("")} />
              <div className="grid md:grid-cols-3 gap-8">
                {Object.keys(schoolData[selectedClass]).map(
                  (subject, index) => (
                    <SelectionCard
                      key={index}
                      title={subject}
                      count={
                        schoolData[selectedClass][subject].length
                      }
                      onClick={() => setSelectedSubject(subject)}
                    />
                  )
                )}
              </div>
            </>
          )}

          {/* Chapters */}
          {selectedSubject && (
            <>
              <BackButton onClick={() => setSelectedSubject("")} />
              <div className="grid md:grid-cols-2 gap-8">
                {schoolData[selectedClass][selectedSubject].map(
                  (chapter, index) => (
                    <ResourceCard key={index} title={chapter} />
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* COMPETITIVE SECTION */}
      {activeTab === "competitive" && (
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {Object.keys(competitiveData).map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileText size={18} className="text-yellow-600" />
                {exam}
              </h3>

              <div className="space-y-4">
                {competitiveData[exam].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-yellow-50 transition group"
                  >
                    <span>{item}</span>
                    <Download
                      size={18}
                      className="text-yellow-600 group-hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition ${
        active
          ? "bg-yellow-600 text-white shadow-md"
          : "text-slate-600 hover:bg-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function SelectionCard({ title, onClick, count }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition relative border"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {count && (
        <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
          {count} Items
        </span>
      )}
    </div>
  );
}

function ResourceCard({ title }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition border">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{title}</h4>
        <button className="flex items-center gap-2 text-yellow-600 font-medium text-sm hover:underline">
          <Download size={16} />
          View
        </button>
      </div>
    </div>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-yellow-600 hover:underline"
    >
      ← Back
    </button>
  );
}