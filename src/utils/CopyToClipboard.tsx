export default function copyToClipboard(str: string) {
  return window.navigator.clipboard.writeText(str);
}
