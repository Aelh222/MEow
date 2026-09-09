/**
 * ============================================================
 *  EDIT THIS FILE — it is the only file you need to touch
 *  to make the site yours.
 * ============================================================
 *
 * Everything below is placeholder content. Replace the strings
 * with your own words, dates, and photo paths.
 *
 * Photos: drop image files into /public/photos/ and reference
 * them here as "/photos/your-file-name.jpg".
 */

export const names = {
  her: "Maryam EL Arab",
  me: "Ali El Hajj",
};

export const opening = {
  greeting: "Hey baby... ❤️",
  subline: "I made something for you.",
  buttonLabel: "Open it →",
};

export type StoryMoment = {
  date: string;
  photo?: string; // "/photos/first-date.jpg"
  title: string;
  memory: string;
};

export const storyMoments: StoryMoment[] = [
  {
    date: "2023",
    photo: "/photos/2023.jpg",
    title: "The first time we met",
    memory:
      "That moment I realized you were becoming someone really special to me. The moment I layed eyes on you and thought, 'I want to know everything about this person.'",
  },
  {
    date: "27 September 2025",
    photo: "/photos/FirstKiss.jpeg",
    title: "The date that changed things",
    memory:
      "Our first kiss, a magical experience that I cherrish to this day. The moment I realized I wanted to be with you forever.",
  },
  {
    date: "21 December 2025",
    photo: "/photos/Cutest.jpg",
    title: "Ups and downs",
    memory:
      "We fought a lot, we cried a lot, but we always came back to each other. I realized that no matter what, I wanted to be with you.",
  },
  {
    date: "Today",
    photo: "/photos/Babies.jpg",
    title: "Here we are",
    memory:
      "And now, here we are, stronger than ever. I can't wait to see what the future holds for us.",
  },
];

export type LoveNote = {
  headline: string; // short line always visible on the card
  message: string; // revealed on tap
};

export const thingsILove: LoveNote[] = [
  {
    headline: "The way you make ordinary moments feel special.",
    message:
      "Whether it's a simple walk in the park or a quiet evening at home, you have a way of turning simple moments into cherished memories. Your presence alone makes everything brighter.",
  },
  {
    headline: "Your little habits you probably don't notice.",
    message:
    "The way you smirk whenever you find something amusing, the way you hum your favorite songs under your breath, and the way you always make the simplest things seem extraordinary. These little quirks of yours are what makes you uniquely you, and I adore every single one of them.",
  },
  {
    headline: "How comfortable it feels just being myself around you.",
    message:
      "There is no room for judgment or pretense with you. I can be my true self, and that is a rare and beautiful thing.",
  },
  {
    headline: "The way you always care about the people around you.",
    message: "Your kindness and empathy are boundless. You have a way of making everyone feel seen and valued, and that is a quality I deeply admire. Ill never forget what you did for me on my birthday, genuinely made me feel special and loved.",
  },
  {
    headline: "How you remember things I mentioned once, in passing.",
    message: "The way you remember the little details about me, even when I dont think Ive mentioned them, shows how much you care and pay attention. it makes me feel truly seen and appreciated.",
  },
  {
    headline: "The way you say my name when you're annoyed with me.",
    message: "The way u said my name when u heard my voice in the corridor the other day when I was playing with your brother , genuinely made my heart flutter.",
  },
];

export type Photo = {
  src: string; // "/photos/beach-day.jpg"
  caption: string;
  rotation?: number; // degrees, small values like -4 to 4 look best
};

export const photos: Photo[] = [
  { src: "/photos/memory1.png", caption: "Walk in the rain", rotation: -3 },
  { src: "/photos/memory2.png", caption: "First movie together", rotation: 2 },
  { src: "/photos/memory3.png", caption: "Mutually agreed best date ❤️", rotation: -2 },
  { src: "/photos/memory4.png", caption: "Months of waiting", rotation: 4 },
  { src: "/photos/memory5.png", caption: "Baby Jable skateboard", rotation: -1 },
  { src: "/photos/memory6.png", caption: "Cute pizza date", rotation: 3 },
];

export const letter = {
  heading: "To the girl whom hold a special place in my life",
  signOff: "Yours always",
  paragraphs: [
    "I dont know what the future has planned for us, but I know that I would love to find out with you",
    "There are people who come into our lives and leave a memory, and then there are people who make us want to create a whole collection of them. With you I dont see myself reminiscing moments weve already had, I find myself imagining what haven't happened yet. ",
    "I don't want something perfect. I want something real. Something where we can be ourselves, grow together, support each other, and still choose each other even on the ordinary days.",
    "Some people become memories, some become chapters. and somehow, you already feel like a whole book to me. I want to write it with you, page by page, chapter by chapter, and see where our story takes us.",
  ],
};

export const finalReveal = {
  leadIn: "So there's one thing I've been wanting to ask you...",
  question: "Will you be my girlfriend? ❤️",
  yesLabel: "Yes ❤️",
  alsoYesLabel: "Of course 🥹",
  celebration: "Then I guess this is officially our new beginning ❤️",
};

export const music = {
  // Put your audio file at /public/music/song.mp3
  src: "/music/Rosyln.mp3",
  title: "Our song", // shown as a small label near the toggle, optional
};
