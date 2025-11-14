
import React, { useState, useCallback, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">&times;</button>
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="text-slate-300 prose prose-invert max-w-none">{content}</div>
    </div>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [modalContent, setModalContent] = useState<{ title: string; content: ReactNode } | null>(null);

  const openModal = useCallback((title: string, content: ReactNode) => {
    setModalContent({ title, content });
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
  }, []);

  const modalLinks = [
    { name: 'About', content: <p>This Online QR Code Generator is a free tool built with modern web technologies to provide a fast and easy way to create custom QR codes.</p> },
    { name: 'Contact', content: <p>For inquiries, please reach out to <a href="mailto:hsini.web@gmail.com" className="text-cyan-400">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400">doodax.com</a>.</p> },
    { name: 'Guide', content: <div><p>How to use:</p><ol><li>Select the type of content for your QR code.</li><li>Enter the content in the text area.</li><li>Customize the colors and size.</li><li>Click the 'Download QR Code (PNG)' button to save your code.</li></ol></div> },
    { name: 'Privacy Policy', content: <p>We respect your privacy. All data entered is processed client-side in your browser. We do not store or transmit any of your QR code data.</p> },
    { name: 'Terms of Service', content: <p>This tool is provided 'as is' without any warranty. Use it at your own risk. The generated QR codes are free for any purpose, including commercial use.</p> },
    { name: 'DMCA', content: <p>If you believe any content infringes your copyright, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-cyan-400">hsini.web@gmail.com</a> with the necessary details.</p> },
  ];

  return (
    <div className="min-h-screen w-full animated-galaxy">
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
          <nav className="flex items-center justify-center space-x-2 sm:space-x-4 flex-wrap">
            {modalLinks.map(link => (
              <button key={link.name} onClick={() => openModal(link.name, link.content)} className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded">
                {link.name}
              </button>
            ))}
          </nav>
        </header>

        {children}

        <footer className="text-center py-6 px-4 border-t border-slate-700/50 mt-12">
          <p className="mb-2">
            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold transition-colors hover:text-white" style={{ color: '#FFD700' }}>
              Powered by HSINI MOHAMED
            </a>
          </p>
          <p className="text-sm text-slate-400">
            Contact: <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400">hsini.web@gmail.com</a> | <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">doodax.com</a>
          </p>
        </footer>

        {modalContent && <Modal title={modalContent.title} content={modalContent.content} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Layout;
