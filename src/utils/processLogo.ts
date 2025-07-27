import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoBackground = async (logoPath: string): Promise<string> => {
  try {
    // Fetch the current logo
    const response = await fetch(logoPath);
    const blob = await response.blob();
    
    // Load as image
    const imageElement = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Create object URL for the processed image
    const processedUrl = URL.createObjectURL(processedBlob);
    
    return processedUrl;
  } catch (error) {
    console.error('Error processing logo background:', error);
    throw error;
  }
};