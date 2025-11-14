import React, { useState, useEffect, useRef, useCallback } from 'react';
import { QRCodeType } from '../types';

declare var QRCode: any;

const QRCodeTool: React.FC = () => {
  const [text, setText] = useState<string>('https://react.dev');
  const [type, setType] = useState<QRCodeType>(QRCodeType.URL);
  const [fgColor, setFgColor] = useState<string>('#FFFFFF');
  const [bgColor, setBgColor] = useState<string>('#0f172a');
  const [size, setSize] = useState<number>(300);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getPrefixedText = useCallback(() => {
    switch (type) {
      case QRCodeType.PHONE:
        return `tel:${text}`;
      case QRCodeType.EMAIL:
        return `mailto:${text}`;
      default:
        return text;
    }
  }, [text, type]);

  useEffect(() => {
    if (canvasRef.current && typeof QRCode !== 'undefined') {
      const prefixedText = getPrefixedText();
      QRCode.toCanvas(canvasRef.current, prefixedText || ' ', {
        width: size,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: 'H' 
      }, (error: Error | null) => {
        if (error) console.error(error);
      });
    }
  }, [text, type, fgColor, bgColor, size, getPrefixedText]);
  
  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <section className="bg-slate-900/50 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Controls Panel */}
        <div className="flex flex-col space-y-6">
          <div>
            <label htmlFor="qr-type" className="block text-sm font-medium text-slate-300 mb-2">Content Type</label>
            <select
              id="qr-type"
              value={type}
              onChange={(e) => setType(e.target.value as QRCodeType)}
              className="w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            >
              {Object.values(QRCodeType).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="qr-text" className="block text-sm font-medium text-slate-300 mb-2">Text or URL</label>
            <textarea
              id="qr-text"
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter URL, text, email..."
              className="w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-y"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fg-color" className="block text-sm font-medium text-slate-300 mb-2">Foreground Color</label>
              <div className="relative">
                <input type="color" id="fg-color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="p-1 h-10 w-full block bg-slate-800 border border-slate-600 rounded-md cursor-pointer" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">{fgColor}</span>
              </div>
            </div>
            <div>
              <label htmlFor="bg-color" className="block text-sm font-medium text-slate-300 mb-2">Background Color</label>
              <div className="relative">
                <input type="color" id="bg-color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="p-1 h-10 w-full block bg-slate-800 border border-slate-600 rounded-md cursor-pointer" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">{bgColor}</span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="size" className="block text-sm font-medium text-slate-300 mb-2">Size: {size}px</label>
            <input
              type="range"
              id="size"
              min="100"
              max="1000"
              step="10"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col items-center justify-center bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <div 
            className="w-full max-w-xs p-3 rounded-lg shadow-lg mb-6 transition-colors duration-300"
            style={{ backgroundColor: bgColor }}
          >
            <canvas ref={canvasRef} className="w-full h-auto rounded-md"></canvas>
          </div>
          <button
            onClick={handleDownload}
            className="w-full max-w-xs bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          >
            Download QR Code (PNG)
          </button>
        </div>
      </div>
    </section>
  );
};

export default QRCodeTool;
