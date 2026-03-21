import fs from 'fs';
import path from 'path';

async function updateQrCode() {
  const data = `BEGIN:VCARD
VERSION:3.0
FN:Ken Chan (Kwan Wing)
TEL;TYPE=CELL:(852) 6590 9479
EMAIL:kenchanjp2024@gmail.com
URL:https://kwanwing.me
END:VCARD`;

  const encodedData = encodeURIComponent(data);
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodedData}`;

  console.log('📡 Fetching new QR code from API...');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch QR code: ${response.statusText}`);
  }

  const buffer = await response.arrayBuffer();
  const filePath = path.resolve(process.cwd(), 'public/qrcode.jpg');
  
  fs.writeFileSync(filePath, Buffer.from(buffer));
  console.log(`✅ QR code updated at ${filePath}`);
}

updateQrCode().catch(console.error);
