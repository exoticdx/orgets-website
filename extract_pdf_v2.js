import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Dynamic import for pdfjs-dist legacy build for Node.js
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

// Set worker
// For Node.js, we don't need a standard worker, but we might need to mock it or just use the main thread.
// pdfjs-dist in node usually works without setting workerSrc if we use the right build.
// However, standard usage often requires:
// pdfjsLib.GlobalWorkerOptions.workerSrc = '...'; 
// But in Node, we can try without it first or point to the build.

const dataBuffer = new Uint8Array(fs.readFileSync('catalouge.pdf'));

try {
    const loadingTask = pdfjsLib.getDocument(dataBuffer);
    const pdfDocument = await loadingTask.promise;

    console.log(`PDF loaded. Pages: ${pdfDocument.numPages}`);

    let fullText = '';

    for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += `\n--- Page ${i} ---\n${pageText}`;
    }

    console.log(fullText);

} catch (error) {
    console.error('Error parsing PDF:', error);
}
