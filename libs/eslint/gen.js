// The script we are using to generate the documents for both eslint typescript and angular.
var fs = require('fs');
var path = require('path');
var typescriptRules = require('@typescript-eslint/eslint-plugin').rules;
var angularRules = require('@angular-eslint/eslint-plugin').rules;
var angularTemplateRules = require('@angular-eslint/eslint-plugin-template').rules;

var typescriptCategories = {};

Object.keys(typescriptRules).forEach(key => {
  if (!typescriptCategories[typescriptRules[key].meta.docs.category]) {
    typescriptCategories[typescriptRules[key].meta.docs.category] = {};
  }
  typescriptCategories[typescriptRules[key].meta.docs.category][key] = typescriptRules[key];
});

var angularCategories = {};

Object.keys(angularRules).forEach(key => {
  if (!angularCategories[angularRules[key].meta.docs.category]) {
    angularCategories[angularRules[key].meta.docs.category] = {};
  }
  angularCategories[angularRules[key].meta.docs.category][key] = angularRules[key];
});

var angularTemplateCategories = {};

Object.keys(angularTemplateRules).forEach(key => {
  if (!angularTemplateCategories[angularTemplateRules[key].meta.docs.category]) {
    angularTemplateCategories[angularTemplateRules[key].meta.docs.category] = {};
  }
  angularTemplateCategories[angularTemplateRules[key].meta.docs.category][key] = angularTemplateRules[key];
});

function createMarkdown(categoryMap, namePrefix, masterFolder) {
  var markdown = '';

  var template = `
### [{{name}}]({{url}})

{{buttons}}

{{description}}

![BAD](https://img.shields.io/badge/-BAD-critical)

\`\`\`ts

\`\`\`

![GOOD](https://img.shields.io/badge/-GOOD-informational)

\`\`\`ts

\`\`\`

`;

  Object.keys(categoryMap).forEach(tsCatKey => {
    markdown += '## ' + tsCatKey + '\r\n';
    var categories = categoryMap[tsCatKey];
    Object.keys(categories).forEach(catKey => {
      var cat = categories[catKey];
      var buttons = [];

      buttons.push(
        `[![](https://img.shields.io/badge/-TS%20CODE-lightgrey)](./libs/eslint/src/${masterFolder}/${tsCatKey
          .toLowerCase()
          .replace(/ /gi, '-')}/${catKey}.ts)`
      );
      buttons.push(`![category](https://img.shields.io/badge/category-${cat.meta.docs.category.replace(/ /gi, '%20')}-yellowgreen)`);
      buttons.push(`![type](https://img.shields.io/badge/type-${cat.meta.type}-blueviolet)`);
      buttons.push(`![recommended](https://img.shields.io/badge/recommended-${cat.meta.docs.recommended.toString()}-ff69b4)`);

      if (cat.meta.fixable) {
        buttons.push(`![fixable](https://img.shields.io/badge/-fixable-blue)`);
      }

      if (cat.meta.requiresTypeChecking) {
        buttons.push(`![requiresTypeChecking](https://img.shields.io/badge/-requires--type--checking-critical)`);
      }

      markdown += template
        .replace('{{name}}', `${namePrefix}/${catKey}`)
        .replace('{{url}}', cat.meta.docs.url)
        .replace('{{buttons}}', buttons.join('\r\n'))
        .replace('{{description}}', cat.meta.docs.description);
    });
  });

  return markdown;
}
// fs.writeFileSync('TYPESCRIPT.MD', createMarkdown(typescriptCategories, '@typescript-eslint', 'typescript'));
// fs.writeFileSync('ANGULAR.MD', createMarkdown(angularCategories, '@angular-eslint', 'angular'));
// fs.writeFileSync('ANGULAR-TEMPLATE.MD', createMarkdown(angularTemplateCategories, '@angular-eslint/template', 'angular-template'));

// List out default eslint rules
function getRuleWithDefaultOptions(categoryMap, namePrefix) {
  var js = ['var a = {'];
  Object.keys(categoryMap).forEach(tsCatKey => {
    js.push('  // Typescript - ' + tsCatKey);
    var categories = categoryMap[tsCatKey];
    Object.keys(categories).forEach(catKey => {
      var cat = categories[catKey];
      var defaultOptions = ['error', ...cat.create.prototype.defaultOptions];

      js.push(`  "${namePrefix}/${catKey}": ${JSON.stringify(defaultOptions)},`);
    });
  });
  js.push('};');

  return js.join('\r\n');
}
// fs.writeFileSync('typescript.js', getRuleWithDefaultOptions(typescriptCategories, '@typescript/eslint'));
// fs.writeFileSync('angular.js', getRuleWithDefaultOptions(angularCategories, '@angular-eslint'));
// fs.writeFileSync('angular-template.js', getRuleWithDefaultOptions(angularTemplateCategories, '@angular-eslint/template'));

function createSampleEslintStructure(categoryMap, masterFolder, namePrefix) {
  if (!fs.existsSync(masterFolder)) {
    fs.mkdirSync(masterFolder);
  }
  Object.keys(categoryMap).forEach(tsCatKey => {
    var folder = path.join(masterFolder, tsCatKey.toLowerCase().replace(/ /gi, '-'));
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
    var categories = categoryMap[tsCatKey];
    Object.keys(categories).forEach(catKey => {
      var cat = categories[catKey];
      var comments = [];
      var defaultOptions = ['error', ...cat.create.prototype.defaultOptions];
      comments.push(`// "${namePrefix}/${catKey}": ${JSON.stringify(defaultOptions)},`);
      comments.push(`// ${cat.meta.docs.description}`);
      comments.push('');
      fs.writeFileSync(path.join(folder, catKey + '.ts'), comments.join('\r\n'));
    });
  });
}
// createSampleEslintStructure(typescriptCategories, 'typescript', '@typescript/eslint');
// createSampleEslintStructure(angularCategories, 'angular', '@angular-eslint');
// createSampleEslintStructure(angularTemplateCategories, 'angular-template', '@angular-eslint/template');
