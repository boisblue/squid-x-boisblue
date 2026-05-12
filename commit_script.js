const fs = require('fs');

const i = process.argv[2];

const filePath = 'components/SwapWidget.jsx';
const templatePath = 'templates.json';

let content = fs.readFileSync(filePath, 'utf8');

const templates = JSON.parse(
  fs.readFileSync(templatePath, 'utf8')
).templates;

const random =
  templates[Math.floor(Math.random() * templates.length)];

const finalKey = random.key.split('.').pop();

const escapedKey = finalKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const value =
  typeof random.val === 'number'
    ? random.val
    : `"${random.val}"`;

const regex = new RegExp(
  `("${escapedKey}"\\s*:\\s*)([^,\\n}]+)`,
  'g'
);

if (!regex.test(content)) {
  console.log(`❌ Key not found: ${random.key}`);
  process.exit(0);
}

regex.lastIndex = 0;

const newContent = content.replace(
  regex,
  `$1${value}`
);

if (newContent === content) {
  console.log(`⚠️ No change`);
  process.exit(0);
}

fs.writeFileSync(filePath, newContent);

console.log(
  `✅ Commit ${i}/10 | ${random.key} → ${random.val}`
);