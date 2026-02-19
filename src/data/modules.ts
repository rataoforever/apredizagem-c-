import { Module } from './types';

export const modules: Module[] = [
  {
    id: 1,
    title: 'Fundamentos do C++',
    description: 'Aprenda a base da programação em C++: estrutura, variáveis, operadores e controle de fluxo.',
    level: 'Iniciante',
    topics: [
      { id: 'estrutura-basica', title: 'Estrutura Básica', description: 'Entenda como um programa C++ é organizado' },
      { id: 'variaveis', title: 'Variáveis e Tipos de Dados', description: 'Aprenda sobre os tipos de dados fundamentais' },
      { id: 'declaracoes-multiplas', title: 'Declarações Múltiplas', description: 'Declare várias variáveis de forma eficiente' },
      { id: 'globais-locais', title: 'Variáveis Globais e Locais', description: 'Entenda o escopo das variáveis' },
      { id: 'operadores', title: 'Operadores', description: 'Operadores aritméticos, de atribuição e comparação' },
      { id: 'incremento-decremento', title: 'Incremento e Decremento', description: 'Operadores ++ e -- em C++' },
      { id: 'invertendo-valores', title: 'Invertendo Valores', description: 'Técnicas para trocar valores entre variáveis' },
      { id: 'if-else', title: 'If / Else', description: 'Estruturas condicionais para tomada de decisão' },
      { id: 'and-or-not', title: 'AND, OR, NOT', description: 'Operadores lógicos para condições complexas' },
      { id: 'operador-ternario', title: 'Operador Ternário', description: 'Condições em uma única linha' },
      { id: 'switch-case', title: 'Switch Case', description: 'Seleção múltipla com switch' },
      { id: 'while-break', title: 'While e Break', description: 'Loop while e como interrompê-lo' },
      { id: 'do-while', title: 'Do While', description: 'Loop que executa pelo menos uma vez' },
      { id: 'loop-for', title: 'Loop For', description: 'O loop mais versátil do C++' },
      { id: 'arrays', title: 'Arrays / Vetores', description: 'Armazene múltiplos valores em uma variável' },
      { id: 'matrizes', title: 'Array Bidimensional / Matriz', description: 'Tabelas de dados com linhas e colunas' },
    ]
  },
  {
    id: 2,
    title: 'Programação Intermediária',
    description: 'Funções, ponteiros, strings e estruturas de dados.',
    level: 'Intermediário',
    topics: [
      { id: 'funcoes', title: 'Funções', description: 'Organize seu código em blocos reutilizáveis' },
      { id: 'parametros', title: 'Parâmetros por Valor e Referência', description: 'Diferentes formas de passar dados para funções' },
      { id: 'sobrecarga-funcoes', title: 'Sobrecarga de Funções', description: 'Funções com o mesmo nome mas parâmetros diferentes' },
      { id: 'recursao', title: 'Recursão', description: 'Funções que chamam a si mesmas' },
      { id: 'ponteiros', title: 'Ponteiros', description: 'Manipule endereços de memória diretamente' },
      { id: 'alocacao-dinamica', title: 'Alocação Dinâmica', description: 'Gerencie memória em tempo de execução' },
      { id: 'strings', title: 'Strings', description: 'Manipulação de texto em C++' },
      { id: 'structs', title: 'Structs', description: 'Crie seus próprios tipos de dados compostos' },
      { id: 'enums', title: 'Enumerações', description: 'Defina conjuntos de constantes nomeadas' },
      { id: 'arquivos', title: 'Manipulação de Arquivos', description: 'Leia e escreva arquivos com C++' },
    ]
  },
  {
    id: 3,
    title: 'Programação Orientada a Objetos',
    description: 'Domine os pilares da POO: encapsulamento, herança e polimorfismo.',
    level: 'Avançado',
    topics: [
      { id: 'classes-objetos', title: 'Classes e Objetos', description: 'Fundamentos da programação orientada a objetos' },
      { id: 'construtores-destrutores', title: 'Construtores e Destrutores', description: 'Inicialização e limpeza de objetos' },
      { id: 'encapsulamento', title: 'Encapsulamento', description: 'Proteja os dados da sua classe' },
      { id: 'heranca', title: 'Herança', description: 'Reaproveite código com classes derivadas' },
      { id: 'polimorfismo', title: 'Polimorfismo', description: 'Diferentes comportamentos para a mesma interface' },
      { id: 'classes-abstratas', title: 'Classes Abstratas', description: 'Interfaces e classes que não podem ser instanciadas' },
      { id: 'sobrecarga-operadores', title: 'Sobrecarga de Operadores', description: 'Personalize operadores para suas classes' },
      { id: 'friend-functions', title: 'Friend Functions', description: 'Funções amigas e acesso especial' },
    ]
  },
  {
    id: 4,
    title: 'C++ Avançado',
    description: 'Templates, STL, exceções e gerenciamento de memória avançado.',
    level: 'Profissional',
    topics: [
      { id: 'templates', title: 'Templates', description: 'Programação genérica com templates' },
      { id: 'stl-containers', title: 'STL - Containers', description: 'vector, list, map, set e mais' },
      { id: 'stl-iteradores', title: 'STL - Iteradores', description: 'Navegue por containers de forma genérica' },
      { id: 'stl-algoritmos', title: 'STL - Algoritmos', description: 'sort, find, transform e outros algoritmos' },
      { id: 'excecoes', title: 'Tratamento de Exceções', description: 'Gerencie erros com try/catch/throw' },
      { id: 'namespaces', title: 'Namespaces', description: 'Organize seu código em espaços de nomes' },
      { id: 'preprocessador', title: 'Diretivas de Preprocessador', description: '#define, #ifdef, #include e macros' },
      { id: 'smart-pointers', title: 'Ponteiros Inteligentes', description: 'unique_ptr, shared_ptr e weak_ptr' },
    ]
  },
  {
    id: 5,
    title: 'C++ Sênior',
    description: 'Técnicas avançadas, padrões de projeto e C++ moderno.',
    level: 'Sênior',
    topics: [
      { id: 'move-semantics', title: 'Move Semantics', description: 'Otimize com rvalue references e std::move' },
      { id: 'lambdas', title: 'Expressões Lambda', description: 'Funções anônimas poderosas' },
      { id: 'multithreading', title: 'Multithreading', description: 'Programação concorrente em C++' },
      { id: 'design-patterns', title: 'Design Patterns', description: 'Padrões de projeto essenciais' },
      { id: 'raii', title: 'RAII', description: 'Resource Acquisition Is Initialization' },
      { id: 'metaprogramacao', title: 'Metaprogramação', description: 'Programação em tempo de compilação' },
      { id: 'cpp-moderno', title: 'C++ Moderno (17/20/23)', description: 'Recursos das versões mais recentes' },
      { id: 'boas-praticas', title: 'Boas Práticas', description: 'Escreva código limpo e profissional' },
    ]
  }
];
