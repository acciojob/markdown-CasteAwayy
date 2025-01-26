import { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
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
    let md = new MarkdownIt();
    let currPrev = md.render(markdown);
    setPreview(currPrev);
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
          rows={20}
          value={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div className="preview-container">
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>
    </div>
  );
}

