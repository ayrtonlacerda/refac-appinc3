const auth = {
  matricula: '753248',
  senha: '123qwe',
};

const caso = {
  number: '781236',
  vestigios: [{
    uuid: 'e1bdf273-12cf-4d26-8837-aaa91680423d',
    codigoCaso: '781236',
    nome: '5366',
    descricao: '',
    codigoDefinicaoTipo: null,
    prioridadeCaso: '',
    tags: ['Crime Contra a Fauna'],
    status: 'Pendente',
    codigoCasoPai: null,
    casosRelacionados: [],
    privado: false,
    anotacoes: '',
    registroModificacao: null,
    usuarios: null,
    grupos: null,
    referencias: [
      {
        origem: 'siscrim',
        tipo: 'documento',
        nome: 'Ofício .../2020-.../SR/PF/AM',
        descricao: 'Número de registro: .../2020-SETEC/SR/PF/AM\nData de registro: 19/08/2020\nFinalidade: Solicitação de exame\nData de emissão: 18/08/2020\nAssunto: Solicita exame pericial ... Ocorrência atendida em sobreaviso.\nProcedimento: ...-SR/PF/AM',
        valor: '49566289',
        dados: {
          numero_itens: 3,
          lacre: '02000315836',
        },
      },
    ],
  }],
};

export {
  auth,
  caso,
};
