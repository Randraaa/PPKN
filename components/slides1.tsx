"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export const Slide1Cover = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideVariants} className="flex flex-col items-center justify-center h-full text-center px-4">
    <div className="mb-8 relative w-40 h-40 md:w-56 md:h-56">
      <img src="/assets/Garuda.png" alt="Garuda Pancasila" className="w-full h-full object-contain drop-shadow-xl" />
    </div>
    <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-primary mb-4 max-w-5xl leading-none">
      Youth Pledge 1928 <br/> <span className="text-foreground">and Indonesia Raya</span>
    </h1>
    <h2 className="text-xl md:text-2xl font-light tracking-wide text-gray-600 mb-12 max-w-3xl">
      Its Contribution to the Indonesian Nation
    </h2>
    <div className="mt-8 border-t-2 border-primary/20 pt-8 w-full max-w-2xl">
      <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Presented by</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-medium">
        <span>Dywa</span>
        <span>Adit</span>
        <span>Andra</span>
        <span>Daffa</span>
        <span>Foysal</span>
      </div>
    </div>
  </motion.div>
);

export const Slide2History = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
    <h2 className="font-serif font-black text-4xl md:text-6xl text-primary mb-8 uppercase tracking-tight border-b-4 border-primary pb-4 inline-block self-start">Historical Background</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6 text-lg">
        <p className="font-medium text-xl border-l-4 border-primary pl-4">
          The youth were the key actors of Indonesian independence, not merely a demographic bonus.
        </p>
        <p>
          <strong>Budi Utomo (1908)</strong> became the pioneer of youth organizations, primarily focusing on Java. This sparked the birth of various regional youth organizations:
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          {["Jong Java", "Jong Sumatranen Bond", "Jong Islamieten Bond", "Jong Batak", "Jong Minahasa", "Jong Celebes", "Jong Ambon", "PPPI", "Pemuda Kaum Betawi", "Sekar Rukun"].map(org => (
            <span key={org} className="bg-gray-200 px-3 py-1 rounded-full">{org}</span>
          ))}
        </div>
        <p>
          Meanwhile, the <strong>Perhimpunan Indonesia</strong> in the Netherlands played a crucial role as an overseas youth movement that became the embryo of national leadership.
        </p>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <h3 className="font-bold text-xl mb-4 text-primary">Academic Perspectives</h3>
        <ul className="space-y-4 text-sm md:text-base">
          <li><strong>Utomo (2021):</strong> Youth as historical actors in the wave of revolution.</li>
          <li><strong>Anderson (2020):</strong> The pledge was born from the youth's confusion about the direction of their struggle, leading them to swear to become a united nation.</li>
          <li><strong>Gunawan et al. (2012):</strong> Three goals of the Congress: voicing youth ideals, discussing youth movement issues, and strengthening national consciousness.</li>
          <li><strong>Sudiyo (1997):</strong> Documents the regional organizations and congress leadership (Sugondo Djoyopuspito as chairman, Djoko Marsaid as vice-chairman).</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export const Slide3Congress = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sessions = [
    { title: "Session 1", date: "Oct 27, 1928", venue: "Katholieke Jongelingen Bond", speaker: "Moh. Yamin", topic: "Unity and Indonesian Nationality", details: "Outlined 5 unifying factors of the nation: history, language, customary law, education, and will/determination." },
    { title: "Session 2", date: "Oct 28, 1928", venue: "Oost-Java Bioscoop", speaker: "Purnomo Wulan & Ki Hajar Dewantara", topic: "Women's Education & National Education", details: "Purnomo Wulan spoke on 'Women's Education', while Ki Hajar Dewantara emphasized 'National Education'." },
    { title: "Session 3", date: "Oct 28, 1928", venue: "Indonesische Clubgebouw", speaker: "Ramelan & Sunario", topic: "Scouting & International Youth Movement", details: "Ramelan discussed 'Scouting', and Sunario presented on 'The Youth Movement and International Youth'." }
  ];

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
      <h2 className="font-serif font-black text-4xl md:text-6xl text-primary mb-8 uppercase tracking-tight">The Second Youth Congress</h2>
      <p className="text-xl mb-8">Held over three pivotal sessions, shaping the foundation of the nation.</p>
      
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
          {sessions.map((session, idx) => (
            <button key={idx} onClick={() => setActiveTab(idx)} className={cn("text-left p-4 rounded-lg transition-all border-l-4 whitespace-nowrap", activeTab === idx ? "bg-primary/10 border-primary font-bold text-primary" : "hover:bg-gray-100 border-transparent")}> 
              <div className="text-sm opacity-70">{session.date}</div>
              <div className="text-lg">{session.title}</div>
            </button>
          ))}
        </div>
        <div className="w-full md:w-2/3 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center">
              <div className="text-primary font-bold tracking-wider uppercase text-sm mb-2">{sessions[activeTab].venue}</div>
              <h3 className="text-3xl font-serif font-bold mb-6">{sessions[activeTab].topic}</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-gray-300">
                <span className="font-bold">Key Speaker(s):</span> {sessions[activeTab].speaker}
              </div>
              <p className="text-xl leading-relaxed text-gray-700">{sessions[activeTab].details}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
