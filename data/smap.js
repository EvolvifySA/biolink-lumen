/* ═══════════════════════════════════
   DATA — Seletor de Serviços (Home)
   Para adicionar: nova entrada no
   objeto smap + botão no HTML.
═══════════════════════════════════ */
const smap = {
  selagem: {
    r: '💎 Selagem',
    d: 'A selagem é um <strong>alisamento capilar premium</strong> que reduz o volume, elimina o frizz e deixa os fios mais alinhados e brilhosos. Perfeito para quem busca um resultado duradouro e profissional.<br><br><strong>A partir de R$150,00 · 3h a 4h</strong><br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Selagem." target="_blank">→ Agendar Selagem</a>'
  },
  botox: {
    r: '✨ Botox Capilar',
    d: 'O botox capilar oferece uma <strong>redução de volume mais suave</strong>, elimina o frizz e tem durabilidade média de 2 meses. Ideal para quem quer um resultado natural sem mudanças drásticas.<br><br><strong>A partir de R$110,00 · 2h30 a 3h30</strong><br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Botox%20Capilar." target="_blank">→ Agendar Botox Capilar</a>'
  },
  mechas: {
    r: '🌟 Mechas',
    d: 'As mechas loiras trazem <strong>luminosidade, sofisticação e um efeito radiante</strong> aos fios. Aqui cada loiro é personalizado para harmonizar com o tom de pele e o estilo de cada cliente, garantindo um resultado moderno e cheio de brilho.<br><br><strong>A partir de R$400,00 · 4h a 5h</strong><br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Mechas." target="_blank">→ Agendar Mechas</a>'
  },
  morena: {
    r: '🤎 Morena Iluminada',
    d: 'O moreno iluminado é perfeito para quem deseja <strong>realçar a beleza dos fios com leveza, brilho e naturalidade</strong>, criando pontos de luz que valorizam o rosto e o movimento do cabelo. Técnica personalizada para um resultado sofisticado.<br><br><strong>A partir de R$350,00 · 3h a 4h</strong><br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Morena%20Iluminada." target="_blank">→ Agendar Morena Iluminada</a>'
  },
  coloracao: {
    r: '🎨 Coloração',
    d: 'Coloração profissional com acabamento impecável. <br><br>🏪 <strong>Coloração do salão</strong> — R$150+ (com tratamento e escova inclusos)<br>💼 <strong>Aplicação da sua tinta</strong> — R$50 (não inclui escova)<br><br>⏱ Duração: 2h a 3h<br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Colora%C3%A7%C3%A3o." target="_blank">→ Agendar Coloração</a>'
  },
  corte: {
    r: '✂️ Corte',
    d: 'Corte profissional realizado por Enilma ou Luciana, com técnica e precisão para valorizar o seu estilo.<br><br><strong>R$60,00 · 30 minutos</strong><br>⚠️ Não inclui escova<br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Corte." target="_blank">→ Agendar Corte</a>'
  },
  hidratacao: {
    r: '💧 Hidratação + Escova',
    d: 'A hidratação <strong>repõe a água do fio perdida no dia a dia</strong>. Promove maciez, brilho e ajuda a manter a saúde do fio. Ideal para manutenção regular do cabelo.<br><br><strong>R$80,00 · 1h30 a 2h</strong><br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Hidrata%C3%A7%C3%A3o%20%2B%20Escova." target="_blank">→ Agendar Hidratação</a>'
  },
  reconstrucao: {
    r: '🔬 Reconstrução + Escova',
    d: 'Ideal para quem precisa de um <strong>socorro imediato nos fios</strong>. Nesse processo selamos a queratina no fio, promovendo uma maior permeação dos ativos e devolvendo resistência e vitalidade ao cabelo.<br><br><strong>R$130,00 · 2h30 a 3h</strong><br><br><a href="https://wa.me/5583996141570?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Reconstru%C3%A7%C3%A3o%20%2B%20Escova." target="_blank">→ Agendar Reconstrução</a>'
  },
};

function sym(btn, k) {
  document.querySelectorAll('.sc').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const el = document.getElementById('sr');
  const d = smap[k];
  el.innerHTML = `<strong>${d.r}</strong><br><br>${d.d}`;
  el.classList.add('show');
}
