const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const options = require('./.prettierrc');
const fg = require('fast-glob');

const files = [...fg.sync('docs/**/*.mdx'), ...fg.sync('src/**/*.mdx')];

for (const file of files) {
	console.log(file);
	const fileToFormat = path.join(__dirname, file);

	const content = fs.readFileSync(fileToFormat).toString();

	const prettified = prettier.format(content, { ...options, parser: 'mdx' });
	const output = prettified.replaceAll('```', '````');

	fs.writeFileSync(fileToFormat, output);
}
