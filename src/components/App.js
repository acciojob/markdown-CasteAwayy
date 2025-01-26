import { useState, useEffect } from "react";
import React from "react";
import "./../styles/styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview-container">
        <div className="preview">{preview}</div>
      </div>
    </div>
  );
}
