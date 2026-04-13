import { motion } from "motion/react";
import { Link } from "react-router";
import { Lock, CheckCircle2, ArrowRight, Globe, Shield, Zap } from "lucide-react";

export function VPNServices() {
  const features = ["Military-Grade AES-256 Encryption", "Global Server Network (50+ Countries)", "Zero-Log Privacy Policy", "Kill Switch Protection", "24/7 Premium Support"];

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-6xl font-bold mb-6">
                <span className="block bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">Secure Your</span>
                <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Connection</span>
              </h1>
              <p className="text-xl text-blue-100/70 mb-8">Enterprise-grade VPN with global infrastructure.</p>
              <div className="space-y-3 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <span className="text-blue-100/80">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-2xl font-medium flex items-center gap-2">
                  Get Protected Now <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Globe, title: "Global Coverage", value: "50+" },
                { icon: Shield, title: "Uptime SLA", value: "99.9%" },
                { icon: Zap, title: "Speed", value: "10Gbps" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="backdrop-blur-xl bg-white/5 border border-violet-400/20 rounded-3xl p-8 flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-600/30 to-indigo-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-violet-400">{stat.value}</div>
                      <div className="text-blue-100/70">{stat.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
