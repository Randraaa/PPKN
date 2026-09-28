"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Quote, Play, Pause, SkipBack, SkipForward, Volume2, BookOpen, Music, Users, MessageCircle, Anchor, ChevronRight } from "lucide-react";
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
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight text-gray-900">
            Sumpah<span className="text-[#C8102E]">Pemuda</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#latar-belakang" className="hover:text-[#C8102E] transition-colors">Latar Belakang</a>
            <a href="#kongres" className="hover:text-[#C8102E] transition-colors">Kongres II</a>
            <a href="#ikrar" className="hover:text-[#C8102E] transition-colors">Ikrar</a>
            <a href="#indonesia-raya" className="hover:text-[#C8102E] transition-colors">Indonesia Raya</a>
            <a href="#tokoh" className="hover:text-[#C8102E] transition-colors">Tokoh</a>
          </div>
        </div>
      </nav>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C8102E] transform-origin-left z-[60]" style={{ scaleX }} />
    </>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-[#F9F6F0] to-[#F9F6F0]"></div>
    
    <FadeIn delay={0.1}>
      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[#C8102E] text-xs font-semibold tracking-widest uppercase mb-6">
        Sejarah Pergerakan Nasional
      </span>
    </FadeIn>
    
    <FadeIn delay={0.2} className="max-w-5xl">
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-6">
        Youth Pledge 1928 &<br/>
        <span className="text-[#C8102E]">Indonesia Raya:</span><br/>
        Tonggak Persatuan Bangsa<sup className="text-2xl text-gray-400 ml-2">[2, 3]</sup>
      </h1>
    </FadeIn>
    
    <FadeIn delay={0.3} className="max-w-2xl mx-auto">
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
        Peran Pemuda, Makna Sumpah Pemuda 1928, dan Sejarah Lahirnya Lagu Kebangsaan Indonesia Raya<sup className="text-sm text-gray-400 ml-1">[2, 3]</sup>
      </p>
    </FadeIn>

    <FadeIn delay={0.5} className="mt-8 max-w-3xl mx-auto relative">
      <div className="absolute -top-6 -left-6 text-gray-200">
        <Quote size={64} className="opacity-50" />
      </div>
      <blockquote className="relative z-10 p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-xl shadow-gray-200/20">
        <p className="font-serif text-2xl md:text-3xl italic text-gray-800 leading-snug mb-6">
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
  <section id="latar-belakang" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-[#C8102E]" size={24} />
            <h2 className="font-serif text-4xl font-bold text-gray-900">Latar Belakang Historis</h2>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Pemuda adalah aktor terpenting dalam sejarah pergerakan nasional yang berawal dari kegelisahan terhadap kolonialisme<sup className="text-sm text-gray-400 ml-1">[3]</sup>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Terjadi transisi besar dari gerakan yang bersifat kedaerahan menuju kesatuan nasional. Semangat persatuan ini juga diinspirasi oleh pergerakan Perhimpunan Indonesia di Belanda<sup className="text-sm text-gray-400 ml-1">[2, 3]</sup>.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-6">
        <FadeIn delay={0.2} className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Dari Kedaerahan Menuju Kesatuan:</h3>
          <div className="flex flex-wrap gap-2">
            {['Budi Utomo', 'PPPI', 'Jong Java', 'Jong Sumatranen Bond', 'Jong Bataks Bond', 'Jong Islamieten Bond', 'Jong Celebes', 'Pemuda Kaum Betawi', 'Sekar Roekoen', 'Jong Minahasa', 'Jong Ambon'].map(org => (
              <span key={org} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-700">
                {org}
              </span>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3} className="p-8 rounded-2xl bg-[#C8102E] text-white shadow-lg">
          <h3 className="font-serif font-bold text-xl mb-6">Tujuan Kongres Pemuda II<sup className="text-sm text-white/70 ml-1">[3]</sup></h3>
          <ul className="space-y-4">
            {[
              "Mewujudkan cita-cita seluruh pemuda Indonesia.",
              "Membahas permasalahan gerakan pemuda.",
              "Memperkuat kesadaran kebangsaan dan persatuan."
            ].map((goal, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{goal}</span>
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
      date: "Sesi 1 (27 Okt 1928)",
      location: "Gedung Katholieke Jongelingen Bond",
      desc: 'Membahas "Persatuan dan Kebangsaan Indonesia" oleh Moh. Yamin. Menyebutkan 5 faktor persatuan: sejarah, bahasa, hukum adat, pendidikan, kemauan.',
      icon: <Users className="text-white" size={20} />
    },
    {
      date: "Sesi 2 (28 Okt 1928)",
      location: "Gedung Oost-Java Bioscoop",
      desc: "Nona Purnomowulan & Ki Hadjar Dewantara membahas pentingnya pendidikan demokratis dan seimbang bagi pemuda.",
      icon: <BookOpen className="text-white" size={20} />
    },
    {
      date: "Sesi 3 (28 Okt 1928)",
      location: "Gedung Indonesische Clubgebouw",
      desc: "Ramelan & Sunario membahas pentingnya Kepanduan (Scouting) untuk menanamkan kedisiplinan dan nasionalisme sejak dini.",
      icon: <Anchor className="text-white" size={20} />
    }
  ];

  return (
    <section id="kongres" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Rangkaian Kongres Pemuda II</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700 bg-gray-50 p-4 rounded-xl inline-flex border border-gray-100">
            <span><strong className="text-gray-900">Ketua:</strong> Sugondo Djoyopuspito</span>
            <span className="text-gray-300">|</span>
            <span><strong className="text-gray-900">Wakil:</strong> Djoko Marsaid</span>
            <span className="text-gray-300">|</span>
            <span><strong className="text-gray-900">Sekretaris:</strong> Mohammad Yamin</span>
            <span className="text-gray-300">|</span>
            <span><strong className="text-gray-900">Bendahara:</strong> Amir Sjarifoeddin</span>
            <sup className="text-gray-400">[2, 3]</sup>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:mx-auto md:w-full md:border-none">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-100 -translate-x-1/2" />
          
          <div className="space-y-12 relative">
            {sessions.map((session, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className={cn(
                "relative md:w-1/2",
                idx % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              )}>
                <div className={cn(
                  "absolute top-6 w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center shadow-lg shadow-red-500/20 z-10",
                  "left-[-29px] md:left-auto",
                  idx % 2 === 0 ? "md:-right-5" : "md:-left-5"
                )}>
                  {session.icon}
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ml-8 md:ml-0">
                  <span className="text-sm font-bold text-[#C8102E] tracking-wider uppercase mb-2 block">{session.date}</span>
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">{session.location}</h3>
                  <p className="text-gray-600 leading-relaxed">{session.desc}<sup className="text-xs text-gray-400 ml-1">[3]</sup></p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PledgeSection = () => (
  <section id="ikrar" className="relative py-32 bg-[#1A1A1A] text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
    <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
      <FadeIn>
        <h2 className="font-serif text-5xl md:text-7xl text-center font-bold mb-20 tracking-tight">
          Ikrar Sumpah Pemuda
        </h2>
      </FadeIn>
      
      <div className="space-y-12 max-w-3xl mx-auto font-serif text-2xl md:text-4xl leading-snug">
        <FadeIn delay={0.2} className="flex gap-6 md:gap-8">
          <span className="text-[#C8102E] font-bold">1.</span>
          <p>Kami putra dan putri Indonesia, mengaku bertumpah darah yang satu, <span className="font-bold underline decoration-[#C8102E] decoration-4 underline-offset-8">tanah Indonesia.</span><sup className="text-sm text-gray-500 ml-1">[3]</sup></p>
        </FadeIn>
        <FadeIn delay={0.4} className="flex gap-6 md:gap-8">
          <span className="text-[#C8102E] font-bold">2.</span>
          <p>Kami putra dan putri Indonesia, mengaku berbangsa yang satu, <span className="font-bold underline decoration-[#C8102E] decoration-4 underline-offset-8">bangsa Indonesia.</span><sup className="text-sm text-gray-500 ml-1">[3]</sup></p>
        </FadeIn>
        <FadeIn delay={0.6} className="flex gap-6 md:gap-8">
          <span className="text-[#C8102E] font-bold">3.</span>
          <p>Kami putra dan putri Indonesia, menjunjung bahasa persatuan, <span className="font-bold underline decoration-[#C8102E] decoration-4 underline-offset-8">bahasa Indonesia.</span><sup className="text-sm text-gray-500 ml-1">[3]</sup></p>
        </FadeIn>
      </div>
    </div>
  </section>
);

const AnthemSection = () => (
  <section id="indonesia-raya" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <FadeIn className="text-center mb-16">
      <Music className="text-[#C8102E] mx-auto mb-6" size={40} />
      <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Sejarah "Indonesia Raya"</h2>
    </FadeIn>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
      <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
        <FadeIn delay={0.1}>
          <p>
            <strong className="text-gray-900">W.R. Supratman</strong> adalah jurnalis <em>Sin Po</em> yang memperdengarkan lagu ini pertama kali dengan biola pada penutupan kongres 28 Oktober 1928, dan dinyanyikan oleh Dolly Salim<sup className="text-sm text-gray-400 ml-1">[3]</sup>.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p>
            Rekaman piringan hitam pertama dilakukan oleh <strong>NV Kuchenmeister’s Internationale Ultraphoon Maatschappij Amsterdam</strong> pada 30 Oktober 1930 dengan judul <em>"Indonesia Rajah"</em><sup className="text-sm text-gray-400 ml-1">[3]</sup>.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="bg-red-50 text-[#C8102E] p-4 rounded-xl border border-red-100">
            Belanda menyadari dampak politis lagu ini dan merespons dengan <strong>melarang lagu ini dinyanyikan</strong> secara publik pada tahun 1930<sup className="text-sm text-red-300 ml-1">[3]</sup>.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.4} className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-900 mb-6 text-xl">Perbandingan Lirik (Reff)</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Versi 1928</span>
              <p className="font-serif text-gray-900 italic">"Moelia, moelia...<br/>Tanahkoe, neg'rikoe jang koetjinta"</p>
              <span className="text-sm text-gray-500 block mt-2">Birama 6/8</span>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C8102E] uppercase tracking-widest block">Versi 1944 (Panitia Ir. Soekarno)</span>
              <p className="font-serif text-gray-900 font-bold italic">"Merdeka, merdeka...<br/>Tanahku, neg'riku yang kucinta"</p>
              <span className="text-sm text-gray-500 block mt-2">Birama 4/4</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-right w-full block">[cite: 2, 3]</p>
        </div>

        {/* Audio Player Mockup */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold text-gray-900">Indonesia Raya</p>
              <p className="text-sm text-gray-500">W.R. Supratman (1928)</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
              <Music size={16} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <button className="hover:text-[#C8102E] transition-colors"><SkipBack size={20} /></button>
            <button className="w-12 h-12 rounded-full bg-[#C8102E] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md shadow-red-500/30">
              <Play size={24} className="ml-1" />
            </button>
            <button className="hover:text-[#C8102E] transition-colors"><SkipForward size={20} /></button>
            
            <div className="flex-1 ml-4 flex items-center gap-3 text-xs font-medium text-gray-400">
              <span>0:00</span>
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-[#C8102E]"></div>
              </div>
              <span>-3:15</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

const FiguresSection = () => {
  const figures = [
    { name: "W.R. Supratman", role: "Komponis & Jurnalis" },
    { name: "Mohammad Yamin", role: "Perumus Teks Sumpah Pemuda" },
    { name: "Sugondo Djoyopuspito", role: "Ketua Kongres Pemuda II" },
    { name: "Amir Sjarifoeddin", role: "Bendahara (Kelak menjadi PM RI)" },
    { name: "Johannes Leimena", role: "Tokoh Pemuda & Nasionalis" },
    { name: "Nona Purnomowulan / Dolly Salim", role: "Perwakilan Perempuan & Penyanyi Pertama" }
  ];

  return (
    <section id="tokoh" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Tokoh Utama<sup className="text-xl text-gray-400 ml-1">[1, 2, 3]</sup></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Para pemuda dan pemudi yang menjadi motor penggerak lahirnya Sumpah Pemuda dan lagu kebangsaan.</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {figures.map((fig, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="group cursor-default">
              <div className="p-8 rounded-2xl bg-[#F9F6F0] border border-gray-100 hover:border-[#C8102E]/30 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users size={64} />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 relative z-10">{fig.name}</h3>
                <p className="text-[#C8102E] font-medium text-sm relative z-10">{fig.role}</p>
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
        <h2 className="font-serif text-3xl font-bold mb-12">Diskusi & Refleksi</h2>
        
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 flex gap-4 items-start">
            <span className="text-[#C8102E] font-bold text-xl">Q1.</span>
            <p className="text-lg leading-relaxed">
              Bagaimana Sumpah Pemuda 1928 memengaruhi pergerakan kemerdekaan Indonesia?<sup className="text-xs text-gray-500 ml-1">[2]</sup>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 flex gap-4 items-start">
            <span className="text-[#C8102E] font-bold text-xl">Q2.</span>
            <p className="text-lg leading-relaxed">
              Bagaimana perbandingan antara Sumpah Pemuda dengan gerakan pemuda di belahan dunia lainnya?<sup className="text-xs text-gray-500 ml-1">[2]</sup>
            </p>
          </div>
        </div>
      </FadeIn>
      
      <div className="mt-24 pt-8 border-t border-gray-800 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} PPKN Presentation | Sumpah Pemuda & Indonesia Raya</p>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#F9F6F0] font-sans selection:bg-[#C8102E] selection:text-white">
      <Navbar />
      <Hero />
      <BackgroundSection />
      <Timeline />
      <PledgeSection />
      <AnthemSection />
      <FiguresSection />
      <Footer />
    </main>
  );
}
