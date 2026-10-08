// Tests voor public/mandje.js: één stuk uit het mandje halen.
// Starten doe je met: npm test

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { haalEenWeg } from '../public/mandje.js';

test('van 3 stuks naar 2 na één klik op min', () => {
  const mandje = new Map([['hoesje', 3]]);
  haalEenWeg(mandje, 'hoesje');
  assert.equal(mandje.get('hoesje'), 2);
});

test('bij het laatste stuk verdwijnt het product uit het mandje', () => {
  const mandje = new Map([['hoesje', 1]]);
  haalEenWeg(mandje, 'hoesje');
  assert.equal(mandje.has('hoesje'), false);
});
