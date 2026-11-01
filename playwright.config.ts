import { defineConfig } from '@playwright/test';
import fs from 'node:fs';
// PLAYWRIGHT_CHROMIUM_PATH força um executável; sem ele, usa /usr/bin/chromium quando existe ou o Chromium instalado por `npx playwright install chromium`.
const executablePath=process.env.PLAYWRIGHT_CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
export default defineConfig({
  testDir:'./tests',fullyParallel:false,workers:2,reporter:'list',
  use:{baseURL:'http://127.0.0.1:4321',launchOptions:{executablePath,args:['--no-sandbox']},trace:'retain-on-failure'},
  webServer:{command:'npm run preview -- --port 4321',url:'http://127.0.0.1:4321',reuseExistingServer:!process.env.CI,timeout:30000}
});
