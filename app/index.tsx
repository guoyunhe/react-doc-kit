import React, { ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';

createBrowserRouter([]);
export interface DocAppProps {
  pages: ComponentType[];
}

export function DocApp({ pages }: DocAppProps) {
  return <div></div>;
}
