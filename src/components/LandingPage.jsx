// components/LandingPage.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import perfil from "../assets/perfil.png";

export default function LandingPage({ onEnter }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    // Wait for animation to finish before calling onEnter
    setTimeout(() => {
      onEnter();
    }, 1200); // A bit more for the elegant animation
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-white/80 text-sm">LOADING...</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="landing-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 overflow-hidden bg-black"
        >
          {/* Elegant expansion effect */}
          <AnimatePresence>
            {isExiting && (
              <>
                {/* Circular expansion layer */}
                <motion.div
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  animate={{ scale: 4 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-600/20 to-red-600/20 z-50"
                  style={{ opacity: 0.7 }}
                />
                
                {/* Expanding particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      scale: 0,
                      x: "50%",
                      y: "50%",
                      opacity: 0.8
                    }}
                    animate={{ 
                      scale: 1,
                      x: `calc(50% + ${Math.cos(i * 0.314) * 200}px)`,
                      y: `calc(50% + ${Math.sin(i * 0.314) * 200}px)`,
                      opacity: 0
                    }}
                    transition={{ 
                      duration: 1.2,
                      ease: "easeOut",
                      delay: i * 0.02
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-red-400 z-40"
                  />
                ))}
                
                {/* Floating transition text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 rounded-full border-2 border-cyan-500/50 border-t-cyan-400 border-r-red-400"
                    />
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-white text-xl font-light tracking-wider leading-relaxed"
                    >
                      LOADING EXPERIENCE
                    </motion.p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "200px" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="h-0.5 bg-gradient-to-r from-cyan-500 via-transparent to-red-500 rounded-full"
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Iframe container with more precise cropping */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0" style={{
              clipPath: 'inset(0 0 40px 0)'
            }}>
              <iframe
                //src="https://my.spline.design/animatedpaperboat-9DJzg2xOIoK7no3N0td4KIwd/"
                src="https://my.spline.design/motiontrails-8LgmzxrZgpnp3hzJRe0SCRXv/"
                title="Animated Paper Boat"
                frameBorder="0"
                className="absolute inset-0 w-full h-full"
                loading="eager"
                style={{
                  transform: 'scale(1.08)',
                  transformOrigin: 'center'
                }}
              />
            </div>
            
            {/* Overlay to cover scaling edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            
            {/* Specific cover for bottom right corner */}
            <div className="absolute bottom-0 right-0 w-64 h-20 bg-gradient-to-t from-black via-black to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-40 h-12 bg-black"></div>
          </div>

          {/* Main content */}
          <div className="relative h-full flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center max-w-2xl"
            >
              {/* Profile picture */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <img
                    src={perfil}
                    alt="Diego Espinoza"
                    className="w-36 h-36 rounded-full border-4 border-white/30 shadow-2xl object-cover"
                  />
                  <div className="absolute -inset-3 border-2 border-white/20 rounded-full animate-spin-slow"></div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                DIEGO ESPINOZA
              </motion.h1>

              {/* Divider line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.7, duration: 1 }}
                className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"
              ></motion.div>

              {/* CYBERSECURITY ENGINEERING */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-red-400 mb-4 leading-snug"
                style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
              >
                CYBERSECURITY ENGINEERING
              </motion.h2>

              {/* WEB DEVELOPMENT */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 leading-snug"
                style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
              >
                WEB DEVELOPMENT
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg mx-auto"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
              >
                Specialist in creating secure and efficient digital solutions,<br />
                combining cybersecurity expertise with modern<br />
                web development.
              </motion.p>

              {/* ENTER PORTFOLIO Button */}
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                onClick={handleEnter}
                className="group relative px-12 py-4 bg-white/10 backdrop-blur-lg 
                         border-2 border-white/30 hover:border-white/50 
                         text-white text-xl font-bold rounded-lg 
                         transition-all duration-300 mb-6
                         hover:bg-white/15 overflow-hidden"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                disabled={isExiting}
              >
                {/* Wave effect on click */}
                {isExiting && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-red-500/30"
                  />
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-red-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative flex items-center justify-center gap-3 leading-snug">
                  {isExiting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 rounded-full border-2 border-white/50 border-t-white"
                      />
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ENTERING...
                      </motion.span>
                    </>
                  ) : (
                    <>
                      ENTER PORTFOLIO
                      <svg 
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>

              {/* Indicator text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="text-white/70 text-sm animate-pulse leading-relaxed"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
              >
                Click to explore my work
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}