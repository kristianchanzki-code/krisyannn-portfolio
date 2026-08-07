"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      className="resume-print-button"
      onClick={() => window.print()}
      type="button"
    >
      <Printer size={16} />
      Print / Save PDF
    </button>
  );
}
