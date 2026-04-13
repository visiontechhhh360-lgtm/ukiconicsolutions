import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, Target, BarChart3, Users, ArrowRight } from "lucide-react";

export function DigitalMarketing() {
  const services = [
    { icon: Target, title: "SEO & SEM", desc: "Rank higher and drive qualified traffic" },
    { icon: Users, title: "Social Media", desc: "Build engaged communities" },
    { icon: BarChart3, title: "Analytics", desc: "Data-driven decision making" }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Growth-Driven</span>
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-xl text-blue-100/70 mb-12">AI-powered campaigns that deliver measurable results.</p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="backdrop-blur-xl bg-white/5 border border-indigo-400/20 rounded-3xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-600/30 to-purple-500/30 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-blue-100/70 text-sm">{service.desc}</p>
                  </div>
                );
              })}
            </div>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl font-medium inline-flex items-center gap-2">
                Grow Your Business <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
