/**
 * filters.js
 * Wires up the author filter buttons to show/hide timeline cards.
 */

/**
 * Applies a filter to the timeline items.
 * @param {string} filter - "all" | "aquinas" | "newman"
 */
function applyFilter(filter) {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach((item) => {
    if (filter === 'all' || item.dataset.author === filter) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

/**
 * Initializes filter button click handlers.
 * @param {HTMLElement} filterBar - The .filter-bar element
 */
export function initFilters(filterBar) {
  const buttons = filterBar.querySelectorAll('.filter-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      applyFilter(filter);
    });
  });
}
