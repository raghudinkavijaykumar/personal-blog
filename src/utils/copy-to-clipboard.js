export const copyToClipboard = (str) => {
  return window.navigator.clipboard.writeText(str);
};
