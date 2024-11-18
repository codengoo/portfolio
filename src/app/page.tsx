"use client";

import { Fira_Mono } from "next/font/google";
import { useEffect } from "react";
import SectionLink from "./components/link_section";
import Home from "./screens/home";

const fira_mono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Root() {
  useEffect(() => {
    const rootDoc = document.querySelector("#root") as HTMLDivElement;

    window.onmousemove = (ev) => {
      const x = ev.pageX;
      const y = ev.pageY;

      const styleValue = `radial-gradient(600px at ${x}px ${y}px, #1d4ed826, transparent 80%)`;

      if (rootDoc) rootDoc.style.background = styleValue;
    };

    return () => {
      window.onmousemove = null;
    };
  }, []);

  return (
    <div id="root">
      <div className="fixed bottom-10 right-10 z-10">
        <SectionLink
          title="nghiadt22.work@gmail.com"
          href="mailto:nghiadt22.work@gmail.com"
          direction="vertical"
          className={
            "text-sm lowercase tracking-widest font-normal leading-10 " +
            fira_mono.className
          }
        />
      </div>
      <Home />
    </div>
  );
}
