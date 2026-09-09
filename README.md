# For You — a little interactive love letter

A private, one-page site built to be opened from a QR code: an opening
screen, your story, things you love about her, a photo gallery, a
personal letter, and a final question. No backend, nothing tracked,
nothing sent anywhere — it's just a static site.

## 1. Run it locally

```
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 2. Make it yours

Everything you need to change lives in **one file**:

```
src/data/content.ts
```

Open it and replace:

- `names` — her name and yours
- `opening` — the greeting on the first screen
- `storyMoments` — your timeline (date, photo, title, memory)
- `thingsILove` — the tap-to-reveal cards
- `photos` — the gallery
- `letter` — the long personal message
- `finalReveal` — the proposal text and button labels

You do not need to touch any other file to customize the content.

### Adding photos

Drop image files into `public/photos/` (JPG or WEBP, ~1200px on the
long side is plenty), then point to them from `content.ts` like:

```ts
photo: "/photos/your-file-name.jpg"
```

Until you add real files, placeholders just show as empty frames —
nothing breaks.

### Adding music

Put one audio file at:

```
public/music/song.mp3
```

That's it — the site already points to that path. Music starts (if the
browser allows it) right when she taps "Open it →", and there's a small
toggle in the top-right corner so she can turn it on or off anytime.
If you use a different filename or format, update `music.src` in
`content.ts` to match.

## 3. Build for production

```
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```
npm run preview
```

## 4. Deploy to Vercel

**Easiest way (no git required):**

```
npm install -g vercel
vercel
```

Follow the prompts (accept the defaults — Vercel auto-detects Vite).
When it's done, it gives you a live URL. Run `vercel --prod` to publish
it as your production deployment.

**Or via GitHub:**

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: Vite (auto-detected). Leave build settings as-is.
4. Deploy — you'll get a URL like `your-project.vercel.app`.

Once deployed, generate a QR code for that URL (any free QR generator
works) and that's what goes in the box.

## 5. A few notes

- It's mobile-first, but check it on a real phone before printing the
  QR code — fonts and spacing always look slightly different off a
  laptop screen.
- Refreshing the page just replays the opening screen — there's no
  state to lose, since nothing is saved anywhere.
- If you want the site private rather than just "unlisted," Vercel's
  free tier doesn't support password-protection — you'd need a paid
  plan for that, or you can rely on the URL being unguessable.
- Reduced-motion is respected automatically for anyone with that
  system setting on.

## Tech

React + TypeScript + Vite, Tailwind CSS v4, Framer Motion for
animation. No backend, no database, no analytics.
