"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Quote, Play, Pause, SkipBack, SkipForward, BookOpen, Music, Users, MessageCircle, Anchor, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-white z-[60]" />
      <nav className={cn(
        "fixed top-1.5 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight text-gray-900">
            Youth<span className="text-[#C8102E]">Pledge</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#background" className="hover:text-[#C8102E] transition-colors">Background</a>
            <a href="#congress" className="hover:text-[#C8102E] transition-colors">The Congress</a>
            <a href="#pledge" className="hover:text-[#C8102E] transition-colors">The Pledge</a>
            <a href="#anthem" className="hover:text-[#C8102E] transition-colors">Anthem</a>
            <a href="#figures" className="hover:text-[#C8102E] transition-colors">Key Figures</a>
          </div>
        </div>
      </nav>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C8102E] transform-origin-left z-[60]" style={{ scaleX }} />
    </>
  );
};

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center pt-32 pb-24 md:py-32 px-6 text-center overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-200/60 via-[#fcfbf9] to-[#fcfbf9]"></div>
    <div className="absolute inset-0 z-0 bg-[url('/images/batik.png')] bg-repeat bg-[length:400px_400px] opacity-10 pointer-events-none"></div>
    
    <div className="relative z-10 w-full flex flex-col items-center">
      <FadeIn delay={0.1}>
        <span className="table mx-auto py-1 px-3 rounded-full bg-red-100 text-[#C8102E] text-xs font-semibold tracking-widest uppercase mb-6">
          History of the National Movement
        </span>
      </FadeIn>
      
      <FadeIn delay={0.2} className="max-w-5xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-6">
          Youth Pledge 1928 &<br/>
          <span className="text-[#C8102E]">Indonesia Raya:</span><br/>
          A Milestone of National Unity<sup className="text-2xl text-gray-400 ml-2">[2, 3]</sup>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.3} className="max-w-2xl mx-auto">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          The Role of Youth, the Meaning of the 1928 Youth Pledge, and the History of the Indonesian National Anthem<sup className="text-sm text-gray-400 ml-1">[2, 3]</sup>
        </p>
      </FadeIn>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="py-16 md:py-20 px-6 relative z-10">
    <FadeIn delay={0.1} className="max-w-3xl mx-auto relative">
      <div className="absolute -top-6 -left-6 text-gray-200">
        <Quote size={64} className="opacity-50" />
      </div>
      <blockquote className="relative z-10 p-8 rounded-2xl bg-white shadow-xl border border-gray-100 shadow-gray-200/20 text-center">
        <p className="font-serif text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-2">
          "Politics is not an instrument of power, but an ethic to serve."
        </p>
        <p className="font-serif text-lg italic text-gray-500 mb-6">
          "Politik bukan alat kekuasaan, tetapi etika untuk melayani."
        </p>
        <footer className="flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-[#C8102E]"></div>
          <span className="font-semibold text-gray-900 uppercase tracking-widest text-sm">Johannes Leimena<sup className="text-xs text-gray-400 ml-1">[2]</sup></span>
        </footer>
      </blockquote>
    </FadeIn>
  </section>
);

const BackgroundSection = () => (
  <section id="background" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-[#C8102E]" size={24} />
            <h2 className="font-serif text-4xl font-bold text-gray-900 border-b-2 border-[#d4af37] pb-2 inline-block">Historical Background</h2>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Youth were the most crucial actors in realizing Indonesian independence, driven by their restlessness against colonial oppression<sup className="text-sm text-gray-400 ml-1">[3]</sup>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            There was a significant transition from regional organizations to a unified national movement. This spirit of unity was also inspired by the Perhimpunan Indonesia movement in the Netherlands<sup className="text-sm text-gray-400 ml-1">[2, 3]</sup>.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-6">
        <FadeIn delay={0.2} className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">From Regional to National:</h3>
          <div className="flex flex-wrap gap-2">
            {['Budi Utomo', 'PPPI', 'Jong Java', 'Jong Sumatranen Bond', 'Jong Bataks Bond', 'Jong Islamieten Bond', 'Jong Celebes', 'Pemuda Kaum Betawi', 'Sekar Roekoen', 'Jong Minahasa', 'Jong Ambon'].map(org => (
              <span key={org} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-700">
                {org}
              </span>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3} className="p-8 rounded-2xl bg-[#C8102E] text-white shadow-lg">
          <h3 className="font-serif font-bold text-xl mb-6">3 Goals of the Youth Congress<sup className="text-sm text-white/70 ml-1">[3]</sup></h3>
          <ul className="space-y-4">
            {[
              "To express the dreams of all Indonesian youth.",
              "To discuss problems within the youth movement.",
              "To strengthen national awareness and Indonesian unity."
            ].map((goal, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed font-medium">{goal}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const sessions = [
    {
      date: "Session 1 (Oct 27, 1928)",
      location: "Katholieke Jongelingen Bond Building",
      desc: "Mohammad Yamin discussed 'Unity and Indonesian Nationality' and 5 strengthening factors (history, language, customary law, education, and will).",
      icon: <Users className="text-white" size={20} />
    },
    {
      date: "Session 2 (Oct 28, 1928)",
      location: "Oost-Java Bioscoop Building",
      desc: "Miss Purnomo Wulan and Ki Hajar Dewantara highlighted the importance of democratic and balanced education for all children.",
      icon: <BookOpen className="text-white" size={20} />
    },
    {
      date: "Session 3 (Oct 28, 1928)",
      location: "Indonesische Clubgebouw, Kramat 106",
      desc: "Ramelan and Sunario emphasized that Scouting (Kepanduan) fosters discipline, independence, and nationalism from an early age. Note that this is the historical building where the pledge was read and the anthem was first played.",
      icon: <Anchor className="text-white" size={20} />
    }
  ];

  return (
    <section id="congress" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6 border-b-2 border-[#d4af37] pb-2 table mx-auto">The Second Youth Congress</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700 bg-gray-50 p-4 rounded-xl inline-flex border border-gray-100 leading-relaxed">
            <span><strong className="text-gray-900">Chairman:</strong> Sugondo Djoyopuspito</span>
            <span className="text-gray-300 hidden md:inline">|</span>
            <span><strong className="text-gray-900">Vice Chairman:</strong> Djoko Marsaid</span>
            <span className="text-gray-300 hidden md:inline">|</span>
            <span><strong className="text-gray-900">Secretary:</strong> Mohammad Yamin</span>
            <span className="text-gray-300 hidden md:inline">|</span>
            <span><strong className="text-gray-900">Treasurer:</strong> Amir Sjarifoeddin</span>
            <sup className="text-gray-400">[2, 3]</sup>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:mx-auto md:w-full md:border-none">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-100 -translate-x-1/2" />
          
          <div className="space-y-12 relative">
            {sessions.map((session, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="relative w-full flex flex-col md:flex-row items-center">
                {/* Central Dot - Desktop */}
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C8102E] items-center justify-center shadow-lg shadow-red-500/20 z-10">
                  {session.icon}
                </div>

                {/* Central Dot - Mobile */}
                <div className="md:hidden absolute top-6 left-[-29px] w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center shadow-lg shadow-red-500/20 z-10">
                  {session.icon}
                </div>
                
                {/* Text Content */}
                <div className={cn(
                  "w-full md:w-1/2",
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-2"
                )}>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ml-8 md:ml-0">
                    <img 
                      src={`/images/session${idx + 1}.jpg`}
                      alt={`Session ${idx + 1}`}
                      className="w-full aspect-video object-cover rounded-lg shadow-md mb-6 md:hidden grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-sm font-bold text-[#C8102E] tracking-wider uppercase mb-2 block">{session.date}</span>
                    <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">{session.location}</h3>
                    <p className="text-gray-600 leading-relaxed">{session.desc}<sup className="text-xs text-gray-400 ml-1">[3]</sup></p>
                  </div>
                </div>

                {/* Desktop Image */}
                <div className={cn(
                  "hidden md:block md:w-1/2",
                  idx % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1"
                )}>
                  <img 
                    src={`/images/session${idx + 1}.jpg`}
                    alt={`Session ${idx + 1}`}
                    className="w-full aspect-video object-cover rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PledgeSection = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section id="pledge" className="relative py-32 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className={cn("max-w-6xl mx-auto px-6 md:px-12 relative", isFocused ? "z-50" : "z-10")}>
        <FadeIn>
          <h2 className="font-serif text-5xl md:text-7xl text-center font-bold mb-20 tracking-tight border-b-2 border-[#d4af37] pb-2 table mx-auto">
            The Youth Pledge
          </h2>
        </FadeIn>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <FadeIn className={cn("w-full lg:w-5/12 flex justify-center relative", isFocused && "z-50")}>
            {/* Dimmed Backdrop for Spotlight Effect */}
            {isFocused && (
              <div 
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-all duration-500 cursor-zoom-out" 
                onClick={() => setIsFocused(false)} 
              />
            )}
            
            <img 
              src="/images/original-manuscript.webp" 
              alt="Original Youth Pledge Manuscript" 
              onClick={() => setIsFocused(!isFocused)}
              className={cn(
                "w-full max-w-md border border-white/10 rounded-md",
                isFocused 
                  ? "relative z-50 transform scale-[1.7] md:scale-150 shadow-2xl transition-transform duration-500 ease-out cursor-zoom-out" 
                  : "relative z-10 transform scale-100 cursor-zoom-in transition-transform duration-500 shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
              )}
            />
          </FadeIn>
          
          <div className="w-full lg:w-7/12 space-y-12 lg:space-y-16">
            <FadeIn delay={0.2} className="flex gap-6 md:gap-8">
              <span className="font-serif text-[#C8102E] font-bold text-3xl md:text-5xl">1.</span>
              <div>
                <p className="font-serif text-2xl md:text-4xl leading-snug mb-3">
                  We the sons and daughters of Indonesia, acknowledge one motherland, <span className="font-bold underline decoration-[#C8102E] decoration-4 underline-offset-8">Indonesia.</span><sup className="text-sm text-gray-500 ml-1">[3]</sup>
                </p>
                <p className="text-lg md:text-xl text-gray-400 italic">
                  (Kami putra dan putri Indonesia, mengaku bertumpah darah yang satu, tanah Indonesia.)
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex gap-6 md:gap-8">
              <span className="font-serif text-[#C8102E] font-bold text-3xl md:text-5xl">2.</span>
              <div>
                <p className="font-serif text-2xl md:text-4xl leading-snug mb-3">
                  We the sons and daughters of Indonesia, acknowledge one nation, <span className="font-bold underline decoration-[#C8102E] decoration-4 underline-offset-8">the nation of Indonesia.</span><sup className="text-sm text-gray-500 ml-1">[3]</sup>
                </p>
                <p className="text-lg md:text-xl text-gray-400 italic">
                  (Kami putra dan putri Indonesia, mengaku berbangsa yang satu, bangsa Indonesia.)
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6} className="flex gap-6 md:gap-8">
              <span className="font-serif text-[#C8102E] font-bold text-3xl md:text-5xl">3.</span>
              <div>
                <p className="font-serif text-2xl md:text-4xl leading-snug mb-3">
                  We the sons and daughters of Indonesia, respect the language of unity, <span className="font-bold underline decoration-[#C8102E] decoration-4 underline-offset-8">Indonesian.</span><sup className="text-sm text-gray-500 ml-1">[3]</sup>
                </p>
                <p className="text-lg md:text-xl text-gray-400 italic">
                  (Kami putra dan putri Indonesia, menjunjung bahasa persatuan, bahasa Indonesia.)
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnthemSection = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((error) => {
              console.error("Audio playback failed:", error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress(total && isFinite(total) ? (current / total) * 100 : 0);
    }
  };

  return (
    <section id="anthem" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <Music className="text-[#C8102E] mx-auto mb-6" size={40} />
        <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6 border-b-2 border-[#d4af37] pb-2 table mx-auto">History of "Indonesia Raya"</h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <FadeIn delay={0.1}>
            <p>
              <strong className="text-gray-900">W.R. Supratman</strong>, a <em>Sin Po</em> journalist, first played the anthem on his violin on October 28, 1928, and it was sung by Dolly Salim<sup className="text-sm text-gray-400 ml-1">[3]</sup>.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              The first vinyl record was printed on October 30, 1930, by <strong>NV Kuchenmeister’s Internationale Ultraphoon Maatschappij Amsterdam</strong> under the title <em>"Indonesia Rajah"</em><sup className="text-sm text-gray-400 ml-1">[3]</sup>.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="bg-red-50 text-[#C8102E] p-4 rounded-xl border border-red-100">
              The Dutch government <strong>banned the song in public in 1930</strong> because they feared its political impact and influence on the independence movement<sup className="text-sm text-red-300 ml-1">[3]</sup>.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between overflow-hidden relative">
          {/* Background Image Area (Image Overlay with Gradient) */}
          <div className="relative flex-1 flex flex-col justify-end min-h-[350px]">
            <img 
              src="/images/sinpo-score.jpg" 
              alt="Sin Po Original Score" 
              className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none"></div>
            
            <div className="relative z-10 p-8 h-full flex flex-col">
              <h3 className="font-bold text-white mb-6 text-xl drop-shadow-md">Lyrics Comparison (Chorus)</h3>
              <div className="grid grid-cols-2 gap-6 mb-8 flex-1">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block drop-shadow">1928 Original</span>
                  <p className="font-serif text-gray-100 italic drop-shadow-sm">"Moelia, moelia...<br/>Tanahkoe, neg'rikoe jang koetjinta"</p>
                  <span className="text-sm text-gray-400 block mt-2 drop-shadow">6/8 Beat</span>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest block drop-shadow">1944 Official (Sukarno's Comm.)</span>
                  <p className="font-serif text-white font-bold italic drop-shadow-sm">"Merdeka, merdeka...<br/>Tanahku, neg'riku yang kucinta"</p>
                  <span className="text-sm text-gray-400 block mt-2 drop-shadow">4/4 Beat</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-right w-full block drop-shadow">[cite: 2, 3]</p>
            </div>
          </div>

          {/* Working Audio Player Component */}
          <div className="bg-white p-6 md:p-8 relative z-20 border-t border-gray-100">
            <audio 
              ref={audioRef} 
              src="/indonesia-raya.mp3" 
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bold text-gray-900">Indonesia Raya</p>
                <p className="text-sm text-gray-500">W.R. Supratman (1928)</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-sm text-[#C8102E] border border-gray-100">
                <Music size={16} />
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <button 
                onClick={() => { if(audioRef.current && isFinite(audioRef.current.duration)) audioRef.current.currentTime = 0; }} 
                className="hover:text-[#d4af37] transition-colors"
                aria-label="Restart"
              >
                <SkipBack size={20} />
              </button>
              
              <button 
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-[#C8102E] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md shadow-red-500/30"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
              </button>
              
              <button 
                onClick={() => { if(audioRef.current && isFinite(audioRef.current.duration)) audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, audioRef.current.duration); }} 
                className="hover:text-[#d4af37] transition-colors"
                aria-label="Skip Forward 10s"
              >
                <SkipForward size={20} />
              </button>
              
              <div className="flex-1 ml-4 flex items-center gap-3 text-xs font-medium text-gray-400">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
                     onClick={(e) => {
                       if (audioRef.current && isFinite(audioRef.current.duration) && audioRef.current.duration > 0) {
                         const rect = e.currentTarget.getBoundingClientRect();
                         const pos = (e.clientX - rect.left) / rect.width;
                         audioRef.current.currentTime = pos * audioRef.current.duration;
                       }
                     }}>
                  <div 
                    className="h-full bg-[#C8102E] transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const FiguresSection = () => {
  const figures = [
    { name: "W.R. Supratman", role: "Composer of the national anthem & journalist.", image: "/images/supratman.jpg" },
    { name: "Mohammad Yamin", role: "Drafter of the Youth Pledge text.", image: "/images/yamin.jpg" },
    { name: "Sugondo Djoyopuspito", role: "Chairman of the Second Youth Congress.", image: "/images/sugondo.jpg" },
    { name: "Amir Sjarifoeddin", role: "Treasurer of the Congress & anti-fascist figure who became Prime Minister.", image: "/images/amir.jpg" },
    { name: "Johannes Leimena", role: "Jong Ambon figure advocating ethical politics.", image: "/images/johannes.jpg" }
  ];

  return (
    <section id="figures" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 border-b-2 border-[#d4af37] pb-2 table mx-auto">Key Figures<sup className="text-xl text-gray-400 ml-1">[1, 2, 3]</sup></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The youths and prominent figures who became the driving force behind the birth of the Youth Pledge and the national anthem.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {figures.map((fig, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1} 
              className={cn(
                "group cursor-default md:col-span-2 lg:col-span-2",
                idx === 3 && "lg:col-start-2",
                idx === 4 && "md:col-start-2 lg:col-start-auto"
              )}
            >
              <div className="p-8 rounded-2xl bg-[#F9F6F0] border border-gray-100 hover:border-[#C8102E]/30 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users size={64} />
                </div>
                <img src={fig.image} alt={fig.name} className="w-16 h-16 rounded-full object-cover mb-4 relative z-10 shadow-md border-2 border-white" />
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 relative z-10">{fig.name}</h3>
                <p className="text-[#C8102E] font-medium text-sm relative z-10 leading-relaxed">{fig.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-24">
    <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
      <FadeIn>
        <MessageCircle size={48} className="mx-auto text-gray-700 mb-8" />
        <h2 className="font-serif text-3xl font-bold mb-12 border-b-2 border-[#d4af37] pb-2 table mx-auto">Discussion & Reflection</h2>
        
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 flex gap-4 items-start">
            <span className="text-[#C8102E] font-bold text-xl">Q1.</span>
            <p className="text-lg leading-relaxed">
              How did the Youth Pledge influence subsequent independence movements in Indonesia?<sup className="text-xs text-gray-500 ml-1">[2]</sup>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 flex gap-4 items-start">
            <span className="text-[#C8102E] font-bold text-xl">Q2.</span>
            <p className="text-lg leading-relaxed">
              What parallels can be drawn between the Youth Pledge and other youth-led movements worldwide?<sup className="text-xs text-gray-500 ml-1">[2]</sup>
            </p>
          </div>
        </div>
      </FadeIn>
      
      <div className="mt-24 pt-8 border-t border-gray-800 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Youth Pledge 1928 Presentation | Western Sydney University</p>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <main className="relative min-h-screen bg-transparent font-sans selection:bg-[#C8102E] selection:text-white">
      <Navbar />
      <Hero />
      <QuoteSection />
      <BackgroundSection />
      <Timeline />
      <PledgeSection />
      <AnthemSection />
      <FiguresSection />
      <Footer />
    </main>
  );
}
