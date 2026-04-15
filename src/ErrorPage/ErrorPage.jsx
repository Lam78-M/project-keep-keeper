import React from 'react';
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-white/20"
            >
                <div className="flex justify-center mb-4">
                    <AlertTriangle className="w-12 h-12 text-red-400" />
                </div>

                <h1 className="text-5xl font-bold mb-2">404</h1>
                <h2 className="text-xl font-semibold mb-4">Oops! Page Not Found</h2>

                <p className="text-gray-300 mb-6">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
                    >
                        Go Home
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="border border-white/30 px-4 py-2 rounded-xl hover:bg-white/10"
                    >
                        Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ErrorPage;