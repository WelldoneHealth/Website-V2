import QRCode from "qrcode";

async function generateQR(text) {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default generateQR;
