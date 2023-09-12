module.exports = {
  extends: ['@kuzanatoliorg/commitlint-config'],
  rules: {
    'scope-enum': [2, 'always', ["quality", "engine", "web"]],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['S-'],
    },
  },
};
