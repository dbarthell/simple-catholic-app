/**
 * main.js
 * Entry point: imports data, renders the timeline, wires up filters.
 */

import { quotations } from './data/quotations.js';
import { renderTimeline } from './components/timeline.js';
import { initFilters } from './components/filters.js';
import './style.css';

// Ensure quotations are sorted chronologically (they should be, but be safe)
const sorted = [...quotations].sort((a, b) => a.yearWritten - b.yearWritten);

// Render
const timeline = document.getElementById('timeline');
renderTimeline(timeline, sorted);

// Wire filters
const filterBar = document.querySelector('.filter-bar');
initFilters(filterBar);
