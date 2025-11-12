import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // we'll reuse existing CSS reset if available

function UrlValidator() {
  const [url, setUrl] = useState("");

  // Validate URL using the URL constructor (safer than regex)
  const isValid = useMemo(() => {
    if (!url.trim()) return null; // empty input
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  }, [url]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🔗 URL Validator</h1>

      <input
        type="text"
        placeholder="Enter a URL (e.g. https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          ...styles.input,
          borderColor:
            isValid === true
              ? "#16a34a"
              : isValid === false
              ? "#dc2626"
              : "#d1d5db",
        }}
      />

      {isValid === null && (
        <p style={styles.message}>Start typing to validate a URL...</p>
      )}
      {isValid === true && (
        <p style={{ ...styles.message, color: "#16a34a" }}>
          ✅ Valid URL —{" "}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#16a34a", textDecoration: "underline" }}
          >
            open link
          </a>
        </p>
      )}
      {isValid === false && (
        <p style={{ ...styles.message, color: "#dc2626" }}>
          ❌ Invalid URL — include “https://” or “http://”
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, Roboto, sans-serif",
    padding: "20px",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#111827",
  },
  input: {
    width: "320px",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "2px solid #d1d5db",
    outline: "none",
    fontSize: "1rem",
    transition: "border-color 0.2s",
  },
  message: {
    marginTop: "14px",
    fontSize: "1rem",
  },
};

// ✅ Render directly (standalone)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UrlValidator />);

export default UrlValidator;
