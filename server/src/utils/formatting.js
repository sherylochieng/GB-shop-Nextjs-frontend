// Data formatting utility functions

export function centsToNaira(cents) {
  return cents / 100;
}

export function nairaToCents(naira) {
  return Math.round(naira * 100);
}

export function formatPrice(cents) {
  return `₦${(cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatDatetime(date) {
  if (!date) return null;
  const d = new Date(date);
  return d.toLocaleString("en-US");
}