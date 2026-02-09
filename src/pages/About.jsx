import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-yellow-600 mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-slate-800">
            Building strong academic foundations
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Parth Academy is committed to nurturing young minds through
            concept-based learning, disciplined guidance, and a supportive
            environment for students from Class 1 to 8.
          </p>
        </div>

        {/* ================= MISSION ================= */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-[420px] bg-slate-200 rounded-[25px] flex items-center justify-center text-slate-600">
              <img src="/home.jpg" alt="Home" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Our Mission
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Our mission is to help students develop clarity of concepts,
              confidence in learning, and discipline in study habits — creating
              a strong academic base for school success and future competitive
              exams.
            </p>

            <ul className="space-y-5">
              {[
                {
                  title: "Concept-first learning",
                  desc: "We focus on understanding before memorisation.",
                },
                {
                  title: "Structured progress",
                  desc: "Regular practice, assessments, and feedback.",
                },
                {
                  title: "Student confidence",
                  desc: "Encouraging curiosity without academic pressure.",
                },
              ].map((item, i) => (
                <li key={i}>
                  <div className="font-medium text-slate-800">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-600">
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ================= LEADERS ================= */}
        <section className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
              Leadership
            </p>

            <h3 className="text-4xl font-semibold mb-4">
              Founder & Academic Leadership
            </h3>

            <p className="text-slate-600">
              Experienced educators guiding the academic vision.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-20 max-w-5xl mx-auto items-center">
            {[1].map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="w-full h-[460px] flex items-center justify-center bg-slate-200 mb-6 rounded-[25px] text-slate-600">
                  Founder Image
                </div>

                <h4 className="text-2xl font-medium mb-1">
                  Amit Singh Tomar
                </h4>

                <p className="text-slate-700 mb-2">
                  Founder & Academic Head
                </p>

                <p className="text-xs text-slate-500">
                  Education · 10+ Years Experience
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= TEACHING TEAM ================= */}
        <section className="mb-28">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
              Our Faculty
            </p>

            <h3 className="text-3xl font-semibold mb-4">
              Teaching Team
            </h3>

            <p className="text-slate-600">
              Dedicated teachers focused on student growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-20 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <div className="h-64 flex items-center justify-center bg-slate-200 mb-4 rounded-[25px] text-slate-600">
                  Teacher Image
                </div>

                <h5 className="text-lg font-medium">
                  Teacher Name
                </h5>

                <p className="text-sm text-slate-600">
                  Subject Specialist
                </p>

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Experience · 5+ Years
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">
              Our Values
            </h3>

            <p className="text-slate-600">
              Principles that guide our teaching approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discipline",
                desc: "Creating structured and consistent learning habits.",
              },
              {
                title: "Clarity",
                desc: "Ensuring students truly understand what they learn.",
              },
              {
                title: "Care",
                desc: "Supporting students academically and emotionally.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-[20px]"
              >
                <h4 className="font-medium mb-3">
                  {val.title}
                </h4>

                <p className="text-sm text-slate-600">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
