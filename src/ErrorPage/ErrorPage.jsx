import React from 'react';
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white px-4">

  {/* Background glow */}
  <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
  <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-white/20"
  >

    {/* Icon with glow */}
    <div className="flex justify-center mb-5">
      <div className="p-4 bg-red-500/20 rounded-full shadow-lg">
        <AlertTriangle className="w-12 h-12 text-red-400" />
      </div>
    </div>

    {/* Gradient Text */}
    <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-700 to-red-400 text-transparent bg-clip-text">
      404
    </h1>

    <h2 className="text-2xl font-semibold mt-2 mb-4">
      Oops! Page Not Found
    </h2>

    <p className="text-gray-300 mb-8 text-sm leading-relaxed">
      The page you are looking for might have been removed, had its name changed,
      or is temporarily unavailable.
    </p>

    {/* Buttons */}
    <div className="flex gap-4 justify-center">

      <button
        onClick={() => (window.location.href = "/")}
        className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Go Home
      </button>

      <button
        onClick={() => window.history.back()}
        className="px-5 py-2 rounded-xl border border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
      >
        Go Back
      </button>

    </div>
  </motion.div>
</div>
    );
};

export default ErrorPage;