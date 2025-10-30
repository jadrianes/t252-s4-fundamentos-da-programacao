// Exercício 
// Classes


// Descrição:  Sua missão nesta semana é criar um sistema para gerenciar os cartões de Vale Refeição e Vale Alimentação de pessoas colaboradoras de uma empresa.
// Você deverá estruturar com Programação Orientada a Objetos (OOP), definindo classes, atributos e métodos para representar as entidades do sistema, e fazendo a vinculação entre empresas, colaboradores e cartões.

// Você vai reforçar:
// Criar classes e objetos para representar as entidades mencionadas.
// Utilizar propriedades e métodos.
// Aplicar conceitos de atributos e métodos.
// Opcional o uso de interfaces.
// Funcionalidades que o sistema deve permitir

// Cadastrar empresas com os seguintes dados:
// nome
// cnpj
// email
// telefone


// Cadastrar colaboradores e vincular a uma empresa:
// nome
// email
// empresa (referência ao objeto da empresa)
// Métodos sugeridos:
// atualizarEmail(novoEmail);
// exibirDetalhes(): retorna informações da pessoa colaboradora e da empresa vinculada;


// Criar cartões vinculados a uma pessoa colaboradora e à empresa:
// número
// data de validade
// tipo (Vale Refeição ou Vale Alimentação)
// colaborador (referência ao objeto colaborador)
// empresa (referência ao objeto da empresa)
// Métodos sugeridos:
// ativar(): muda o status para "ativo";
// desativar():  muda o status para "inativo";
// exibirDetalhes():  retorna informações do cartão, colaborador e empresa;
// Observações importantes
// O vínculo entre empresa ↔ colaborador ↔ cartão deve ser feito através de referências aos objetos.
// Cada colaborador pertence a uma empresa e cada cartão pertence a um colaborador e a sua empresa.
// Exemplo de Estrutura Esperada:

// class Empresa {
//     nome: string
//     cnpj: number
//     email: string
//     telefone: number

//     constructor { nome: string, cnpj: number, email: string, telefone: number}
// }

// interface Colaborador {
//     nome: string,
//     email: string,
//     empresa: Empresa,
// }

// interface Cartao {
//     numero: number,
//     validade: number,
//     tipo: string,
//     colaborador: Colaborador,
//     empresa: Empresa;
// }