/**
 *
 * @param {any[]} values
 * @param {{falsyValues: any[], truthyValues: any[]}} options
 * @returns
 */
export function getTruthyValues(values = [], options = {}) {
  return values.filter((value) => !!getTruthyValue([value], options));
}

/**
 *
 * @param {any[]} values
 * @param {{falsyValues: any[], truthyValues: any[]}} options
 * @returns
 */
export function getTruthyValue(values = [], options = {}) {
  const { truthyValues = [], falsyValues = [] } = options || {};
  return values.find((value) => {
    if (truthyValues.includes(value)) {
      return true;
    }
    if (falsyValues.includes(value)) {
      return false;
    }
    return !!value;
  });
}
