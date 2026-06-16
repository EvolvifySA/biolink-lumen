/* ═══════════════════════════════════
   FLOWS — Lumi Assistente Digital
   Lúmen Espaço de Beleza

   Estrutura de cada flow:
   {
     msg: string (HTML permitido),
     chips: [
       { l: 'Label', f: 'flow_id' }    → navega para outro flow
       { l: 'Label', wa: 'mensagem' }  → abre WhatsApp
     ]
   }
═══════════════════════════════════ */

const flows = {

  /* ── MENU PRINCIPAL ── */
  inicio: {
    msg: `Pra te ajudar melhor, me conta — o que você está buscando? 💫`,
    chips: [
      { l: '📅 Quero agendar', f: 'agendar' },
      { l: '💇 Ver serviços', f: 'servicos' },
      { l: '💰 Ver preços', f: 'precos' },
      { l: '📍 Localização & Horários', f: 'localizacao' },
      { l: '💳 Formas de pagamento', f: 'pagamento' },
    ]
  },

  /* ── AGENDAMENTO ── */
  agendar: {
    msg: `Ótimo! 😊 Todos os atendimentos são <strong>com hora marcada</strong>.<br><br>Qual serviço você tem em mente?`,
    chips: [
      { l: '💆 Alisamento', f: 'ag_alis' },
      { l: '✨ Mechas / Coloração', f: 'ag_color' },
      { l: '💧 Tratamento', f: 'ag_trat' },
      { l: '✂️ Corte', f: 'ag_corte' },
      { l: '🤔 Não sei ainda', f: 'ag_duvida' },
    ]
  },
  ag_alis: {
    msg: `Temos dois serviços de alisamento — escolha o que mais combina com você:`,
    chips: [
      { l: '💎 Selagem (R$150+, 3-4h)', wa: 'Vim pelo biolink e quero agendar uma Selagem no Lúmen Espaço de Beleza.' },
      { l: '✨ Botox Capilar (R$110+, 2-3h)', wa: 'Vim pelo biolink e quero agendar um Botox Capilar no Lúmen Espaço de Beleza.' },
      { l: '↩ Outros serviços', f: 'agendar' },
    ]
  },
  ag_color: {
    msg: `Para coloração temos várias opções incríveis! Qual te interessa?`,
    chips: [
      { l: '🌟 Mechas (R$400+)', wa: 'Vim pelo biolink e quero agendar Mechas no Lúmen Espaço de Beleza.' },
      { l: '🤎 Morena Iluminada (R$350+)', wa: 'Vim pelo biolink e quero agendar Morena Iluminada no Lúmen Espaço de Beleza.' },
      { l: '🎨 Coloração', f: 'ag_coloracao' },
      { l: '↩ Outros serviços', f: 'agendar' },
    ]
  },
  ag_coloracao: {
    msg: `Para coloração temos duas opções:<br><br>🎨 <strong>Coloração com tinta do salão</strong> — R$150+ (inclui tratamento e escova)<br>🎨 <strong>Aplicação com tinta da cliente</strong> — R$50 (não inclui escova)<br><br>Qual você prefere?`,
    chips: [
      { l: '🏪 Tinta do salão (R$150+)', wa: 'Vim pelo biolink e quero agendar Coloração com tinta do salão no Lúmen Espaço de Beleza.' },
      { l: '💼 Tinta própria (R$50)', wa: 'Vim pelo biolink e quero agendar aplicação de Coloração com minha própria tinta no Lúmen Espaço de Beleza.' },
      { l: '↩ Voltar', f: 'ag_color' },
    ]
  },
  ag_trat: {
    msg: `Temos vários tratamentos capilares! Qual você prefere?`,
    chips: [
      { l: '🌿 Nutrição + Escova (R$90)', wa: 'Vim pelo biolink e quero agendar Nutrição + Escova no Lúmen Espaço de Beleza.' },
      { l: '💪 Reconstrução + Escova (R$130)', wa: 'Vim pelo biolink e quero agendar Reconstrução + Escova no Lúmen Espaço de Beleza.' },
      { l: '💧 Hidratação + Escova (R$80)', wa: 'Vim pelo biolink e quero agendar Hidratação + Escova no Lúmen Espaço de Beleza.' },
      { l: '🔬 Ver mais tratamentos', f: 'ag_trat2' },
    ]
  },
  ag_trat2: {
    msg: `Mais opções de tratamento:`,
    chips: [
      { l: '🌿 Esfoliante + Escova (R$80)', wa: 'Vim pelo biolink e quero agendar Esfoliante Capilar + Escova no Lúmen Espaço de Beleza.' },
      { l: '⚡ SOS Roffe (R$90)', wa: 'Vim pelo biolink e quero agendar SOS Roffe no Lúmen Espaço de Beleza.' },
      { l: '✨ Cauterização Roffe (R$100)', wa: 'Vim pelo biolink e quero agendar Cauterização Roffe no Lúmen Espaço de Beleza.' },
      { l: '💎 Cauterização Madeishas (R$120)', wa: 'Vim pelo biolink e quero agendar Cauterização Madeishas no Lúmen Espaço de Beleza.' },
      { l: '🌸 Pós Química Madeishas (R$100)', wa: 'Vim pelo biolink e quero agendar Pós Química Madeishas no Lúmen Espaço de Beleza.' },
    ]
  },
  ag_corte: {
    msg: `✂️ Nosso corte é rápido e preciso!<br><br>⏱ Duração: <strong>30 minutos</strong><br>💰 Valor: <strong>R$60,00</strong> (não inclui escova)<br><br>Quer agendar?`,
    chips: [
      { l: '✅ Sim, quero agendar!', wa: 'Vim pelo biolink e quero agendar um Corte no Lúmen Espaço de Beleza.' },
      { l: '↩ Outros serviços', f: 'agendar' },
    ]
  },
  ag_duvida: {
    msg: `Sem problema! Fale diretamente com a <strong>Enilma ou Luciana</strong> — elas vão te ajudar a escolher o melhor serviço para o seu cabelo. 💛`,
    chips: [
      { l: '💬 Falar com o salão', wa: 'Vim pelo biolink e gostaria de uma indicação de serviço para o meu cabelo. Pode me ajudar?' },
      { l: '↩ Ver todos os serviços', f: 'servicos' },
    ]
  },

  /* ── CATÁLOGO DE SERVIÇOS ── */
  servicos: {
    msg: `Temos serviços para todos os tipos de cabelo! Qual categoria te interessa? 💇`,
    chips: [
      { l: '💆 Alisamentos', f: 'srv_alis' },
      { l: '✨ Mechas & Coloração', f: 'srv_color' },
      { l: '💧 Tratamentos', f: 'srv_trat' },
      { l: '🔬 Regeneração', f: 'srv_regen' },
      { l: '✂️ Corte', f: 'srv_corte' },
    ]
  },
  srv_alis: {
    msg: `💆 <strong>Alisamentos</strong><br><br>🔸 <strong>Selagem</strong> — Alisamento que reduz volume, elimina frizz e deixa os fios alinhados e brilhosos.<br>💰 A partir de R$150 · ⏱ 3h a 4h<br><br>🔸 <strong>Botox Capilar</strong> — Redução de volume mais suave, elimina o frizz. Dura em média 2 meses.<br>💰 A partir de R$110 · ⏱ 2h30 a 3h30<br><br>Quer agendar?`,
    chips: [
      { l: '📅 Agendar Selagem', wa: 'Vim pelo biolink e quero agendar uma Selagem no Lúmen Espaço de Beleza.' },
      { l: '📅 Agendar Botox', wa: 'Vim pelo biolink e quero agendar um Botox Capilar no Lúmen Espaço de Beleza.' },
      { l: '↩ Outros serviços', f: 'servicos' },
    ]
  },
  srv_color: {
    msg: `✨ <strong>Mechas & Coloração</strong><br><br>🌟 <strong>Mechas</strong> — Loiros personalizados que harmonizam com o tom de pele e estilo de cada cliente.<br>💰 A partir de R$400 · ⏱ 4h a 5h<br><br>🤎 <strong>Morena Iluminada</strong> — Realça a beleza com leveza, brilho e pontos de luz naturais.<br>💰 A partir de R$350 · ⏱ 3h a 4h<br><br>🎨 <strong>Coloração</strong> — Tinta do salão (R$150+) ou aplicação da sua tinta (R$50)<br>⏱ 2h a 3h<br><br>Quer saber mais ou agendar?`,
    chips: [
      { l: '📅 Agendar Mechas', wa: 'Vim pelo biolink e quero agendar Mechas no Lúmen Espaço de Beleza.' },
      { l: '📅 Agendar Morena Iluminada', wa: 'Vim pelo biolink e quero agendar Morena Iluminada no Lúmen Espaço de Beleza.' },
      { l: '📅 Agendar Coloração', f: 'ag_coloracao' },
      { l: '↩ Outros serviços', f: 'servicos' },
    ]
  },
  srv_trat: {
    msg: `💧 <strong>Tratamentos Capilares</strong><br><br>🌿 <strong>Nutrição + Escova</strong> — Óleos preciosos, reposição lipídica, maciez e suavidade. R$90 · 2h a 2h30<br><br>💪 <strong>Reconstrução + Escova</strong> — Sela a queratina no fio, SOS para fios danificados. R$130 · 2h30 a 3h<br><br>💧 <strong>Hidratação + Escova</strong> — Repõe a água do fio, maciez e brilho. R$80 · 1h30 a 2h<br><br>🌿 <strong>Esfoliante Capilar + Escova</strong> — Argila branca, reduz oleosidade e protege. R$80 · 1h30 a 2h`,
    chips: [
      { l: '📅 Quero agendar', f: 'ag_trat' },
      { l: '🔬 Ver Regeneração', f: 'srv_regen' },
      { l: '↩ Outros serviços', f: 'servicos' },
    ]
  },
  srv_regen: {
    msg: `🔬 <strong>Regeneração Capilar</strong><br><br>⚡ <strong>SOS Roffe</strong> — Reconstrói e repara a cutícula capilar, devolve força e elasticidade. R$90 · 1h30 a 2h<br><br>✨ <strong>Cauterização Roffe</strong> — Reconstrutor profundo com multi-ativos, rico em queratina e proteína do trigo. R$100 · 2h a 2h30<br><br>🌸 <strong>Pós Química Madeishas</strong> — Repara intensamente a fibra capilar, altamente hidratante. R$100 · 1h30 a 2h<br><br>💎 <strong>Cauterização Madeishas</strong> — Transforma fios elásticos em cabelos saudáveis, macios. Rico em aminoácidos e colágeno. R$120 · 2h a 2h30`,
    chips: [
      { l: '📅 Quero agendar', f: 'ag_trat2' },
      { l: '💧 Ver Tratamentos', f: 'srv_trat' },
      { l: '↩ Outros serviços', f: 'servicos' },
    ]
  },
  srv_corte: {
    msg: `✂️ <strong>Corte</strong><br><br>Corte profissional e preciso, realizado por Enilma ou Luciana.<br><br>💰 <strong>R$60,00</strong><br>⏱ <strong>30 minutos</strong><br>⚠️ Não inclui escova<br><br>Quer agendar?`,
    chips: [
      { l: '📅 Agendar Corte', wa: 'Vim pelo biolink e quero agendar um Corte no Lúmen Espaço de Beleza.' },
      { l: '↩ Outros serviços', f: 'servicos' },
    ]
  },

  /* ── PREÇOS ── */
  precos: {
    msg: `💰 <strong>Tabela de Preços</strong> (válidos até abril 2026)<br><br>💆 Selagem — <strong>R$150+</strong><br>✨ Botox Capilar — <strong>R$110+</strong><br>🌟 Mechas — <strong>R$400+</strong><br>🤎 Morena Iluminada — <strong>R$350+</strong><br>🎨 Coloração (salão) — <strong>R$150+</strong><br>🎨 Coloração (sua tinta) — <strong>R$50</strong><br>✂️ Corte — <strong>R$60</strong><br>🌿 Nutrição + Escova — <strong>R$90</strong><br>💪 Reconstrução + Escova — <strong>R$130</strong><br>💧 Hidratação + Escova — <strong>R$80</strong><br>🌿 Esfoliante + Escova — <strong>R$80</strong><br>⚡ SOS Roffe — <strong>R$90</strong><br>✨ Cauterização Roffe — <strong>R$100</strong><br>🌸 Pós Química Madeishas — <strong>R$100</strong><br>💎 Cauterização Madeishas — <strong>R$120</strong>`,
    chips: [
      { l: '📅 Quero agendar', f: 'agendar' },
      { l: '💇 Saber mais sobre os serviços', f: 'servicos' },
    ]
  },

  /* ── LOCALIZAÇÃO ── */
  localizacao: {
    msg: `📍 <strong>Localização</strong><br><br>Rua Joamir Severino dos Santos, 357<br>Valentina · João Pessoa, PB<br><br>⏰ <strong>Horários de atendimento</strong><br>Terça a Sábado · Com hora marcada<br><br>📱 (83) 99614-1570`,
    chips: [
      { l: '📍 Ir ao mapa', wa: 'Vim pelo biolink e gostaria de saber como chegar no Lúmen Espaço de Beleza.' },
      { l: '📅 Agendar horário', wa: 'Vim pelo biolink e quero agendar um horário no Lúmen Espaço de Beleza.' },
      { l: '↩ Menu principal', f: 'inicio' },
    ]
  },

  /* ── PAGAMENTO ── */
  pagamento: {
    msg: `💳 <strong>Formas de Pagamento</strong><br><br>🔶 <strong>PIX</strong> — Chave CNPJ: 17/110.724.0001-90 (Enilma)<br><br>💵 <strong>Dinheiro</strong><br><br>💳 <strong>Cartão de Crédito</strong> — Taxa na maquininha`,
    chips: [
      { l: '📅 Agendar horário', wa: 'Vim pelo biolink e quero agendar um horário no Lúmen Espaço de Beleza.' },
      { l: '↩ Menu principal', f: 'inicio' },
    ]
  },

};
