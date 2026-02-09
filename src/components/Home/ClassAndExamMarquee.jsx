import Marquee from "./Marquee";
export function CompetitiveExamsMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Competitive Exams We Prepare For
        </h2>
        <p className="text-center text-slate-600 mt-3">
          State & national level competitive examinations
        </p>
      </div>

      <Marquee speed="fast">
        <ExamBadge name="Class 1" />
        <ExamBadge name="Class 2" />
        <ExamBadge name="Class 3" />
        <ExamBadge name="Class 4" />
        <ExamBadge name="Class 5" />
        <ExamBadge name="Class 6" />
        <ExamBadge name="Class 7" />
        <ExamBadge name="Class 8" />
        <ExamBadge name="UPSC" />
        <ExamBadge name="MPPSC" />
        <ExamBadge name="MP SI" />
        <ExamBadge name="MP Constable" />
        <ExamBadge name="SSC" />
        <ExamBadge name="Railway Exams" />
        <ExamBadge name="Banking Exams" />
        <ExamBadge name="State Police Exams" />
        <ExamBadge name="All MP Competitive Exams" />
      </Marquee>
    </section>
  );
}

function ExamBadge({ name }) {
  return (
    <div className="min-w-[220px] px-8 py-4 bg-accent rounded-full text-center font-bold text-white border">
      {name}
    </div>
  );
}
