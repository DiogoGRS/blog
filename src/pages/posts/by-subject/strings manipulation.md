# Manipulação de Strings

Existem diferentes formas de manipular strings baseado na necessidade:

## Remover espaços e \n: `string.trim()`
Retorna um **NOVO** array, sem espaços e quebras de linha.

## Substituir qualquer caractere: `string.replace(regex, "substituição")`
Utiliza-se um padrão regex e o trecho que vai tomar o lugar dos padrões encontrados.

### Sobre o regex:
A sintaxe é: `/padrão/flags`

**Padrões:**
- Podem ser separados por `|` para indicar **OU**
- Separadores hífen indicam intervalo `[A-Z]`, nesse caso match com qual caractere entre A e Z
- Existem alguns padrões encurtados, como `\D`, que significa qualquer coisa, exceto dígito. Ou seja, combinado com o replace de `""`, remove tudo exceto números.
- Pode-se agrupar grupos de regex e separá-los com parênteses e vírgula.

**Exemplo:**
`/(a-z),(0-9)/gi` sendo assim se fazem disponíveis como parâmetro na segunda parte do regex:

```javascript
const adaptation = str.replace(/([a-z])|([0-9]+)/gi, (match, p1, p2) => {
    if (p1) {
        return p1.toUpperCase();
    }
    if (p2) {
        let somaTotalMatch = Array.from(p2);
        let valorFinal = somaTotalMatch.reduce((acumulador, valorAtual) => {
            return acumulador += Number(valorAtual);
        }, 0);
        return valorFinal.toString();
    }
});
```

**Flags:**
- `g`: todas as ocorrências, não parando no primeiro match;
- `i`: Case-insensitive;
- `m`: Multiline.

### Sobre a substituição:
Pode ser uma string simples, mas pode-se também utilizar funções.

**Exemplo:**
```javascript
const formatando = nomes.replace(/joão|maria/gi, (encontrou) => { 
    return match.toUpperCase(); 
});
```

No exemplo acima, todo match vai ser substituído por uma execução da função, que retorna o trecho de match com letras maiúsculas. Mas como a função recebe o match?

Isso se deve ao comportamento da função replace. Na verdade, existem 5 parâmetros que podem ser acessados na segunda parte da função `replace`:

```javascript
string.replace(regex, (match, p1, p2, offset, originalString) => {
    // 1. match: A string inteira que deu match (ex: "Crème")
    // 2. p1, p2...: Conteúdo de grupos de captura (parênteses no regex), se houver
    // 3. offset: A posição (índice) onde o match começa na string
    // 4. originalString: A string inteira original que está sendo processada
    
    return "novo valor"; 
});
```

## Remover acentos de letras: `string.normalize("NFD")`
Substitui caracteres por sua forma decomposta (letra base + acento).
Exemplo: "é" por "e'", "ç" por "c,", etc.
Normalmente a intenção é remover os acentos "soltos", então a função de `replace` deve ser aplicada ao resultado de `normalize`.

```javascript
string.normalize("NFD").replace(/\p{M}/gu, "");
```
Outro ponto é que, por padrão, o browser junta essas partes de uma string; então, por mais que de fato estejam decompostas, ao printar na tela você ainda veria a frase original. Se quiser visualizar o resultado, use `Array.from(stringSuja.normalize("NFD"))`.

## Dar match em duas strings sem manipular a original

Primeiro iniciamos uma instância de `collator`,  iniciamos com `new Intl.Collator()` e passamos como parâmetros o idioma e tipo de sensibilidade.
```javascript
const collator = new Intl.Collator('en', { sensitivity: 'base' });
```

depois de instanciado, usamos o método `compare` para comparar as strings.
```javascript
collator.compare(string1, string2);
```
na comparacao acima o `collator` vai retornar um número, que pode ser: 
- `1` se a primeira string for maior que a segunda
- `-1` se a primeira string for menor que a segunda
- `0` se as strings forem iguais