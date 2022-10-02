/**
 *
 * @param {string} dataURL
 * @param {string} fileName
 * @returns File
 */
export async function dataURLToFile(dataURL, fileName) {
  const res = await fetch(dataURL);
  const blob = await res.blob();
  return new File([blob], fileName, {
    type: `${blob?.type.toLowerCase() || ""}`,
  });
}

/**
 * Remove base64 meta description
 * @param {string} base64
 * @returns
 */
export const removeBase64URLMeta = (base64) => {
  let base64Arr = base64?.split(",");
  let base64Link = base64Arr?.[1] || "";
  if (base64Link === undefined) {
    if (base64Arr[0].length >= 1) {
      base64Link = base64Arr[0];
    }
    base64Link = "";
  }
  return base64Link;
};

export function urlSearchParamsExtractor(searchParams, params = {}) {
  if (searchParams && params) {
    const result = {};
    for (const key in params) {
      const value = searchParams.get(key);
      result[key] = value || params[key];
    }
    return result;
  }
  return params;
}
