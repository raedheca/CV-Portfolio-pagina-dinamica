import { convert } from 'pdf-poppler';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfDir = join(__dirname, 'public', 'certificados');
const outputDir = join(__dirname, 'public', 'certificados', 'previews');

async function convertPDFsToImages() {
  try {
    // Crear directorio de previews si no existe
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
      console.log('✅ Carpeta de previews creada');
    }

    // Leer todos los archivos PDF
    const files = await readdir(pdfDir);
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));

    console.log(`📄 Encontrados ${pdfFiles.length} archivos PDF`);
    console.log('🔄 Iniciando conversión...\n');

    // Convertir cada PDF
    for (const pdfFile of pdfFiles) {
      const pdfPath = join(pdfDir, pdfFile);
      const fileName = parse(pdfFile).name;

      console.log(`⏳ Convirtiendo: ${pdfFile}`);

      const options = {
        format: 'jpeg',
        out_dir: outputDir,
        out_prefix: fileName,
        page: 1, // Solo la primera página
        scale: 2048, // Resolución alta
      };

      try {
        await convert(pdfPath, options);
        console.log(`✅ Convertido: ${fileName}.jpg`);
      } catch (error) {
        console.error(`❌ Error al convertir ${pdfFile}:`, error.message);
      }
    }

    console.log('\n🎉 Conversión completada!');
    console.log(`📁 Las imágenes están en: public/certificados/previews/`);

  } catch (error) {
    console.error('❌ Error general:', error);
    process.exit(1);
  }
}

convertPDFsToImages();
