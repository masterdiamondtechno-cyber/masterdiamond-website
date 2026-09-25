import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="text-[6rem] lg:text-[8rem] font-bold text-[#0B2340] leading-none mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          404
        </div>
        <div className="text-[1.5rem] font-bold text-[#2F8FA2] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Page Not Found
        </div>
        <p className="text-[#4A5568] leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-[#0B2340] hover:bg-[#2F8FA2] text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <Home size={18} /> Back to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
