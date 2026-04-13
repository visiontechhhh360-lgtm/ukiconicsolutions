import { motion } from "motion/react";
import { Link } from "react-router";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

export function AppDevelopment() {
  const features = ["Cross-Platform (iOS & Android)", "Native Performance", "Push Notifications", "Offline-First Architecture", "App Store Optimization"];

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Mobile Apps That</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Users Love</span>
            </h1>
            <p className="text-xl text-blue-100/70 mb-12">Create stunning cross-platform mobile experiences.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-left p-4 backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100/80">{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl font-medium inline-flex items-center gap-2">
                Start Your App Project <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
