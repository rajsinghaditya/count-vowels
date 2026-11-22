// ESM entry point — wraps the CommonJS core for ES module consumers
import pkg from './src/index.js';

export const countVowels = pkg.countVowels;
export default pkg;
