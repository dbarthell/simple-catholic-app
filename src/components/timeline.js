/**
 * timeline.js
 * Builds the timeline DOM from the quotation data array.
 */

const AUTHOR_LABELS = {
  aquinas: 'Thomas Aquinas',
  newman: 'John Henry Newman',
};

/**
 * Creates a single quote card DOM element.
 * @param {Object} q - Quotation object
 * @param {number} index - Position in the array (used for left/right alternation)
 * @returns {HTMLElement}
 */
function createTimelineItem(q, index) {
  const side = index % 2 === 0 ? 'left' : 'right';

  const item = document.createElement('div');
  item.className = `timeline-item ${side}`;
  item.dataset.author = q.author;
  item.setAttribute('aria-label', `${AUTHOR_LABELS[q.author]}, ${q.yearLabel}`);

  const card = document.createElement('article');
  card.className = 'quote-card';

  // Header bar
  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <span class="card-header-author">${AUTHOR_LABELS[q.author]}</span>
    <span class="card-header-year">${q.yearLabel}</span>
  `;

  // Body
  const body = document.createElement('div');
  body.className = 'card-body';

  const quote = document.createElement('p');
  quote.className = 'card-quote';
  quote.textContent = q.quote;

  const source = document.createElement('p');
  source.className = 'card-source';
  source.textContent = `— ${q.source}`;

  const context = document.createElement('p');
  context.className = 'card-context';
  context.textContent = q.context;

  body.appendChild(quote);
  body.appendChild(source);
  body.appendChild(context);

  card.appendChild(header);
  card.appendChild(body);
  item.appendChild(card);

  return item;
}

/**
 * Renders all quotations into the timeline container.
 * @param {HTMLElement} container - The #timeline element
 * @param {Object[]} quotations - Sorted array of quotation objects
 */
export function renderTimeline(container, quotations) {
  container.innerHTML = '';
  quotations.forEach((q, i) => {
    const item = createTimelineItem(q, i);
    container.appendChild(item);
  });
}
