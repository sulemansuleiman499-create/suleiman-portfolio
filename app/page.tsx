'use client';

import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Suleiman.</div>
          <div className="flex gap-8 text-sm">
            <button onClick={() => setActiveSection('home')} className="hover:text-blue-400 transition">Home</button>
            <button onClick={() => setActiveSection('about')} className="hover:text-blue-400 transition">About</button>
            <button onClick={() => setActiveSection('projects')} className="hover:text-blue-400 transition">Projects</button>
            <button onClick={() => setActiveSection('contact')} className="hover:text-blue-400 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm">
            Web Developer & Web3 Builder
          </div>
          <h1 className="text-7xl font-bold tracking-tighter mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Suleiman</span>
          </h1>
          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            I build modern web experiences and Web3 applications using Next.js, Tailwind, and blockchain tools.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-2xl transition">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-zinc-300">
              <p>
                I'm a passionate Web Developer from Lagos, Nigeria, currently diving deep into Web3 development.
              </p>
              <p>
                I love turning ideas into clean, functional digital products. My recent focus has been on building 
                intuitive blockchain interfaces using modern tools like Next.js, Wagmi, and RainbowKit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Wagmi', 'RainbowKit', 'Viem', 'Web3.js', 'Git', 'Vercel'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            <div className="p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold">Web3 Wallet Sender</h3>
                  <p className="text-blue-400 mt-2">Next.js • Wagmi • RainbowKit</p>
                </div>
                <a 
                  href="https://suleiman-web3-app.vercel.app" 
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  Live Demo <ExternalLink size={18} />
                </a>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                A clean Web3 dApp that allows users to connect their MetaMask wallet, view real-time Sepolia balance, 
                claim free test ETH from a faucet, and send test ETH to any address with transaction history.
              </p>

              <div className="flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-zinc-800 text-xs rounded-full">Wallet Connect</span>
                <span className="px-4 py-2 bg-zinc-800 text-xs rounded-full">On-chain Transactions</span>
                <span className="px-4 py-2 bg-zinc-800 text-xs rounded-full">Testnet Integration</span>
              </div>
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
            href="mailto:your.email@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-semibold hover:bg-zinc-200 transition"
          >
            <Mail size={22} /> Get In Touch
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-xs text-zinc-500">
        © 2026 Suleiman. Built with Next.js
      </footer>
    </main>
  );
}