import { ImageResponse } from "next/og";

export const alt = "Kristian Bailo | Operations, Administrative Support, and Practical Tech Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ background: "#f4efe6", color: "#25231f", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "22px" }}><div style={{ width: 70, height: 70, borderRadius: 20, background: "#25231f", color: "#f4efe6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 27, fontWeight: 800 }}>KB</div><div style={{ fontSize: 28, fontWeight: 700 }}>Kristian Bailo</div></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 65, lineHeight: 1.05, fontWeight: 750, maxWidth: 950 }}>Practical digital tools for real everyday problems.</div><div style={{ fontSize: 25, marginTop: 28, color: "#625e55" }}>Operations, Administrative Support, and Practical Tech Builder</div></div>
      <div style={{ display: "flex", gap: "16px", fontSize: 20 }}><span style={{ padding: "12px 18px", border: "2px solid #25231f", borderRadius: 999 }}>PAMS</span><span style={{ padding: "12px 18px", border: "2px solid #25231f", borderRadius: 999 }}>SINKPESO</span></div>
    </div>,
    size,
  );
}
