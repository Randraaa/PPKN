"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Target, Star, Landmark } from "lucide-react";

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export const Slide4Pledge = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
    <h2 className="font-serif font-black text-4xl md:text-5xl text-primary mb-8 uppercase tracking-tight text-center">The Youth Pledge</h2>
    
    <div className="flex flex-col gap-6 md:gap-8 my-8 max-w-4xl mx-auto w-full">
      {[
        { orig: "Kami putra dan putri Indonesia, mengaku bertumpah darah yang satu, tanah Indonesia.", trans: "We the sons and daughters of Indonesia, acknowledge one motherland, Indonesia." },
        { orig: "Kami putra dan putri Indonesia, mengaku berbangsa yang satu, bangsa Indonesia.", trans: "We the sons and daughters of Indonesia, acknowledge one nation, the nation of Indonesia." },
        { orig: "Kami putra dan putri Indonesia, menjunjung bahasa persatuan, bahasa Indonesia.", trans: "We the sons and daughters of Indonesia, uphold the language of unity, Indonesian." }
      ].map((pledge, i) => (
        <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-8 border-primary relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute top-0 right-0 text-9xl text-gray-100 font-serif font-black -mt-8 -mr-4 opacity-50 group-hover:scale-110 transition-transform">{i+1}</div>
          <p className="text-xl md:text-3xl font-serif font-bold text-gray-900 mb-2 relative z-10 italic">"{pledge.orig}"</p>
          <p className="text-sm md:text-base text-gray-500 relative z-10">{pledge.trans}</p>
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-4 text-center text-sm md:text-base">
      <div className="bg-gray-100 p-4 rounded-lg">
        <span className="font-bold text-primary block mb-1">Foundations of Unity</span>
        Based on progress, history, law, customary law, education, and scouting.
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <span className="font-bold text-primary block mb-1">A Historic Moment</span>
        "Indonesia Raya" was first played on violin by W.R. Supratman and sung by Dolly Salim.
      </div>
    </div>
  </motion.div>
);

export const Slide5Legacy = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl mx-auto w-full">
    <h2 className="font-serif font-black text-4xl md:text-6xl text-primary mb-16 uppercase tracking-tight text-center">Aim, Significance & Legacy</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "AIM", text: "To unite Indonesian youth across various ethnic groups, overcoming regional divisions.", icon: <Target className="w-12 h-12 text-primary" /> },
        { title: "SIGNIFICANCE", text: "Established a national identity that transcended regionalism, laying the ideological groundwork for independence.", icon: <Star className="w-12 h-12 text-primary" /> },
        { title: "LEGACY", text: "Commemorated annually on October 28th as National Youth Pledge Day (Hari Sumpah Pemuda).", icon: <Landmark className="w-12 h-12 text-primary" /> }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="mb-6 bg-gray-50 w-24 h-24 flex items-center justify-center rounded-full group-hover:bg-primary/10 transition-colors">{item.icon}</div>
          <h3 className="text-2xl font-black font-serif uppercase tracking-widest text-primary mb-4">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export const Slide6WRSupratman = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <div className="w-64 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-xl mb-6 relative">
          <img src="/assets/wr_supratman.webp" alt="W.R. Supratman" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h3 className="font-serif font-bold text-2xl">W.R. Supratman</h3>
          <p className="text-primary font-medium">Journalist & Composer</p>
        </div>
      </div>
      
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-primary uppercase tracking-tight mb-8">The Birth of Indonesia Raya</h2>
        
        <ul className="space-y-4 text-lg list-disc pl-6 marker:text-primary">
          <li><strong>1925:</strong> Created the song initially titled "Indonesia" while working as a journalist for Sin Po.</li>
          <li><strong>1928:</strong> Title changed to "Indonesia Raya" upon republication in November.</li>
          <li><strong>1930:</strong> First vinyl record produced by Tio Tek Hong Agency & NV Kuchenmeister's Internationale Ultraphoon Maatschappij Amsterdam under the title "Indonesia Rajah".</li>
          <li><strong>Censorship:</strong> Banned from public performance by the Dutch in 1930 for "disturbing public order". W.R. Supratman was interrogated by the PID (Political Intelligence Service).</li>
          <li><strong>Resistance:</strong> Protests from the Volksraad softened the ban (allowed in closed spaces). Later entirely banned during the Japanese occupation.</li>
          <li><strong>1944 Adaptation:</strong> The National Anthem Committee (chaired by Ir. Sukarno) changed the time signature from 6/8 to 4/4 while preserving its originality.</li>
        </ul>
      </div>
    </div>
  </motion.div>
);
