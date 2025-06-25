import Image from "next/image"

export default function WhiteSimplePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff", color: "#222", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 400, width: "100%", padding: 24, boxShadow: "0 2px 16px #eee", borderRadius: 16, background: "#fff", textAlign: "center" }}>
        <Image src="/logo.svg" alt="Fibralink Logo" width={80} height={80} style={{ margin: "0 auto 16px auto" }} />
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Fibralink</h1>
        <p style={{ fontSize: 16, marginBottom: 24 }}>
          專業企業光纖服務，為各類型企業提供高速、穩定、安全的網絡基建。
        </p>
        <div style={{ fontSize: 15, marginBottom: 8 }}>
          <b>電話：</b>2123 4567
        </div>
        <div style={{ fontSize: 15, marginBottom: 8 }}>
          <b>Email：</b>info@fibralink.com
        </div>
        <div style={{ fontSize: 15 }}>
          <b>地址：</b>39/F, Cambridge House, Taikoo Place, 979 King's Road, Quarry Bay, Hong Kong
        </div>
      </div>
    </main>
  )
} 