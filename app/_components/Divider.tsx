// Neon horizontal rule placed between sections. No text, no markers.
export function Divider() {
  return (
    <div className="wrap" style={{ paddingBlock: 6 }}>
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.4) 16%, rgba(167,139,250,0.6) 50%, rgba(56,189,248,0.4) 84%, transparent)",
          boxShadow: "0 0 16px 1px rgba(124,92,246,0.3)",
        }}
      />
    </div>
  );
}
