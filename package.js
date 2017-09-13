Package.describe({
  name: "datamaker:accounts-naver",
  version: '0.0.4',
  summary: 'Login service for Naver',
  git: 'https://github.com/datamaker/meteor-accounts-naver',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.14', ['client', 'server']);
  api.imply('accounts-base@1.2.14', ['client', 'server']);
  api.use('accounts-oauth@1.1.15', ['client', 'server']);
  api.use('datamaker:naver-oauth@0.0.4', ['client', 'server']);

  api.addFiles('naver.js');
});
