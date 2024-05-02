// module.exports = {
//     baseUrl: process.env.NODE_ENV === 'production'
//         ? '/vue-chart-example'
//         : '/'
//     }
//     const crypto = require('crypto');

//     /**
//      * The MD4 algorithm is not available anymore in Node.js 17+ (because of library SSL 3).
//      * In that case, silently replace MD4 by the MD5 algorithm.
//      */
//     try {
//       crypto.createHash('md4');
//     } catch (e) {
//       console.warn('Crypto "MD4" is not supported anymore by this Node.js version');
//       const origCreateHash = crypto.createHash;
//       crypto.createHash = (alg, opts) => {
//         return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
//       };
//     }
// vue.config.js
module.exports = {
    chainWebpack: (config) => {
      config.plugin('define').tap((definitions) => {
        Object.assign(definitions[0], {
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_DEVTOOLS__: 'false',
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
        })
        return definitions
      })
    }
  }
