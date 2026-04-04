(function () {
  const profile = window.SITE_PROFILE || {
    displayName: 'Sun-hong Min',
    links: {
      cv: 'https://drive.google.com/file/d/1azvyG5wazMRT2NqQeSNAhtI7xoIplnws/view',
      lab: 'https://sites.google.com/view/inslab',
      github: 'https://github.com/devminsh02'
    }
  };

  const SECTION_MAP = {
    cv: { id: 'cv', label: 'CV' },
    robotics: { id: 'robotics', label: 'ROBOTICS' },
    llm: { id: 'llm', label: 'LLM' },
    etc: { id: 'etc', label: 'ETC' }
  };

  const reviews = Array.isArray(window.REVIEW_DATA) ? window.REVIEW_DATA.slice() : [];
  const selectedReviewKey = 'dimension-selected-review';
  const selectedSectionKey = 'dimension-selected-review-section';

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeSection(value) {
    const key = String(value || '').trim().toLowerCase();
    return SECTION_MAP[key] ? key : 'etc';
  }

  function inferSection(item) {
    if (item && item.section) return normalizeSection(item.section);

    const filePath = String(item && item.filePath ? item.filePath : '');
    const parts = filePath.split('/').filter(Boolean);
    for (let i = 0; i < parts.length; i += 1) {
      if (SECTION_MAP[parts[i]]) return parts[i];
    }

    return 'etc';
  }

  function sectionLabel(section) {
    return SECTION_MAP[normalizeSection(section)].label;
  }

  function formatMeta(item) {
    return [item.date, item.venue, item.year].filter(Boolean).join(' · ');
  }

  function formatReviewMeta(item) {
    return [item.authors, item.venue, item.date, item.year].filter(Boolean).join(' · ');
  }

  function renderTags(tags) {
    return (tags || []).map(function (tag) {
      return '<span class="tag">' + escapeHtml(tag) + '</span>';
    }).join('');
  }

  function compareReviews(a, b) {
    const aDate = String(a && a.date ? a.date : '');
    const bDate = String(b && b.date ? b.date : '');
    if (aDate !== bDate) return aDate < bDate ? 1 : -1;
    return String(a && a.title ? a.title : '').localeCompare(String(b && b.title ? b.title : ''));
  }

  reviews.forEach(function (item) {
    item.section = inferSection(item);
  });
  reviews.sort(compareReviews);

  function applyProfile() {
    const title = document.getElementById('site-name');
    const linkMap = [
      { id: 'cv-link', value: profile.links && profile.links.cv },
      { id: 'lab-link', value: profile.links && profile.links.lab },
      { id: 'github-link', value: profile.links && profile.links.github }
    ];

    if (title) title.textContent = profile.displayName || 'Sun-hong Min';
    document.title = profile.displayName || 'Sun-hong Min';

    linkMap.forEach(function (item) {
      const anchor = document.getElementById(item.id);
      if (!anchor || !item.value) return;
      anchor.href = item.value;
      if (/^https?:\/\//i.test(item.value)) {
        anchor.target = '_blank';
        anchor.rel = 'noopener';
      }
    });
  }

  function saveSelection(id, section) {
    const normalizedSection = normalizeSection(section);
    try {
      sessionStorage.setItem(selectedReviewKey, id || '');
      sessionStorage.setItem(selectedSectionKey, normalizedSection);
    } catch (error) {
      window.__selectedReviewId = id;
      window.__selectedReviewSection = normalizedSection;
    }
  }

  function getStoredSelection() {
    try {
      return {
        id: sessionStorage.getItem(selectedReviewKey) || window.__selectedReviewId || (reviews[0] && reviews[0].id),
        section: normalizeSection(sessionStorage.getItem(selectedSectionKey) || window.__selectedReviewSection || (reviews[0] && reviews[0].section) || 'etc')
      };
    } catch (error) {
      return {
        id: window.__selectedReviewId || (reviews[0] && reviews[0].id),
        section: normalizeSection(window.__selectedReviewSection || (reviews[0] && reviews[0].section) || 'etc')
      };
    }
  }

  function findReview(id) {
    return reviews.find(function (review) {
      return review.id === id;
    }) || reviews[0] || null;
  }

  function buildCardHtml(item, index, section) {
    return [
      '<section class="review-card">',
        '<div class="review-card-header">',
          '<div>',
            '<p class="meta">' + escapeHtml(formatMeta(item)) + '</p>',
            '<h3>' + escapeHtml(item.title) + '</h3>',
          '</div>',
          '<div class="review-index">' + escapeHtml(sectionLabel(section)) + ' · ' + String(index + 1).padStart(2, '0') + '</div>',
        '</div>',
        '<p class="review-summary">' + escapeHtml(item.summary || 'Markdown review entry.') + '</p>',
        '<div class="tags">' + renderTags(item.tags) + '</div>',
        '<div class="review-actions">',
          '<a href="#review" class="button small review-launch" data-review-id="' + escapeHtml(item.id) + '" data-review-section="' + escapeHtml(section) + '">Open review</a>',
          '<a href="' + escapeHtml(item.filePath) + '" class="button small" target="_blank" rel="noopener">Open .md</a>',
        '</div>',
      '</section>'
    ].join('');
  }

  function renderSectionList(section) {
    const key = normalizeSection(section);
    const container = document.getElementById(key + '-review-list');
    const counter = document.getElementById(key + '-review-count');
    if (!container) return;

    const items = reviews
      .filter(function (item) {
        return normalizeSection(item.section) === key;
      })
      .slice()
      .sort(compareReviews);

    if (counter) {
      counter.textContent = items.length + (items.length === 1 ? ' entry' : ' entries');
    }

    if (!items.length) {
      container.innerHTML = '<div class="empty-state">No markdown review entries yet.</div>';
      return;
    }

    container.innerHTML = items.map(function (item, index) {
      return buildCardHtml(item, index, key);
    }).join('');
  }

  function renderAllSectionLists() {
    Object.keys(SECTION_MAP).forEach(renderSectionList);
  }

  function renderReview(id, section) {
    const item = findReview(id);
    const title = document.getElementById('review-title');
    const sectionEl = document.getElementById('review-section');
    const meta = document.getElementById('review-meta');
    const tags = document.getElementById('review-tags');
    const content = document.getElementById('review-content');
    const rawLink = document.getElementById('review-raw-link');
    const backLink = document.getElementById('review-back-link');

    if (!item || !title || !content) return;

    const resolvedSection = normalizeSection(item.section || section || 'etc');
    saveSelection(item.id, resolvedSection);

    if (sectionEl) sectionEl.textContent = sectionLabel(resolvedSection);
    title.textContent = item.title || 'Review';
    if (meta) meta.textContent = formatReviewMeta(item);
    if (tags) tags.innerHTML = renderTags(item.tags);
    content.innerHTML = item.html || '<p>No review content available.</p>';
    if (rawLink) rawLink.href = item.filePath || '#';
    if (backLink) {
      backLink.href = '#' + resolvedSection;
      backLink.textContent = 'Back to ' + sectionLabel(resolvedSection);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyProfile();
    renderAllSectionLists();

    const selection = getStoredSelection();
    renderReview(selection.id, selection.section);

    document.addEventListener('click', function (event) {
      const trigger = event.target.closest('.review-launch');
      if (!trigger) return;

      event.preventDefault();
      const id = trigger.getAttribute('data-review-id');
      const section = trigger.getAttribute('data-review-section');
      renderReview(id, section);
      if (location.hash !== '#review') {
        location.hash = '#review';
      }
    });

    window.addEventListener('hashchange', function () {
      if (location.hash === '#review') {
        const current = getStoredSelection();
        renderReview(current.id, current.section);
      }
    });
  });
})();
