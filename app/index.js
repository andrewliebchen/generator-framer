var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('*/*'),
        this.destinationPath('*/*'),
      );
    },
  }
};
