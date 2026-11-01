// Gera artifacts/union3d-site-estatico.zip a partir de dist/ e de scripts/LEIA-ME.txt, com os arquivos na raiz do pacote. Sem dependências externas.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
const dist = path.join(root, 'dist');
const output = path.join(root, 'artifacts', 'union3d-site-estatico.zip');
if (!fs.existsSync(path.join(dist, 'index.html'))) { console.error('dist/ não encontrado. Execute npm run build antes.'); process.exit(1); }
const entries = fs.readdirSync(dist, { recursive: true, withFileTypes: true }).filter(e => e.isFile()).map(e => [path.relative(dist, path.join(e.parentPath, e.name)).split(path.sep).join('/'), path.join(e.parentPath, e.name)]);
entries.push(['LEIA-ME.txt', path.join(root, 'scripts', 'LEIA-ME.txt')]);
const files = entries.sort(([a], [b]) => a.localeCompare(b));
const now = new Date();
const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
const locals = []; const centrals = []; let offset = 0;
for (const [published, file] of files) {
  const name = Buffer.from(published);
  const data = fs.readFileSync(file); const packed = zlib.deflateRawSync(data, { level: 9 }); const crc = zlib.crc32(data);
  const local = Buffer.alloc(30); local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0x0800, 6); local.writeUInt16LE(8, 8); local.writeUInt16LE(dosTime, 10); local.writeUInt16LE(dosDate, 12); local.writeUInt32LE(crc, 14); local.writeUInt32LE(packed.length, 18); local.writeUInt32LE(data.length, 22); local.writeUInt16LE(name.length, 26);
  const central = Buffer.alloc(46); central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6); central.writeUInt16LE(0x0800, 8); central.writeUInt16LE(8, 10); central.writeUInt16LE(dosTime, 12); central.writeUInt16LE(dosDate, 14); central.writeUInt32LE(crc, 16); central.writeUInt32LE(packed.length, 20); central.writeUInt32LE(data.length, 24); central.writeUInt16LE(name.length, 28); central.writeUInt32LE(offset, 42);
  locals.push(local, name, packed); centrals.push(central, name); offset += local.length + name.length + packed.length;
}
const directory = Buffer.concat(centrals);
const end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10); end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, Buffer.concat([...locals, directory, end]));
console.log(`${files.length} arquivos em ${path.relative(root, output)}`);
