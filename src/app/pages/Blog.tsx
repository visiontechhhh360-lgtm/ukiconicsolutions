import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt: "Exploring how artificial intelligence is reshaping business operations",
      date: "April 10, 2026",
      readTime: "8 min read",
      category: "AI & Innovation"
    },
    {
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Best practices for designing resilient architectures",
      date: "April 8, 2026",
      readTime: "6 min read",
      category: "Cloud"
    },
    {
      title: "Cyber Security Trends in 2026",
      excerpt: "What businesses need to know about emerging threats",
      date: "April 5, 2026",
      readTime: "5 min read",
      category: "Security"
    },
    {
      title: "Mobile-First Design Principles",
      excerpt: "Creating exceptional user experiences on mobile",
      date: "April 2, 2026",
      readTime: "7 min read",
      category: "Design"
    },
    {
      title: "Data Analytics for Growth",
      excerpt: "Leveraging data insights to drive decisions",
      date: "March 30, 2026",
      readTime: "6 min read",
      category: "Analytics"
    },
    {
      title: "API-First Development",
      excerpt: "Why APIs are the backbone of modern applications",
      date: "March 27, 2026",
      readTime: "5 min read",
      category: "Development"
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Insights &</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Innovation</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all group hover:-translate-y-2 cursor-pointer"
              >
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-lg text-xs mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                <p className="text-blue-100/70 mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-blue-100/60 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-blue-400 text-sm group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
