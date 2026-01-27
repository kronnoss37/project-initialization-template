const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commitMsg) => commitMsg.startsWith('Merge')],
}

export default commitlintConfig
