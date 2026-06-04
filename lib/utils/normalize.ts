export function normalizeCompany(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/(inc|llc|ltd|india|pvt)/g, "")
    .replace(/\s+/g, "");
}