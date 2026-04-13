import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Code2, Smartphone, TrendingUp, Shield } from "lucide-react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "marketing", "security"];

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "web",
      description: "Real-time financial analytics platform with AI insights",
      tech: ["React", "Node.js", "AI/ML"]
    },
    {
      title: "Healthcare App",
      category: "mobile",
      description: "Cross-platform patient management system",
      tech: ["React Native", "Firebase"]
    },
    {
      title: "E-commerce Growth",
      category: "marketing",
      description: "300% revenue increase through AI-powered campaigns",
      tech: ["SEO", "Analytics", "Automation"]
    },
    {
      title: "Enterprise Security",
      category: "security",
      description: "Complete security infrastructure for global bank",
      tech: ["Penetration Testing", "Compliance"]
    },
    {
      title: "SaaS Platform",
      category: "web",
      description: "Multi-tenant B2B platform serving 10K+ users",
      tech: ["Next.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Delivery App",
      category: "mobile",
      description: "Real-time tracking with optimized routing",
      tech: ["Flutter", "Maps API"]
    }
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Our Work</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Speaks Volumes</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-medium capitalize transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                    : "bg-white/5 border border-blue-400/20 hover:border-blue-400/40"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.category === "web" ? Code2 : project.category === "mobile" ? Smartphone : project.category === "marketing" ? TrendingUp : Shield;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className="backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400/50 transition-all group hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="w-10 h-10 bg-white/5 border border-blue-400/30 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-blue-100/70 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-lg text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
