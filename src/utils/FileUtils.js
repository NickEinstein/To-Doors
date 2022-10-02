/**
 *
 * @param {string} dataUrl
 * @returns
 */
export function getBase64FileType(dataUrl) {
  if (dataUrl === undefined) {
    return "";
  }
  const fileType = dataUrl.substring(
    dataUrl.indexOf("/") + 1,
    dataUrl.indexOf(";base64")
  );
  return fileType;
}

export function downloadFile(blob, fileName = "file") {
  if (blob instanceof Blob) {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  }
}

/**
 *
 * @param {Blob} blob
 */
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    if (blob instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    } else {
      resolve("");
    }
  });
}
