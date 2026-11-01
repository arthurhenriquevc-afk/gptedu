// Executa a CLI do Astro com a telemetria desativada em qualquer sistema operacional.
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const cli = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));
const child = spawn(process.execPath, [cli, ...process.argv.slice(2)], { stdio: 'inherit', env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' } });
child.on('exit', (code, signal) => process.exit(signal ? 1 : code ?? 1));
