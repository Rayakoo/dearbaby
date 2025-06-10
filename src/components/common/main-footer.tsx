import React from "react";

const Footer = () => (
  <footer style={{ background: "#5F22D9", color: "#fff", padding: 0 }}>
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "48px 24px 32px 24px",
      maxWidth: 1200,
      margin: "0 auto"
    }}>
      {/* Logo & Description */}
      <div style={{ flex: "1 1 320px", minWidth: 260 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
          {/* <img
            src="logo.png"
            alt="Dearbaby Logo"
            style={{ width: 48, height: 48, marginRight: 12 }}
            
          /> */}
          <span style={{
            fontWeight: 700,
            fontSize: 28,
            color: "#FAEFFF"
          }}>Dearbaby</span>
        </div>
        <div style={{ color: "#EDE7F6", fontSize: 16, lineHeight: "1.6" }}>
          DearBaby dibuat untuk membantu pasangan suami istri dalam menghadapi kehamilan
        </div>
      </div>
      {/* Resources */}
      <div style={{ flex: "1 1 180px", minWidth: 160 }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Resources</div>
        <div style={{ marginBottom: 8 }}>Blog</div>
        <div style={{ marginBottom: 8 }}>Guides &amp; tutorials</div>
        <div>Help center</div>
      </div>
      {/* Company */}
      <div style={{ flex: "1 1 120px", minWidth: 100 }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Company</div>
        <div>About us</div>
      </div>
    </div>
    {/* Divider */}
    <div style={{
      borderTop: "1px solid #512DA8",
      margin: "0 0 0 0",
      width: "100%"
    }} />
    {/* Bottom bar */}
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 24px 16px 24px",
      maxWidth: 1200,
      margin: "0 auto",
      fontSize: 15,
      color: "#EDE7F6"
    }}>
      {/* Left: Language & links */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 18 }}>🌐</span>
          <span>English</span>
          <span style={{ fontSize: 10, marginLeft: 2 }}>▼</span>
        </div>
        <span>Terms &amp; privacy</span>
        <span>Security</span>
        <span>Status</span>
      </div>
      {/* Right: Social icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#" style={{ color: "#fff" }} aria-label="Facebook">
          <svg width="18" height="18" fill="currentColor"><path d="M17 1H1v16h8V11H7V9h2V7.5A2.5 2.5 0 0 1 11.5 5H14v2h-2.5A.5.5 0 0 0 11 7.5V9h3l-.5 2H11v6h6V1z"/></svg>
        </a>
        <a href="#" style={{ color: "#fff" }} aria-label="Twitter">
          <svg width="18" height="18" fill="currentColor"><path d="M17.316 4.243c.008.11.008.221.008.332 0 3.385-2.577 7.29-7.29 7.29A7.24 7.24 0 0 1 1 10.29c.21.025.417.034.634.034a5.13 5.13 0 0 0 3.18-1.095A2.57 2.57 0 0 1 2.36 7.13c.17.025.34.042.52.042.25 0 .5-.034.73-.1A2.57 2.57 0 0 1 1.51 4.57v-.033a2.6 2.6 0 0 0 1.16.325A2.57 2.57 0 0 1 1.8 2.13a7.29 7.29 0 0 0 5.29 2.68A2.57 2.57 0 0 1 14.13 2.57c0 .2-.025.4-.075.59A7.3 7.3 0 0 0 17 1.67a2.56 2.56 0 0 1-1.13 1.42A5.13 5.13 0 0 0 17.316 4.243z"/></svg>
        </a>
        <a href="#" style={{ color: "#fff" }} aria-label="LinkedIn">
          <svg width="18" height="18" fill="currentColor"><path d="M4.98 3.5C4.98 4.33 4.32 5 3.5 5S2 4.33 2 3.5 2.67 2 3.5 2s1.48.67 1.48 1.5zM2.5 6h2V16h-2V6zm7.5 0h-2v10h2v-5.5c0-1.38 2-1.5 2 0V16h2v-5.75c0-3.07-4-2.96-4 0V16z"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
