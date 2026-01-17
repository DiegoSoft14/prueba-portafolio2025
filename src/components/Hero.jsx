// components/Hero.jsx
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950 py-4"
    >
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">

            {/* ================= LEFT - ROBOT ================= */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-[700px] h-[540px] ml-0 lg:ml-8">

                {/* ===== FONDO SUAVE SOLO PARA EL ROBOT ===== */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-blue-900/5 to-transparent"></div>
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
                </div>

                {/* ===== HALO BLANCO SUAVE ===== */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-[480px] h-[480px] rounded-full bg-white/5 blur-[160px]"></div>
                </div>

                {/* ===== ROBOT ===== */}
                <div className="relative w-full h-full z-10">
                  <iframe
                    src="https://my.spline.design/robotfollowcursorforlandingpagemc-rDodM7Fm2vaI1CD4Bt8YufZn/"
                    title="3D Robot"
                    frameBorder="0"
                    loading="lazy"
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      -top-28
                      w-[150%]
                      h-[155%]
                      transition-opacity duration-1000
                      ${loaded ? "opacity-100" : "opacity-0"}
                      drop-shadow-[0_0_32px_rgba(225,235,245,0.32)]
                    `}
                  />
                </div>

                {/* SOMBRA INFERIOR */}
                <div className="absolute -bottom-12 left-8 right-8 h-20 bg-gradient-to-t from-black/70 to-transparent blur-xl"></div>
              </div>
            </div>

            {/* ================= RIGHT - CONTENT ================= */}
            <div className="lg:w-1/2 order-1 lg:order-2 lg:pl-6 pt-12">
              
              {/* TITLE */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                <span className="text-gray-300 text-lg block mb-1">
                  Hi 👋, I'm
                </span>
                <span className="text-white">Diego</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Espinoza
                </span>
              </h1>

              {/* SUBTITLE */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-300 leading-snug">
                Pentester & Web Developer
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light tracking-wide mb-6 max-w-lg">
                Cybersecurity-focused Web Developer with expertise in React, Django, and Spring Boot. 
                I build secure applications while leveraging penetration testing tools to ensure robust 
                digital defenses and optimal performance.
              </p>

              <p className="text-blue-400 italic border-l-4 border-blue-500 pl-4 mb-6 leading-relaxed">
                Passionate about merging code with security.
              </p>

              {/* ===== SOCIAL + BUTTONS ===== */}
              <div className="flex flex-col sm:flex-row items-center gap-4">

                {/* SOCIAL LINKS - CIRCULOS TRANSPARENTES SIN BORDE */}
                <div className="flex items-center gap-3">
                  
                  {/* GitHub - CIRCULO TRANSPARENTE */}
                  <a 
                    href="https://github.com/DiegoSoft14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800/20 transition-all duration-300 focus:outline-none focus:ring-gray-500/50"
                    aria-label="GitHub Profile"
                  >
                    {/* Efecto sutil de brillo en hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <FaGithub className="relative z-10 w-7 h-7 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>

                  {/* LinkedIn - CIRCULO TRANSPARENTE */}
                  <a 
                    href="https://www.linkedin.com/in/diego123456/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800/20 transition-all duration-300 focus:outline-none focus:ring-gray-500/50"
                    aria-label="LinkedIn Profile"
                  >
                    {/* Efecto sutil de brillo en hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <FaLinkedinIn className="relative z-10 w-7 h-7 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>

                  {/* Facebook - CIRCULO TRANSPARENTE */}
                  <a 
                    href="https://www.facebook.com/andre.espinoza.1690/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800/20 transition-all duration-300 focus:outline-none  focus:ring-gray-500/50"
                    aria-label="Facebook Profile"
                  >
                    {/* Efecto sutil de brillo en hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <FaFacebookSquare className="relative z-10 w-7 h-7 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md transition hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    Contact Me
                  </a>

                  {/* CAMBIO AQUÍ: Reemplazar href="/cv.pdf" con el link de Google Drive */}
                  <a
                    href="https://drive.google.com/file/d/10OsYHd9Gx9WDazUskXkvU_0_pe3Ebl2t/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg font-medium text-sm border border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    📄 Download CV
                  </a>
                </div>
              </div>

              {/* ===== INDICATORS ===== */}
              <div className="pt-4 border-t border-gray-800/50 mt-6">
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Secure Development</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>Web Pentesting</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span>RESTful APIs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}