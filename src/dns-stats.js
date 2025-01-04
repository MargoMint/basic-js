const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultObj = {};
  
  for (let i = 0; i < domains.length; i += 1) {
    let updateDomain = domains[i].split('.').reverse();
    let subdomain = '';
    for (let j = 0; j < updateDomain.length; j += 1) {
      subdomain += '.' + updateDomain[j];
      if (!resultObj[subdomain]) {
        resultObj[subdomain] = 1;
      } else {
        resultObj[subdomain] += 1;
      }
    }
  }
  return resultObj;
}

module.exports = {
  getDNSStats
};
