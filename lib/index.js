'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _sprintfJs = require('sprintf-js');

exports['default'] = {
  name: 'sprintf',
  type: 'postProcessor',

  process: function process(value, key, options) {
    if (!options.sprintf) return value;

    if (Object.prototype.toString.apply(options.sprintf) === '[object Array]') {
      return (0, _sprintfJs.vsprintf)(value, options.sprintf);
    } else if (typeof options.sprintf === 'object') {
      return (0, _sprintfJs.sprintf)(value, options.sprintf);
    }

    return value;
  },

  overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
    var values = [];

    for (var i = 1; i < args.length; i++) {
      values.push(args[i]);
    }

    return {
      postProcess: 'sprintf',
      sprintf: values
    };
  }
};
module.exports = exports['default'];