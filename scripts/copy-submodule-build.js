import { cpSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const submoduleDist = join(rootDir, 'buriedcity', 'dist');
const mainDist = join(rootDir, 'dist');
const targetDir = join(mainDist, 'buriedcity');

if (!existsSync(submoduleDist)) {
  console.error('Error: Submodule dist directory does not exist. Make sure to build the submodule first.');
  process.exit(1);
}

if (!existsSync(mainDist)) {
  console.error('Error: Main dist directory does not exist. Make sure to build the main project first.');
  process.exit(1);
}

try {
  // Copy the entire submodule dist to dist/buriedcity
  cpSync(submoduleDist, targetDir, { recursive: true, force: true });
  console.log('✓ Successfully copied submodule build to dist/buriedcity/');
} catch (error) {
  console.error('Error copying submodule build:', error);
  process.exit(1);
}

