# Ordenação de Arrays com JavaScript/TS

JavaScript tem duas principais funções nativas: `sort()` e `toSorted()`.

## sort() vs toSorted()
Os dois têm um comportamento exatamente igual, com exceção de que o `toSorted()` automaticamente faz uma cópia do array original e calcula o resultado em cima dele.

## Comportamento Padrão do sort()
`sort()` ordena o array em forma lexicográfica. Ou seja, de forma alfabética (UTF-16). Se você possuir um Array de números, eles são convertidos para strings e depois ordenados. Um comportamento conhecido é o "10" aparecer antes do "2". Portanto, o comportamento padrão, para a função `sort` sem argumentos, é tratar tudo como string.

## Funcionamento Interno: Tabela UTF
Primeiramente, a tabela UTF tem um mapa de caracteres; esses caracteres têm uma "Code Unit" sequencial. Para realizar a comparação, converte-se o caractere atual da comparação para a respectiva Code Unit e compara-se com a Code Unit do outro item.

## Comparação com Acentos
Um ponto importante sobre a comparação utilizando palavras em português: apesar do "ç", "á" e outros acentos da língua portuguesa constarem na tabela, a comparação falha, pois os acentos têm Unit Codes muito maiores do que a alfabética utilizada para fazer a ordenação.

**Exemplo:**
O array `["Zebra", "Árvore", "Caça"]` resulta em `["Zebra", "caça", "árvore"]`, uma vez que:
- 'Z' é o código 90
- 'a' é o código 97
- 'á' (com acento) é o código 225
- 'ç' é o código 231

*(Note que diferenciam-se maiúsculas de minúsculas).*

**Solução:**
A solução para este problema é utilizar `localeCompare`.
Exemplo: `animais.sort((a, b) => a.localeCompare(b))` (ordena em ordem crescente).

## Ordenação de Números ("10" vs "2")
Sobre a troca entre "10" e "2": isso acontece pois a string "10" começa com "1", enquanto "2" começa com o "2". Sendo assim, se tratando de uma string, a ordenação avalia como principal fator o primeiro elemento da lista `arr[0]`, ou seja, pelas strings começadas em 1, depois 2, 3, 4... não importando o tamanho dela, uma vez que os elementos seguintes `arr[1], arr[2]...` servem apenas como critério de desempate, caso necessário.

## Modificação do Array Original
Outro comportamento importante deste `sort()` é o fato de que ele ordena o array inicial; portanto, em tempo de execução, o array inicial é modificado. 

## Garantindo a Ordenação Numérica
Se utilizamos números no array, para garantir que a ordenação ocorra de forma adequada, é necessário passar uma função de ordenação. Se passarmos uma função de comparação que realiza uma subtração `(a - b)`, o resultado será um número (positivo, negativo ou zero). O `sort` usa esse resultado numérico para decidir a ordem, ignorando a conversão para string.

**Exemplo:**
```javascript
arr.sort((a, b) => a - b);
```
Onde o resultado da rotina especificada define a ordenação resultante. Ou seja, dado o resultado da operação elemento A menos elemento B, serão ordenados de acordo.

Exemplo: `2 - 3` resulta em um resultado negativo. Sendo o resultado negativo, o número `2` deve ser adicionado ao array. Para entender melhor como o algoritmo percorre os trechos, valida e define uma condição de parada, pesquise sobre **Timsort**.

## Retorno da Função de Comparação
A função interna executada no `sort` espera o resultado `X > 0`, `X < 0`, ou `X === 0`. Ou seja, pode-se passar qualquer função desde que respeite o retorno esperado.
