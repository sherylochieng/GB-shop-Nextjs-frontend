// Common validation utility functionss

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function trimCustomerData(customer) {
  return {
    name: customer?.name?.trim(),
    email: customer?.email?.trim(),
    phone: customer?.phone?.trim(),
    address: customer?.address?.trim(),
  };
}

export function validateCheckoutInput(items, customer, paymentChannel) {
  const trimmed = trimCustomerData(customer);

  const errors = [];

  if (!trimmed.name) errors.push("Name is required");
  if (!trimmed.email) errors.push("Email is required");
  if (trimmed.email && !isValidEmail(trimmed.email)) {
    errors.push("Invalid email format");
  }
  if (!Array.isArray(items) || items.length === 0) {
    errors.push("Cart is empty");
  }
  if (!paymentChannel) errors.push("Payment channel is required");

  return { valid: errors.length === 0, errors, data: trimmed };
}