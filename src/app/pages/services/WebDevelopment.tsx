import { motion } from "motion/react";
import { Link } from "react-router";
import { Code2, CheckCircle2, ArrowRight } from "lucide-react";

export function WebDevelopment() {
  const features = ["Modern React & Next.js", "AI-Powered Optimization", "Responsive Design", "SEO Integration", "Cloud Deployment", "CI/CD"];

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Custom Web</span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-blue-100/70 mb-8 max-w-2xl">Build blazing-fast, scalable web applications with modern frameworks.</p>
            <div className="space-y-3 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100/80">{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-medium flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
