export default function generateInvoiceNo() {
  const randomLetters = Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase(); // Random letters
  const randomNumbers = Math.floor(Math.random() * 9000 + 1000); // Random 4-digit number
  return `INV-${randomLetters}-${randomNumbers}`;
}
