import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { Code2, Smartphone, TrendingUp, Shield, Lock, Sparkles, CheckCircle2, Brain, Network, Database, Cpu, ArrowRight, Zap, Globe, Users, Award, Rocket, HardDrive, Briefcase } from "lucide-react";

export function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    { icon: Code2, title: "Website Development", path: "/services#website-development" },
    { icon: Smartphone, title: "App Development", path: "/services#mobile-app-development" },
    { icon: TrendingUp, title: "Digital Marketing", path: "/services#digital-marketing" },
    { icon: Lock, title: "VPN Services", path: "/services#vpn" },
    { icon: Shield, title: "Cyber Security", path: "/services#cybersecurity-solutions" },
    { icon: HardDrive, title: "Data Recovery", path: "/services#data-recovery" },
    { icon: Briefcase, title: "IT Consultancy", path: "/services#it-consultancy" }
  ];

  const features = [
    { icon: Brain, text: "AI-Powered Automation" },
    { icon: Network, text: "Cloud-Native Architecture" },
    { icon: Database, text: "Real-Time Analytics" },
    { icon: Cpu, text: "Edge Computing Ready" }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Accelerated Digital Transformation",
      description: "Fast-track your digital transformation journey with our cutting-edge technology solutions and expert consulting services. We help businesses modernize their infrastructure, streamline operations, and achieve measurable results."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security Solutions",
      description: "Protect your business with our comprehensive cybersecurity services including threat detection, penetration testing, compliance management, and 24/7 security monitoring to safeguard your digital assets."
    },
    {
      icon: Users,
      title: "Dedicated Expert Team",
      description: "Work with our highly skilled team of developers, designers, and IT consultants who bring years of industry experience and technical expertise to every project we deliver."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Join hundreds of satisfied clients who have transformed their businesses with our innovative IT solutions. Our portfolio includes successful projects across various industries."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[150px]"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-block mb-8">
          
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8"
              >
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
                  Transform Your Business with
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Innovative IT Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl lg:text-2xl text-blue-100/80 mb-10 leading-relaxed"
              >
                We specialize in custom web development, mobile app development, digital marketing, VPN services, cybersecurity solutions, data recovery services, and IT consultancy. Building secure and scalable IT infrastructure with AI-driven automation and cloud technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-semibold text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-blue-400/40 rounded-2xl hover:bg-white/10 transition-all font-semibold text-lg"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="grid grid-cols-2 gap-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border border-blue-400/40 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="text-base font-medium text-blue-100/90">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-3xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1749006590324-d6b2e90ab1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="AI Technology and Innovation"
                  className="relative rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-400/30 rounded-[3rem] p-16"
          >
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { value: "500+", label: "Projects Delivered", icon: Rocket },
                { value: "98%", label: "Client Satisfaction Rate", icon: CheckCircle2 },
                { value: "50+", label: "Enterprise Clients", icon: Globe },
                { value: "24/7", label: "Technical Support", icon: Zap }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-lg text-blue-100/70 font-medium">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Comprehensive IT Services for Modern Businesses
            </h2>
            <p className="text-xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed">
              From web development and mobile apps to digital marketing, cybersecurity, data recovery, and IT consultancy—we provide comprehensive end-to-end IT solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setActiveService(index)}
                  onHoverEnd={() => setActiveService(null)}
                  className="group relative"
                >
                  <Link to={service.path}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl" />
                    <div className="relative backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-3xl p-10 h-full hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-3">
                      <motion.div
                        animate={activeService === index ? { rotate: 360 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-20 h-20 bg-gradient-to-br from-blue-600/40 to-cyan-500/40 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/40 mb-6"
                      >
                        <Icon className="w-10 h-10 text-blue-300" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <motion.div
                        className="flex items-center gap-2 text-blue-400 font-medium"
                        animate={activeService === index ? { x: 5 } : { x: 0 }}
                      >
                        <span className="text-base">Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Choose UK Iconic Solutions
            </h2>
            <p className="text-xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed">
              We combine technical expertise, innovative thinking, and customer-focused service to deliver IT solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-3xl p-10 hover:border-blue-400/50 transition-all">
                    <Icon className="w-16 h-16 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-lg text-blue-100/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-blue-100/70 mb-8 leading-relaxed">
                We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions for your business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & Next.js",
                  "Node.js & Python",
                  "AWS & Azure",
                  "AI & Machine Learning",
                  "Blockchain",
                  "Cloud Computing",
                  "DevOps & CI/CD",
                  "Microservices"
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-base text-blue-100/90">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-500/30 rounded-3xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1760199789463-b523db55dd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Cybersecurity and Network Security Solutions"
                  className="relative rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-[3rem] blur-3xl" />
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-400/30 rounded-[3rem] p-16 text-center">
              <Sparkles className="w-20 h-20 mx-auto mb-8 text-blue-400" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get a free consultation with our IT experts. Let's discuss how we can help you achieve your digital transformation goals with our proven IT services and solutions.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-xl font-semibold"
                >
                  Schedule Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
