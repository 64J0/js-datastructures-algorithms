# Estruturas de dados e algoritmos em Javascript

Este repositório está sendo usado para armazenar os códigos desenvolvidos a partir da leitura do livro Estruturas de dados e algoritmos em Javascript. Segundo a própria autora, algoritmos são o estado da arte no que tange a ciência da computação e portanto um assunto muito importante para se conhecer.

Ao longo do livro são apresentadas inicialmente algumas estruturas de dados mais comuns e que tem mais aplicações práticas. Em seguida é dado enfoque nos algoritmos e termos técnicos da área. Neste README estou colocando um resumo e citando alguns trechos que ajudam a compreender os conceitos abordados em cada capítulo.

No final deste arquivo temos a seção de referências onde é possível obter o link que direciona para o repositório do livro onde temos os códigos criados pela autora. Além da versão em JavaScript são apresentados seus pares em TypeScript assim como uma série de testes automatizados criados utilizando as ferramentas mocha e chai.

Após finalizar o livro pode-se continuar estudando a partir deste repositório.

---
Estruturas de dados implementadas:

### Pilha (stack) -> **FILO**

> As pilhas tem uma varidade de aplicações nos problemas do mundo real. Elas podem ser usadas para problemas de backtracking, a fim de lembrar as tarefas ou os caminhos visitados, e para desfazer ações. - Loiane.

### Fila (queue) -> **FIFO**

Tem o comportamento parecido com o de uma fila na vida real, por exemplo de pessoas na lotérica esperando para pagar alguma conta. Nesta estrutura de dados o primeiro dado a ser recebido é o primeiro a ser processado.

### Deque (double-ended queue) -> filas de duas pontas ou fila duplamente terminada

> Em ciência da computação, uma aplicação comum de um deque é no armazenamento de uma lista de operações para desfazer ações (undo). Sempre que um usuário executar uma operação no software, um push dessa operação será feito no deque (exatamente como em uma pilha). Quando o usuário clicar no botão Undo (desfazer), uma operação de pop será efetuada no deque, o que significa que essa operação será removida do final. Depois de um número predefinido de operações, as operações mais antigas serão removidas da frente do deque. Como o deque implementa os princípios tanto de FIFO quanto de LIFO, podemos dizer também que o deque combina as estruturas de dados de fila e de pilha. - Loiane.

### Lista ligadas (linked lists)

> As listas ligadas armazenam uma coleção sequencial de elementos; no entanto, de modo diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contígua na memória. Cada elemento é constituído de um nó que armazena o elemento propriamente dito, além de uma referência (também conhecida como ponteiro ou ligação) que aponta para o próprio elemento. - Loiane.

> Uma das vantagens de uma lista ligada em relação a um array convencional é que não é necessário deslocar os elementos quando eles são adicionados ou removidos. Entretanto, precisamos usar ponteiros quando trabalhamos com uma lista ligada, e, por esse motivo, é preciso prestar atenção especial na implementação desse tipo de lista. Em um array, podemos acessar diretamente qualquer elemento em qualquer posição; em uma lista ligada, se quisermos acessar um elemento no meio, será necessário partir do início (cabeça ou head) e iterar pela lista até encontrarmos o elemento desejado. - Loiane.

Neste capítulo são apresentados diversos tipos de listas ligadas (_linked lists_). 

* É desenvolvido um algoritmo padrão em que cada nó da lista referencia apenas o elemento seguinte: **LinkedList**.

* É desenvolvido um algoritmo que apresenta uma ligação dupla onde cada nó da lista referencia tanto o elemento seguinte quanto o anterior. Esta versão da lista é interessante caso seja necessário iterar pelos elementos a partir de uma posição arbitrária com a possibilidade de percorrer a lista tanto pra frente quanto pra trás. **DoublyLinkedList**.

* É desenvolvida uma versão da lista ligada onde esta lista é circular, ou seja, o último nó referencia o primeiro: **CircularLinkedList**.

* É desenvolvida uma versão da lista ligada onde os elementos são mantidos de maneira ordenada: **SortedLinkedList**.

* Por fim, é apresentado pela autora a capacidade de criação de outras estruturas de dados como a pilha, fila e deque a partir da estrutura da LinkedList. Para exemplificar este procedimento é desenvolvido o algoritmo da **StackLinkedList**.

### Cojuntos (set)

> Um conjunto (set) é uma coleção não ordenada de itens, composta de elementos únicos (isto é, não podem ser repetidos). Essa estrutura de dados usa o mesmo conceito matemático dos conjuntos finitos, porém aplicado a uma estrutura de dados em ciência da computação. - Loiane.

> O conjunto é um dos conceitos mais básicos em matemática e é muito importante também em ciência da computação. Uma das principais aplicações em ciência da computação se dá em bancos de dados, que estão na base da maioria das aplicações. Os conjuntos são usados no design e no processamento de consultas (queries). Ao criar uma consulta para obter um conjunto de dados em um banco relacional (Oracle, Microsoft SQL Server, MySQL e assim por diante), fazemos o design da consulta usando a notação de conjunto, e o banco de dados também devolverá um conjunto de dados. Quando criamos uma consulta SQL, podemos especificar se queremos ler todos os dados de uma tabela ou apenas um subconjunto deles. Também podemos obter dados que são comuns a duas tabelas, os quais estão presentes apenas em uma tabela (e não na outra) ou nas duas (entre outras operações). Essas operações são conhecidas no mundo SQL como junções (joins), e a base das junções SQL são operações em conjuntos. - Loiane.

> Os métodos ou funções que não tem efeito colateral são chamados de funções puras. Uma função pura não modifica a isntância atual nem os parâmetros: ela apenas gera um novo resultado. Esse é um conceito muito importante do paradigma de programação funcional. - Loiane.

### Dicionário

> Um dicionário é usado para armazenar pares [chave, valor], em que a chave pode ser usada para encontrar um elemento em particular. Um dicionário é muito parecido com um conjunto; um conjunto armazena uma coleção de elementos [chave, chave], enquanto um dicionário armazena uma coleção de elementos [chave, valor]. Um dicionário também é conhecido como **mapa** (map), **tabela de símbolos** e **array associativo**. - Loiane.

### HashTable

> Também conhecida como HashMap: uma implementação com hash da classe Dictionary. - Loiane

> O **hashing** consiste em encontrar um valor em uma estrutura de dados o mais rápido possível. Nos capítulos anteriores, vimos que, se quisermos obter um valor de uma estrutura de dados (usando um método **get**), será necessário iterar por ela até que esse valor seja encontrado. Quando usamos uma função de hash, já sabemos em que posição o valor se encontra, portanto, podemos simplesmente o acessar. Uma função de hash é uma função que, dada uma key, devolve o endereço em que o valor está na tabela. - Loiane.

> Em ciência da computação, a tabela hash tem vários casos de uso. Ela pode ser usada como arrays associativos, pois é uma implementação do dicionário, e também pode ser usada para indexar um banco de dados. Ao criar uma tabela em um banco de dados relacional como MySQL, Microsoft Server, Oracle e outros, é sempre uma boa prática criar um index para permitir uma pesquisa mais rápida da chave (key) do registro. Nesse caso, uma tabela hash pode ser criada para armazenar a key e a referência ao registro na tabela. - Loiane.

> A função de hash que usaremos neste livro é a função mais comum existente, chamada de função de **hash lose-lose**, em que simplesmente somamos os valores ASCII de cada caractere da chave. - Loiane.

### Recursão

Porque usar recursão?

A partir de testes realizados comparando as versões iterativas e recursivas de diversos algoritmos foi observado que mesmo aplicando a técnica de memoização o algoritmo iterativo é mais rápido. Então porque usar recursão?

> A versão iterativa é muito mais rápida que as versões recursivas, portanto isso significa que a recursão é mais lenta. No entanto, observe novamente o código das três versões diferentes. A recursão é mais fácil de entender e, em geral, exige também menos código. Além do mais, em alguns algoritmos, a solução iterativa pode não estar disponível, e, com a eliminação da chamada de cauda (tail call), a penalidade da recursão pode até desaparecer. - Loiane.

### Árvores

> Uma árvore é um modelo abstrato de uma estrutura hierárquica. O exemplo mais comum de uma árvore na vida real seria o de uma árvore genealógica ou o organograma de uma empresa. - Loiane.

* Árvores binárias

> Um nó em uma árvore binária tem no máximo dois filhos: um filho à esquerda e um filho à direita. Essa definição nos permite escrever algoritmos mais eficazes para inserir, pesquisar e remover nós na/da árvore. As árvores binárias são muito usadas em ciência da computação. - Loiane.

> Uma **BST (Binary Search Tree)** é uma árvore binária, mas permite armazenar somente nós com valores menores do lado esquerdo e nós com valores maiores do lado direito. [...] Essa é a estrutura de dados com a qual trabalharemos neste capítulo. - Loiane.

> Assim como nas listas ligadas, trabalharemos novamente com ponteiros (referências) para representar a conexão entre os nós (chamadas de arestas - edges - na terminologia de árvore). - Loiane.

[Visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern).

* Árvore de Adelson-Velskii e Landi (AVL)

> A árvore AVL é uma BST autobalanceada, o que significa que a altura das subárvores à esquerda e à direita de qualquer nó difere no máximo em 1. - Loiane.

* Árvore rubro-negra (red-black tree)

> Assim como a árvore AVL, a **árvore rubro-negra** é também uma árvore binária de busca autobalanceada. Vimos que inserir ou remover um nó da árvore AVL pode provocar rotações; assim, se precisarmos de uma árvore autobalanceada que envolva muitas inserções ou remoções frequentes, a árvore rubro-negra será preferível. Se as inserções e as remoções forem menos frequentes (estamos interessados em operações de busca frequentes), então a árvore AVL será preferível em relação à árvore rubro-negra. - Loiane.

Na árvore rubro-negra, todo nó segue as regras listadas a seguir:

1. Como o nome da árvore sugere, cada nó é vermelho ou preto.
2. A raiz da árvore é preta.
3. Todas as folhas são pretas (os nós representados com referência NULL).
4. Ser um nó for vermelho, então seus dois filhos serão pretos.
5. Não pode haver dois nós vermelhos adjacentes. Um nó vermelho não pode ter um pai ou um filho vermelho.
6. Todo caminho (path) de um dado nó para qualquer um de seus descendentes (folhas NULL) contém o mesmo número de nós pretos.

---
## Referências:

[1] - Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript. Edição de 2019.

[2] - Repositório com os códigos do livro: https://github.com/loiane/javascript-datastructures-algorithms.