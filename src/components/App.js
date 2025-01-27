import { useState, useEffect } from "react";
import { marked } from "marked";
import React from "react";

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

