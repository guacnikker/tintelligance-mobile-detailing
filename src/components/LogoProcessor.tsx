import { useEffect, useState } from 'react';
import { removeBackground } from '@/utils/backgroundRemoval';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);

  const processLogo = async () => {
    setIsProcessing(true);
    try {
      // Load the current logo
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = '/lovable-uploads/54176d49-0551-4a0a-91a8-5f6d1ac4bbde.png';
      });

      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Create object URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedLogo(processedUrl);
      
      // Download the processed image
      const link = document.createElement('a');
      link.href = processedUrl;
      link.download = 'logo-transparent.png';
      link.click();
      
    } catch (error) {
      console.error('Error processing logo:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg">
      <button
        onClick={processLogo}
        disabled={isProcessing}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
      >
        {isProcessing ? 'Processing Logo...' : 'Remove Logo Background'}
      </button>
      {processedLogo && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Processed Logo:</p>
          <img src={processedLogo} alt="Processed logo" className="w-20 h-20" />
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;