# Projeto: Problema da Mochila

## Descrição do Problema
O **Problema da Mochila** é um problema clássico de otimização em ciência da computação. Dado um conjunto de itens, cada um com um peso e um valor, e uma mochila com capacidade limitada, o objetivo é determinar qual subconjunto de itens deve ser incluído na mochila para maximizar o valor total sem ultrapassar a capacidade de peso.

### Aplicabilidade Prática
Esse problema é aplicável em diversas áreas, como logística (seleção de itens a serem transportados com peso limitado), investimentos financeiros (escolha de ativos com retorno máximo e orçamento limitado), e gerenciamento de recursos.

## Algoritmos Implementados

1. **Força Bruta**: O algoritmo força bruta testa todas as combinações possíveis de itens, verificando qual delas oferece o maior valor sem exceder o peso máximo.
   
2. **Divisão e Conquista**: O algoritmo divide o problema em subproblemas menores, resolve-os individualmente e depois combina os resultados. 
   
3. **Programação Dinâmica**: A solução é construída a partir de soluções parciais armazenadas, evitando recomputações e tornando a resolução mais eficiente.

## Comparação de Desempenho
Para cada um dos algoritmos, testamos o desempenho em diferentes tamanhos de instâncias de problema. A comparação é baseada no tempo de execução, onde cada algoritmo foi testado em instâncias variadas do problema da mochila.

| Algoritmo             | Instância 1 | Instância 2 | Instância 3 |
|-----------------------|-------------|-------------|-------------|
| Força Bruta           | 1500ms      | 4500ms      | 10000ms     |
| Divisão e Conquista   | 500ms       | 1500ms      | 3000ms      |
| Programação Dinâmica  | 100ms       | 300ms       | 600ms       |

## Como Rodar
1. Clone este repositório.
2. Compile e execute o programa utilizando o Visual Studio ou outra IDE compatível com C#.
3. Para testar o desempenho, altere os arquivos de instâncias na pasta `instancias` com diferentes tamanhos de entradas.