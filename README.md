# Estruturas de dados e algoritmos em Javascript

Estruturas de dados implementadas:

* Pilha (stack) -> **FILO**

> As pilhas tem uma varidade de aplicações nos problemas do mundo real. Elas podem ser usadas para problemas de backtracking, a fim de lembrar as tarefas ou os caminhos visitados, e para desfazer ações. - Loiane.

* Fila (queue) -> **FIFO**

* Deque (double-ended queue) -> filas de duas pontas ou fila duplamente terminada

> Em ciência da computação, uma aplicação comum de um deque é no armazenamento de uma lista de operações para desfazer ações (undo). Sempre que um usuário executar uma operação no software, um push dessa operação será feito no deque (exatamente como em uma pilha). Quando o usuário clicar no botão Undo (desfazer), uma operação de pop será efetuada no deque, o que significa que essa operação será removida do final. Depois de um número predefinido de operações, as operações mais antigas serão removidas da frente do deque. Como o deque implementa os princípios tanto de FIFO quanto de LIFO, podemos dizer também que o deque combina as estruturas de dados de fila e de pilha. - Loiane.

* Lista ligadas

> As listas ligadas armazenam uma coleção sequencial de elementos; no entanto, de modo diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contígua na memória. Cada elemento é constituído de um nó que armazena o elemento propriamente dito, além de uma referência (também conhecida como ponteiro ou ligação) que aponta para o próprio elemento. - Loiane.

> Uma das vantagens de uma lista ligada em relação a um array convencional é que não é necessário deslocar os elementos quando eles são adicionados ou removidos. Entretanto, precisamos usar ponteiros quando trabalhamos com uma lista ligada, e, por esse motivo, é preciso prestar atenção especial na implementação desse tipo de lista. Em um array, podemos acessar diretamente qualquer elemento em qualquer posição; em uma lista ligada, se quisermos acessar um elemento no meio, será necessário partir do início (cabeça ou head) e iterar pela lista até encontrarmos o elemento desejado. - Loiane.

Neste capítulo são apresentados diversos tipos de listas ligadas (_linked lists_). 

É desenvolvido um algoritmo padrão em que cada nó da lista referencia apenas o elemento seguinte: **LinkedList**.

É desenvolvido um algoritmo que apresenta uma ligação dupla onde cada nó da lista referencia tanto o elemento seguinte quanto o anterior. Esta versão da lista é interessante caso seja necessário iterar pelos elementos a partir de uma posição arbitrária com a possibilidade de percorrer a lista tanto pra frente quanto pra trás. **DoublyLinkedList**.

É desenvolvida uma versão da lista ligada onde esta lista é circular, ou seja, o último nó referencia o primeiro: **CircularLinkedList**.

É desenvolvida uma versão da lista ligada onde os elementos são mantidos de maneira ordenada: **SortedLinkedList**.

Por fim, é apresentado pela autora a capacidade de criação de outras estruturas de dados como a pilha, fila e deque a partir da estrutura da LinkedList. Para exemplificar este procedimento é desenvolvido o algoritmo da **StackLinkedList**.

### Configurações do projeto

* JS Modules
* Node.js v14.17.0
* ESLint

---
### Referências:

[1] - Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript. Edição de 2019.