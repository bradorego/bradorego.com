const fs = require('fs');
const PDFParser = require("pdf2json");

const files = [
  __dirname + '/tmp/Mural Presentation.pdf',
  __dirname + '/tmp/Grow Therapy Presentation.pdf',
  __dirname + '/tmp/Retool Presentation.pdf',
  __dirname + '/tmp/Ironclad Presentation.pdf'
];

async function parse(file) {
  return new Promise((resolve, reject) => {
    let pdfParser = new PDFParser(this, 1);
    pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
    pdfParser.on("pdfParser_dataReady", pdfData => {
        resolve(pdfParser.getRawTextContent());
    });
    pdfParser.loadPDF(file);
  });
}

async function readAll() {
  for(let file of files) {
    if(fs.existsSync(file)) {
      console.log(`\n\n--- FILE: ${file} ---`);
      try {
        let text = await parse(file);
        console.log(text.replace(/\s+/g, ' ').substring(0, 1500));
      } catch(e) { console.error(e); }
    }
  }
}
readAll();
