// 1 - Faça um programa que apareça um alert no seu browser com a frase Hello World!.  - Introdução.

// alert('Hello World!');

// 2 - Faça um programa que imprima 'Hello World!' no console do browser.
console.log('Hello World!');

// 3 - Faça um programa que imprima uma variável que resulte undefined no console do browser. - Variável.
var giselly;
console.log(giselly);

// 4- Faça um programa que inicialize uma variável com o valor 'Sou uma programadora'.

var presente = 'Sou uma programadora';
console.log(presente);

// 5- Faça um programa que modifique a sua variável atribuindo o valor anterior por "Sou full stack".

presente = 'Sou full stack';
console.log(presente);

// 6 - Faça um programa que atribua uma string a uma variável, depois reatribua com number. - Tipos de Dados.
var linda = 'Sou eu!';
linda = 21;
console.log(linda);

// 8 - Faça um programa que atribua a duas variáveis strings e concatene as duas.

var number1 = '22';
var number2 = '41';

console.log(number1 + number2);

// 9- Faça um programa que some os dois números atribuídos as variáveis.

console.log(22 + 41);

// 10- Faça um programa que atribua a uma variável o null.

var nula = null;
console.log(nula);

// 11 - Faça um programa que atribua a uma variável um valor boolean. - Operador Lógico.
var matematico = true;
console.log(matematico);

//7 - Faça um programa que atribua o retorno de uma variável com dus linhas diferentes. - Quebra de Linha

var twoLines = 'sou mais eu \nnao quero voce!';
console.log(twoLines);

// 12 - Faça um programa que atribua dois números a duas variáveis e coloque o resultado numa terceira variável. - Operação Aritmética.

var red = 10;
var blue = 20;

var colors = red + blue;
console.log(colors);

// 13- Faça um programa que diminua do total da anterior.
var less = 30 - colors;

console.log(less);
// 14 - Faça um programa que multiplique as variaveis.

console.log(red * blue);

// 15- Faça um programa que uma nova variável e divida.

var divide = red / blue;
console.log(divide);

// 16 - Faça um programa que tire o módulo das variáveis.

var modulo = red % blue;
console.log(modulo);
console.log(brad);
console.log(tom);
var modulo2 = tom % brad;
console.log(modulo2);

var a = 15;
var b = 18;

var modulo3 = a % b;
console.log(modulo3);

var modulo4 = b % a;
console.log(modulo4);

//17 - Faça um programa que incremente a variavel.
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var alegria = 50;
alegria = alegria + 1;

console.log(alegria);

alegria++;

console.log(alegria);

// 18 - Faça um programa que incremente a variavel.

var bobeira = 4;
bobeira = bobeira - 1;
console.log(bobeira);
--bobeira;
console.log(bobeira);

// 19- Faça um programa com uma variável com o seu nome
var nome = 'Giselly';
console.log(nome);

// 20- Faça um programa que declare uma variável com a sua idade
var idade = 40;
console.log(idade);

// 21- Faça um programa que declare uma variável com a sua comida favorita e não atribua valor

var tacacá;
console.log(tacacá);

// 22- Faça um programa que atribua valor para sua comida favorita
var tacacá = 'manjar dos deuses';
console.log(tacacá);

// 23- Faça um programa que declare 5 variáveis diferentes sem valores.
var time, professor, pais, endereco, rua;

// 24 - Faça um programa que declare uma variável contendo uma string
var paixao = 'Londres';
console.log(typeof paixao);

// 25 - Faça um programa que declare uma variável contendo um numero dentro de uma string.

var dindin = '10';
console.log(typeof dindin);

// 26 - Faça um programa que declare uma variável com a sua idade.

var idade = 40;

// 27 - Faça um programa que declare duas variáveis, uma com seu nome e outro com seu sobrenome e as some.
var name = 'Giselly';
var lastName = 'Rock';

var completeName = `${name} ${lastName}`;
console.log(completeName);

// 28 - Faça um programa que coloque a seguinte frase em uma variável: It's time.
var frase = "It's time";
console.log(frase);

// 29 - Faça um programa que crie duas expressões que retornem NaN.
var expressao = total - nome;
console.log(expressao);

var expressao1 = total / frase;
console.log(expressao1);

// 30 - Faça um programa que some a string '200' com o número 50 e retornar 250.
var soma = +'200' + 50;
console.log(soma);

// 31 - Faça um programa que incremente o número 5 e retorne o seu valor incrementado.
var x = 5;
console.log(++x);

// 32 - Faça um programa que divida o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

numero = +'80';

console.log(numero);
pesoPorDois = numero / 2;
console.log(pesoPorDois);

// 33 - Faça um programa que some dois numeros.
const num1 = 10;
const num2 = 20;

const sum = num1 + num2;

console.log(sum);

//32 - Faça um programa que multiplique 2 numeros e o resultado adicione 10.
const mult = num1 * num2 + 10;
console.log(mult);

// 33 -Faça um programa que encontre a raiz quadrada de um numero, multiplique o resultado por 10 e divida por 33.
const num3 = Math.sqrt(25);

const calc = (num3 * 10) / 33;
console.log(calc);

// 34 - Faca um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Ola meu nome é (nome1) e minha partner do ninastech e (nome2)

const firstName = 'Giselly';
const secondName = 'Gabi';

const phrase = `Olá meu nome é ${firstName} e minha partner do ninastech é ${secondName}`;
console.log(phrase);

// 35 -  Faça um programa que imprima na tela se um nome é igual ao outro nome digitado, ex noah e noah, imprime true e noah e maria imprime false.

const name1 = 'Margarida';
const name2 = 'Margarida';

const compare = name1 === name2;
console.log(compare);

// 35 - Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.

const diferent = name1 !== name2;
console.log(diferent);

// 36 - Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém os dois nomes devem estar em um Array. ex. const array = ['joao', 'maria'], joao e joao, imprime false, joao e maria, imprime true.

const names = ['Giselly', 'Gabi'];
const compareOne = names[0] === names[1];
console.log(compareOne);
