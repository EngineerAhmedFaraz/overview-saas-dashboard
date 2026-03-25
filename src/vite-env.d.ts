/// <reference types="vite/client" />

// Allow importing CSS files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For side-effect imports (import './index.css')
declare module '*.css' {
  export {};
}