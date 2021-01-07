const request = require('request');
const path = require('path');
const fs = require('fs');
const { S3 } = require('aws-sdk');

const s3 = new S3({
  region: 'ap-southeast-1',
  credentials: { accessKeyId: 'AKIAR5WIC52TRLU5UQEO', secretAccessKey: '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' }
});

function uploadShieldsImg(url, name) {
  return new Promise((resolve, reject) => {
    request({ url }, (err, response, body) => {
      s3.putObject(
        {
          Bucket: 'thunder.live-ide',
          Key: `badges/${name}-ut.svg`,
          Body: body,
          ACL: 'public-read',
          ContentType: 'image/svg+xml',
          CacheControl: 'max-age=60'
        },
        error => {
          if (!error) {
            resolve();
          } else {
            reject();
          }
        }
      );
    }).on('error', () => {
      reject();
    });
  });
}

const cwd = process.cwd();
const svgFolder = path.join(cwd, 'coverage', 'svg');

// Create svg folder if it isn't existed
fs.mkdir(svgFolder, { recursive: true }, err => {
  if (err) throw err;
});

// Read projects
const jestFile = path.join(cwd, 'jest.config');
const projects = require(jestFile).projects.map(project => project.replace('<rootDir>/', ''));

// Read UT coverages
const tasks = [];

projects.forEach(project => {
  const parts = project.split('/');
  const parameters = { status: false, name: parts[parts.length - 1] };
  const task = Promise.resolve()
    .then(() => {
      const summary = require(path.join(cwd, 'coverage', project, 'coverage-summary.json'));
      const total = summary.total;

      parameters.coverage = (total.lines.pct + total.statements.pct + total.functions.pct + total.branches.pct) / 4;
      parameters.status = true;
    })
    .then(() => {
      let color = 'success';

      if (80 <= parameters.coverage && parameters.coverage <= 95) {
        color = 'yellow';
      } else if (parameters.coverage < 80) {
        color = 'critical';
      }

      const url = `https://img.shields.io/badge/coverage-${parameters.name.replace('-', '--')}%3A%20${
        Math.round(parameters.coverage * 100) / 100
      }%25-${color}`;
      return uploadShieldsImg(url, parameters.name);
    })
    .catch(error => {
      const url = `https://img.shields.io/badge/coverage-${parameters.name.replace('-', '--')}:%20error-critical`;
      return uploadShieldsImg(url, parameters.name);
    });

  tasks.push(task);
});

Promise.all(tasks).then(() => console.log('REPORT UT COVERAGE SUCCESSFULLY!'));
