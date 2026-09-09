import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Opening from "./components/Opening";
import OurStory from "./components/OurStory";
import ThingsILove from "./components/ThingsILove";
import PhotoGallery from "./components/PhotoGallery";
import PersonalMessage from "./components/PersonalMessage";
import FinalReveal from "./components/FinalReveal";
import MusicToggle from "./components/MusicToggle";
import AmbientDrift from "./components/AmbientDrift";
import { music } from "./data/content";

function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lock scrolling behind the opening screen so the reveal feels intentional.
  useEffect(() => {
    document.body.style.overflow = hasOpened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasOpened]);

  const handleOpen = () => {
    setHasOpened(true);

    // Try to start music right on this user gesture — mobile browsers
    // allow audio to start only in direct response to a tap like this one.
    // If the file isn't there yet, or playback is blocked, we fail quietly
    // and leave the toggle available for her to start it herself.
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false));
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.play().then(() => setMusicPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="relative min-h-dvh w-full bg-[color:var(--color-paper)]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <AmbientDrift count={40} />
      </div>
      <audio ref={audioRef} src={music.src} loop preload="none" />

      <AnimatePresence mode="wait">
        {!hasOpened && <Opening key="opening" onOpen={handleOpen} />}
      </AnimatePresence>

      {hasOpened && (
        <>
          <MusicToggle playing={musicPlaying} onToggle={toggleMusic} />
          <main>
            <OurStory />
            <ThingsILove />
            <PhotoGallery />
            <PersonalMessage />
            <FinalReveal />
          </main>
          <footer className="pb-10 pt-4 text-center text-xs text-[color:var(--color-ink)]/35">
            made with love, for you
          </footer>
        </>
      )}
    </div>
  );
}

export default App;