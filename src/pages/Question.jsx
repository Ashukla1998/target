import { useState } from "react";
import { jsPDF } from "jspdf";
import { CheckCircle, Download, ArrowRight, User, BookOpen, MessageSquare, Instagram, Facebook } from "lucide-react";

const questions = [
  {
    question: "How confident do you feel about your career direction?",
    options: ["Very confident", "Somewhat confident", "Not sure", "Completely confused"],
  },
  {
    question: "How often do you overthink decisions?",
    options: ["Rarely", "Sometimes", "Often", "Almost always"],
  },
  {
    question: "What best describes your current state?",
    options: ["Clear and focused", "Exploring options", "Stuck and confused", "Anxious and overwhelmed"],
  },
];

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleAnswer(option) {
    setIsAnimating(true);
    setTimeout(() => {
      const updated = [...answers];
      updated[current] = option;
      setAnswers(updated);

      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        setCompleted(true);
      }
      setIsAnimating(false);
    }, 200);
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Career Clarity Report", 20, 30);
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    doc.setFontSize(12);
    questions.forEach((q, i) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${i + 1}. ${q.question}`, 20, 50 + i * 25);
      doc.setFont("helvetica", "normal");
      doc.text(`Response: ${answers[i]}`, 25, 60 + i * 25);
    });

    doc.save("career-assessment.pdf");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      <main className="flex-grow flex flex-col items-center px-4 py-12">
        {/* HERO SECTION */}
        <div className="max-w-2xl text-center mb-10">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#B8860B] uppercase bg-yellow-50 rounded-full">
            Self-Discovery Journey
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Career & Clarity Assessment
          </h1>
          <p className="text-slate-600 text-lg">
            Understand your current mindset and unlock the path to your next big breakthrough.
          </p>
        </div>

        {/* ASSESSMENT CARD */}
        <div className={`w-full max-w-2xl bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
          
          {/* Progress Bar */}
          {!completed && (
            <div className="h-1.5 w-full bg-slate-100">
              <div 
                className="h-full bg-[#B8860B] transition-all duration-500 ease-out"
                style={{ width: `${((current + 1) / questions.length) * 100}%` }}
              />
            </div>
          )}

          <div className="p-8 sm:p-12">
            {!completed ? (
              <>
                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Question {current + 1} of {questions.length}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-slate-800 leading-tight">
                  {questions[current].question}
                </h2>

                <div className="grid gap-4">
                  {questions[current].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="group flex items-center justify-between w-full text-left border-2 border-slate-100 rounded-xl px-6 py-4 hover:border-[#B8860B] hover:bg-yellow-50/30 transition-all duration-200"
                    >
                      <span className="text-lg font-medium text-slate-700 group-hover:text-[#B8860B]">{option}</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#B8860B] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-slate-50 flex items-center gap-3 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-sm italic">Your responses are 100% private and secure.</p>
                </div>
              </>
            ) : (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-3 text-slate-900">Analysis Complete!</h2>
                <p className="text-slate-600 mb-10">
                  We've gathered insights based on your current state. Download your summary below.
                </p>

                <div className="space-y-3 mb-10">
                  {questions.map((q, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg text-left border border-slate-100">
                      <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-xs font-bold text-[#B8860B]">
                        {i+1}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">{q.question}</p>
                        <p className="text-slate-700 font-semibold">{answers[i]}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={downloadPDF}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF Report
                  </button>
                  <button className="flex-1 bg-[#B8860B] text-white py-4 rounded-xl font-bold hover:bg-[#966d09] transition shadow-lg shadow-yellow-200/50">
                    Book Free Strategy Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}