'use strict';
// LPIPS gains (%) transcribed from the manuscript's practical-verification results (Figure 8).
const results = {
  4:  {easy:{bon:3.24, er:5.50}, normal:{bon:3.71, er:6.12}, hard:{bon:2.69, er:5.27}},
  16: {easy:{bon:3.78, er:7.12}, normal:{bon:5.83, er:8.01}, hard:{bon:4.64, er:7.71}},
  64: {easy:{bon:4.86, er:8.11}, normal:{bon:8.21, er:11.60}, hard:{bon:5.74, er:8.98}}
};
const buttons = [...document.querySelectorAll('[data-budget]')];
function showBudget(budget) {
  const data = results[budget];
  if (!data) return;
  buttons.forEach(button => {
    const selected = Number(button.dataset.budget) === budget;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  Object.entries(data).forEach(([difficulty, values]) => {
    for (const method of ['bon', 'er']) {
      const number = values[method];
      document.getElementById(`${difficulty}-${method}`).style.width = `${Math.min(number / 14 * 100, 100)}%`;
      document.getElementById(`${difficulty}-${method}-label`).textContent = `${number.toFixed(2)}%`;
    }
  });
}
buttons.forEach(button => button.addEventListener('click', () => showBudget(Number(button.dataset.budget))));
showBudget(64);
