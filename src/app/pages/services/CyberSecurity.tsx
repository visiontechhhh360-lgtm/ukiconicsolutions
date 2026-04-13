import { motion } from "motion/react";
import { Link } from "react-router";
import { Shield, ArrowRight, AlertTriangle, Lock, Eye, Activity } from "lucide-react";

export function CyberSecurity() {
  const threats = [
    { icon: AlertTriangle, title: "Threat Detection", desc: "AI-powered real-time monitoring" },
    { icon: Lock, title: "Penetration Testing", desc: "Identify vulnerabilities proactively" },
    { icon: Eye, title: "Security Audits", desc: "Comprehensive assessment" },
    { icon: Activity, title: "Incident Response", desc: "24/7 rapid response team" }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Advanced Cyber</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Protection</span>
            </h1>
            <p className="text-xl text-blue-100/70 mb-12">AI-powered threat detection and automated defense systems.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {threats.map((threat, index) => {
                const Icon = threat.icon;
                return (
                  <div key={index} className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8">
                    <div className="w-14 h-14 mb-4 bg-gradient-to-br from-cyan-600/30 to-blue-500/30 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{threat.title}</h3>
                    <p className="text-blue-100/70">{threat.desc}</p>
                  </div>
                );
              })}
            </div>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl font-medium inline-flex items-center gap-2">
                Secure Your Infrastructure <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
