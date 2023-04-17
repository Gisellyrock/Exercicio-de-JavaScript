// 1 - Crie um alert no seu browser com a frase Hello World!.  - Introdução.

// alert('Hello World!');

// 2 - Imprima 'Hello World!' no console do browser.
console.log('Hello World!');

// 3 - Imprima uma variável que resulte undefined no console do browser. - Variável.
var giselly;
console.log(giselly);

// 4- Inicialize uma variável com o valor 'Sou uma programadora'.

var presente = 'Sou uma programadora';
console.log(presente);

// 5- Modifique a sua variável atribuindo o valor anterior por "Sou full stack".

presente = 'Sou full stack';
console.log(presente);

// 6 - Atribua uma string a uma variável, depois reatribua com number. - Tipos de Dados.
var bonitona = 'Sou eu!';
bonitona = 21;
console.log(bonitona);

// 8 - Atribua a duas variáveis strings e concatene as duas.

var number1 = '22';
var number2 = '41';

console.log(number1 + number2);

// 9- Agora some os dois números atribuídos as variáveis.

console.log(22 + 41);

// 10- Atribua a uma variável o null.

var safadao = null;
console.log(safadao);

// 11 - Atribua a uma variável um valor boolean. - Operador Lógico.
var matematico = true;
console.log(matematico);

//7 - Atribua o retorno de uma variável com dus linhas diferentes. - Quebra de Linha

var linda = 'sou mais eu \nnao quero voce!';
console.log(linda);

// 12 - Atribua dois números a duas variáveis e coloque o resultado numa terceira variável. - Operação Aritmética.

var brad = 10;
var tom = 20;

var bradley = brad + tom;
console.log(bradley);

// 13- Crie outra variável  e diminua do total da anterior.
var pobreza = 30 - bradley;

console.log(pobreza);
// 14 - Multiplique as variaveis.

console.log(brad * bradley);

// 15- Crie uma nova variável e divida.

var vacilo = brad / tom;
console.log(vacilo);

// 16 - Tire o módulo das variáveis.

var modulo = brad % tom;
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

//17 - Faça o incremento de uma variavel.
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

// 18 - Faça o incremento de uma variavel.

var bobeira = 4;
bobeira = bobeira - 1;
console.log(bobeira);
--bobeira;
console.log(bobeira);

// 19 - Tirar a media.

// var alunos = ['antonio', 'marcos', 'argo', 'francisco'];
// var notas1 = [3.5, 5.3, 4.8, 5.3];
// var notas2 = [2.0, 9.0, 7.8, 8.0];
// var notas3 = [7.0, 8.0, 9.0, 6.0];
// var notas4 = [5.0, 7.0, 8.0, 7.5];

// function media(n1, n2, n3, n4) {
//   return (n1 + n2 + n3 + n4) / 4;
// }

// function passou(media) {
//   if (media > 7) {
//     return 'Aprovado';
//   } else {
//     return 'Reprovou';
//   }
// }

// for (var index in alunos) {
//   var notaA = notas1[index];
//   var notaB = notas2[index];
//   var notaC = notas3[index];
//   var notaD = notas4[index];

//   var m = media(notaA, notaB, notaC, notaD);

//   console.log(
//     alunos[index] +
//       ' - ' +
//       notas1[index] +
//       ' - ' +
//       notas2[index] +
//       ' - ' +
//       notas3[index] +
//       ' - ' +
//       notas4[index] +
//       ' - ' +
//       media(notas1[index], notas2[index], notas3[index], notas4[index]) +
//       ' ' +
//       passou(m),
//   );
// }

// 20 - Objetos

// function calcMedia() {
//   return (this.notas[0] + this.notas[1]) / 2;
// }

// var aluno = {
//   nome: 'Fabricio',
//   notas: [4.0, 6.0],

//   media: calcMedia,
// };

// var aluno1 = {
//   nome: 'Marcos',
//   notas: [8.0, 6.0],

//   media: calcMedia,
// };

// console.log(aluno.nome);
// console.log(aluno.media());

// console.log(aluno1.nome);
// console.log(aluno1.media());

// 21 - Criar Aluno

// function criarAluno(nome, n1, n2) {
//   return {
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function () {
//       return (this.nota1 + this.nota2) / 2;
//     },
//   };
// }

// var turma = [
//   criarAluno('Igor', 9, 6),
//   criarAluno('Xã', 4, 6),
//   criarAluno('Fran', 9, 6),
// ];

// turma.forEach(function (elemento) {
//   console.log(elemento);
// });

// for (var aluno in turma) {
//   console.log(aluno);
// }

// 22- Declare uma variável com o seu nome
var nome = 'Giselly';
console.log(nome);

// 23- Declare uma variável com a sua idade
var idade = 40;
console.log(idade);

// 24- Declare uma variável com a sua comida favorita e não atribua valor

var tacacá;
console.log(tacacá);

// 22- Atribua valor para sua comida favorita
var tacacá = 'manjar dos deuses';
console.log(tacacá);
// 22- Declare 5 variáveis diferentes sem valores.

var time, professor, paos, endereco, rua;

// 23 - declare uma variável contendo uma string

var paixao = 'Londres';
console.log(typeof paixao);

// 24 - Declare uma variável contendo um numero dentro de uma string.

var dindin = '10';
console.log(typeof dindin);

// 25 - Declare uma variável com a sua idade

var idade = 40;

// 26 - Declare duas variáveis, uma com seu nome e outro com seu sobrenome e as some.
var name = 'Giselly';
var lastName = 'Rock';

var completeName = `${name} ${lastName}`;
console.log(completeName);
// 27 - Coloque a segunte frase em uma variável: It's time
var frase = "It's time";
console.log(frase);

// 28 - Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// 29 - Crie duas expressões que retornem NaN. Soma sempre irá concatenar
var expressao = total - nome;
console.log(expressao);

var expressao1 = total / frase;
console.log(expressao1);

// 30 - Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50;
console.log(soma);

// 31 - Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// 32 - Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

numero = +'80';

console.log(numero);
pesoPorDois = numero / 2;
console.log(pesoPorDois);

// Falsy
if (false)
  if (0)
    if (NaN)
      if (null)
        if (undefined)
          // ou -0
          if ('')
            if (true)
              if (1)
                if (' ')
                  // ou "" ou ``

                  // Truthy
                  if ('andre')
                    if (-5)
                      if ({})
                        if (!true)
                          if (!1)
                            if (!'')
                              // Truthy
                              if (!undefined)
                                // false
                                if (!!' ')
                                  // false
                                  if (!!'')
                                    // true
                                    // true
                                    // true
                                    // false

                                    10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
5 - 5 && 5 + 5; // 0
'Gato' && false; // false
5 >= 5 && 3 < 6; // true

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
5 - 5 || 5 + 5; // 10
'Gato' || false; // Gato
5 >= 5 || 3 < 6; // true

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;

console.log(expressao);

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
