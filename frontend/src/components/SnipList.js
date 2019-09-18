// 1.Request the data from our server
// 2. hold that data in state so that it will be passed down to our snips
// 3. render Snips.

import React from 'react';
import Snip from './Snip';

const snippetData = [
  {
    id: 1,
    code: 'const america = 1776',
    title: 'freedome',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 3,
    code: 'const america = 1776',
    title: 'freedome',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
];

export default function SnipList({ snippets }) {
  return (
    <section id="snippets">
      {snippets.map(snippet => (
        <Snip key={snippet.id} snippet={snippet} />
      ))}
    </section>
  );
}
