import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Rithwik's Portfolio</h1>
        <p className="text-xl mt-2 text-gray-400">Web Developer</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">I am a passionate web developer with expertise in React, FastAPI, and blockchain technology. I specialize in building modern and responsive web applications with a focus on performance and user experience.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Medical AI Agent</h3>
            <p className="text-gray-400">An emergency treatment AI agent built with deep learning and NLP technologies.</p>
          </Card>
          <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Blockchain Storage</h3>
            <p className="text-gray-400">Utilizing Ethereum and Solana for secure data storage solutions.</p>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="text-gray-300 list-disc list-inside">
          <li>React & Vite</li>
          <li>FastAPI Integration</li>
          <li>Blockchain Development (Ethereum & Solana)</li>
          <li>Deep Learning & NLP</li>
          <li>Full-Stack App Development</li>
        </ul>
      </section>

      <footer className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white text-3xl"><FaLinkedin /></a>
          <a href="https://github.com" className="text-gray-400 hover:text-white text-3xl"><FaGithub /></a>
          <a href="mailto:example@example.com" className="text-gray-400 hover:text-white text-3xl"><FaEnvelope /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
