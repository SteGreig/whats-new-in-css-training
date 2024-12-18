"use client";

import React from 'react'
import {Refractor, registerLanguage} from 'react-refractor'

import "../prism.css";

// Load any languages you want to use from `refractor`
import css from 'refractor/lang/css.js'
import markup from 'refractor/lang/markup.js'

// Then register them
registerLanguage(css)
registerLanguage(markup)


interface CodeBlockProps {
  code: string;
  language: string; // "css", "html", etc.
  //highlightedLines?: number[]; // Lines to highlight
  wrap?: boolean;
  classes?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, wrap, classes }) => {
  return (
    <div className={`text-base ${classes} ${wrap && 'wrap-text'}`}>
      <Refractor language={language} value={code} />
    </div>
  );
};

export default CodeBlock;
