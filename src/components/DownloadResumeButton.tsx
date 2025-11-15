"use client";
import * as React from "react";

export default function DownloadResumeButton({ className = "" }: { className?: string }) {
  const href = "/resume/lohith-muttamsetty-resume.pdf";
  return (
    <a
      href={href}
      download
      className={"inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0 " + className}
      aria-label="Download Resume (PDF)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/></svg>
      Download Resume
    </a>
  );
}