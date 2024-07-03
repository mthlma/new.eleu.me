function setLanguage(lang) {
  fetch(`../locales/${lang}.json`)
    .then(response => response.json())
    .then(translateContent)
    .catch(err => console.error(`Error loading language file: ${err}`));
}

function translateContent(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[key] || el.textContent;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(navigator.language.split('-')[0] || "en");
});