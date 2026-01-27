module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commitMsg) => commitMsg.startsWith('Merge')],
}
