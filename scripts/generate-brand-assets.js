const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Simple ICO generator for Node.js from PNG buffers
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // Reserved: 2 bytes (0)
  // Type: 2 bytes (1 for ICO)
  // Count: 2 bytes (number of images)
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  const imageBuffers = [];

  for (const { buffer, width, height } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Image size
    entry.writeUInt32LE(offset, 12); // Offset to image data

    dirEntries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function run() {
  const sourceFavicon = path.resolve('public/favicon.png');
  const sourceLogo = path.resolve('public/logo.png');

  console.log('Generating favicon and app icons from:', sourceFavicon);

  // 1. Generate standard favicon sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngBuffersForIco = [];

  for (const size of [16, 32, 48]) {
    const buf = await sharp(sourceFavicon)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffersForIco.push({ buffer: buf, width: size, height: size });
  }

  const icoBuffer = createIco(pngBuffersForIco);
  fs.writeFileSync(path.resolve('public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.resolve('src/app/favicon.ico'), icoBuffer);
  console.log('✓ Created public/favicon.ico and src/app/favicon.ico');

  // Next.js App Router icons
  await sharp(sourceFavicon).resize(32, 32).png().toFile(path.resolve('src/app/icon.png'));
  await sharp(sourceFavicon).resize(180, 180).png().toFile(path.resolve('src/app/apple-icon.png'));
  await sharp(sourceFavicon).resize(32, 32).png().toFile(path.resolve('public/favicon-32x32.png'));
  await sharp(sourceFavicon).resize(16, 16).png().toFile(path.resolve('public/favicon-16x16.png'));
  await sharp(sourceFavicon).resize(180, 180).png().toFile(path.resolve('public/apple-touch-icon.png'));
  await sharp(sourceFavicon).resize(192, 192).png().toFile(path.resolve('public/android-chrome-192x192.png'));
  await sharp(sourceFavicon).resize(512, 512).png().toFile(path.resolve('public/android-chrome-512x512.png'));
  console.log('✓ Created icon.png, apple-icon.png, and public app icons');

  // 2. Build the ultra-professional 1200x630 OpenGraph / WhatsApp Share Image
  console.log('Building high-resolution OpenGraph share card (1200x630)...');

  // Prepare a resized emblem with subtle glow
  const emblemSize = 340;
  const emblemBuffer = await sharp(sourceFavicon)
    .resize(emblemSize, emblemSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create SVG overlay for sharp vector text and high-tech corporate branding
  const svgOverlay = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#050B18" />
        <stop offset="50%" stop-color="#0A1628" />
        <stop offset="100%" stop-color="#06121E" />
      </linearGradient>

      <radialGradient id="glowBlue" cx="15%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#0284C7" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#0284C7" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="glowGreen" cx="85%" cy="70%" r="45%">
        <stop offset="0%" stop-color="#10B981" stop-opacity="0.20" />
        <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
      </radialGradient>

      <linearGradient id="badgeBorder" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00A86B" />
        <stop offset="100%" stop-color="#0284C7" />
      </linearGradient>

      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#E2E8F0" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)" />
    <circle cx="200" cy="200" r="350" fill="url(#glowBlue)" />
    <circle cx="1000" cy="450" r="300" fill="url(#glowGreen)" />

    <!-- Subtle Tech Grid Line -->
    <line x1="80" y1="530" x2="1120" y2="530" stroke="#1E293B" stroke-width="1.5" />

    <!-- Top Badge -->
    <g transform="translate(480, 85)">
      <rect x="0" y="0" width="380" height="34" rx="17" fill="#062820" stroke="#10B981" stroke-width="1.2" stroke-opacity="0.6" />
      <circle cx="18" cy="17" r="4" fill="#10B981" />
      <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#34D399" letter-spacing="1.5">
        INDIA'S B2B CIRCULAR PLATFORM
      </text>
    </g>

    <!-- Main Title -->
    <text x="480" y="185" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Outfit', sans-serif" font-size="54" font-weight="800" fill="#FFFFFF" letter-spacing="-1">
      CIRKAL OF E-WASTE
    </text>

    <!-- Subtitle / Value Prop -->
    <text x="480" y="235" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="600" fill="#38BDF8">
      IT Asset Disposition • Refurbishment • Resource Recovery
    </text>

    <text x="480" y="278" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#94A3B8">
      Helping Indian enterprises recover value from retired hardware with
    </text>
    <text x="480" y="304" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#94A3B8">
      certified data security and 100% compliant closed-loop recycling.
    </text>

    <!-- 3 Key Pillars / Badges -->
    <g transform="translate(480, 350)">
      <!-- Pillar 1 -->
      <rect x="0" y="0" width="195" height="52" rx="12" fill="#0F1F38" stroke="#1E3A5F" stroke-width="1" />
      <text x="16" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#38BDF8" letter-spacing="0.5">DATA SECURITY</text>
      <text x="16" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">NIST 800-88 Wiped</text>

      <!-- Pillar 2 -->
      <rect x="210" y="0" width="200" height="52" rx="12" fill="#0F2B22" stroke="#184E3F" stroke-width="1" />
      <text x="226" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#34D399" letter-spacing="0.5">VALUE RECOVERY</text>
      <text x="226" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Up to 3x Scrap Value</text>

      <!-- Pillar 3 -->
      <rect x="425" y="0" width="215" height="52" rx="12" fill="#0F1F38" stroke="#1E3A5F" stroke-width="1" />
      <text x="441" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#A78BFA" letter-spacing="0.5">COMPLIANCE</text>
      <text x="441" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">CPCB Authorized Hub</text>
    </g>

    <!-- Bottom Bar -->
    <g transform="translate(80, 560)">
      <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8">
        cirkalofewaste.com
      </text>
      <text x="165" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#64748B">
        • Mumbai • Bengaluru • Delhi NCR • Pan-India Logistics
      </text>
    </g>

    <g transform="translate(980, 560)">
      <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#34D399">
        ✓ ISO &amp; ESG Ready
      </text>
    </g>

    <!-- Subtle inner frame -->
    <rect x="20" y="20" width="1160" height="590" rx="24" fill="none" stroke="#334155" stroke-width="1" stroke-opacity="0.4" />
  </svg>
  `;

  // Composite the SVG + the brand logo emblem into 1200x630
  const baseImg = await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: emblemBuffer,
        top: 145,
        left: 90,
      }
    ])
    .png()
    .toBuffer();

  // Save to src/app/opengraph-image.png and public/og-image.png
  fs.writeFileSync(path.resolve('src/app/opengraph-image.png'), baseImg);
  fs.writeFileSync(path.resolve('src/app/twitter-image.png'), baseImg);
  fs.writeFileSync(path.resolve('public/og-image.png'), baseImg);
  console.log('✓ Created src/app/opengraph-image.png, twitter-image.png, and public/og-image.png');

  // Also create a lightweight JPEG version for public/og-default.jpg (optimized for WhatsApp mobile previews under 250KB)
  await sharp(baseImg)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.resolve('public/og-default.jpg'));
  console.log('✓ Created public/og-default.jpg');

  // Square version for WhatsApp square preview (600x600)
  const squareSvg = `
  <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="#0A1628" />
    <circle cx="300" cy="270" r="220" fill="#0284C7" fill-opacity="0.2" />
    <text x="300" y="470" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="30" font-weight="800" fill="#FFFFFF">
      CIRKAL OF E-WASTE
    </text>
    <text x="300" y="505" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#38BDF8">
      IT Asset Disposition &amp; Circular Recovery
    </text>
    <text x="300" y="535" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" fill="#94A3B8">
      cirkalofewaste.com
    </text>
  </svg>
  `;
  const squareEmblem = await sharp(sourceFavicon)
    .resize(280, 280, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const squareImg = await sharp(Buffer.from(squareSvg))
    .composite([
      {
        input: squareEmblem,
        top: 100,
        left: 160,
      }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync(path.resolve('public/og-square.png'), squareImg);
  console.log('✓ Created public/og-square.png');

  console.log('\nAll brand and social preview assets generated successfully!');
}

run().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
