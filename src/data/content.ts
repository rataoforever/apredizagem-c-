import { ContentBlock } from './types';

export const topicContent: Record<string, ContentBlock[]> = {
  // ============ MÓDULO 1 - FUNDAMENTOS ============
  "estrutura-basica": [
    { type: 'text', content: 'Todo programa C++ segue uma estrutura básica composta por diretivas de inclusão de bibliotecas, a função principal main() e instruções de entrada/saída. A função main() é o ponto de entrada — é onde o programa começa a ser executado.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    cout << "Olá, Mundo!" << endl;
    return 0;
}`, title: 'hello.cpp' },
    { type: 'text', content: 'A diretiva #include <iostream> importa a biblioteca de entrada e saída padrão. O "using namespace std" permite usar cout e cin sem o prefixo "std::". A instrução "return 0" indica que o programa terminou com sucesso.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

// Isto é um comentário de linha
/* Isto é um
   comentário de bloco */

int main() {
    cout << "Primeira linha" << endl;
    cout << "Segunda linha" << endl;
    return 0;
}`, title: 'comentarios.cpp' },
    { type: 'note', content: 'Toda função main() deve retornar um inteiro. O valor 0 indica sucesso, qualquer outro valor indica erro. Comentários são ignorados pelo compilador e servem para documentar o código.' }
  ],

  "variaveis": [
    { type: 'text', content: 'Variáveis são espaços na memória usados para armazenar dados. Em C++, toda variável precisa ter um tipo definido antes de ser usada. Os tipos básicos são: int (inteiro), float (decimal 4 bytes), double (decimal 8 bytes), char (caractere), bool (verdadeiro/falso) e string (texto).' },
    { type: 'code', content: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int idade = 25;
    float altura = 1.75f;
    double salario = 3500.50;
    char letra = 'A';
    bool ativo = true;
    string nome = "João";

    cout << "Nome: " << nome << endl;
    cout << "Idade: " << idade << endl;
    cout << "Altura: " << altura << endl;
    cout << "Salário: " << salario << endl;
    cout << "Letra: " << letra << endl;
    cout << "Ativo: " << ativo << endl;

    return 0;
}`, title: 'variaveis.cpp' },
    { type: 'heading', content: 'Leitura de dados com cin' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int idade;
    cout << "Digite sua idade: ";
    cin >> idade;
    cout << "Você tem " << idade << " anos." << endl;
    return 0;
}`, title: 'entrada.cpp' },
    { type: 'note', content: 'Sempre inicialize suas variáveis! Variáveis não inicializadas contêm "lixo" da memória e podem causar comportamento inesperado.' }
  ],

  "declaracoes-multiplas": [
    { type: 'text', content: 'Em C++ é possível declarar múltiplas variáveis do mesmo tipo em uma única linha, separando-as por vírgula. Isso economiza espaço, mas deve ser usado com cuidado para não prejudicar a legibilidade.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    // Declaração múltipla do mesmo tipo
    int a = 10, b = 20, c = 30;

    // Declaração múltipla sem inicialização
    double x, y, z;
    x = 1.5;
    y = 2.5;
    z = x + y;

    cout << "a=" << a << " b=" << b << " c=" << c << endl;
    cout << "z=" << z << endl;

    return 0;
}`, title: 'multiplas.cpp' },
    { type: 'note', content: 'Cada variável pode ter ou não um valor inicial na declaração múltipla. Ex: int a = 1, b, c = 3; — aqui "b" não foi inicializado.' }
  ],

  "globais-locais": [
    { type: 'text', content: 'Variáveis globais são declaradas fora de qualquer função e podem ser acessadas em qualquer parte do programa. Variáveis locais são declaradas dentro de uma função ou bloco e só existem naquele escopo. Quando uma variável local tem o mesmo nome de uma global, a local tem prioridade (shadowing).' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int contador = 100; // variável global

void mostrar() {
    cout << "Global dentro de mostrar(): " << contador << endl;
}

int main() {
    int contador = 5; // variável local (shadowing)
    cout << "Local no main: " << contador << endl;

    mostrar(); // acessa a global

    {
        int contador = 50; // local ao bloco
        cout << "Local no bloco: " << contador << endl;
    }

    cout << "Local no main novamente: " << contador << endl;
    return 0;
}`, title: 'escopo.cpp' },
    { type: 'note', content: 'Evite variáveis globais sempre que possível! Elas tornam o código difícil de depurar e manter. Prefira passar dados por parâmetros de função.' }
  ],

  "operadores": [
    { type: 'text', content: 'C++ possui vários tipos de operadores: aritméticos (+, -, *, /, %), de atribuição (=, +=, -=, *=, /=, %=), de comparação (==, !=, <, >, <=, >=) e o operador módulo (%) que retorna o resto da divisão inteira.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 4;

    // Aritméticos
    cout << "Soma: " << a + b << endl;       // 19
    cout << "Subtração: " << a - b << endl;   // 11
    cout << "Multiplicação: " << a * b << endl; // 60
    cout << "Divisão: " << a / b << endl;     // 3 (inteira!)
    cout << "Módulo: " << a % b << endl;      // 3

    // Atribuição composta
    int x = 10;
    x += 5;  // x = x + 5 → 15
    x -= 3;  // x = x - 3 → 12
    x *= 2;  // x = x * 2 → 24
    cout << "x = " << x << endl;

    // Comparação
    cout << "a == b: " << (a == b) << endl;   // 0 (false)
    cout << "a > b: " << (a > b) << endl;     // 1 (true)

    return 0;
}`, title: 'operadores.cpp' },
    { type: 'note', content: 'Cuidado com a divisão inteira! 7/2 resulta em 3 (não 3.5). Para resultado decimal, pelo menos um operando deve ser float/double: 7.0/2 = 3.5.' }
  ],

  "incremento-decremento": [
    { type: 'text', content: 'Os operadores ++ (incremento) e -- (decremento) aumentam ou diminuem o valor de uma variável em 1. Existem duas formas: pré-incremento (++x) que incrementa antes de usar o valor, e pós-incremento (x++) que usa o valor antes de incrementar.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int a = 5;

    cout << "a inicial: " << a << endl;     // 5
    cout << "a++: " << a++ << endl;          // 5 (usa, depois incrementa)
    cout << "a agora: " << a << endl;        // 6
    cout << "++a: " << ++a << endl;          // 7 (incrementa, depois usa)

    int b = 10;
    cout << "b--: " << b-- << endl;          // 10
    cout << "b agora: " << b << endl;        // 9
    cout << "--b: " << --b << endl;          // 8

    return 0;
}`, title: 'incremento.cpp' },
    { type: 'note', content: 'Em loops for, ++i e i++ produzem o mesmo resultado. Porém, ++i é tecnicamente mais eficiente para tipos complexos pois evita criar uma cópia temporária.' }
  ],

  "invertendo-valores": [
    { type: 'text', content: 'Trocar (swap) os valores de duas variáveis é uma operação comum. A forma clássica usa uma variável temporária. C++ também oferece std::swap() na biblioteca <algorithm> para fazer isso de forma elegante.' },
    { type: 'code', content: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    // Método clássico com variável temporária
    int a = 10, b = 20;
    cout << "Antes: a=" << a << " b=" << b << endl;

    int temp = a;
    a = b;
    b = temp;
    cout << "Depois (temp): a=" << a << " b=" << b << endl;

    // Método moderno com std::swap
    int x = 100, y = 200;
    swap(x, y);
    cout << "Swap: x=" << x << " y=" << y << endl;

    return 0;
}`, title: 'swap.cpp' },
    { type: 'note', content: 'std::swap() funciona com qualquer tipo de dado e é a forma recomendada em C++ moderno. Ela é otimizada pelo compilador.' }
  ],

  "if-else": [
    { type: 'text', content: 'A estrutura if/else permite que o programa tome decisões. Se a condição do if for verdadeira, o bloco é executado; caso contrário, o bloco else é executado. Pode-se encadear múltiplas condições com else if.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int nota;
    cout << "Digite sua nota (0-100): ";
    cin >> nota;

    if (nota >= 90) {
        cout << "Conceito: A" << endl;
    } else if (nota >= 80) {
        cout << "Conceito: B" << endl;
    } else if (nota >= 70) {
        cout << "Conceito: C" << endl;
    } else if (nota >= 60) {
        cout << "Conceito: D" << endl;
    } else {
        cout << "Conceito: F - Reprovado" << endl;
    }

    return 0;
}`, title: 'if_else.cpp' },
    { type: 'note', content: 'Sempre use chaves {} mesmo para blocos de uma linha. Isso evita bugs sutis quando você adicionar mais linhas ao bloco no futuro.' }
  ],

  "and-or-not": [
    { type: 'text', content: 'Os operadores lógicos permitem combinar condições: && (AND - ambas verdadeiras), || (OR - pelo menos uma verdadeira) e ! (NOT - inverte o valor). C++ usa avaliação de curto-circuito: em &&, se a primeira for falsa, a segunda não é avaliada.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int idade = 20;
    bool temCarteira = true;

    // AND - ambas devem ser verdadeiras
    if (idade >= 18 && temCarteira) {
        cout << "Pode dirigir!" << endl;
    }

    // OR - pelo menos uma verdadeira
    int dia = 6; // sábado
    if (dia == 6 || dia == 7) {
        cout << "Final de semana!" << endl;
    }

    // NOT - inverte
    bool chovendo = false;
    if (!chovendo) {
        cout << "Não está chovendo." << endl;
    }

    // Combinando operadores
    int nota = 85;
    int faltas = 3;
    if (nota >= 70 && !(faltas > 10)) {
        cout << "Aprovado!" << endl;
    }

    return 0;
}`, title: 'logicos.cpp' },
    { type: 'note', content: 'Curto-circuito: em "a && b", se a for false, b nem é avaliado. Em "a || b", se a for true, b nem é avaliado. Use isso para evitar erros como acessar ponteiro nulo.' }
  ],

  "operador-ternario": [
    { type: 'text', content: 'O operador ternário é uma forma compacta de escrever um if/else simples. A sintaxe é: condição ? valor_se_verdadeiro : valor_se_falso. É útil para atribuições condicionais em uma única linha.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int idade = 20;
    string status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
    cout << status << endl;

    int a = 15, b = 20;
    int maior = (a > b) ? a : b;
    cout << "Maior: " << maior << endl;

    // Uso inline no cout
    int nota = 75;
    cout << "Resultado: " << ((nota >= 60) ? "Aprovado" : "Reprovado") << endl;

    return 0;
}`, title: 'ternario.cpp' },
    { type: 'note', content: 'Evite aninhar operadores ternários (ternário dentro de ternário). Isso torna o código muito difícil de ler. Nesses casos, use if/else if/else.' }
  ],

  "switch-case": [
    { type: 'text', content: 'O switch avalia uma expressão e compara com vários valores (cases). É mais limpo que múltiplos if/else if quando se compara uma variável com valores específicos. O break é essencial para evitar "fall-through" (executar o próximo case).' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int opcao;
    cout << "Menu: 1-Novo 2-Abrir 3-Salvar 4-Sair" << endl;
    cout << "Escolha: ";
    cin >> opcao;

    switch (opcao) {
        case 1:
            cout << "Criando novo arquivo..." << endl;
            break;
        case 2:
            cout << "Abrindo arquivo..." << endl;
            break;
        case 3:
            cout << "Salvando arquivo..." << endl;
            break;
        case 4:
            cout << "Saindo..." << endl;
            break;
        default:
            cout << "Opção inválida!" << endl;
            break;
    }

    return 0;
}`, title: 'switch.cpp' },
    { type: 'note', content: 'O default é opcional mas recomendado. Sem break, a execução "cai" para o próximo case (fall-through). Switch só funciona com int, char e enum — não funciona com string ou float.' }
  ],

  "while-break": [
    { type: 'text', content: 'O loop while repete um bloco de código enquanto a condição for verdadeira. O break interrompe o loop imediatamente, e o continue pula para a próxima iteração. Cuidado com loops infinitos — sempre garanta que a condição eventualmente será falsa.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    // While básico - contagem
    int i = 1;
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;

    // While com break
    int numero;
    while (true) {
        cout << "Digite um número (0 para sair): ";
        cin >> numero;
        if (numero == 0) break;
        cout << "Você digitou: " << numero << endl;
    }

    // While com continue
    int j = 0;
    while (j < 10) {
        j++;
        if (j % 2 == 0) continue; // pula pares
        cout << j << " "; // só imprime ímpares
    }
    cout << endl;

    return 0;
}`, title: 'while.cpp' },
    { type: 'note', content: 'Use "while(true)" com break para loops onde a condição de saída está no meio do loop, como menus interativos. Sempre tenha certeza de que o break será alcançado!' }
  ],

  "do-while": [
    { type: 'text', content: 'O do-while é similar ao while, mas garante que o bloco será executado pelo menos uma vez, pois a condição é verificada após a execução. É ideal para menus e validações de entrada onde você precisa executar primeiro e depois verificar.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    // Menu com do-while
    int opcao;
    do {
        cout << "\\n=== MENU ===" << endl;
        cout << "1 - Jogar" << endl;
        cout << "2 - Configurações" << endl;
        cout << "3 - Sair" << endl;
        cout << "Escolha: ";
        cin >> opcao;

        switch (opcao) {
            case 1: cout << "Iniciando jogo..." << endl; break;
            case 2: cout << "Abrindo configurações..." << endl; break;
            case 3: cout << "Até logo!" << endl; break;
            default: cout << "Opção inválida!" << endl;
        }
    } while (opcao != 3);

    return 0;
}`, title: 'dowhile.cpp' },
    { type: 'note', content: 'A diferença chave: while verifica ANTES de executar, do-while verifica DEPOIS. Use do-while quando o bloco precisa rodar pelo menos uma vez.' }
  ],

  "loop-for": [
    { type: 'text', content: 'O loop for é o mais versátil. Ele combina inicialização, condição e incremento em uma única linha: for(init; condição; incremento). É ideal quando se sabe quantas vezes o loop deve executar.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    // For básico
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl; // 0 1 2 3 4

    // For decrescente
    for (int i = 10; i > 0; i--) {
        cout << i << " ";
    }
    cout << endl;

    // For com passo diferente
    for (int i = 0; i <= 20; i += 5) {
        cout << i << " ";
    }
    cout << endl; // 0 5 10 15 20

    // For aninhado - tabuada
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 10; j++) {
            cout << i << "x" << j << "=" << i*j << "  ";
        }
        cout << endl;
    }

    return 0;
}`, title: 'for.cpp' },
    { type: 'note', content: 'A variável declarada no for (int i = 0) só existe dentro do loop. Você pode omitir qualquer parte do for: for(;;) cria um loop infinito equivalente a while(true).' }
  ],

  "arrays": [
    { type: 'text', content: 'Arrays (vetores) armazenam múltiplos valores do mesmo tipo em posições contíguas da memória. Os índices começam em 0. Em C++ moderno, prefira std::vector que é mais seguro e flexível.' },
    { type: 'code', content: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Array tradicional
    int notas[5] = {85, 90, 78, 92, 88};

    cout << "Primeira nota: " << notas[0] << endl;
    cout << "Última nota: " << notas[4] << endl;

    // Percorrendo com for
    int soma = 0;
    for (int i = 0; i < 5; i++) {
        soma += notas[i];
    }
    cout << "Média: " << soma / 5.0 << endl;

    // Vector (array dinâmico moderno)
    vector<string> nomes = {"Ana", "Bruno", "Carlos"};
    nomes.push_back("Diana"); // adiciona ao final

    for (int i = 0; i < nomes.size(); i++) {
        cout << nomes[i] << " ";
    }
    cout << endl;

    // Range-based for (C++11)
    for (const string& nome : nomes) {
        cout << nome << " ";
    }
    cout << endl;

    return 0;
}`, title: 'arrays.cpp' },
    { type: 'note', content: 'Acessar um índice fora dos limites do array causa comportamento indefinido (crash ou dados corrompidos). Sempre verifique os limites! std::vector tem o método .at() que verifica automaticamente.' }
  ],

  "matrizes": [
    { type: 'text', content: 'Arrays bidimensionais (matrizes) são como tabelas com linhas e colunas. São declarados com dois índices: tipo nome[linhas][colunas]. Para percorrer uma matriz, usamos dois loops for aninhados.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    // Declaração e inicialização
    int matriz[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    // Percorrendo a matriz
    cout << "Matriz 3x4:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            cout << matriz[i][j] << "\\t";
        }
        cout << endl;
    }

    // Somando todos os elementos
    int soma = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            soma += matriz[i][j];
        }
    }
    cout << "Soma total: " << soma << endl;

    return 0;
}`, title: 'matriz.cpp' },
    { type: 'note', content: 'Pense em matriz[i][j] como matriz[linha][coluna]. O primeiro índice é a linha, o segundo é a coluna. Matrizes são muito usadas em jogos, processamento de imagens e álgebra linear.' }
  ],

  // ============ MÓDULO 2 - INTERMEDIÁRIO ============
  "funcoes": [
    { type: 'text', content: 'Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas têm um tipo de retorno, um nome, parâmetros e um corpo. Funções void não retornam valor.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

// Função com retorno
int somar(int a, int b) {
    return a + b;
}

// Função void (sem retorno)
void saudacao(string nome) {
    cout << "Olá, " << nome << "!" << endl;
}

// Função com valor padrão
double calcularArea(double raio, double pi = 3.14159) {
    return pi * raio * raio;
}

int main() {
    cout << somar(3, 5) << endl;
    saudacao("Maria");
    cout << "Área: " << calcularArea(5) << endl;
    return 0;
}`, title: 'funcoes.cpp' },
    { type: 'note', content: 'Declare as funções antes de main() ou use protótipos (declaração sem corpo) no topo do arquivo. Funções tornam o código modular e mais fácil de testar.' }
  ],

  "parametros": [
    { type: 'text', content: 'Parâmetros podem ser passados por valor (cópia) ou por referência (&). Por valor, a função trabalha com uma cópia — a variável original não muda. Por referência, a função modifica diretamente a variável original.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

void porValor(int x) {
    x = 100; // não altera o original
}

void porReferencia(int& x) {
    x = 100; // altera o original!
}

void trocar(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int n = 5;
    porValor(n);
    cout << "Após porValor: " << n << endl; // 5

    porReferencia(n);
    cout << "Após porReferencia: " << n << endl; // 100

    int x = 10, y = 20;
    trocar(x, y);
    cout << "x=" << x << " y=" << y << endl; // x=20 y=10

    return 0;
}`, title: 'parametros.cpp' },
    { type: 'note', content: 'Use referência constante (const int& x) para evitar cópias de objetos grandes sem permitir modificação. É a forma mais eficiente de passar strings e vetores.' }
  ],

  "sobrecarga-funcoes": [
    { type: 'text', content: 'Sobrecarga (overloading) permite criar múltiplas funções com o mesmo nome mas parâmetros diferentes (tipo ou quantidade). O compilador escolhe a versão correta baseado nos argumentos passados.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int somar(int a, int b) { return a + b; }
double somar(double a, double b) { return a + b; }
int somar(int a, int b, int c) { return a + b + c; }

void imprimir(int x) { cout << "Inteiro: " << x << endl; }
void imprimir(string s) { cout << "String: " << s << endl; }

int main() {
    cout << somar(3, 5) << endl;       // chama int
    cout << somar(3.5, 2.1) << endl;   // chama double
    cout << somar(1, 2, 3) << endl;    // chama 3 params
    imprimir(42);
    imprimir("Olá");
    return 0;
}`, title: 'sobrecarga.cpp' },
    { type: 'note', content: 'A sobrecarga é resolvida em tempo de compilação. O tipo de retorno sozinho NÃO diferencia funções sobrecarregadas — os parâmetros devem ser diferentes.' }
  ],

  "recursao": [
    { type: 'text', content: 'Recursão é quando uma função chama a si mesma. Toda função recursiva precisa de um caso base (condição de parada) para evitar recursão infinita. É elegante para problemas como fatorial, Fibonacci e busca em árvores.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int fatorial(int n) {
    if (n <= 1) return 1;      // caso base
    return n * fatorial(n - 1); // chamada recursiva
}

int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "5! = " << fatorial(5) << endl;    // 120
    cout << "Fib(7) = " << fibonacci(7) << endl; // 13
    return 0;
}`, title: 'recursao.cpp' },
    { type: 'note', content: 'Recursão excessiva causa stack overflow. Para Fibonacci, a versão recursiva é O(2^n) — muito lenta! Prefira iteração ou memoização para performance.' }
  ],

  "ponteiros": [
    { type: 'text', content: 'Ponteiros são variáveis que armazenam endereços de memória. O operador & obtém o endereço de uma variável, e * (desreferência) acessa o valor no endereço apontado. Ponteiros são fundamentais em C++ para alocação dinâmica e estruturas de dados.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    int x = 42;
    int* ptr = &x; // ptr armazena o endereço de x

    cout << "Valor de x: " << x << endl;
    cout << "Endereço de x: " << &x << endl;
    cout << "Valor de ptr: " << ptr << endl;    // endereço
    cout << "Valor apontado: " << *ptr << endl;  // 42

    *ptr = 100; // modifica x através do ponteiro
    cout << "x agora: " << x << endl; // 100

    // Ponteiro nulo
    int* p = nullptr; // não aponta para nada

    return 0;
}`, title: 'ponteiros.cpp' },
    { type: 'note', content: 'Sempre inicialize ponteiros (com nullptr se não tiver endereço). Nunca desreferencie um ponteiro nulo — isso causa crash! Em C++ moderno, prefira referências e smart pointers.' }
  ],

  "alocacao-dinamica": [
    { type: 'text', content: 'Alocação dinâmica permite reservar memória em tempo de execução usando new e liberar com delete. Para arrays, use new[] e delete[]. Toda memória alocada com new DEVE ser liberada com delete para evitar memory leaks.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

int main() {
    // Alocação de variável única
    int* p = new int(42);
    cout << *p << endl;
    delete p;

    // Alocação de array
    int tamanho;
    cout << "Tamanho do array: ";
    cin >> tamanho;

    int* arr = new int[tamanho];
    for (int i = 0; i < tamanho; i++) {
        arr[i] = i * 10;
    }
    for (int i = 0; i < tamanho; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    delete[] arr; // IMPORTANTE: delete[] para arrays!

    return 0;
}`, title: 'alocacao.cpp' },
    { type: 'note', content: 'Em C++ moderno, evite new/delete diretamente. Use vector para arrays dinâmicos e smart pointers (unique_ptr, shared_ptr) para objetos individuais.' }
  ],

  "strings": [
    { type: 'text', content: 'C++ tem dois tipos de strings: C-strings (arrays de char) e std::string (classe moderna). std::string é mais segura e oferece muitos métodos úteis como length(), substr(), find(), append() e compare().' },
    { type: 'code', content: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string nome = "Programação";
    cout << "Tamanho: " << nome.length() << endl;
    cout << "Primeira letra: " << nome[0] << endl;
    cout << "Substring: " << nome.substr(0, 7) << endl;

    // Concatenação
    string saudacao = "Olá, " + nome + "!";
    cout << saudacao << endl;

    // Busca
    size_t pos = nome.find("grama");
    if (pos != string::npos) {
        cout << "'grama' encontrado na posição " << pos << endl;
    }

    // Comparação
    string a = "abc", b = "xyz";
    if (a < b) cout << a << " vem antes de " << b << endl;

    // Getline para ler frases completas
    string frase;
    cout << "Digite uma frase: ";
    getline(cin, frase);
    cout << "Você digitou: " << frase << endl;

    return 0;
}`, title: 'strings.cpp' },
    { type: 'note', content: 'Use getline(cin, str) para ler linhas inteiras (com espaços). cin >> str só lê até o primeiro espaço.' }
  ],

  "structs": [
    { type: 'text', content: 'Structs permitem agrupar variáveis de tipos diferentes em um único tipo personalizado. São como "moldes" para criar dados compostos. Em C++, structs podem ter funções membro, mas por convenção são usados para dados simples.' },
    { type: 'code', content: `#include <iostream>
#include <string>
using namespace std;

struct Aluno {
    string nome;
    int idade;
    double nota;
};

void imprimir(const Aluno& a) {
    cout << a.nome << " (" << a.idade << " anos) - Nota: " << a.nota << endl;
}

int main() {
    Aluno a1 = {"Ana", 20, 9.5};
    Aluno a2;
    a2.nome = "Bruno";
    a2.idade = 22;
    a2.nota = 8.0;

    imprimir(a1);
    imprimir(a2);

    // Array de structs
    Aluno turma[3] = {a1, a2, {"Carlos", 19, 7.5}};
    for (int i = 0; i < 3; i++) {
        imprimir(turma[i]);
    }

    return 0;
}`, title: 'structs.cpp' },
    { type: 'note', content: 'A diferença entre struct e class em C++ é apenas a visibilidade padrão: struct é public por padrão, class é private. Para dados simples sem encapsulamento, use struct.' }
  ],

  "enums": [
    { type: 'text', content: 'Enumerações (enum) definem um conjunto de constantes nomeadas inteiras. Tornam o código mais legível substituindo "números mágicos". C++11 introduziu enum class que é mais seguro e não polui o namespace.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

// Enum tradicional
enum Cor { VERMELHO, VERDE, AZUL }; // 0, 1, 2

// Enum class (C++11) - mais seguro
enum class DiaSemana {
    SEGUNDA = 1, TERCA, QUARTA, QUINTA, SEXTA, SABADO, DOMINGO
};

int main() {
    Cor c = VERDE;
    if (c == VERDE) cout << "Verde!" << endl;

    DiaSemana dia = DiaSemana::SABADO;
    if (dia == DiaSemana::SABADO || dia == DiaSemana::DOMINGO) {
        cout << "Final de semana!" << endl;
    }

    // Cast para int
    cout << "Valor: " << static_cast<int>(dia) << endl; // 6

    return 0;
}`, title: 'enums.cpp' },
    { type: 'note', content: 'Prefira enum class sobre enum tradicional. Enum class não converte implicitamente para int e exige o prefixo (DiaSemana::SEGUNDA), evitando conflitos de nomes.' }
  ],

  "arquivos": [
    { type: 'text', content: 'C++ usa fstream para manipular arquivos. ofstream escreve, ifstream lê e fstream faz ambos. Sempre verifique se o arquivo foi aberto com sucesso e feche-o ao terminar.' },
    { type: 'code', content: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Escrevendo em arquivo
    ofstream saida("dados.txt");
    if (saida.is_open()) {
        saida << "Linha 1" << endl;
        saida << "Linha 2" << endl;
        saida << 42 << endl;
        saida.close();
        cout << "Arquivo salvo!" << endl;
    }

    // Lendo arquivo
    ifstream entrada("dados.txt");
    string linha;
    if (entrada.is_open()) {
        while (getline(entrada, linha)) {
            cout << "Lido: " << linha << endl;
        }
        entrada.close();
    } else {
        cout << "Erro ao abrir arquivo!" << endl;
    }

    return 0;
}`, title: 'arquivos.cpp' },
    { type: 'note', content: 'Use RAII: abra no construtor e feche no destrutor (automático ao sair do escopo). Sempre verifique .is_open() antes de ler/escrever.' }
  ],

  // ============ MÓDULO 3 - POO ============
  "classes-objetos": [
    { type: 'text', content: 'Classes são o fundamento da POO. Uma classe define atributos (dados) e métodos (funções). Objetos são instâncias de uma classe. Membros podem ser public (acessíveis externamente), private (só dentro da classe) ou protected.' },
    { type: 'code', content: `#include <iostream>
#include <string>
using namespace std;

class Carro {
private:
    string marca;
    int velocidade;

public:
    Carro(string m) : marca(m), velocidade(0) {}

    void acelerar(int v) {
        velocidade += v;
        if (velocidade > 200) velocidade = 200;
    }

    void mostrar() {
        cout << marca << " - " << velocidade << " km/h" << endl;
    }
};

int main() {
    Carro c1("Toyota");
    c1.acelerar(80);
    c1.mostrar();
    Carro c2("BMW");
    c2.acelerar(150);
    c2.mostrar();
    return 0;
}`, title: 'classes.cpp' },
    { type: 'note', content: 'Em POO, os dados devem ser private e acessados via métodos public. Isso é o princípio do encapsulamento — proteger os dados internos da classe.' }
  ],

  "construtores-destrutores": [
    { type: 'text', content: 'Construtores inicializam objetos quando são criados. Destrutores (~NomeClasse) limpam recursos quando o objeto é destruído. C++ gera versões padrão automaticamente, mas você pode personalizar ambos.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

class Recurso {
    string nome;
public:
    // Construtor padrão
    Recurso() : nome("sem nome") {
        cout << "Construtor padrão: " << nome << endl;
    }
    // Construtor parametrizado
    Recurso(string n) : nome(n) {
        cout << "Construtor: " << nome << endl;
    }
    // Construtor de cópia
    Recurso(const Recurso& outro) : nome(outro.nome + " (cópia)") {
        cout << "Cópia: " << nome << endl;
    }
    // Destrutor
    ~Recurso() {
        cout << "Destrutor: " << nome << endl;
    }
};

int main() {
    Recurso r1("Arquivo");
    Recurso r2 = r1; // construtor de cópia
    {
        Recurso r3("Temporário");
    } // r3 destruído aqui
    cout << "Fim do main" << endl;
    return 0;
} // r2 e r1 destruídos aqui`, title: 'construtores.cpp' },
    { type: 'note', content: 'Use lista de inicialização (: membro(valor)) no construtor — é mais eficiente que atribuição no corpo. Destrutores são chamados automaticamente na ordem inversa da criação.' }
  ],

  "encapsulamento": [
    { type: 'text', content: 'Encapsulamento é ocultar os detalhes internos da classe e expor apenas uma interface controlada via getters e setters. Isso protege os dados de modificações inválidas e permite alterar a implementação sem afetar o código externo.' },
    { type: 'code', content: `#include <iostream>
#include <string>
using namespace std;

class ContaBancaria {
private:
    string titular;
    double saldo;
public:
    ContaBancaria(string t, double s) : titular(t), saldo(s > 0 ? s : 0) {}

    // Getters
    string getTitular() const { return titular; }
    double getSaldo() const { return saldo; }

    // Setter com validação
    void depositar(double valor) {
        if (valor > 0) saldo += valor;
    }

    bool sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            return true;
        }
        return false;
    }
};

int main() {
    ContaBancaria conta("João", 1000);
    conta.depositar(500);
    conta.sacar(200);
    cout << conta.getTitular() << ": R$" << conta.getSaldo() << endl;
    return 0;
}`, title: 'encapsulamento.cpp' },
    { type: 'note', content: 'Marque getters como const (não modificam o objeto). O encapsulamento permite validar dados no setter — ex: impedir saldo negativo.' }
  ],

  "heranca": [
    { type: 'text', content: 'Herança permite criar classes derivadas que herdam atributos e métodos de uma classe base. Isso promove reutilização de código. Use public inheritance para relação "é um" (Cachorro é um Animal).' },
    { type: 'code', content: `#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string nome;
public:
    Animal(string n) : nome(n) {}
    void comer() { cout << nome << " está comendo." << endl; }
    virtual void falar() { cout << nome << " faz algum som." << endl; }
};

class Cachorro : public Animal {
public:
    Cachorro(string n) : Animal(n) {}
    void falar() override { cout << nome << " diz: Au au!" << endl; }
    void buscar() { cout << nome << " buscou a bola!" << endl; }
};

class Gato : public Animal {
public:
    Gato(string n) : Animal(n) {}
    void falar() override { cout << nome << " diz: Miau!" << endl; }
};

int main() {
    Cachorro dog("Rex");
    dog.comer();  // herdado
    dog.falar();  // sobrescrito
    dog.buscar(); // próprio

    Gato cat("Mimi");
    cat.falar();
    return 0;
}`, title: 'heranca.cpp' },
    { type: 'note', content: 'Use protected para membros que devem ser acessíveis nas classes filhas. Use virtual na classe base para permitir sobrescrita polimórfica, e override na derivada para segurança.' }
  ],

  "polimorfismo": [
    { type: 'text', content: 'Polimorfismo permite tratar objetos de classes derivadas através de ponteiros/referências da classe base. Com funções virtuais, a versão correta do método é chamada em tempo de execução (late binding).' },
    { type: 'code', content: `#include <iostream>
#include <vector>
using namespace std;

class Forma {
public:
    virtual double area() const = 0; // pura virtual
    virtual void desenhar() const {
        cout << "Desenhando forma (área=" << area() << ")" << endl;
    }
    virtual ~Forma() {}
};

class Circulo : public Forma {
    double raio;
public:
    Circulo(double r) : raio(r) {}
    double area() const override { return 3.14159 * raio * raio; }
};

class Retangulo : public Forma {
    double largura, altura;
public:
    Retangulo(double l, double a) : largura(l), altura(a) {}
    double area() const override { return largura * altura; }
};

int main() {
    vector<Forma*> formas;
    formas.push_back(new Circulo(5));
    formas.push_back(new Retangulo(4, 6));

    for (Forma* f : formas) {
        f->desenhar(); // polimorfismo!
    }

    for (Forma* f : formas) delete f;
    return 0;
}`, title: 'polimorfismo.cpp' },
    { type: 'note', content: 'Sempre declare o destrutor da classe base como virtual quando usar polimorfismo. Caso contrário, delete no ponteiro base não chamará o destrutor correto da classe derivada.' }
  ],

  "classes-abstratas": [
    { type: 'text', content: 'Classes abstratas contêm pelo menos uma função virtual pura (= 0) e não podem ser instanciadas. Servem como interfaces — definem um contrato que as classes derivadas devem implementar.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

// Interface (classe abstrata pura)
class Imprimivel {
public:
    virtual void imprimir() const = 0;
    virtual ~Imprimivel() {}
};

class Serializavel {
public:
    virtual string serializar() const = 0;
    virtual ~Serializavel() {}
};

// Classe que implementa ambas interfaces
class Documento : public Imprimivel, public Serializavel {
    string conteudo;
public:
    Documento(string c) : conteudo(c) {}
    void imprimir() const override {
        cout << "Documento: " << conteudo << endl;
    }
    string serializar() const override {
        return "{conteudo: \\"" + conteudo + "\\"}";
    }
};

int main() {
    Documento doc("Relatório anual");
    doc.imprimir();
    cout << doc.serializar() << endl;

    Imprimivel* p = &doc; // ponteiro para interface
    p->imprimir(); // polimorfismo
    return 0;
}`, title: 'abstratas.cpp' },
    { type: 'note', content: 'Em C++ não existe keyword "interface" como em Java. Uma classe com todas as funções virtuais puras é equivalente a uma interface.' }
  ],

  "sobrecarga-operadores": [
    { type: 'text', content: 'C++ permite redefinir operadores (+, -, ==, <<, etc.) para tipos personalizados. Isso torna o código mais natural — por exemplo, somar dois vetores com v1 + v2 em vez de v1.somar(v2).' },
    { type: 'code', content: `#include <iostream>
using namespace std;

class Vetor2D {
public:
    double x, y;
    Vetor2D(double x = 0, double y = 0) : x(x), y(y) {}

    Vetor2D operator+(const Vetor2D& v) const {
        return Vetor2D(x + v.x, y + v.y);
    }
    bool operator==(const Vetor2D& v) const {
        return x == v.x && y == v.y;
    }
    friend ostream& operator<<(ostream& os, const Vetor2D& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

int main() {
    Vetor2D a(1, 2), b(3, 4);
    Vetor2D c = a + b;
    cout << a << " + " << b << " = " << c << endl;
    cout << "a == b? " << (a == b) << endl;
    return 0;
}`, title: 'sobrecarga_op.cpp' },
    { type: 'note', content: 'Não sobrecarregue operadores de forma não intuitiva. O operador + deve somar, não subtrair! O operador << é sobrecarregado como friend para funcionar com cout.' }
  ],

  "friend-functions": [
    { type: 'text', content: 'Funções e classes friend têm acesso aos membros private e protected de uma classe. É útil para operadores como << e >> que precisam acessar dados internos sem ser membros da classe.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

class Caixa {
    double largura;
public:
    Caixa(double l) : largura(l) {}

    // Função friend - acessa membros private
    friend void mostrarLargura(const Caixa& c);
    friend bool maiorQue(const Caixa& a, const Caixa& b);
};

void mostrarLargura(const Caixa& c) {
    cout << "Largura: " << c.largura << endl; // acessa private!
}

bool maiorQue(const Caixa& a, const Caixa& b) {
    return a.largura > b.largura;
}

int main() {
    Caixa c1(10), c2(20);
    mostrarLargura(c1);
    cout << "c2 > c1? " << maiorQue(c2, c1) << endl;
    return 0;
}`, title: 'friend.cpp' },
    { type: 'note', content: 'Use friend com moderação! Ela quebra o encapsulamento. É mais aceitável para operadores de stream (<<, >>) e funções utilitárias que realmente precisam de acesso interno.' }
  ],

  // ============ MÓDULO 4 - AVANÇADO ============
  "templates": [
    { type: 'text', content: 'Templates permitem escrever código genérico que funciona com qualquer tipo. Em vez de criar funções separadas para int, double, string, você cria uma única versão template. O compilador gera a versão específica para cada tipo usado.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

// Template de função
template <typename T>
T maximo(T a, T b) {
    return (a > b) ? a : b;
}

// Template de classe
template <typename T>
class Pilha {
    T dados[100];
    int topo = -1;
public:
    void push(T val) { dados[++topo] = val; }
    T pop() { return dados[topo--]; }
    bool vazia() { return topo == -1; }
};

int main() {
    cout << maximo(3, 7) << endl;
    cout << maximo(3.14, 2.71) << endl;
    cout << maximo(string("abc"), string("xyz")) << endl;

    Pilha<int> pi;
    pi.push(10);
    pi.push(20);
    cout << pi.pop() << endl; // 20

    Pilha<string> ps;
    ps.push("Olá");
    cout << ps.pop() << endl;
    return 0;
}`, title: 'templates.cpp' },
    { type: 'note', content: 'Templates são resolvidos em tempo de compilação (zero overhead em runtime). O código template deve estar nos headers (.h) pois o compilador precisa ver a definição completa.' }
  ],

  "stl-containers": [
    { type: 'text', content: 'A STL (Standard Template Library) oferece containers prontos: vector (array dinâmico), list (lista duplamente ligada), map (chave-valor ordenado), unordered_map (hash table), set (conjunto sem duplicatas) e mais.' },
    { type: 'code', content: `#include <iostream>
#include <vector>
#include <map>
#include <set>
using namespace std;

int main() {
    // Vector
    vector<int> v = {3, 1, 4, 1, 5};
    v.push_back(9);
    for (int x : v) cout << x << " ";
    cout << endl;

    // Map (chave-valor)
    map<string, int> idades;
    idades["Ana"] = 25;
    idades["Bruno"] = 30;
    for (auto& [nome, idade] : idades) {
        cout << nome << ": " << idade << endl;
    }

    // Set (sem duplicatas)
    set<int> s = {3, 1, 4, 1, 5, 9, 2, 6, 5};
    for (int x : s) cout << x << " "; // ordenado, sem duplicatas
    cout << endl;

    return 0;
}`, title: 'containers.cpp' },
    { type: 'note', content: 'Escolha o container certo: vector para acesso por índice, list para inserções/remoções frequentes no meio, map para busca por chave, set para eliminar duplicatas.' }
  ],

  "stl-iteradores": [
    { type: 'text', content: 'Iteradores são objetos que permitem percorrer containers de forma genérica. Funcionam como "ponteiros inteligentes" para containers. begin() retorna o início, end() retorna um-após-o-final.' },
    { type: 'code', content: `#include <iostream>
#include <vector>
#include <list>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30, 40, 50};

    // Iterador explícito
    for (vector<int>::iterator it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    // Com auto (C++11)
    for (auto it = v.begin(); it != v.end(); ++it) {
        *it *= 2; // dobra cada valor
    }

    // Iterador reverso
    for (auto rit = v.rbegin(); rit != v.rend(); ++rit) {
        cout << *rit << " ";
    }
    cout << endl;

    return 0;
}`, title: 'iteradores.cpp' },
    { type: 'note', content: 'Prefira range-based for (for(auto& x : v)) quando não precisa do iterador explicitamente. Use iteradores quando precisar da posição para inserir/remover elementos.' }
  ],

  "stl-algoritmos": [
    { type: 'text', content: 'A STL fornece algoritmos genéricos em <algorithm>: sort, find, count, transform, accumulate, reverse, unique e muitos outros. Eles trabalham com iteradores e funcionam com qualquer container.' },
    { type: 'code', content: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3, 7};

    sort(v.begin(), v.end()); // ordena
    // v = {1, 2, 3, 5, 7, 8, 9}

    auto it = find(v.begin(), v.end(), 5);
    if (it != v.end()) cout << "Encontrou 5 na posição " << (it - v.begin()) << endl;

    int soma = accumulate(v.begin(), v.end(), 0);
    cout << "Soma: " << soma << endl;

    int qtd = count(v.begin(), v.end(), 3);
    cout << "Ocorrências de 3: " << qtd << endl;

    reverse(v.begin(), v.end());
    for (int x : v) cout << x << " ";
    cout << endl;

    // Sort customizado (decrescente)
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });

    return 0;
}`, title: 'algoritmos.cpp' },
    { type: 'note', content: 'Algoritmos STL são altamente otimizados. std::sort é O(n log n) em média. Sempre prefira algoritmos STL a implementações manuais.' }
  ],

  "excecoes": [
    { type: 'text', content: 'Exceções tratam erros em tempo de execução. Use try para envolver código que pode falhar, throw para lançar uma exceção, e catch para capturar e tratar o erro. Classes de exceção padrão estão em <stdexcept>.' },
    { type: 'code', content: `#include <iostream>
#include <stdexcept>
using namespace std;

double dividir(double a, double b) {
    if (b == 0) throw runtime_error("Divisão por zero!");
    return a / b;
}

int main() {
    try {
        cout << dividir(10, 3) << endl;
        cout << dividir(10, 0) << endl; // lança exceção
    } catch (const runtime_error& e) {
        cout << "Erro: " << e.what() << endl;
    } catch (...) {
        cout << "Erro desconhecido!" << endl;
    }

    cout << "Programa continua..." << endl;
    return 0;
}`, title: 'excecoes.cpp' },
    { type: 'note', content: 'Capture exceções por referência constante (const exception& e). Use catch(...) como último recurso para erros desconhecidos. Não use exceções para fluxo de controle normal.' }
  ],

  "namespaces": [
    { type: 'text', content: 'Namespaces organizam código em espaços de nomes distintos, evitando conflitos entre identificadores. O std é o namespace padrão do C++. Você pode criar seus próprios namespaces.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

namespace Matematica {
    const double PI = 3.14159265;
    double areaCirculo(double r) { return PI * r * r; }
}

namespace Fisica {
    double velocidade(double d, double t) { return d / t; }
}

// Namespace aninhado (C++17)
namespace App::Utils {
    void log(string msg) { cout << "[LOG] " << msg << endl; }
}

int main() {
    cout << Matematica::areaCirculo(5) << endl;
    cout << Fisica::velocidade(100, 10) << endl;
    App::Utils::log("Iniciando...");

    using namespace Matematica; // importa tudo
    cout << PI << endl;

    return 0;
}`, title: 'namespaces.cpp' },
    { type: 'note', content: 'Evite "using namespace std" em headers — isso polui o namespace global. Em arquivos .cpp é aceitável, mas em projetos grandes prefira std::cout explicitamente.' }
  ],

  "preprocessador": [
    { type: 'text', content: 'Diretivas de preprocessador (#include, #define, #ifdef, #pragma) são processadas antes da compilação. São úteis para constantes, macros, compilação condicional e proteção de headers contra inclusão dupla.' },
    { type: 'code', content: `#include <iostream>
using namespace std;

// Constantes com #define
#define MAX_SIZE 100
#define PI 3.14159

// Macro com parâmetros (use com cuidado!)
#define QUADRADO(x) ((x) * (x))

// Compilação condicional
#define DEBUG

int main() {
    cout << "Max: " << MAX_SIZE << endl;
    cout << "4² = " << QUADRADO(4) << endl;

#ifdef DEBUG
    cout << "[DEBUG] Modo debug ativo" << endl;
#endif

#if __cplusplus >= 201703L
    cout << "C++17 ou superior" << endl;
#else
    cout << "Antes do C++17" << endl;
#endif

    return 0;
}`, title: 'preprocessador.cpp' },
    { type: 'note', content: 'Em C++ moderno, prefira constexpr e const no lugar de #define para constantes. #define não respeita escopo e pode causar bugs sutis. Use #pragma once para proteção de headers.' }
  ],

  "smart-pointers": [
    { type: 'text', content: 'Smart pointers gerenciam memória automaticamente, eliminando memory leaks. unique_ptr é dono exclusivo do recurso, shared_ptr permite múltiplos donos com contagem de referências, e weak_ptr é uma referência fraca sem ownership.' },
    { type: 'code', content: `#include <iostream>
#include <memory>
using namespace std;

class Recurso {
    string nome;
public:
    Recurso(string n) : nome(n) { cout << "Criado: " << nome << endl; }
    ~Recurso() { cout << "Destruído: " << nome << endl; }
    void usar() { cout << "Usando: " << nome << endl; }
};

int main() {
    // unique_ptr - dono exclusivo
    {
        auto p1 = make_unique<Recurso>("Arquivo");
        p1->usar();
        // auto p2 = p1; // ERRO! Não pode copiar
        auto p2 = move(p1); // transfere ownership
    } // destruído automaticamente

    // shared_ptr - múltiplos donos
    {
        auto s1 = make_shared<Recurso>("Conexão");
        {
            auto s2 = s1; // compartilha
            cout << "Refs: " << s1.use_count() << endl; // 2
        } // s2 destruído, mas recurso vivo (s1 ainda existe)
        cout << "Refs: " << s1.use_count() << endl; // 1
    } // agora sim, destruído

    return 0;
}`, title: 'smart_pointers.cpp' },
    { type: 'note', content: 'SEMPRE use make_unique e make_shared em vez de new. Smart pointers são a base do RAII e eliminam praticamente todos os memory leaks em C++ moderno.' }
  ],

  // ============ MÓDULO 5 - SÊNIOR ============
  "move-semantics": [
    { type: 'text', content: 'Move semantics permite "mover" recursos de um objeto para outro em vez de copiar, evitando cópias desnecessárias. Usa rvalue references (&&) e std::move. Essencial para performance com objetos grandes como vetores e strings.' },
    { type: 'code', content: `#include <iostream>
#include <vector>
#include <utility>
using namespace std;

class Buffer {
    int* dados;
    size_t tamanho;
public:
    Buffer(size_t t) : tamanho(t), dados(new int[t]) {
        cout << "Construído (" << t << ")" << endl;
    }
    // Move constructor
    Buffer(Buffer&& outro) noexcept : dados(outro.dados), tamanho(outro.tamanho) {
        outro.dados = nullptr;
        outro.tamanho = 0;
        cout << "Movido!" << endl;
    }
    ~Buffer() { delete[] dados; }
};

int main() {
    Buffer b1(1000000);
    Buffer b2 = move(b1); // move, não copia!

    vector<string> v;
    string s = "Hello World";
    v.push_back(move(s)); // move string para o vector
    // s agora está em estado "movido" (vazio)

    return 0;
}`, title: 'move.cpp' },
    { type: 'note', content: 'Após std::move, o objeto original fica em um estado válido mas indefinido — não use-o sem reatribuir. Marque move constructors como noexcept para melhor performance com containers.' }
  ],

  "lambdas": [
    { type: 'text', content: 'Expressões lambda são funções anônimas definidas inline. Sintaxe: [captura](parâmetros) -> retorno { corpo }. São essenciais com algoritmos STL e callbacks. A captura define quais variáveis externas a lambda acessa.' },
    { type: 'code', content: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Lambda básica
    auto saudacao = []() { cout << "Olá!" << endl; };
    saudacao();

    // Com parâmetros
    auto somar = [](int a, int b) { return a + b; };
    cout << somar(3, 5) << endl;

    // Captura por valor [=] e por referência [&]
    int fator = 3;
    auto multiplicar = [fator](int x) { return x * fator; };

    // Com algoritmos
    vector<int> v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });

    // for_each com lambda
    for_each(v.begin(), v.end(), [](int x) { cout << x << " "; });
    cout << endl;

    // Lambda genérica (C++14)
    auto imprimir = [](auto x) { cout << x << endl; };
    imprimir(42);
    imprimir("texto");

    return 0;
}`, title: 'lambdas.cpp' },
    { type: 'note', content: '[=] captura tudo por valor, [&] por referência, [x, &y] captura x por valor e y por referência. Em C++14+, use auto nos parâmetros para lambdas genéricas.' }
  ],

  "multithreading": [
    { type: 'text', content: 'C++11 introduziu suporte nativo a threads com <thread>, <mutex> e <future>. Multithreading permite executar código em paralelo, aproveitando múltiplos cores do processador. Mutex protege dados compartilhados contra race conditions.' },
    { type: 'code', content: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

mutex mtx;
int contador = 0;

void incrementar(int id, int n) {
    for (int i = 0; i < n; i++) {
        lock_guard<mutex> lock(mtx); // protege o acesso
        contador++;
    }
    cout << "Thread " << id << " terminou." << endl;
}

int main() {
    vector<thread> threads;

    for (int i = 0; i < 4; i++) {
        threads.emplace_back(incrementar, i, 10000);
    }

    for (auto& t : threads) {
        t.join(); // espera terminar
    }

    cout << "Contador final: " << contador << endl; // 40000

    // Lambda com thread
    thread t([]() { cout << "Thread lambda!" << endl; });
    t.join();

    return 0;
}`, title: 'threads.cpp' },
    { type: 'note', content: 'Sempre use lock_guard ou unique_lock para proteger dados compartilhados. Sempre chame join() ou detach() antes que o objeto thread seja destruído. Race conditions são bugs extremamente difíceis de depurar.' }
  ],

  "design-patterns": [
    { type: 'text', content: 'Design Patterns são soluções testadas para problemas recorrentes em software. Os mais importantes: Singleton (instância única), Factory (criação flexível), Observer (notificações) e Strategy (algoritmos intercambiáveis).' },
    { type: 'code', content: `#include <iostream>
#include <memory>
#include <vector>
using namespace std;

// Singleton
class Logger {
    Logger() {}
    static Logger* instancia;
public:
    static Logger& getInstance() {
        static Logger inst;
        return inst;
    }
    void log(string msg) { cout << "[LOG] " << msg << endl; }
    Logger(const Logger&) = delete;
    void operator=(const Logger&) = delete;
};

// Observer
class Observador {
public:
    virtual void atualizar(string evento) = 0;
    virtual ~Observador() {}
};

class Emissor {
    vector<Observador*> obs;
public:
    void registrar(Observador* o) { obs.push_back(o); }
    void notificar(string evento) {
        for (auto* o : obs) o->atualizar(evento);
    }
};

class Display : public Observador {
    string nome;
public:
    Display(string n) : nome(n) {}
    void atualizar(string evento) override {
        cout << nome << " recebeu: " << evento << endl;
    }
};

int main() {
    Logger::getInstance().log("Iniciando sistema");

    Emissor emissor;
    Display d1("Tela1"), d2("Tela2");
    emissor.registrar(&d1);
    emissor.registrar(&d2);
    emissor.notificar("Dados atualizados");

    return 0;
}`, title: 'patterns.cpp' },
    { type: 'note', content: 'O Singleton de Meyers (com static local) é thread-safe em C++11+. Não abuse de Singletons — eles dificultam testes. Prefira injeção de dependência quando possível.' }
  ],

  "raii": [
    { type: 'text', content: 'RAII (Resource Acquisition Is Initialization) é o princípio mais importante do C++: adquira recursos no construtor e libere no destrutor. Isso garante que recursos (memória, arquivos, locks) sejam sempre liberados, mesmo com exceções.' },
    { type: 'code', content: `#include <iostream>
#include <fstream>
#include <mutex>
using namespace std;

// RAII para arquivo
class ArquivoSeguro {
    ofstream arquivo;
public:
    ArquivoSeguro(string nome) : arquivo(nome) {
        if (!arquivo.is_open()) throw runtime_error("Falha ao abrir");
        cout << "Arquivo aberto" << endl;
    }
    void escrever(string texto) { arquivo << texto << endl; }
    ~ArquivoSeguro() {
        if (arquivo.is_open()) {
            arquivo.close();
            cout << "Arquivo fechado" << endl;
        }
    }
};

int main() {
    try {
        ArquivoSeguro arq("saida.txt");
        arq.escrever("Linha 1");
        arq.escrever("Linha 2");
        // Se exceção ocorrer aqui, destrutor ainda fecha o arquivo!
    } catch (const exception& e) {
        cout << "Erro: " << e.what() << endl;
    }
    // Destrutor chamado automaticamente ao sair do escopo

    // RAII com mutex (lock_guard)
    mutex mtx;
    {
        lock_guard<mutex> lock(mtx); // adquire lock
        cout << "Seção crítica" << endl;
    } // lock liberado automaticamente

    return 0;
}`, title: 'raii.cpp' },
    { type: 'note', content: 'RAII é a razão pela qual C++ moderno tem menos memory leaks que C. Smart pointers, lock_guard, fstream — todos seguem RAII. Se você escreve new sem smart pointer, provavelmente está fazendo errado.' }
  ],

  "metaprogramacao": [
    { type: 'text', content: 'Metaprogramação com templates permite computações em tempo de compilação. O compilador executa o código e gera o resultado otimizado. C++17 introduziu if constexpr e fold expressions que simplificam muito a metaprogramação.' },
    { type: 'code', content: `#include <iostream>
#include <type_traits>
using namespace std;

// Fatorial em tempo de compilação
template <int N>
struct Fatorial {
    static constexpr int valor = N * Fatorial<N-1>::valor;
};
template <>
struct Fatorial<0> {
    static constexpr int valor = 1;
};

// constexpr (C++11) - mais simples
constexpr int fatorial(int n) {
    return (n <= 1) ? 1 : n * fatorial(n - 1);
}

// if constexpr (C++17)
template <typename T>
void processar(T valor) {
    if constexpr (is_integral_v<T>) {
        cout << "Inteiro: " << valor * 2 << endl;
    } else if constexpr (is_floating_point_v<T>) {
        cout << "Decimal: " << valor << endl;
    } else {
        cout << "Outro: " << valor << endl;
    }
}

int main() {
    cout << "5! = " << Fatorial<5>::valor << endl; // compilação!
    constexpr int f = fatorial(10); // compilação!
    cout << "10! = " << f << endl;

    processar(42);
    processar(3.14);
    processar("texto");
    return 0;
}`, title: 'metaprogramacao.cpp' },
    { type: 'note', content: 'constexpr é a forma moderna e preferida de metaprogramação. Evite template metaprogramming complexa quando constexpr resolver. C++20 trouxe concepts que tornam templates mais legíveis.' }
  ],

  "cpp-moderno": [
    { type: 'text', content: 'C++17/20/23 trouxeram recursos poderosos: structured bindings, std::optional, std::variant, ranges, concepts, coroutines, modules e mais. Esses recursos tornam C++ mais expressivo e seguro.' },
    { type: 'code', content: `#include <iostream>
#include <optional>
#include <variant>
#include <tuple>
#include <string>
using namespace std;

// Structured bindings (C++17)
auto getPessoa() {
    return make_tuple("Ana", 25, 1.70);
}

// std::optional (C++17)
optional<int> buscar(int arr[], int n, int alvo) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == alvo) return i;
    }
    return nullopt;
}

// std::variant (C++17)
using Resultado = variant<int, string, double>;

void imprimir(const Resultado& r) {
    visit([](auto&& val) { cout << val << endl; }, r);
}

int main() {
    // Structured bindings
    auto [nome, idade, altura] = getPessoa();
    cout << nome << ", " << idade << " anos" << endl;

    // Optional
    int arr[] = {1, 5, 3, 7, 9};
    auto pos = buscar(arr, 5, 7);
    if (pos.has_value()) {
        cout << "Encontrado na posição " << pos.value() << endl;
    }

    // Variant
    Resultado r1 = 42;
    Resultado r2 = string("erro");
    imprimir(r1);
    imprimir(r2);

    return 0;
}`, title: 'moderno.cpp' },
    { type: 'note', content: 'std::optional elimina a necessidade de "valores sentinela" (-1 para não encontrado). std::variant é uma union type-safe. Structured bindings deixam o código muito mais limpo ao retornar múltiplos valores.' }
  ],

  "boas-praticas": [
    { type: 'text', content: 'Código profissional em C++ segue princípios sólidos: RAII para gerenciamento de recursos, const correctness, preferir stack sobre heap, usar a STL, evitar código C legado, e seguir as Core Guidelines.' },
    { type: 'list', content: '', items: [
      'Use const sempre que possível — em parâmetros, métodos e variáveis',
      'Prefira smart pointers (unique_ptr, shared_ptr) a new/delete',
      'Use std::string em vez de char*, std::vector em vez de arrays C',
      'Siga o princípio da responsabilidade única (cada classe faz uma coisa)',
      'Trate erros com exceções, não com códigos de retorno',
      'Use auto quando o tipo é óbvio, mas não abuse',
      'Prefira constexpr a #define para constantes',
      'Documente interfaces públicas, não implementação',
      'Compile com -Wall -Wextra -Werror para pegar warnings',
      'Use ferramentas: valgrind, sanitizers, clang-tidy, clang-format'
    ]},
    { type: 'code', content: `// ❌ Código ruim (estilo C legado)
char* nome = new char[100];
strcpy(nome, "João");
int* arr = new int[n];
// esquece delete[]... memory leak!

// ✅ Código bom (C++ moderno)
string nome = "João";
vector<int> arr(n);
auto ptr = make_unique<MinhaClasse>(args);
// Tudo limpo automaticamente!`, title: 'comparacao.cpp' },
    { type: 'note', content: 'Leia as C++ Core Guidelines (isocpp.github.io/CppCoreGuidelines). Estude o livro "Effective Modern C++" de Scott Meyers. Pratique em projetos reais e contribua com open source.' }
  ],
};
