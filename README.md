# ARspire Tech: Company Portfolio

React + Vite + Framer Motion website, themed on the ARspire Tech logo (green and gold).

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build in /dist
```

## Edit content

Everything (company text, services, projects, contact details) is in `src/data.js`.
Replace the placeholder email and phone in `CONTACT` before going live.

## Deploy

Push to GitHub and import the repo in Vercel (framework preset: Vite).

## Project screenshots and videos

Put files in `public/projects/` and add them in `src/data.js`:

```js
{
  title: "Raah-e-Haq",
  image: "/projects/raah-e-haq.jpg",   // screenshot (also used as video poster)
  video: "/projects/raah-e-haq.mp4",   // optional, plays muted on loop
  ...
}
```

If neither is set, the card shows its icon. Keep images under ~300 KB (JPG/WebP) and videos under ~3 MB (MP4, 5-10 seconds).
