import { motion } from "framer-motion";

const students = [
  { name: "Aman Sharma", img: "/amit/s1.jpeg" },
  { name: "Riya Verma", img: "/amit/s2.jpeg" },
  { name: "Rahul Singh", img: "/amit/s3.jpeg" },
  { name: "Neha Patel", img: "/amit/s4.jpeg" },
  { name: "Aditya Tomar", img: "/amit/s5.jpeg" },
  { name: "Pooja Jain", img: "/amit/s6.jpeg" },
  { name: "Kunal Meena", img: "/amit/s7.jpeg" },
  { name: "Anjali Gupta", img: "/amit/s8.jpeg" },
  { name: "Saurabh Yadav", img: "/amit/s9.jpeg" },
  { name: "Kritika Rathore", img: "/amit/s10.jpeg" },
  { name: "Nikhil Chauhan", img: "/amit/s11.jpeg" },
  { name: "Simran Kaur", img: "/amit/s12.jpeg" },
  { name: "Mohit Sharma", img: "/amit/s13.jpeg" },
  { name: "Sneha Mishra", img: "/amit/s14.jpeg" },
  { name: "Akash Verma", img: "/amit/s15.jpeg" },
];

export default function StudentCarousel() {
  return (
    <div className="overflow-hidden py-10 bg-slate-50">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...students, ...students].map((student, i) => (
          <div
            key={i}
            className="min-w-[220px] bg-white rounded-2xl shadow-md p-4 text-center"
          >
            <img
              src={student.img}
              alt={student.name}
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-yellow-400"
            />
            <h4 className="mt-3 font-semibold text-slate-800">
              {student.name}
            </h4>
            <p className="text-xs text-slate-500">
              Target Defence Academy
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
