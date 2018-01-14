/* eslint-env node */
module.exports = {
  name: 'ember-udem-tutorial',
  normalizeEntityName() {
  },
  afterInstall: function() {

    return this.addPackageToProject('ember-twitch-normalizer').then(() => {
      return this.addPackageToProject("ember-composable-helpers").then(()=> {
        return this.addPackageToProject("ember-truth-helpers").then(()=>{
          return this.addPackageToProject("ember-math-helpers");
        }
      })
    });

  }
};
