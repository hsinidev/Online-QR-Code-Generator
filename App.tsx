import React from 'react';
import Layout from './components/Layout';
import QRCodeTool from './components/QRCodeTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Create Your QR Code Instantly
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A free, powerful tool to generate custom QR codes. Simply type, customize, and download.
          </p>
        </header>
        
        <main className="flex flex-col gap-12 md:gap-16">
          <QRCodeTool />
          <SeoArticle />
        </main>
      </div>
    </Layout>
  );
};

export default App;
