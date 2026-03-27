/**
 * Triggers a file download in the browser.
 * @param data - Can be a string (URL) or a Blob (generated data)
 * @param fileName - The name the file will be saved as
 */
const downloadFile = (data: string | Blob, fileName: string): void => {
  // Create a hidden anchor element
  const link: HTMLAnchorElement = document.createElement('a');

  // If data is a Blob, create an Object URL; otherwise, use the string URL
  const url: string = data instanceof Blob ? URL.createObjectURL(data) : data;

  link.href = url;
  link.download = fileName;
  link.style.display = 'none'; // Ensure it's hidden

  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  if (data instanceof Blob) {
    URL.revokeObjectURL(url);
  }
};
