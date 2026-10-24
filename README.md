# VIVA Driving School website

A simple static website (HTML, CSS and JavaScript). No build step, no installs.
All 14 files sit together in one folder, with no sub-folders:
`README.md, index.html, style.css, script.js, hero.png, viva-logo.jpg, instructor.jpg, student-1.jpg, student-2.jpg, student-3.jpg, student-4.jpg, car-side.png, car-front.png, car-front-lights-on.png`
(The three `car-*.png` files are the little animated VIVA car. Keep them with the others.)

## 1. Preview on your computer
1. Unzip the file into a folder.
2. Double-click `index.html`. It opens in your browser.

## 2. Upload to GitHub
1. Sign in to github.com and click **New repository**. Give it a name and click **Create repository**.
2. Click **uploading an existing file**.
3. Drag in all 14 files from the unzipped folder (the files, not a folder around them).
4. Click **Commit changes**. `index.html` must be at the top level of the repository.

## 3. Put it online
**GitHub Pages**
1. In your repository, open **Settings > Pages**.
2. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
3. Wait a minute. Your site address appears at the top of the Pages screen.

**Vercel**
1. Sign in at vercel.com and click **Add New > Project**.
2. Import your GitHub repository.
3. Leave all settings as they are (Framework: Other, no build command) and click **Deploy**.

## 4. Change a lesson price
1. Open `script.js` and find `prices:` near the top.
2. Change the price text, for example `price: "£40"`.
3. Leave `price: ""` to show "Ask for a price". Save and re-upload the file.

## 5. Add an instructor
1. Save their photo in the same folder, for example `sara.jpg`.
2. In `script.js`, find `instructors:`. Copy the whole `{ ... }` block and paste it after the last one (keep the comma between blocks).
3. Change the name, photo, bio, languages, vehicle and so on. Empty fields are not shown.
4. Upload `sara.jpg` and `script.js`. The new card appears automatically.

## 6. Add passed-student photos
1. Save the photo in the same folder, for example `student-5.jpg`.
2. In `script.js`, find `students:` and add a line:
   `{ photo: "student-5.jpg", alt: "Short description" },`
3. Upload the photo and `script.js`.

## 7. Edit areas, test centres and FAQs
1. Open `script.js`.
2. **Areas:** edit the names in `areas:`.
3. **Test centres:** add verified names to `testCentres:`. The section stays hidden until you do.
4. **FAQs:** edit the `q` (question) and `a` (answer) in `faqs:`.

## 8. Change telephone, WhatsApp and Instagram
1. In `script.js`, find `business:` near the top.
2. Change `phone` (with +44), `phoneDisplay`, `whatsapp` (digits only, no +) and `instagram`.
3. Save and re-upload `script.js`. All buttons and links update.

## 9. Change a road shape
1. Open `index.html` and find `data-road="hills"` (the dashed lines under headings, and the one at the bottom of the hero).
2. Change the word to `straight`, `hills` or `curve`. Save and re-upload `index.html`.

## Notes
- The enquiry form opens WhatsApp with the message ready to send. It does not send messages by itself (there is no server).
- The hero picture is cropped with CSS to show the car and Tower Bridge; the original `hero.png` is unchanged.
- Editable content (phone, WhatsApp, Instagram, prices, instructors, student photos, areas, FAQs) is all at the top of `script.js`.
