UM SID — Beverage Menu (bilingual, WhatsApp ordering)
=====================================================

1) Upload to Netlify
   - Go to https://app.netlify.com/drop
   - Drag the ZIP file (or the unzipped folder) onto the page.
   - index.html is at the root, so no settings need changing.
   - Netlify gives you a live URL, e.g. https://umsid-menu.netlify.app

2) WhatsApp number
   - File: app.js, first lines:
       const WHATSAPP_NUMBER = "201011112222";   // used for the wa.me link
       const DISPLAY_PHONE   = "010 1111 2222";  // shown on the page
   - The visible phone also appears in index.html (footer link).

3) Editing products and prices
   - File: app.js, the MENU array.
   - Each item has: id, cat, ar, en, and one of:
       price:    60                 -> single price
       prices:   [60, 90, 120]      -> "Choose Price" buttons
       variants: [{id, ar, en, price}, ...] -> labelled options
     Optional flavours: {labelAr, labelEn, options:[{id, ar, en}]}
   - Interface text (buttons, messages) is in the T object in app.js.

4) Table-specific links
   - Add ?table=NUMBER to the live URL:
       https://YOUR-SITE.netlify.app/?table=12
   - The table field is prefilled with 12 but stays editable.
   - Without the parameter, the guest types the table number.

5) QR code
   - Generate the QR code only after Netlify gives you the live URL.
   - One general QR (no parameter) or one QR per table (?table=N).

Notes
   - Pure HTML/CSS/JS. No build, no server, no database.
   - assets/logo.png is the original master logo file, unmodified.
