import { useState, useEffect } from "react";
import React from "react";
import MarkdownIt from "markdown-it";
import './../styles/styles.css'


const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const md = new MarkdownIt();

  useEffect(() => {
    const rawHtml = md.render(markdown);
    setHtml(rawHtml);
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
        placeholder="Type Markdown here..."
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default App;


