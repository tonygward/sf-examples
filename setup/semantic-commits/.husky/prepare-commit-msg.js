import { readFileSync } from "fs"

const commitMessage = await readFileSync('.git/COMMIT_EDITMSG');

const regexPattern = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-\.]+\))?(!)?: ([\w ])+([\s\S]*)/g;
const regularExpression = new RegExp(regexPattern);
if (regularExpression.test(commitMessage)) {
  console.log('Commit message is valid.');
  process.exit(0); // Simulate a successful validation
}

console.log('Commit message is invalid.');
console.log('Please use the format: type(scope): description');
console.log('Where type is one of: feat, fix, docs, style, refactor, perf, test, build, ci, temp');
console.log('*** Example: feat(123): add new feature ***');
process.exit(1); // Simulate a failure