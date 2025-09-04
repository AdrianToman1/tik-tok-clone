import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { feed } from "../data/feed";
import { VideoCard } from "./VideoCard";

export function Feed() {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedUp: () => setIndex(i => Math.min(i + 1, feed.length - 1)),
    onSwipedDown: () => setIndex(i => Math.max(i - 1, 0)),
    trackMouse: true
  });

  // Keyboard fallback
  useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowUp") setIndex(i => Math.max(i - 1, 0));
      if (e.key === "ArrowDown") setIndex(i => Math.min(i + 1, feed.length - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div {...handlers} className="overflow-hidden">
      <VideoCard {...feed[index]} />
    </div>
  );
}
