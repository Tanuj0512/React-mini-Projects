import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRcode() {
  const [input, setInput] = useState("");
  const [qrcode, setQrCode] = useState("");

  function handleGenrateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <div className="QR-genetor">
        <h1>QR code generator</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
        />

        <button onClick={handleGenrateQrCode}>Generate</button>
      </div>
      <div className="QR">
        <QRCode id="qr-code-value" value={qrcode} size={600} bgColor="#fff" />
      </div>
    </div>
  );
}
