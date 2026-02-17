import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  ClipboardCheck,
  Trophy,
  ArrowRight,
} from "lucide-react";
import HeroArcadis from "../components/Home/Hero";
import {
  CompetitiveExamsMarquee,
} from "../components/Home/ClassAndExamMarquee";
import StudentCarousel from "../components/Home/StudentCarousel";
/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <HeroArcadis />

      {/* ================= COMPETITIVE EXAMS MARQUEE ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <CompetitiveExamsMarquee />
      </motion.section>

      {/* ================= TRUST ================= */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16 text-slate-900"
          >
            Why Parents Trust Us
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                icon: <Users size={22} />,
                title: "Experienced Teachers",
                text: "Qualified faculty with strong academic background.",
              },
              {
                icon: <ClipboardCheck size={22} />,
                title: "Regular Assessments",
                text: "Weekly tests and continuous performance tracking.",
              },
              {
                icon: <BookOpen size={22} />,
                title: "Concept-Based Teaching",
                text: "Focus on understanding, not rote learning.",
              },
              {
                icon: <Trophy size={22} />,
                title: "Proven Results",
                text: "Consistent improvement in school and competitions.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <TrustCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= TOPPERS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Our Achievers
          </h2>

          <StudentCarousel />
        </div>
      </section>


      {/* ================= CTA ================= */}
      <motion.section
        className="py-20 bg-yellow-500 text-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Book a Free Parent Counselling Session
          </h2>
          <p className="mb-8 font-medium">
            Understand your child’s current level and get the right class
            recommendation — with no obligation.
          </p>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Book Counselling <ArrowRight size={18} />
          </NavLink>
        </div>
      </motion.section>

    </main>
  );
}

/* ================= TRUST CARD ================= */

function TrustCard({ icon, title, text }) {
  return (
    <div className="text-center space-y-4">
      <div className="w-12 h-12 mx-auto rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
