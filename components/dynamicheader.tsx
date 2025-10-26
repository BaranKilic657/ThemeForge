"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import all headers
const headers = {
  header_classic: dynamic(() => import("@/headers/header_classic")),
  header_centernav: dynamic(() => import("@/headers/header_centernav")),
  header_compacticons: dynamic(() => import("@/headers/header_compacticons")),
  header_duallayer: dynamic(() => import("@/headers/header_duallayer")),
  header_elevatedcard: dynamic(() => import("@/headers/header_elevatedcard")),
  header_floatingnav: dynamic(() => import("@/headers/header_floatingnav")),
  header_glassnav: dynamic(() => import("@/headers/header_glassnav")),
  header_gradienthero: dynamic(() => import("@/headers/header_gradienthero")),
  header_interactive: dynamic(() => import("@/headers/header_interactive")),
  header_minimalbar: dynamic(() => import("@/headers/header_minimalbar")),
  header_pulse: dynamic(() => import("@/headers/header_pulse")),
  header_revealslide: dynamic(() => import("@/headers/header_revealslide")),
  header_segmented: dynamic(() => import("@/headers/header_segmented")),
  header_splitaccent: dynamic(() => import("@/headers/header_splitaccent")),
  header_underlinenav: dynamic(() => import("@/headers/header_underlinenav")),
  header_timeline: dynamic(() => import("@/headers/header_timeline")),
  header_wavebar: dynamic(() => import("@/headers/header_wavebar")),
  header_diagonalsplit: dynamic(() => import("@/headers/header_diagonalsplit")),
  header_scrollshrink: dynamic(() => import("@/headers/header_scrollshrink")),
  header_centerreveal: dynamic(() => import("@/headers/header_centerreveal")),
};

export default function DynamicHeader() {
  const [currentHeader, setCurrentHeader] = useState<string>("header_duallayer");

  useEffect(() => {
    // Load saved header from localStorage
    const savedHeader = localStorage.getItem("header") || "header_duallayer";
    setCurrentHeader(savedHeader);

    // Listen for header changes
    const handleHeaderChange = (e: CustomEvent) => {
      setCurrentHeader(e.detail);
    };

    window.addEventListener("headerChange", handleHeaderChange as EventListener);
    return () => {
      window.removeEventListener("headerChange", handleHeaderChange as EventListener);
    };
  }, []);

  const HeaderComponent = headers[currentHeader as keyof typeof headers] || headers.header_duallayer;

  return <HeaderComponent />;
}
