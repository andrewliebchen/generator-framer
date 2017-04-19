var Generator = require('yeoman-generator');
var ncp = require('ncp').ncp;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', { type: String, required: true });
    this.log(this.options.appname);
  }

  writing() {
    ncp(
      this.templatePath(),
      this.destinationPath(this.options.appname + '.framer')
    );
  }

  end() {
    this.log('Framer project created. Have fun!');
  }
};
