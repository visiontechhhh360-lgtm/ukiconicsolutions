import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-20">
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Let's Build</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">With Innovation</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {[
                { icon: Mail, title: "Email", value: "support@ukiconicsolutions.com", link: "mailto:info@ukiconicsolutions.com" },
                { icon: Phone, title: "Phone", value: "+92 300 1234567", link: "tel:+923001234567" },
                { icon: MapPin, title: "Address", value: "Islamabad, Pakistan", link: null },
                { icon: Clock, title: "Hours", value: "Mon-Fri: 9:00 AM - 5:00 PM PKT", link: null }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="backdrop-blur-xl bg-white/5 border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-blue-100/70 hover:text-blue-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-blue-100/70">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
              <div className="backdrop-blur-xl bg-white/5 border border-blue-400/30 rounded-[3rem] p-12">
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-blue-400/20 rounded-xl focus:outline-none focus:border-blue-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-blue-400/20 rounded-xl focus:outline-none focus:border-blue-400/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-white/5 border border-blue-400/20 rounded-xl focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-medium flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
