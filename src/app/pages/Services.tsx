import { motion } from "motion/react";
import { Link } from "react-router";
import { Code2, Smartphone, TrendingUp, Lock, Shield, ChevronRight, CheckCircle2, Zap, Globe, Users, Award, Rocket, Sparkles, HardDrive, Briefcase } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Website Development",
      subtitle: "Build Your Digital Presence",
      description: "Transform your business with professional custom website development services. Our expert web developers create responsive, fast-loading, and SEO-optimized websites using the latest technologies including React, Next.js, and modern web frameworks.",
      features: [
        "Custom Web Design & Development",
        "E-commerce Website Solutions",
        "Content Management Systems (CMS)",
        "Progressive Web Apps (PWA)",
        "API Integration & Development",
        "SEO-Friendly Architecture",
        "Responsive Mobile Design",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "WordPress"],
      image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-blue-600 via-blue-500 to-cyan-400"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform Apps",
      description: "Create powerful mobile applications for iOS and Android platforms. Our mobile app development team delivers high-performance, user-friendly apps using React Native, Flutter, and native technologies that engage users and drive business growth.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "React Native & Flutter Apps",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "Third-Party Integrations",
        "Ongoing Maintenance & Updates"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
      image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-cyan-500 via-blue-400 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Services",
      subtitle: "Grow Your Online Presence",
      description: "Boost your online visibility and drive qualified traffic with our comprehensive digital marketing services. We specialize in SEO, PPC advertising, social media marketing, content marketing, and data-driven strategies that deliver measurable ROI.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization",
        "Analytics & Reporting",
        "Brand Strategy & Positioning"
      ],
      technologies: ["Google Ads", "Google Analytics", "SEMrush", "Social Media Platforms", "Marketing Automation"],
      image: "https://images.unsplash.com/photo-1760199789463-b523db55dd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-indigo-500 via-purple-500 to-blue-600"
    },
    {
      icon: Lock,
      title: "Enterprise VPN Services",
      subtitle: "Secure Remote Access",
      description: "Protect your business communications with enterprise-grade VPN solutions. Our VPN services provide military-grade encryption, global server network, and zero-log privacy policies to ensure secure remote access for your distributed workforce.",
      features: [
        "Military-Grade AES-256 Encryption",
        "Global Server Network (50+ Countries)",
        "Zero-Log Privacy Policy",
        "Kill Switch Protection",
        "Split Tunneling",
        "Multi-Device Support",
        "Dedicated IP Options",
        "24/7 Technical Support"
      ],
      technologies: ["OpenVPN", "WireGuard", "IPSec", "Cloud Infrastructure", "Network Security"],
      image: "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-blue-700 via-indigo-600 to-violet-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      subtitle: "Comprehensive Security Protection",
      description: "Safeguard your digital infrastructure with our advanced cybersecurity solutions. We provide AI-powered threat detection, penetration testing, security audits, compliance management, and incident response services to protect your business from cyber threats.",
      features: [
        "AI-Powered Threat Detection",
        "Penetration Testing & Security Audits",
        "Network Security Solutions",
        "Data Encryption & Protection",
        "Compliance Management (GDPR, ISO)",
        "Security Awareness Training",
        "Incident Response & Recovery",
        "24/7 Security Monitoring"
      ],
      technologies: ["Security Information & Event Management (SIEM)", "Intrusion Detection Systems", "Firewall Management", "Antivirus Solutions"],
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-violet-600 via-blue-600 to-cyan-500"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Services",
      subtitle: "Recover Your Critical Data",
      description: "Professional data recovery services for businesses and individuals. Our expert technicians can recover lost, deleted, or corrupted data from hard drives, SSDs, RAID arrays, and other storage devices. We offer emergency data recovery with high success rates and complete confidentiality.",
      features: [
        "Hard Drive Data Recovery",
        "SSD & Flash Drive Recovery",
        "RAID Array Reconstruction",
        "Deleted File Recovery",
        "Corrupted Database Repair",
        "Emergency 24/7 Service",
        "Clean Room Facilities",
        "No Data - No Fee Guarantee"
      ],
      technologies: ["Data Recovery Software", "Clean Room Technology", "RAID Recovery Tools", "Forensic Analysis"],
      image: "https://images.unsplash.com/photo-1601737487795-dab272f52420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-blue-600 via-indigo-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "IT Consultancy Services",
      subtitle: "Strategic Technology Guidance",
      description: "Expert IT consulting services to help businesses optimize their technology infrastructure, reduce costs, and improve efficiency. Our experienced consultants provide strategic guidance on digital transformation, cloud migration, IT infrastructure, and technology roadmap planning.",
      features: [
        "IT Strategy & Planning",
        "Digital Transformation Consulting",
        "Cloud Migration Strategy",
        "Infrastructure Assessment",
        "Technology Roadmap Development",
        "Cost Optimization Analysis",
        "Vendor Selection & Management",
        "IT Security Consulting"
      ],
      technologies: ["Enterprise Architecture", "Cloud Platforms (AWS, Azure, GCP)", "IT Service Management", "Business Analysis"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      gradient: "from-cyan-600 via-blue-500 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Years of experience delivering IT solutions across various industries"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 technical support and ongoing maintenance services"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development process with quick turnaround times"
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Technology that grows with your business needs"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm mb-8">
              <span className="text-base font-medium text-blue-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Comprehensive IT Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                Premium IT Solutions
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                For Modern Businesses
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed">
              From web development and mobile apps to digital marketing, VPN services, cybersecurity, data recovery, and IT consultancy—we deliver comprehensive end-to-end IT solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        // Create ID from service title (e.g., "Custom Website Development" -> "website-development")
        const serviceId = service.title.toLowerCase().replace(/custom |enterprise |services?/g, '').trim().replace(/\s+/g, '-');

        return (
          <section key={index} id={serviceId} className="py-32 relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600/40 to-cyan-500/40 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-blue-400/40">
                    <Icon className="w-10 h-10 text-blue-300" />
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {service.title}
                  </h2>

                  <p className="text-xl text-cyan-300/90 mb-6 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="text-lg lg:text-xl text-blue-100/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-blue-200">Key Features:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-base text-blue-100/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-xl font-bold mb-4 text-blue-200">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-xl text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-semibold text-lg flex items-center gap-2"
                    >
                      Get Started with {service.title.split(" ")[0]}
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </Link>
                </div>

                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 rounded-3xl blur-3xl`} />
                      <img
                        src={service.image}
                        alt={`${service.title} - UK Iconic Solutions`}
                        className="relative rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 w-full h-auto"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {index < services.length - 1 && (
              <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="border-t border-blue-400/20" />
              </div>
            )}
          </section>
        );
      })}

      {/* Why Choose Our Services */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Choose Our IT Services
            </h2>
            <p className="text-xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed">
              We combine technical expertise, proven methodologies, and customer-focused service delivery to ensure your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-3xl p-8 text-center hover:border-blue-400/50 transition-all hover:-translate-y-2"
                >
                  <Icon className="w-14 h-14 mx-auto mb-6 text-blue-400" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-base text-blue-100/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-[3rem] blur-3xl" />

            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-400/30 rounded-[3rem] p-16 text-center">
              <Sparkles className="w-20 h-20 mx-auto mb-8 text-blue-400" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our IT services can transform your business. Get a free consultation with our expert team today.
              </p>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-xl font-semibold"
                >
                  Request Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
