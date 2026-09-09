"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export const Slide7Lyrics = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
      <h2 className="font-serif font-black text-3xl md:text-5xl text-primary mb-4 uppercase tracking-tight text-center">Lyrics Comparison: 1928 vs Official</h2>
      <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">From a tone of struggle and plea to a declaration of achieved independence.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gray-400">
          <h3 className="font-bold text-xl mb-4 uppercase tracking-wider text-gray-500">Original Refrain (1928)</h3>
          <p className="font-serif text-lg italic whitespace-pre-line text-gray-700">
            "Indones', Indones',<br/>Moelia, moelia,<br/>Tanahkoe, negrikoe yang koetjinta.<br/>Indones', Indones',<br/>Moelia, moelia,<br/>Hidoeplah Indonesia Raja."
          </p>
          <p className="mt-4 text-sm text-gray-500">Reflects hope and aspiration for a noble (mulia) nation.</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
          <h3 className="font-bold text-xl mb-4 uppercase tracking-wider text-primary">Official Refrain</h3>
          <p className="font-serif text-lg italic whitespace-pre-line font-bold">
            "Indonesia Raya,<br/>Merdeka, merdeka,<br/>Tanahku, negeriku yang kucinta.<br/>Indonesia Raya,<br/>Merdeka, merdeka,<br/>Hiduplah Indonesia Raya."
          </p>
          <p className="mt-4 text-sm text-gray-500">"Merdeka" (Independent) signifies the realization of the struggle.</p>
        </div>
      </div>
      
      <div className="text-center">
        <button onClick={() => setShowFull(!showFull)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full text-sm font-bold transition-colors uppercase tracking-wider">
          {showFull ? "Hide Full Original Lyrics" : "View Full 1928 Original Lyrics (Van Ophuijsen Spelling)"}
        </button>
        
        {showFull && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 bg-gray-50 p-6 rounded-lg text-left text-sm font-mono overflow-y-auto max-h-48 border border-gray-200">
            <p className="whitespace-pre-line">
              Indonesia tanah airkoe, Tanah toempah darahkoe,<br/>
              Di sanalah akoe berdiri, Mendjaga Pandoe Iboekoe.<br/>
              Indonesia kebangsaankoe, Kebangsaan tanah airkoe,<br/>
              Marilah kita berseroe: "Indonesia Bersatoe".<br/>
              Hidoeplah tanahkoe, Hidoeplah negrikoe,<br/>
              Bangsakoe, djiwakoe, semoea, Bangoenlah rajatkoe, bangoenlah badankoe,<br/>
              Oentoek Indonesia Raja.<br/><br/>
              (Historical Document - Old Spelling)
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export const Slide8Analysis = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
    <h2 className="font-serif font-black text-4xl md:text-5xl text-primary mb-12 uppercase tracking-tight">Critical Analysis</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
          <h3 className="font-bold text-xl mb-3 text-primary">Ideological Consolidation</h3>
          <p className="text-gray-700">
            The Youth Pledge marked a monumental shift from regional-based struggles (kedaerahan) to a unified national ideological consolidation. It was not merely a ceremony, but the conscious creation of an "imagined community" (Anderson, 1983) integrating diverse ethnicities through a unifying language.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-400">
          <h3 className="font-bold text-xl mb-3 text-gray-700">Representation Limits</h3>
          <p className="text-gray-700">
            Despite its grand narrative, the congress had limitations:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>Dominated by the educated urban elite, lacking grassroots representation.</li>
            <li>Minimal female representation on the main podium, despite notable figures like Purnomo Wulan.</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-primary text-white p-8 rounded-2xl flex flex-col justify-center">
        <h3 className="font-serif font-bold text-2xl mb-6">Discussion Questions</h3>
        <ul className="space-y-6 text-lg">
          <li className="flex gap-4">
            <span className="text-3xl opacity-50">Q1</span>
            <p>How did the Youth Pledge influence the subsequent trajectory of the Indonesian independence movement?</p>
          </li>
          <li className="flex gap-4">
            <span className="text-3xl opacity-50">Q2</span>
            <p>What parallels can be drawn between the Youth Pledge and other youth-led national movements globally?</p>
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export const Slide9Relevance = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-7xl mx-auto w-full">
    <h2 className="font-serif font-black text-4xl md:text-5xl text-primary mb-10 uppercase tracking-tight text-center">Contemporary Relevance & Solutions</h2>
    
    <div className="text-xl text-center mb-12 max-w-4xl mx-auto font-medium text-gray-700">
      How does the spirit of unity translate to today's youth challenges: digital polarization, regional identity politics on social media, and disinformation threatening national cohesion?
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Digital Civic Education", desc: "Implementing curricula that foster critical thinking and unity in digital spaces, combating online polarization." },
        { title: "Cross-Regional Exchange", desc: "Reviving physical and virtual youth exchange programs to build empathy and dissolve regional prejudices." },
        { title: "Revitalizing the Language", desc: "Promoting inclusive, respectful, and unifying use of Bahasa Indonesia across social media platforms." }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-xl shadow-md border-t-8 border-primary hover:-translate-y-2 transition-transform">
          <div className="text-4xl text-gray-300 font-black mb-4">0{i+1}</div>
          <h3 className="font-bold text-xl mb-4">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export const Slide10Credits = () => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto w-full text-center">
    <h2 className="font-serif font-black text-5xl md:text-7xl text-primary mb-6 uppercase tracking-tight">Thank You</h2>
    
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xl font-medium mb-16">
      <span>Dywa</span> • <span>Adit</span> • <span>Andra</span> • <span>Daffa</span> • <span>Foysal</span>
    </div>
    
    <div className="text-left bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto w-full mb-12">
      <h3 className="font-bold text-2xl mb-6 text-primary border-b border-gray-200 pb-2">References</h3>
      <ul className="space-y-4 text-sm text-gray-600">
        <li>Anderson, B. (2020). <em>Imagined Communities: Reflections on the Origin and Spread of Nationalism</em>. [TODO: Add Publisher/DOI]</li>
        <li>Gunawan, et al. (2012). <em>[TODO: Add Book/Article Title]</em>. [TODO: Add Publisher/DOI]</li>
        <li>Sudiyo. (1997). <em>[TODO: Add Book/Article Title]</em>. [TODO: Add Publisher/DOI]</li>
        <li>Utomo. (2021). <em>[TODO: Add Book/Article Title]</em>. [TODO: Add Publisher/DOI]</li>
        <li>Western Sydney University. (n.d.). <em>Module Chapter 6 – Pancasila</em>.</li>
      </ul>
    </div>
  </motion.div>
);

