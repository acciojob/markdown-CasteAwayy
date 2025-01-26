import { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import React from "react";
import "./../styles/styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Hello World");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    let md = new MarkdownIt();
    let currPrev = md.render(markdown);
    setPreview(currPrev);
  }, [markdown]);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="textarea-container">
        <textarea
          className="textarea"
          rows={20}
          onChange={handleMarkdownChange}
        >
          {markdown}
        </textarea>
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

