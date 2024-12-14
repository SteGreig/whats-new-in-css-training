"use client";

import React from 'react'
import {Refractor, registerLanguage} from 'react-refractor'

import "../prism.css";

// Load any languages you want to use from `refractor`
import css from 'refractor/lang/css.js'

// Then register them
registerLanguage(css)


interface CodeBlockProps {
  code: string;
  language: string; // "css", "html", etc.
  highlightedLines?: number[]; // Lines to highlight
  wrap?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, highlightedLines = [], wrap }) => {
  return (
    <div className={`text-base ${wrap && 'wrap-text'}`}>
      <Refractor language={language} value={code} />
    </div>
  );
};

export default CodeBlock;
