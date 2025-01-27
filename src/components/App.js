import { useState, useEffect } from "react";
import React from "react";
import { marked } from "marked";
import './../styles/styles.css'

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  useEffect(() => {
    const rawMarkup = marked(markdown);
    setHtml(rawMarkup);
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default App;

