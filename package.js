Package.describe({
  summary: "Mandrill wrapper for sending sys mails"
});

Npm.depends({'mandrill-api': "1.0.39"});

Package.on_use(function (api) {
  if(api.export){
    api.export('mandrill', 'server');
  }
  api.add_files("mandrill.js", ["server"]);
});