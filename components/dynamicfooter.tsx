"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import all footers
const footers = {
  footer_accentbar: dynamic(() => import("@/footers/footer_accentbar")),
  footer_aurora: dynamic(() => import("@/footers/footer_aurora")),
  footer_centerlogo: dynamic(() => import("@/footers/footer_centerlogo")),
  footer_classicgrid: dynamic(() => import("@/footers/footer_classicgrid")),
  footer_compactbar: dynamic(() => import("@/footers/footer_compactbar")),
  footer_diagonalsplit: dynamic(() => import("@/footers/footer_diagonalsplit")),
  footer_divideraccent: dynamic(() => import("@/footers/footer_divideraccent")),
  footer_duallayer: dynamic(() => import("@/footers/footer_duallayer")),
  footer_floatingcta: dynamic(() => import("@/footers/footer_floatingcta")),
  footer_glasspanel: dynamic(() => import("@/footers/footer_glasspanel")),
  footer_gradientwave: dynamic(() => import("@/footers/footer_gradientwave")),
  footer_interactivelinks: dynamic(() => import("@/footers/footer_interactivelinks")),
  footer_minimalcentered: dynamic(() => import("@/footers/footer_minimalcentered")),
  footer_mosaicgrid: dynamic(() => import("@/footers/footer_mosaicgrid")),
  footer_newslettercta: dynamic(() => import("@/footers/footer_newslettercta")),
  footer_scrollprogress: dynamic(() => import("@/footers/footer_scrollprogress")),
  footer_showcasegrid: dynamic(() => import("@/footers/footer_showcasegrid")),
  footer_splitaccent: dynamic(() => import("@/footers/footer_splitaccent")),
  footer_stackedinfo: dynamic(() => import("@/footers/footer_stackedinfo")),
  footer_taglinebar: dynamic(() => import("@/footers/footer_taglinebar")),
};

export default function DynamicFooter() {
  const [currentFooter, setCurrentFooter] = useState<string>("footer_taglinebar");

  useEffect(() => {
    // Load saved footer from localStorage
    const savedFooter = localStorage.getItem("footer") || "footer_taglinebar";
    setCurrentFooter(savedFooter);

    // Listen for footer changes
    const handleFooterChange = (e: CustomEvent) => {
      setCurrentFooter(e.detail);
    };

    window.addEventListener("footerChange", handleFooterChange as EventListener);
    return () => {
      window.removeEventListener("footerChange", handleFooterChange as EventListener);
    };
  }, []);

  const FooterComponent = footers[currentFooter as keyof typeof footers] || footers.footer_taglinebar;

  return <FooterComponent />;
}
