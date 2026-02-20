import { useState } from "react";
import { jsPDF } from "jspdf";
import {
  CheckCircle,
  Download,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const questions = [
  {
    question: "रक्त समूह कितने प्रकार के होते हैं?",
    options: ["1", "2", "3", "4"],
  },
  {
    question:
      "निम्नलिखित में से किस रक्त समूह को सार्वभौमिक दाता माना जाता है?",
    options: ["A", "AB", "B", "O"],
  },
  {
    question:
      "मानव रक्त के स्थानांतरण की प्रक्रिया को क्या कहा जाता है?",
    options: ["Transfusion", "Processing", "Transporting", "Transferring"],
  },
];

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  function handleAnswer(option) {
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Assessment Report", 20, 20);

    questions.forEach((q, i) => {
      doc.text(`${i + 1}. ${q.question}`, 20, 40 + i * 20);
      doc.text(`Answer: ${answers[i]}`, 25, 50 + i * 20);
    });

    doc.save("assessment-report.pdf");
  }

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen pb-24">

      {/* HERO */}
      <section className="pt-28 pb-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-yellow-700 uppercase bg-yellow-100 rounded-full">
            Self Assessment
          </div>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Knowledge Check <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Test Your Understanding
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Answer a few questions and download your performance summary.
          </p>
        </div>
      </section>

      {/* CARD */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border p-10 transition">

          {!completed ? (
            <>
              {/* Progress */}
              <div className="h-2 w-full bg-slate-100 rounded-full mb-10 overflow-hidden">
                <div
                  className="h-full bg-yellow-500 transition-all duration-500"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question */}
              <div className="mb-8">
                <span className="text-sm text-slate-400 font-semibold">
                  Question {current + 1} of {questions.length}
                </span>

                <h2 className="text-2xl font-bold mt-4 text-slate-800 leading-snug">
                  {questions[current].question}
                </h2>
              </div>

              {/* Options */}
              <div className="grid gap-4">
                {questions[current].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="group flex justify-between items-center border-2 border-slate-100 rounded-2xl px-6 py-4 hover:border-yellow-500 hover:bg-yellow-50 transition-all"
                  >
                    <span className="font-medium text-slate-700 group-hover:text-yellow-700">
                      {option}
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Your responses are private and secure.
              </div>
            </>
          ) : (
            <>
              {/* COMPLETED */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  Assessment Complete!
                </h2>

                <p className="text-slate-600 mb-8">
                  Review your answers below and download your report.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {questions.map((q, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-xl p-4 border flex justify-between items-center"
                  >
                    <div>
                      <p className="text-xs text-slate-400 mb-1">
                        {q.question}
                      </p>
                      <p className="font-semibold text-slate-800">
                        {answers[i]}
                      </p>
                    </div>
                    <BookOpen size={18} className="text-yellow-600" />
                  </div>
                ))}
              </div>

              <button
                onClick={downloadPDF}
                className="w-full flex items-center justify-center gap-2 bg-yellow-600 text-white py-4 rounded-2xl font-semibold hover:bg-yellow-700 transition shadow-lg"
              >
                <Download size={18} />
                Download PDF Report
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}