/* eslint-env node */
module.exports = {
  name: 'ember-udem-tutorial',
  normalizeEntityName() {
  },
  afterInstall: function(options) {

    let ui = this.ui;

    let blueprintTask = this.taskFor('generate-from-blueprint');

    var options = {
      args: ['ember-twitch-normalizer', 'latest'],
      dryRun: false,
      verbose: false,
      disableAnalytics: false
    };
    ui.writeLine('  Including Twitch Normalizer For Ember');

    return blueprintTask.run(options).then(() => {
        ui.writeLine("  Including Ember Composable Helpers");
        return this.addPackageToProject("ember-composable-helpers", "latest");
      }).then(() => {
        ui.writeLine("  Including Ember Math Helpers");
        return this.addPackageToProject("ember-math-helpers", "latest");
      }).then(()=>{
        ui.writeLine("  Including Ember Truth Helpers");
        return this.addPackageToProject("ember-truth-helpers",  "latest");
      }).then(()=> {
        ui.writeLine("  Including Ember Paper");
        options.args = ['ember-paper',  "latest"];
        return blueprintTask.run(options);
      });



  }
};
