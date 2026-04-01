'use client';

import { useState } from 'react';
import { ExternalLink, Mail, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Suleiman.</div>
          
          <div className="flex gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-5 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm">
            Web Developer & Web3 Builder
          </div>
          <h1 className="text-7xl font-bold tracking-tighter mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Suleiman</span>
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-10">
            I build modern web experiences and Web3 applications using Next.js, Tailwind, and blockchain tools.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-100 transition flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </button>
            <a 
              href="mailto:sulemansuleiman499@gmail.com"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-2xl transition flex items-center gap-2"
            >
              <Mail size={20} /> Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <div className="prose prose-invert max-w-none text-zinc-300 text-lg leading-relaxed">
            <p>
              I'm a passionate Web Developer from Lagos, Nigeria, currently focusing on Web3 frontend development.
            </p>
            <p>
              I recently built a Web3 Wallet Sender dApp using Next.js, Wagmi, and RainbowKit. 
              It allows users to connect their MetaMask wallet, view real-time balance, claim free test ETH, 
              send custom amounts, and keep track of transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Web3 Wallet Sender</h3>
                <p className="text-blue-400 mb-6">Next.js • Wagmi • RainbowKit • Tailwind</p>
                <p className="text-zinc-400 leading-relaxed">
                  A clean Web3 dApp that lets users connect their MetaMask wallet, view real-time Sepolia balance, 
                  claim free test ETH, send custom amounts of test ETH, and view transaction history.
                </p>
              </div>
              <div>
                <a 
                  href="https://suleiman-web3-app.vercel.app" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl transition"
                >
                  Live Demo <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Clickable Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://instagram.com/codexa42077" target="_blank" className="block">
                <img 
                  src="/projects/wallet-sender-1.jpg" 
                  alt="Screenshot 1"
                  className="w-full rounded-2xl border border-zinc-700 hover:border-blue-500 transition-all hover:scale-105"
                />
              </a>
              <a href="https://tiktok.com/@codexa8" target="_blank" className="block">
                <img 
                  src="/projects/wallet-sender-2.png" 
                  alt="Screenshot 2"
                  className="w-full rounded-2xl border border-zinc-700 hover:border-blue-500 transition-all hover:scale-105"
                />
              </a>
              <a href="https://facebook.com/codexatechguy" target="_blank" className="block">
                <img 
                  src="/projects/wallet-sender-3.jpg" 
                  alt="Screenshot 3"
                  className="w-full rounded-2xl border border-zinc-700 hover:border-blue-500 transition-all hover:scale-105"
                />
              </a>
              <a href="https://wa.me/2348168236654" target="_blank" className="block">
                <img 
                  src="/projects/wallet-sender-4.png" 
                  alt="Screenshot 4"
                  className="w-full rounded-2xl border border-zinc-700 hover:border-blue-500 transition-all hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto">
            I'm currently open to freelance Web3 frontend projects and collaborations.
          </p>
          <a 
            href="mailto:sulemansuleiman499@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-semibold hover:bg-zinc-100 transition"
          >
            <Mail size={22} /> Send me an email
          </a>
        </div>
      </section>

            {/* Footer with Clickable Social Links */}
      <footer className="py-16 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">
          <div className="flex gap-10 text-4xl">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/2348168236654" 
              target="_blank" 
              className="hover:scale-110 transition" 
              title="WhatsApp"
            >
              💬
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/codexatechguy" 
              target="_blank" 
              className="hover:scale-110 transition" 
              title="Facebook"
            >
              📘
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/codexa42077" 
              target="_blank" 
              className="hover:scale-110 transition" 
              title="Instagram"
            >
              📷
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@codexa8" 
              target="_blank" 
              className="hover:scale-110 transition" 
              title="TikTok"
            >
              🎵
            </a>

            {/* Gmail */}
            <a 
              href="mailto:sulemansuleiman499@gmail.com" 
              className="hover:scale-110 transition" 
              title="Gmail"
            >
              ✉️
            </a>
          </div>

          <div className="text-xs text-zinc-500 text-center">
            © 2026 Suleiman • Built with Next.js
          </div>
        </div>
      </footer>
    </main>
  );
}