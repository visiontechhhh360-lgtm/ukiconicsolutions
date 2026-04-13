import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowLeft, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="text-[150px] lg:text-[200px] font-bold leading-none bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            404
          </div>
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-3xl flex items-center justify-center">
            <Search className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-blue-100/70 mb-12">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-medium flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </motion.button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white/5 border border-blue-400/30 rounded-2xl hover:bg-white/10 transition-all font-medium flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
