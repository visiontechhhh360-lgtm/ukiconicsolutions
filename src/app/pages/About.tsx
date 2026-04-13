import { motion } from "motion/react";
import { Target, Lightbulb, Shield, Heart, Award, Users, TrendingUp, Rocket, Globe, Zap, CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven Approach",
      description: "Our mission is to empower businesses through transformative technology solutions. We believe in delivering IT services that create lasting value and drive measurable business growth for our clients across the UK and beyond."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay at the forefront of technological innovation, continuously exploring new tools, frameworks, and methodologies. Our team embraces AI, automation, and cloud technologies to deliver cutting-edge solutions that keep your business competitive."
    },
    {
      icon: Shield,
      title: "Security at Our Core",
      description: "Security is not an afterthought—it's built into every solution we deliver. From enterprise cybersecurity to secure VPN services, we implement industry-leading security practices to protect your digital assets and ensure compliance with regulations."
    },
    {
      icon: Heart,
      title: "Client Success Focus",
      description: "Your success is our success. We take a partnership approach, working closely with you to understand your unique challenges and goals. Our dedicated support team ensures you receive ongoing assistance and guidance throughout your digital transformation journey."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "UK Iconic Solutions was established with a vision to revolutionize IT services in the United Kingdom, starting with custom web development and digital consulting."
    },
    {
      year: "2020",
      title: "AI Integration Pioneer",
      description: "We became early adopters of AI-powered automation and machine learning, helping businesses leverage artificial intelligence for improved efficiency and decision-making."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended our services across Europe with 50+ enterprise clients, establishing ourselves as a trusted partner for digital transformation and IT infrastructure solutions."
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Recognized as a top-tier technology transformation partner, winning multiple industry awards for our innovative approach to web development, mobile apps, and cybersecurity."
    },
    {
      year: "2026",
      title: "Future Ready",
      description: "Continuing to build tomorrow's solutions today with advanced cloud computing, edge technology, and next-generation security systems for businesses of all sizes."
    }
  ];

  const expertise = [
    "Custom Web Development & Design",
    "Mobile App Development (iOS & Android)",
    "Digital Marketing & SEO Services",
    "Enterprise VPN Solutions",
    "Cybersecurity & Threat Protection",
    "Data Recovery Services",
    "IT Consultancy & Strategy",
    "Cloud Infrastructure & Migration",
    "AI & Machine Learning Integration",
    "DevOps & Automation Services",
    "24/7 Technical Support"
  ];

  const achievements = [
    { icon: Award, value: "15+", label: "Industry Awards & Recognition" },
    { icon: Users, value: "200+", label: "Expert Team Members" },
    { icon: TrendingUp, value: "300%", label: "Average Client Growth" },
    { icon: Rocket, value: "500+", label: "Successful Projects Delivered" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm mb-8">
                <span className="text-base font-medium text-blue-300">About UK Iconic Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                  Leading the Way in
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital Innovation
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100/80 leading-relaxed mb-8">
                We are a team of visionaries, engineers, designers, and strategists dedicated to transforming businesses through cutting-edge technology and innovative IT solutions.
              </p>

              <p className="text-lg text-blue-100/70 leading-relaxed">
                Since 2018, UK Iconic Solutions has been helping businesses across the United Kingdom and Europe achieve their digital transformation goals. Our expertise spans web development, mobile app development, digital marketing, VPN services, cybersecurity solutions, data recovery services, and IT consultancy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-3xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Professional team collaboration and business meeting"
                  className="relative rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-400/30 rounded-3xl p-12"
            >
              <Target className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-blue-100/80 leading-relaxed">
                To drive digital transformation through AI-powered innovation and secure, scalable IT solutions. We empower businesses to thrive in the digital age by delivering exceptional technology services that enhance efficiency, security, and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-400/30 rounded-3xl p-12"
            >
              <Lightbulb className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-blue-100/80 leading-relaxed">
                To be the global leader in technology innovation, recognized for empowering businesses worldwide with transformative IT solutions. We envision a future where every organization can harness the full potential of digital technology to achieve unprecedented success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Core Values & Principles
            </h2>
            <p className="text-xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed">
              These fundamental values guide everything we do, from how we build solutions to how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-3xl p-10 hover:border-blue-400/50 transition-colors h-full">
                    <Icon className="w-16 h-16 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-lg text-blue-100/70 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

     
      {/* Expertise & Services */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-500/30 rounded-3xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Business professionals handshake partnership"
                  className="relative rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Areas of Expertise
              </h2>
              <p className="text-xl text-blue-100/70 mb-8 leading-relaxed">
                We offer a comprehensive range of IT services designed to meet the evolving needs of modern businesses in the digital age.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-lg text-blue-100/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Achievements & Impact
            </h2>
            <p className="text-xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed">
              Our commitment to innovation and client success has driven remarkable growth and recognition across the IT industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                  <div className="relative backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-3xl p-10 text-center hover:border-blue-400/50 transition-all hover:-translate-y-2">
                    <Icon className="w-14 h-14 mx-auto mb-6 text-blue-400" />
                    <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {achievement.value}
                    </div>
                    <p className="text-base text-blue-100/70 font-medium">{achievement.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Culture CTA */}
      
    </div>
  );
}
