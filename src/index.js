import {sprintf, vsprintf} from 'sprintf-js';

export default {
  name: 'sprintf',
  type: 'postProcessor',

  process(value, key, options) {
    if (!options.sprintf) return value;

    if (Object.prototype.toString.apply(options.sprintf) === '[object Array]') {
      return vsprintf(value, options.sprintf);
    } else if (typeof options.sprintf === 'object') {
      return sprintf(value, options.sprintf);
    }

    return value;
  },

  translationOptionOverloadHandler(args) {
    let values = [];

    for (var i = 1; i < args.length; i++) {
      values.push(args[i]);
    }

    return {
      postProcess: 'sprintf',
      sprintf: values
    };
  }
};
