"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import all pages
const pages = {
  showcase: dynamic(() => import("../app/page_showcase")),
  home_1: dynamic(() => import("@/home/home_1")),
  home_2: dynamic(() => import("@/home/home_2")),
  home_3: dynamic(() => import("@/home/home_3")),
  home_4: dynamic(() => import("@/home/home_4")),
  home_5: dynamic(() => import("@/home/home_5")),
  home_6: dynamic(() => import("@/home/home_6")),
  home_7: dynamic(() => import("@/home/home_7")),
  home_8: dynamic(() => import("@/home/home_8")),
  home_9: dynamic(() => import("@/home/home_9")),
  home_10: dynamic(() => import("@/home/home_10")),
  about_1: dynamic(() => import("@/about/about_1")),
  about_2: dynamic(() => import("@/about/about_2")),
  about_3: dynamic(() => import("@/about/about_3")),
  about_4: dynamic(() => import("@/about/about_4")),
  about_5: dynamic(() => import("@/about/about_5")),
  about_6: dynamic(() => import("@/about/about_6")),
};

export default function DynamicPage() {
  const [currentPage, setCurrentPage] = useState<string>("showcase");

  useEffect(() => {
    // Load saved page from localStorage
    const savedPage = localStorage.getItem("page") || "showcase";
    setCurrentPage(savedPage);

    // Listen for page changes
    const handlePageChange = (e: CustomEvent) => {
      setCurrentPage(e.detail);
    };

    window.addEventListener("pageChange", handlePageChange as EventListener);
    return () => {
      window.removeEventListener("pageChange", handlePageChange as EventListener);
    };
  }, []);

  // Render the selected page
  const PageComponent = pages[currentPage as keyof typeof pages] || pages.showcase;
  return <PageComponent />;
}
