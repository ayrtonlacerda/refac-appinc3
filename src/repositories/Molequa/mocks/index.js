/* eslint-disable camelcase */
/* eslint-disable quote-props */
import recepcao from './recepcao.json';
import repouso from './repouso.json';
import creche from './creche3.json';
import sanitariopne1 from './sanitariopne1.json';
import sanitariopne2 from './sanitariopne2.json';
import aspectos from './aspectos.json';
import fossa from './fossa.json';
import sumidouro from './sumidouro.json';
import filtroanaerobico from './filtroanaerobico.json';
import outrotipo from './outrotipo.json';
import p2repouso1 from './p2repouso1.json';
import p2repouso2 from './p2repouso2.json';
import creche32 from './creche32.json';
import p2solarium1 from './p2solarium1.json';
import p2solarium2 from './p2solarium2.json';
import adm_secretaria from './adm_secretaria.json';
import adm_direx from './adm_direx.json';
import adm_prof from './adm_prof.json';
import adm_circulacao from './adm_circulacao.json';
import adm_alm from './adm_alm.json';
import adm_bannheiro1 from './adm_banheiro1.json';
import adm_bannheiro2 from './adm_banheiro2.json';
import adm_externo from './adm_externo.json';
import peda_creche2 from './peda_creche2.json';
import peda_repouso1 from './peda_repouso1.json';
import peda_creche3 from './peda_creche3.json';
import peda_repouso2 from './peda_repouso2.json';
import peda_banheiro1 from './peda_banheiro1.json';
import peda_solarium1 from './peda_solarium1.json';
import peda_creche1 from './peda_creche1.json';
import peda_repouso3 from './peda_repouso3.json';
import peda_fraldario from './peda_fraldario.json';
import peda_creche4 from './peda_creche4.json';
import peda_fraldario2 from './peda_fraldario2.json';
import peda_solarium2 from './peda_solarium2.json';
import peda_externo from './peda_externo.json';
import peda_banheiro2 from './peda_banheiro2.json';
import serv_deposito from './serv_deposito.json';
import serv_cozinha from './serv_cozinha.json';
import serv_pereciveis from './serv_pereciveis.json';
import serv_dml from './serv_dml.json';
import serv_vestiario from './serv_vestiario.json';
import serv_vestf2 from './serv_vestf2.json';
import serv_lavanderia from './serv_lavanderia.json';
import serv_rouparia from './serv_rouparia.json';
import serv_lactario from './serv_lactario.json';
import serv_caixa from './serv_caixa.json';
import serv_resevatorio from './serv_reservatorio.json';
import serv_externo from './serv_externo.json';
import serv_area from './serv_area.json';
import preescola1 from './p2preescola1.json';
// import preescola2 from './p2preescola2.json';
import p2areaexterna from './p2areaexterna.json';
import sanitario1 from './sanitario1.json';
import sanitario2 from './sanitario2.json';
import leituramultiuso from './leituramultiuso.json';
import labinformatica from './labinformatica.json';
import rack from './rack.json';
import ciatel from './ciatel.json';
import ciaele from './ciaele.json';
import multiareaexterna from './multiusoareaexterna.json';
import gas from './crechec_gas.json';
import caixa from './crechec_caixa.json';
import reservatorio from './crechec_reservatorio.json';
import layout from './crechec_layout.json';
import revestimento from './crechec_revestimento.json';
import patioc from './crechec_patio.json';
import refeitorioc from './crechec_refeitorio.json';
import crechec_creche1 from './crechec_creche1.json';
import crechec_banho from './crechec_banho.json';
import crechec_repouso from './crechec_repouso.json';
import crechec_solarium1 from './crechec_solarium1.json';
import crechec_creche2 from './crechec_creche2.json';
import crechec_creche2banheiro from './crechec_creche2banheiro.json';
import crechec_solarium2 from './crechec_solarium2.json';
import rechec_areaexterna from './crechec_areaexterna.json';
import crechec_serv_carga from './crechec_serv_carga.json';
import crechec_serv_cozinha from './crechec_serv_cozinha.json';
import crechec_serv_despensa from './crechec_serv_despensa.json';
import crechec_serv_lavanderia from './crechec_serv_lavanderia.json';
import crechec_serv_dml from './crechec_serv_dml.json';
import crechec_serv_sanfem from './crechec_serv_sanfem.json';
import crechec_serv_sanmas from './crechec_serv_sanmas.json';
import crechec_serv_depostio from './crechec_serv_deposito.json';
import crechec_serv_multi from './crechec_serv_multi.json';
import crechec_serv_stinf from './crechec_serv_stinf.json';
import crechec_serv_copafuncionario from './crechec_serv_copafuncionario.json';
import crechec_serv_higienizacao from './crechec_serv_higienizacao.json';
import crechec_serv_lactario from './crechec_serv_lactario.json';
import crechec_serv_areaexterna from './crechec_serv_areaexterna.json';

import crechec_adm_banfem from './crechec_adm_banfem.json';
import crechec_adm_banmas from './crechec_adm_banmas.json';
import crechec_adm_adm from './crechec_adm_adm.json';
import crechec_adm_almo from './crechec_adm_almo.json';
import crechec_adm_prof from './crechec_adm_prof.json';
import crechec_adm_area from './crechec_adm_area.json';

export const subAreas = {
  'Recepção': recepcao,
  'Repouso': repouso,
  'Creche-3 1': creche,
  'Sanitário PNE1': sanitariopne1,
  'Sanitário PNE2': sanitariopne2,
  'Aspectos Gerais': aspectos,
  'Fossa séptica': fossa,
  'Sumidouro': sumidouro,
  'Filtro Anaeróbico': filtroanaerobico,
  'Outro tipo': outrotipo,
  'P2 Repouso 1': p2repouso1,
  'P2 Repouso 2': p2repouso2,
  'P2 Creche 3.2': creche32,
  'P2 Solarium 1': p2solarium1,
  'P2 Solarium 2': p2solarium2,
  'Secretaria/Orientação': adm_secretaria,
  Diretoria: adm_direx,
  'Sala de Reunião dos Professores': adm_prof,
  'Circulação': adm_circulacao,
  'Almoxarifado': adm_alm,
  'Banheiro 1': adm_bannheiro1,
  'Banheiro 2': adm_bannheiro2,
  'Área Externa': adm_externo,
  'Creche 2': peda_creche2,
  'Repouso 1': peda_repouso1,
  'P2 Creche 3.1': peda_creche3,
  'Repouso 2': peda_repouso2,
  'Banheiro 1 Creche 2': peda_banheiro1,
  'Solarium 1': peda_solarium1,
  'Creche 1': peda_creche1,
  'Repouso 3': peda_repouso3,
  'Fraldário 1': peda_fraldario,
  'Creche 4': peda_creche4,
  'Fraldário 2': peda_fraldario2,
  'Solarium 2': peda_solarium2,
  'P1 Área Externa': peda_externo,
  'Banheiro 2 Creche 2': peda_banheiro2,

  Depósito: serv_deposito,
  Cozinha: serv_cozinha,
  Perecíveis: serv_pereciveis,
  DML: serv_dml,
  'Vestiário 01': serv_vestiario,
  'Vestiário feminino': serv_vestf2,
  'Lavanderia e circulação': serv_lavanderia,
  Rouparia: serv_rouparia,
  Lactário: serv_lactario,
  'Caixa em alvenaria para abrigo das bombas de recalque': serv_caixa,
  Reservatório: serv_resevatorio,
  'Área externa': serv_externo,
  'Área de serviço descoberta': serv_area,
  'Pré-escola 1': preescola1,
  // 'Pré-escola 2': preescola2,
  'P2 Área externa': p2areaexterna,
  'Sanitário 1': sanitario1,
  'Sanitário 2': sanitario2,
  'Leitura Multiuso': leituramultiuso,
  'Laboratório de informática': labinformatica,
  Rack: rack,
  'Cia Tel': ciatel,
  'Cia Ele': ciaele,
  'Multiuso - Área externa': multiareaexterna,

  // Creche Tipo C

  // Administração
  'Banheiro PNE Adulto Feminino': crechec_adm_banfem,
  'Banheiro PNE Adulto Masculino': crechec_adm_banmas,
  'Administração': crechec_adm_adm,
  'Almoxarifado - Administração': crechec_adm_almo,
  'Professores': crechec_adm_prof,
  'Área Externa - Administração': crechec_adm_area,

  // Área Externa
  'Gás': gas,
  'Caixa em Alvenaria (Abrigo de Bombas)': caixa,
  'Reservatório - Creche C': reservatorio,
  'Layout': layout,
  'Revestimento': revestimento,
  // Refeitório
  'Pátio Coberto': patioc,
  Refeitório: refeitorioc,
  // Creche I e II
  'Creche I - Creche C': crechec_creche1,
  'Banho - Creche C': crechec_banho,
  'Repouso - Creche C': crechec_repouso,
  'Solarium 1 - Creche C': crechec_solarium1,
  'Creche II - Creche C': crechec_creche2,
  'Banheiro Creche II - Creche C': crechec_creche2banheiro,
  'Solarium II - Creche C': crechec_solarium2,
  'Área Externa - Creche C': rechec_areaexterna,
  // Serviço
  'Carga e Descarga': crechec_serv_carga,
  'Cozinha - Creche C': crechec_serv_cozinha,
  Despensa: crechec_serv_despensa,
  Lavanderia: crechec_serv_lavanderia,
  'DML - Creche C': crechec_serv_dml,
  'Sanitário Feminino': crechec_serv_sanfem,
  'Sanitário Masculino': crechec_serv_sanmas,
  'Depósito - Creche C': crechec_serv_depostio,
  'Multiuso e Informática': crechec_serv_multi,
  'S. T. Inf': crechec_serv_stinf,
  'Copa Funcionários': crechec_serv_copafuncionario,
  'Higienização': crechec_serv_higienizacao,
  'Lactário - Creche C': crechec_serv_lactario,
  'Área externa - Creche C': crechec_serv_areaexterna,

};
