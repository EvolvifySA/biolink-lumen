/* ═══════════════════════════════════
   DATA — Depoimentos
   Para adicionar: inclua um novo
   objeto no array tdata.
═══════════════════════════════════ */
const tdata = [
  { s: '★★★★★', t: '"Fiz selagem e ficou <strong>incrível</strong>! Os fios ficaram sedosos e brilhosos. Super recomendo!"', a: 'Ana Paula M.' },
  { s: '★★★★★', t: '"Atendimento <strong>super caprichado</strong> e resultado maravilhoso nas mechas. Amei a cor!"', a: 'Fernanda L.' },
  { s: '★★★★★', t: '"Fiz a reconstrução e o cabelo ficou <strong>transformado</strong>. Salvo do dano químico!"', a: 'Juliana S., 30 anos' },
  { s: '★★★★★', t: '"As meninas são <strong>muito atenciosas</strong> e super profissionais. Ambiente acolhedor demais."', a: 'Carla R.' },
  { s: '★★★★★', t: '"Botox capilar perfeito! Frizz <strong>zero</strong> e durou bem mais que eu esperava!"', a: 'Mariana T., 26 anos' },
  { s: '★★★★★', t: '"Morena iluminada <strong>exatamente como eu queria</strong>. Personalizado pro meu tom de pele. Lindo!"', a: 'Beatriz N.' },
];

function renderTestimonials() {
  const tt = document.getElementById('tt');
  if (!tt) return;
  [...tdata, ...tdata].forEach(t => {
    tt.innerHTML += `<div class="tc"><div class="tc-stars">${t.s}</div><div class="tc-txt">${t.t}</div><div class="tc-author">${t.a}</div></div>`;
  });
}

renderTestimonials();
