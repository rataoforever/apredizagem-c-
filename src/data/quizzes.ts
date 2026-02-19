import { QuizQuestion } from './types';

export const quizData: Record<string, QuizQuestion[]> = {
  "estrutura-basica": [
    { question: 'Qual é a função obrigatória em todo programa C++?', options: ['start()', 'main()', 'init()', 'run()'], correct: 1, explanation: 'Todo programa C++ deve ter exatamente uma função main(), que é o ponto de entrada do programa.' },
    { question: 'O que faz a diretiva #include <iostream>?', options: ['Cria uma variável', 'Inclui a biblioteca de entrada/saída', 'Define uma função', 'Compila o programa'], correct: 1, explanation: '#include <iostream> inclui a biblioteca padrão de entrada e saída, permitindo usar cout e cin.' },
    { question: 'O que "return 0" indica na função main()?', options: ['Erro no programa', 'Que o programa terminou com sucesso', 'Que o programa vai reiniciar', 'Nada'], correct: 1, explanation: 'return 0 indica que o programa foi executado com sucesso. Valores diferentes de 0 indicam erros.' },
  ],
  "variaveis": [
    { question: 'Qual tipo armazena números decimais com maior precisão?', options: ['int', 'float', 'double', 'char'], correct: 2, explanation: 'double usa 8 bytes e tem aproximadamente 15 dígitos de precisão, enquanto float usa 4 bytes com ~7 dígitos.' },
    { question: 'O que acontece com uma variável não inicializada?', options: ['Recebe 0 automaticamente', 'Contém lixo da memória', 'Causa erro de compilação', 'Recebe null'], correct: 1, explanation: 'Em C++, variáveis locais não inicializadas contêm "lixo" — valores aleatórios que estavam na memória.' },
    { question: 'Qual tipo armazena verdadeiro ou falso?', options: ['int', 'char', 'bool', 'string'], correct: 2, explanation: 'O tipo bool armazena apenas dois valores: true (verdadeiro) e false (falso).' },
  ],
  "declaracoes-multiplas": [
    { question: 'Qual declaração múltipla está correta?', options: ['int a = 1, float b = 2;', 'int a = 1, b = 2, c = 3;', 'int a, string b;', 'a = 1, b = 2;'], correct: 1, explanation: 'Declarações múltiplas devem ser do mesmo tipo, separadas por vírgula.' },
    { question: 'Em "int x, y = 5, z;", qual é o valor de x?', options: ['0', '5', 'Indefinido (lixo)', 'null'], correct: 2, explanation: 'x não foi inicializado, então contém um valor indefinido (lixo da memória).' },
    { question: 'É possível declarar variáveis de tipos diferentes na mesma linha?', options: ['Sim, sempre', 'Não, nunca', 'Apenas com cast', 'Apenas com auto'], correct: 1, explanation: 'Declaração múltipla só funciona com variáveis do mesmo tipo.' },
  ],
  "globais-locais": [
    { question: 'Onde são declaradas variáveis globais?', options: ['Dentro de main()', 'Dentro de qualquer função', 'Fora de todas as funções', 'Em um arquivo separado'], correct: 2, explanation: 'Variáveis globais são declaradas fora de qualquer função e acessíveis em todo o programa.' },
    { question: 'O que é shadowing?', options: ['Variável sem valor', 'Variável local com mesmo nome da global', 'Variável protegida', 'Erro de compilação'], correct: 1, explanation: 'Shadowing ocorre quando uma variável local tem o mesmo nome de uma global, "escondendo" a global naquele escopo.' },
    { question: 'Por que evitar variáveis globais?', options: ['São mais lentas', 'Ocupam mais memória', 'Dificultam depuração e manutenção', 'Não funcionam com funções'], correct: 2, explanation: 'Variáveis globais podem ser modificadas de qualquer lugar, tornando o código difícil de entender e depurar.' },
  ],
  "operadores": [
    { question: 'Qual é o resultado de 7 / 2 em C++ (ambos int)?', options: ['3.5', '3', '4', 'Erro'], correct: 1, explanation: 'Divisão entre inteiros resulta em inteiro (truncado). 7/2 = 3, não 3.5.' },
    { question: 'O que faz o operador % (módulo)?', options: ['Calcula porcentagem', 'Retorna o resto da divisão', 'Multiplica', 'Divide por 100'], correct: 1, explanation: 'O operador % retorna o resto da divisão inteira. Ex: 7 % 2 = 1.' },
    { question: 'O que "x += 5" equivale a?', options: ['x = 5', 'x = x + 5', 'x = x * 5', 'x == 5'], correct: 1, explanation: '+= é um operador de atribuição composta. x += 5 é equivalente a x = x + 5.' },
  ],
  "incremento-decremento": [
    { question: 'Se x = 5, qual o valor de cout << x++?', options: ['4', '5', '6', 'Erro'], correct: 1, explanation: 'x++ (pós-incremento) usa o valor atual (5) e depois incrementa. Então imprime 5, e x vira 6.' },
    { question: 'Se x = 5, qual o valor de cout << ++x?', options: ['4', '5', '6', 'Erro'], correct: 2, explanation: '++x (pré-incremento) incrementa primeiro e depois usa. x vira 6 e imprime 6.' },
    { question: 'Qual é mais eficiente para tipos complexos?', options: ['i++', '++i', 'São iguais', 'Depende do compilador'], correct: 1, explanation: '++i é mais eficiente pois não cria uma cópia temporária do valor anterior.' },
  ],
  "invertendo-valores": [
    { question: 'Quantas variáveis são necessárias no swap clássico?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'O swap clássico usa as 2 variáveis originais + 1 temporária = 3 variáveis.' },
    { question: 'Qual função da STL troca valores?', options: ['change()', 'swap()', 'exchange()', 'switch()'], correct: 1, explanation: 'std::swap() troca os valores de duas variáveis de qualquer tipo.' },
    { question: 'Em qual header está std::swap?', options: ['<iostream>', '<string>', '<algorithm>', '<cmath>'], correct: 2, explanation: 'std::swap está definido em <algorithm> (também disponível em <utility>).' },
  ],
  "if-else": [
    { question: 'O que acontece se a condição do if for 0?', options: ['Executa o if', 'Executa o else', 'Erro', 'Loop infinito'], correct: 1, explanation: 'Em C++, 0 é avaliado como false. Qualquer valor diferente de 0 é true.' },
    { question: 'Quantos else if podem existir?', options: ['Apenas 1', 'Até 10', 'Quantos forem necessários', 'Nenhum'], correct: 2, explanation: 'Você pode encadear quantos else if quiser para testar múltiplas condições.' },
    { question: 'É obrigatório ter else?', options: ['Sim', 'Não', 'Apenas com else if', 'Depende do tipo'], correct: 1, explanation: 'O bloco else é opcional. Você pode ter apenas if, ou if com else if sem else final.' },
  ],
  "and-or-not": [
    { question: 'Qual o resultado de true && false?', options: ['true', 'false', '1', 'Erro'], correct: 1, explanation: 'AND (&&) retorna true apenas quando AMBOS operandos são true. true && false = false.' },
    { question: 'O que é avaliação de curto-circuito?', options: ['Parar o loop', 'Não avaliar o segundo operando se o primeiro já determina o resultado', 'Erro elétrico', 'Compilação rápida'], correct: 1, explanation: 'Em &&, se o primeiro for false, o segundo não é avaliado (resultado já é false). Em ||, se o primeiro for true, o segundo não é avaliado.' },
    { question: 'Qual o resultado de !true?', options: ['true', 'false', '0', '-1'], correct: 1, explanation: 'O operador NOT (!) inverte o valor lógico. !true = false.' },
  ],
  "operador-ternario": [
    { question: 'Qual a sintaxe do operador ternário?', options: ['if ? then : else', 'condição ? verdadeiro : falso', 'condição : verdadeiro ? falso', 'verdadeiro ? falso : condição'], correct: 1, explanation: 'A sintaxe é: condição ? valor_se_verdadeiro : valor_se_falso.' },
    { question: 'O ternário pode substituir qualquer if/else?', options: ['Sim, sempre', 'Não, apenas expressões simples', 'Apenas com int', 'Apenas com bool'], correct: 1, explanation: 'O ternário é ideal para atribuições condicionais simples. Para lógica complexa, use if/else.' },
    { question: 'Qual o resultado de (5 > 3) ? "sim" : "não"?', options: ['"sim"', '"não"', 'true', '5'], correct: 0, explanation: '5 > 3 é true, então o operador retorna o valor após ? que é "sim".' },
  ],
  "switch-case": [
    { question: 'O que acontece sem break no case?', options: ['Erro de compilação', 'Executa o próximo case (fall-through)', 'Para o switch', 'Reinicia'], correct: 1, explanation: 'Sem break, a execução "cai" para o próximo case (fall-through), executando todo o código abaixo.' },
    { question: 'Switch funciona com string?', options: ['Sim', 'Não', 'Apenas em C++17', 'Com cast'], correct: 1, explanation: 'Switch em C++ só funciona com tipos inteiros (int, char, enum). Para strings, use if/else.' },
    { question: 'Para que serve o default?', options: ['É obrigatório', 'Trata valores não cobertos pelos cases', 'Define o valor padrão', 'Reinicia o switch'], correct: 1, explanation: 'O default é executado quando nenhum case corresponde ao valor testado. É opcional mas recomendado.' },
  ],
  "while-break": [
    { question: 'Quando a condição do while é verificada?', options: ['Depois da execução', 'Antes da execução', 'No meio', 'Apenas uma vez'], correct: 1, explanation: 'No while, a condição é verificada ANTES de cada execução do bloco.' },
    { question: 'O que o break faz dentro de um loop?', options: ['Pula uma iteração', 'Encerra o loop imediatamente', 'Pausa o programa', 'Reinicia o loop'], correct: 1, explanation: 'break encerra o loop imediatamente e a execução continua na instrução após o loop.' },
    { question: 'O que o continue faz?', options: ['Encerra o loop', 'Pula para a próxima iteração', 'Pausa', 'Reinicia do início'], correct: 1, explanation: 'continue pula o restante da iteração atual e vai direto para a próxima verificação da condição.' },
  ],
  "do-while": [
    { question: 'Quantas vezes o do-while executa no mínimo?', options: ['0', '1', '2', 'Depende'], correct: 1, explanation: 'O do-while sempre executa pelo menos uma vez, pois a condição é verificada APÓS a execução.' },
    { question: 'Onde fica o ponto-e-vírgula no do-while?', options: ['Após do', 'Após o bloco', 'Após while(condição)', 'Não tem'], correct: 2, explanation: 'A sintaxe é: do { ... } while(condição); — o ponto-e-vírgula vai após a condição.' },
    { question: 'Qual é o uso ideal do do-while?', options: ['Loops infinitos', 'Menus e validação de entrada', 'Cálculos matemáticos', 'Declaração de variáveis'], correct: 1, explanation: 'Do-while é ideal para menus (mostrar opções antes de verificar a escolha) e validação de entrada.' },
  ],
  "loop-for": [
    { question: 'Quais são as 3 partes do for?', options: ['início, meio, fim', 'if, else, then', 'inicialização, condição, incremento', 'entrada, processamento, saída'], correct: 2, explanation: 'for(inicialização; condição; incremento) — as 3 partes controlam o loop.' },
    { question: 'A variável do for existe fora do loop?', options: ['Sim', 'Não', 'Depende do compilador', 'Apenas se for global'], correct: 1, explanation: 'Uma variável declarada no for (int i = 0) só existe dentro do escopo do loop.' },
    { question: 'O que for(;;) cria?', options: ['Erro', 'Loop infinito', 'Loop de 1 iteração', 'Nada'], correct: 1, explanation: 'for(;;) omite todas as partes, criando um loop infinito equivalente a while(true).' },
  ],
  "arrays": [
    { question: 'Qual é o índice do primeiro elemento de um array?', options: ['1', '0', '-1', 'Depende'], correct: 1, explanation: 'Em C++, arrays começam no índice 0. arr[0] é o primeiro elemento.' },
    { question: 'O que vector tem que array não tem?', options: ['Índices', 'Tipo definido', 'Tamanho dinâmico', 'Valores'], correct: 2, explanation: 'std::vector pode crescer e diminuir em tempo de execução, enquanto arrays têm tamanho fixo.' },
    { question: 'O que acontece ao acessar arr[10] em um array de 5 elementos?', options: ['Retorna 0', 'Erro de compilação', 'Comportamento indefinido', 'Retorna null'], correct: 2, explanation: 'Acessar fora dos limites causa comportamento indefinido — pode crashar, corromper dados ou parecer funcionar.' },
  ],
  "matrizes": [
    { question: 'Como declarar uma matriz 3x4?', options: ['int m[3,4]', 'int m[3][4]', 'int m(3)(4)', 'matrix m(3,4)'], correct: 1, explanation: 'Matrizes em C++ usam dois pares de colchetes: tipo nome[linhas][colunas].' },
    { question: 'Quantos loops são necessários para percorrer uma matriz?', options: ['1', '2', '3', 'Depende'], correct: 1, explanation: 'São necessários 2 loops aninhados: um para linhas e outro para colunas.' },
    { question: 'Em m[i][j], o que i e j representam?', options: ['coluna e linha', 'linha e coluna', 'x e y', 'largura e altura'], correct: 1, explanation: 'O primeiro índice [i] é a linha e o segundo [j] é a coluna.' },
  ],
  "funcoes": [
    { question: 'O que uma função void retorna?', options: ['0', 'null', 'Nada', 'void'], correct: 2, explanation: 'Funções void não retornam nenhum valor. Elas executam uma ação sem produzir resultado.' },
    { question: 'O que é um protótipo de função?', options: ['A implementação da função', 'A declaração sem corpo', 'Um tipo de classe', 'Um loop especial'], correct: 1, explanation: 'Um protótipo declara a assinatura da função (tipo, nome, parâmetros) sem o corpo, permitindo usá-la antes da definição.' },
    { question: 'Parâmetros com valor padrão devem ficar onde?', options: ['No início', 'No final', 'Em qualquer posição', 'Apenas no protótipo'], correct: 1, explanation: 'Parâmetros com valor padrão devem ficar no final da lista de parâmetros.' },
  ],
  "parametros": [
    { question: 'Passagem por valor modifica a variável original?', options: ['Sim', 'Não', 'Às vezes', 'Depende do tipo'], correct: 1, explanation: 'Passagem por valor cria uma cópia. A variável original não é afetada.' },
    { question: 'Qual símbolo indica passagem por referência?', options: ['*', '&', '#', '@'], correct: 1, explanation: 'O & após o tipo indica referência: void func(int& x) recebe x por referência.' },
    { question: 'Para que serve const& em parâmetros?', options: ['Permite modificação', 'Evita cópia e impede modificação', 'Cria ponteiro', 'Define constante global'], correct: 1, explanation: 'const& evita cópia (eficiente) e impede que a função modifique o argumento (seguro).' },
  ],
  "sobrecarga-funcoes": [
    { question: 'O que diferencia funções sobrecarregadas?', options: ['O nome', 'Os parâmetros', 'O tipo de retorno', 'O namespace'], correct: 1, explanation: 'Funções sobrecarregadas têm o mesmo nome mas parâmetros diferentes (tipo ou quantidade).' },
    { question: 'Apenas o tipo de retorno diferente é suficiente?', options: ['Sim', 'Não', 'Apenas com templates', 'Depende'], correct: 1, explanation: 'O tipo de retorno sozinho NÃO diferencia funções sobrecarregadas. Os parâmetros devem ser diferentes.' },
    { question: 'Quando a sobrecarga é resolvida?', options: ['Em tempo de execução', 'Em tempo de compilação', 'Na linkagem', 'No preprocessador'], correct: 1, explanation: 'A sobrecarga é resolvida em tempo de compilação — o compilador escolhe a versão correta baseado nos argumentos.' },
  ],
  "recursao": [
    { question: 'O que toda função recursiva deve ter?', options: ['Um loop', 'Um caso base', 'Dois parâmetros', 'Uma variável global'], correct: 1, explanation: 'O caso base é a condição de parada que evita recursão infinita.' },
    { question: 'O que acontece com recursão sem caso base?', options: ['Retorna 0', 'Stack overflow', 'Loop infinito controlado', 'Nada'], correct: 1, explanation: 'Recursão sem caso base causa stack overflow — a pilha de chamadas estoura.' },
    { question: 'Qual o fatorial de 5?', options: ['25', '120', '60', '720'], correct: 1, explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.' },
  ],
  "ponteiros": [
    { question: 'O que um ponteiro armazena?', options: ['Um valor', 'Um endereço de memória', 'Um tipo', 'Um nome'], correct: 1, explanation: 'Ponteiros armazenam endereços de memória, não valores diretamente.' },
    { question: 'O que o operador * faz com um ponteiro?', options: ['Multiplica', 'Desreferencia (acessa o valor)', 'Cria ponteiro', 'Obtém endereço'], correct: 1, explanation: 'O operador * (desreferência) acessa o valor armazenado no endereço apontado.' },
    { question: 'O que é nullptr?', options: ['Um tipo', 'Um ponteiro que não aponta para nada', 'Zero', 'Um erro'], correct: 1, explanation: 'nullptr é um ponteiro nulo — indica que o ponteiro não aponta para nenhum endereço válido.' },
  ],
  "alocacao-dinamica": [
    { question: 'Qual operador aloca memória dinamicamente?', options: ['malloc', 'new', 'alloc', 'create'], correct: 1, explanation: 'Em C++, new aloca memória no heap e retorna um ponteiro.' },
    { question: 'Como liberar um array alocado com new[]?', options: ['delete', 'delete[]', 'free', 'remove'], correct: 1, explanation: 'Arrays alocados com new[] devem ser liberados com delete[] (com colchetes).' },
    { question: 'O que é um memory leak?', options: ['Memória corrompida', 'Memória alocada mas nunca liberada', 'Acesso inválido', 'Estouro de buffer'], correct: 1, explanation: 'Memory leak ocorre quando memória alocada com new nunca é liberada com delete, desperdiçando recursos.' },
  ],
  "strings": [
    { question: 'Como ler uma frase completa com cin?', options: ['cin >> frase', 'cin.get(frase)', 'getline(cin, frase)', 'scanf(frase)'], correct: 2, explanation: 'getline(cin, str) lê a linha inteira incluindo espaços. cin >> str para no primeiro espaço.' },
    { question: 'O que string::npos significa?', options: ['Posição zero', 'Posição final', 'Não encontrado', 'Erro'], correct: 2, explanation: 'string::npos é retornado por find() quando a substring não é encontrada.' },
    { question: 'Como obter o tamanho de uma string?', options: ['str.size', 'str.length()', 'strlen(str)', 'str.count()'], correct: 1, explanation: 'str.length() ou str.size() retornam o número de caracteres da string.' },
  ],
  "structs": [
    { question: 'Qual a visibilidade padrão de uma struct?', options: ['private', 'public', 'protected', 'friend'], correct: 1, explanation: 'Em struct, membros são public por padrão. Em class, são private por padrão.' },
    { question: 'Como acessar membros de uma struct?', options: ['struct->membro', 'struct.membro', 'struct:membro', 'struct[membro]'], correct: 1, explanation: 'Use o operador ponto (.) para acessar membros: aluno.nome, aluno.idade.' },
    { question: 'Struct pode ter funções membro?', options: ['Sim', 'Não', 'Apenas em C++11', 'Apenas construtores'], correct: 0, explanation: 'Em C++, structs podem ter funções membro, construtores e destrutores — como classes.' },
  ],
  "enums": [
    { question: 'Qual o valor padrão do primeiro elemento enum?', options: ['1', '0', '-1', 'Indefinido'], correct: 1, explanation: 'Por padrão, o primeiro valor de um enum é 0, e cada subsequente é +1.' },
    { question: 'Qual a vantagem de enum class sobre enum?', options: ['É mais rápido', 'Evita conflitos de nomes e conversão implícita', 'Suporta strings', 'É mais curto'], correct: 1, explanation: 'enum class não converte implicitamente para int e exige prefixo (Dia::SEGUNDA), evitando conflitos.' },
    { question: 'Enum pode ser usado em switch?', options: ['Sim', 'Não', 'Apenas enum class', 'Apenas com cast'], correct: 0, explanation: 'Enum é um tipo inteiro e funciona perfeitamente com switch case.' },
  ],
  "arquivos": [
    { question: 'Qual classe é usada para escrever em arquivo?', options: ['ifstream', 'ofstream', 'fstream', 'iostream'], correct: 1, explanation: 'ofstream (output file stream) é usada para escrever em arquivos.' },
    { question: 'Como verificar se um arquivo foi aberto com sucesso?', options: ['.good()', '.is_open()', '.exists()', '.check()'], correct: 1, explanation: '.is_open() retorna true se o arquivo foi aberto com sucesso.' },
    { question: 'O que acontece se não fechar um arquivo?', options: ['Nada', 'Dados podem ser perdidos', 'Erro de compilação', 'Crash'], correct: 1, explanation: 'Não fechar arquivos pode causar perda de dados em buffer. Com RAII, o destrutor fecha automaticamente.' },
  ],
  "classes-objetos": [
    { question: 'Qual a diferença entre classe e objeto?', options: ['São iguais', 'Classe é o molde, objeto é a instância', 'Objeto é o molde', 'Classe é uma função'], correct: 1, explanation: 'A classe define a estrutura (molde), e o objeto é uma instância concreta dessa classe.' },
    { question: 'Membros private podem ser acessados de fora?', options: ['Sim', 'Não', 'Com cast', 'Apenas em main'], correct: 1, explanation: 'Membros private só podem ser acessados dentro da própria classe ou por funções/classes friend.' },
    { question: 'O que é uma instância?', options: ['Uma cópia da classe', 'Um objeto criado a partir da classe', 'Um método', 'Um atributo'], correct: 1, explanation: 'Instância é um objeto concreto criado a partir de uma classe, com seus próprios valores de atributos.' },
  ],
  "construtores-destrutores": [
    { question: 'Quando o construtor é chamado?', options: ['Ao destruir o objeto', 'Ao criar o objeto', 'Manualmente', 'Ao copiar'], correct: 1, explanation: 'O construtor é chamado automaticamente quando um objeto é criado.' },
    { question: 'Qual o símbolo do destrutor?', options: ['!', '~', '#', '@'], correct: 1, explanation: 'O destrutor usa ~ antes do nome da classe: ~MinhaClasse().' },
    { question: 'O que é lista de inicialização?', options: ['Uma lista de membros com valores iniciais após :', 'Um array de objetos', 'Uma lista de parâmetros', 'Um tipo de herança'], correct: 0, explanation: 'Lista de inicialização (: membro(valor)) no construtor é mais eficiente que atribuição no corpo.' },
  ],
  "encapsulamento": [
    { question: 'O que é encapsulamento?', options: ['Herança múltipla', 'Esconder detalhes internos e expor interface controlada', 'Sobrecarga de funções', 'Polimorfismo'], correct: 1, explanation: 'Encapsulamento é ocultar implementação interna e controlar acesso via getters/setters.' },
    { question: 'Getters devem ser marcados como?', options: ['virtual', 'static', 'const', 'inline'], correct: 2, explanation: 'Getters devem ser const pois não modificam o objeto: int getIdade() const { return idade; }' },
    { question: 'Qual a vantagem de setters com validação?', options: ['São mais rápidos', 'Impedem dados inválidos', 'Criam cópias', 'São obrigatórios'], correct: 1, explanation: 'Setters com validação garantem que os dados sempre estejam em estado válido (ex: idade não negativa).' },
  ],
  "heranca": [
    { question: 'O que significa "public" na herança?', options: ['Tudo vira public', 'Membros public e protected são herdados mantendo visibilidade', 'Tudo vira private', 'Nada muda'], correct: 1, explanation: 'Com herança public, membros public ficam public e protected ficam protected na classe derivada.' },
    { question: 'O que a keyword override faz?', options: ['Cria nova função', 'Garante que está sobrescrevendo uma função virtual da base', 'Deleta a função', 'Torna privada'], correct: 1, explanation: 'override verifica em tempo de compilação que a função realmente sobrescreve uma virtual da base.' },
    { question: 'Membros protected são acessíveis em?', options: ['Qualquer lugar', 'Apenas na própria classe', 'Na classe e classes derivadas', 'Apenas em friend'], correct: 2, explanation: 'protected permite acesso na própria classe e em classes que herdam dela, mas não externamente.' },
  ],
  "polimorfismo": [
    { question: 'O que é necessário para polimorfismo funcionar?', options: ['Funções static', 'Funções virtual e ponteiros/referências da base', 'Templates', 'Macros'], correct: 1, explanation: 'Polimorfismo requer funções virtuais na classe base e acesso via ponteiro/referência base.' },
    { question: 'O que é late binding?', options: ['Vinculação em compilação', 'Vinculação em tempo de execução', 'Erro de linkagem', 'Cast implícito'], correct: 1, explanation: 'Late binding determina qual versão da função chamar em tempo de execução, baseado no tipo real do objeto.' },
    { question: 'Por que o destrutor da base deve ser virtual?', options: ['Para ser mais rápido', 'Para garantir que o destrutor correto da derivada seja chamado', 'É obrigatório', 'Para evitar herança'], correct: 1, explanation: 'Sem destrutor virtual, delete em ponteiro base não chama o destrutor da classe derivada, causando memory leak.' },
  ],
  "classes-abstratas": [
    { question: 'O que é uma função virtual pura?', options: ['Sem parâmetros', 'Declarada com = 0', 'Sem corpo e sem = 0', 'Uma função friend'], correct: 1, explanation: 'Uma função virtual pura é declarada com = 0: virtual void func() = 0;' },
    { question: 'Pode-se instanciar uma classe abstrata?', options: ['Sim', 'Não', 'Apenas com new', 'Apenas como referência'], correct: 1, explanation: 'Classes abstratas não podem ser instanciadas diretamente — servem como interface para classes derivadas.' },
    { question: 'C++ tem a keyword "interface"?', options: ['Sim', 'Não', 'Apenas em C++20', 'Apenas com pragma'], correct: 1, explanation: 'C++ não tem keyword interface. Uma classe com todas funções virtuais puras funciona como interface.' },
  ],
  "sobrecarga-operadores": [
    { question: 'Qual operador NÃO pode ser sobrecarregado?', options: ['+', '<<', '::', '=='], correct: 2, explanation: 'O operador de resolução de escopo :: não pode ser sobrecarregado em C++.' },
    { question: 'Para que serve friend na sobrecarga de <<?', options: ['Velocidade', 'Permitir acesso a membros private do objeto', 'Criar template', 'Evitar herança'], correct: 1, explanation: 'operator<< precisa ser friend para acessar membros private e funcionar com cout << objeto.' },
    { question: 'A sobrecarga deve manter o sentido original?', options: ['Não importa', 'Sim, por convenção', 'É obrigatório', 'Apenas para + e -'], correct: 1, explanation: 'Por convenção e boa prática, operadores sobrecarregados devem manter sua semântica original.' },
  ],
  "friend-functions": [
    { question: 'Uma função friend é membro da classe?', options: ['Sim', 'Não', 'Depende', 'Apenas se virtual'], correct: 1, explanation: 'Friend functions NÃO são membros da classe — apenas têm acesso especial aos membros private.' },
    { question: 'Friend viola o encapsulamento?', options: ['Sim, parcialmente', 'Não', 'Depende do uso', 'Apenas com herança'], correct: 0, explanation: 'Friend concede acesso a dados private, quebrando parcialmente o encapsulamento. Use com moderação.' },
    { question: 'Onde friend é mais aceitável?', options: ['Construtores', 'Operadores de stream (<<, >>)', 'Destrutores', 'Getters'], correct: 1, explanation: 'Friend é mais aceitável para operadores de stream que precisam acessar dados internos para formatação.' },
  ],
  "templates": [
    { question: 'Templates são resolvidos em tempo de?', options: ['Execução', 'Compilação', 'Linkagem', 'Preprocessamento'], correct: 1, explanation: 'Templates são resolvidos em tempo de compilação — o compilador gera código específico para cada tipo usado.' },
    { question: 'Onde deve ficar o código template?', options: ['Em .cpp', 'Em headers (.h/.hpp)', 'Em .obj', 'Em qualquer lugar'], correct: 1, explanation: 'Templates devem ficar em headers pois o compilador precisa ver a definição completa para gerar código.' },
    { question: 'Qual keyword define um template?', options: ['generic', 'template', 'typename', 'auto'], correct: 1, explanation: 'template <typename T> ou template <class T> define uma função ou classe genérica.' },
  ],
  "stl-containers": [
    { question: 'Qual container é melhor para acesso por índice?', options: ['list', 'map', 'vector', 'set'], correct: 2, explanation: 'vector oferece acesso O(1) por índice, enquanto list e map são mais lentos para acesso aleatório.' },
    { question: 'O que set garante?', options: ['Ordem de inserção', 'Sem duplicatas e ordenado', 'Acesso por chave', 'Tamanho fixo'], correct: 1, explanation: 'set armazena elementos únicos (sem duplicatas) em ordem crescente automaticamente.' },
    { question: 'Qual container usa pares chave-valor?', options: ['vector', 'set', 'map', 'list'], correct: 2, explanation: 'map armazena pares chave-valor ordenados pela chave. unordered_map usa hash table.' },
  ],
  "stl-iteradores": [
    { question: 'O que begin() retorna?', options: ['O primeiro elemento', 'Um iterador para o primeiro elemento', 'O tamanho', 'true/false'], correct: 1, explanation: 'begin() retorna um iterador apontando para o primeiro elemento do container.' },
    { question: 'O que end() retorna?', options: ['O último elemento', 'Um iterador para o último elemento', 'Um iterador após o último elemento', 'null'], correct: 2, explanation: 'end() retorna um iterador para a posição APÓS o último elemento (past-the-end).' },
    { question: 'Como acessar o valor de um iterador?', options: ['it.value()', '*it', 'it->value', '&it'], correct: 1, explanation: 'Use *it (desreferência) para acessar o valor apontado pelo iterador, similar a ponteiros.' },
  ],
  "stl-algoritmos": [
    { question: 'Qual é a complexidade de std::sort?', options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(log n)'], correct: 2, explanation: 'std::sort usa Introsort e tem complexidade O(n log n) em média e no pior caso.' },
    { question: 'O que accumulate faz?', options: ['Ordena', 'Soma todos os elementos', 'Conta elementos', 'Remove duplicatas'], correct: 1, explanation: 'accumulate reduz o container a um único valor, por padrão somando todos os elementos.' },
    { question: 'Em qual header estão os algoritmos?', options: ['<vector>', '<iterator>', '<algorithm>', '<functional>'], correct: 2, explanation: 'A maioria dos algoritmos STL está em <algorithm>. accumulate está em <numeric>.' },
  ],
  "excecoes": [
    { question: 'Qual keyword lança uma exceção?', options: ['catch', 'try', 'throw', 'error'], correct: 2, explanation: 'throw lança uma exceção que será capturada pelo bloco catch mais próximo.' },
    { question: 'Como capturar qualquer exceção?', options: ['catch(all)', 'catch(exception)', 'catch(...)', 'catch(any)'], correct: 2, explanation: 'catch(...) com reticências captura qualquer tipo de exceção.' },
    { question: 'Exceções devem ser capturadas como?', options: ['Por valor', 'Por referência constante', 'Por ponteiro', 'Por cópia'], correct: 1, explanation: 'Capture exceções por const reference (const exception& e) para evitar slicing e cópias.' },
  ],
  "namespaces": [
    { question: 'Qual é o namespace padrão do C++?', options: ['global', 'std', 'cpp', 'default'], correct: 1, explanation: 'std é o namespace da Standard Library onde vivem cout, string, vector, etc.' },
    { question: 'Por que evitar "using namespace std" em headers?', options: ['É lento', 'Polui o namespace global para todos que incluem o header', 'Causa erro', 'Não compila'], correct: 1, explanation: 'using namespace em headers força todos os arquivos que incluem esse header a importar todo o namespace.' },
    { question: 'Como acessar algo em um namespace?', options: ['namespace.membro', 'namespace::membro', 'namespace->membro', 'namespace:membro'], correct: 1, explanation: 'Use o operador de resolução de escopo :: para acessar membros: std::cout, Math::PI.' },
  ],
  "preprocessador": [
    { question: 'Quando as diretivas são processadas?', options: ['Em tempo de execução', 'Antes da compilação', 'Durante a linkagem', 'Após a compilação'], correct: 1, explanation: 'O preprocessador processa diretivas (#include, #define, etc.) ANTES da compilação do código.' },
    { question: 'O que substitui #define em C++ moderno?', options: ['enum', 'constexpr', 'auto', 'typedef'], correct: 1, explanation: 'constexpr é a alternativa moderna a #define para constantes — respeita escopo e tipos.' },
    { question: 'Para que serve #pragma once?', options: ['Otimizar código', 'Evitar inclusão dupla de headers', 'Definir constantes', 'Compilar uma vez'], correct: 1, explanation: '#pragma once impede que um header seja incluído mais de uma vez, evitando erros de redefinição.' },
  ],
  "smart-pointers": [
    { question: 'Qual smart pointer permite apenas um dono?', options: ['shared_ptr', 'unique_ptr', 'weak_ptr', 'auto_ptr'], correct: 1, explanation: 'unique_ptr tem ownership exclusivo — não pode ser copiado, apenas movido.' },
    { question: 'O que make_unique faz?', options: ['Cria unique_ptr', 'Cria shared_ptr', 'Torna variável única', 'Remove duplicatas'], correct: 0, explanation: 'make_unique<T>(args) cria um unique_ptr de forma segura, evitando uso direto de new.' },
    { question: 'Quando usar shared_ptr?', options: ['Sempre', 'Quando múltiplos donos precisam do mesmo recurso', 'Nunca', 'Apenas com arrays'], correct: 1, explanation: 'shared_ptr usa contagem de referências para múltiplos donos. O recurso é liberado quando o último shared_ptr é destruído.' },
  ],
  "move-semantics": [
    { question: 'O que std::move faz realmente?', options: ['Move dados fisicamente', 'Faz um cast para rvalue reference', 'Copia dados', 'Deleta o original'], correct: 1, explanation: 'std::move não move nada — apenas faz um cast para rvalue reference, sinalizando que o objeto pode ser "roubado".' },
    { question: 'Após std::move, o objeto original está?', options: ['Destruído', 'Inalterado', 'Em estado válido mas indefinido', 'Null'], correct: 2, explanation: 'Após move, o objeto está em um estado válido (pode ser destruído) mas com valor indefinido.' },
    { question: 'Move constructor deve ser marcado como?', options: ['virtual', 'const', 'noexcept', 'static'], correct: 2, explanation: 'noexcept permite que containers como vector usem move em vez de copy ao redimensionar.' },
  ],
  "lambdas": [
    { question: 'O que [&] captura?', options: ['Nada', 'Tudo por valor', 'Tudo por referência', 'Apenas this'], correct: 2, explanation: '[&] captura todas as variáveis externas por referência — modificações dentro da lambda afetam o original.' },
    { question: 'O que [=] captura?', options: ['Nada', 'Tudo por valor', 'Tudo por referência', 'Apenas constantes'], correct: 1, explanation: '[=] captura todas as variáveis externas por valor (cópia). A lambda não modifica os originais.' },
    { question: 'Lambdas genéricas (auto params) estão em?', options: ['C++11', 'C++14', 'C++17', 'C++20'], correct: 1, explanation: 'C++14 introduziu lambdas genéricas com auto nos parâmetros: [](auto x) { ... }.' },
  ],
  "multithreading": [
    { question: 'O que é uma race condition?', options: ['Thread rápida', 'Duas threads acessando dados compartilhados sem sincronização', 'Loop infinito', 'Deadlock'], correct: 1, explanation: 'Race condition ocorre quando threads acessam dados compartilhados simultaneamente sem proteção.' },
    { question: 'Para que serve mutex?', options: ['Criar threads', 'Proteger dados compartilhados', 'Pausar threads', 'Destruir threads'], correct: 1, explanation: 'Mutex (mutual exclusion) garante que apenas uma thread acesse a seção crítica por vez.' },
    { question: 'O que join() faz?', options: ['Cria nova thread', 'Espera a thread terminar', 'Pausa a thread', 'Mata a thread'], correct: 1, explanation: 'join() bloqueia a thread atual até que a thread-alvo termine sua execução.' },
  ],
  "design-patterns": [
    { question: 'Quantas instâncias o Singleton permite?', options: ['0', '1', '2', 'Ilimitadas'], correct: 1, explanation: 'O padrão Singleton garante que uma classe tenha exatamente uma instância global.' },
    { question: 'Qual pattern notifica observadores sobre mudanças?', options: ['Singleton', 'Factory', 'Observer', 'Strategy'], correct: 2, explanation: 'Observer define uma dependência um-para-muitos onde observadores são notificados sobre mudanças no sujeito.' },
    { question: 'Factory é usado para?', options: ['Destruir objetos', 'Criar objetos de forma flexível', 'Observar eventos', 'Ordenar dados'], correct: 1, explanation: 'Factory encapsula a criação de objetos, permitindo criar diferentes tipos sem expor a lógica de criação.' },
  ],
  "raii": [
    { question: 'RAII adquire recursos em?', options: ['main()', 'Destrutor', 'Construtor', 'Função global'], correct: 2, explanation: 'RAII: Resource Acquisition Is Initialization — o recurso é adquirido no construtor.' },
    { question: 'RAII libera recursos em?', options: ['main()', 'Destrutor', 'Construtor', 'Manualmente'], correct: 1, explanation: 'O recurso é automaticamente liberado no destrutor, garantindo limpeza mesmo com exceções.' },
    { question: 'Qual exemplo NÃO é RAII?', options: ['unique_ptr', 'lock_guard', 'fstream', 'new/delete manual'], correct: 3, explanation: 'new/delete manual não é RAII pois requer liberação explícita. Os outros gerenciam recursos automaticamente.' },
  ],
  "metaprogramacao": [
    { question: 'Metaprogramação com templates executa em?', options: ['Tempo de execução', 'Tempo de compilação', 'Tempo de linkagem', 'Preprocessamento'], correct: 1, explanation: 'Template metaprogramming é avaliado pelo compilador, gerando código otimizado em tempo de compilação.' },
    { question: 'Qual a alternativa moderna a template metaprogramming?', options: ['Macros', 'constexpr', 'Runtime reflection', 'Inline assembly'], correct: 1, explanation: 'constexpr (C++11) e consteval (C++20) são formas mais simples e legíveis de computação em tempo de compilação.' },
    { question: 'if constexpr foi introduzido em?', options: ['C++11', 'C++14', 'C++17', 'C++20'], correct: 2, explanation: 'if constexpr (C++17) permite branching em tempo de compilação, descartando branches não tomados.' },
  ],
  "cpp-moderno": [
    { question: 'O que são structured bindings?', options: ['Ligações de objetos', 'Desestruturação de tuplas/structs em variáveis', 'Bindings de templates', 'Herança moderna'], correct: 1, explanation: 'Structured bindings (C++17) permitem: auto [x, y, z] = getTuple(); — similar a destructuring em JS.' },
    { question: 'Para que serve std::optional?', options: ['Otimização', 'Representar valor que pode ou não existir', 'Opções de compilação', 'Configuração'], correct: 1, explanation: 'std::optional<T> pode conter um valor T ou nullopt, eliminando a necessidade de valores sentinela.' },
    { question: 'std::variant é similar a?', options: ['Ponteiro void', 'Union type-safe', 'Template', 'Smart pointer'], correct: 1, explanation: 'std::variant é uma union type-safe que pode conter um valor de vários tipos possíveis, com verificação em tempo de compilação.' },
  ],
  "boas-praticas": [
    { question: 'Qual ferramenta detecta memory leaks?', options: ['gcc', 'valgrind', 'make', 'git'], correct: 1, explanation: 'Valgrind é a ferramenta padrão para detectar memory leaks, acessos inválidos e uso de memória não inicializada.' },
    { question: 'Qual flag do compilador habilita todos os warnings?', options: ['-O2', '-Wall', '-std=c++17', '-g'], correct: 1, explanation: '-Wall habilita a maioria dos warnings. Combine com -Wextra e -Werror para código mais seguro.' },
    { question: 'Qual o princípio mais importante do C++ moderno?', options: ['Velocidade', 'RAII', 'Herança', 'Templates'], correct: 1, explanation: 'RAII é o princípio fundamental — gerencie todos os recursos automaticamente via construtores/destrutores.' },
  ],
};
