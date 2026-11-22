# vowel-counter-aditya

> A lightweight, zero-dependency NPM package to count vowels in any string.

[![npm version](https://img.shields.io/npm/v/vowel-counter-aditya)](https://www.npmjs.com/package/vowel-counter-aditya)
[![license](https://img.shields.io/npm/l/vowel-counter-aditya)](./LICENSE)

---

## ✨ Features

- **Total vowel count** — returns the total number of vowels in a string.
- **Individual counts** — breaks down counts for each vowel: `a`, `e`, `i`, `o`, `u`.
- **Case-insensitive** — handles uppercase, lowercase, and mixed-case text.
- **Input validation** — throws clear `TypeError` for non-string inputs.
- **Empty string safe** — returns `{ total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 }`.
- **Zero dependencies** — fast, tiny, and production-ready.
- **Dual module support** — works with both CommonJS (`require`) and ES Modules (`import`).

---

## 📦 Installation

```bash
npm install vowel-counter-aditya
```

---

## 🚀 Usage

### CommonJS

```js
const { countVowels } = require('vowel-counter-aditya');

const result = countVowels('Hello World');
console.log(result);
// { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0 }
```

### ES Modules

```js
import { countVowels } from 'vowel-counter-aditya';

const result = countVowels('Education is important');
console.log(result);
// { total: 8, a: 2, e: 1, i: 3, o: 1, u: 1 }
```

---

## 📖 API

### `countVowels(text)`

| Parameter | Type     | Required | Description                   |
|-----------|----------|----------|-------------------------------|
| `text`    | `string` | Yes      | The string to analyze.        |

**Returns:** an object with the shape:

```ts
{
  total: number;  // Total number of vowels
  a: number;      // Count of 'a' / 'A'
  e: number;      // Count of 'e' / 'E'
  i: number;      // Count of 'i' / 'I'
  o: number;      // Count of 'o' / 'O'
  u: number;      // Count of 'u' / 'U'
}
```

**Throws:** `TypeError` if `text` is not a string.

---

## 💡 Examples

```js
const { countVowels } = require('vowel-counter-aditya');

// Normal sentence
countVowels('Hello World');
// => { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0 }

// All vowels
countVowels('aeiou');
// => { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1 }

// No vowels
countVowels('rhythm');
// => { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 }

// Empty string
countVowels('');
// => { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 }

// Numbers and symbols are ignored
countVowels('h3ll0 w0rld!');
// => { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 }
```

---

## ⚠️ Error Handling

```js
try {
  countVowels(123);
} catch (error) {
  console.error(error.message);
  // "Expected a string but received number. Please pass a valid string to countVowels()."
}
```

Passing `null`, `undefined`, arrays, objects, booleans, or any non-string value will throw a `TypeError` with a descriptive message.

---

## 🌐 Live Demo

Visit the live demo at **[your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)** to try the vowel counter in your browser.

The demo also exposes a REST API:

```bash
curl -X POST https://your-vercel-url.vercel.app/api/count \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello World"}'
```

---

## 🧪 Running Tests

```bash
npm test
```

Tests use Node.js built-in test runner (`node:test`) — no extra dependencies required.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Write your changes and add tests.
4. Run the tests: `npm test`.
5. Commit: `git commit -m "feat: add my feature"`.
6. Push: `git push origin feature/my-feature`.
7. Open a Pull Request.

Please make sure all tests pass before submitting a PR.

---

## 📄 License

[MIT](./LICENSE) © Aditya Raj Singh
