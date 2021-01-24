function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function clicou2(){
    window.open("https://www.youtube.com/?gl=BR");//outra aba
    //window.location.href = "https://www.youtube.com/?gl=BR"; mesma aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Página carregada");
}
function funcaoChange(elemento) {
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1+n2;
}
function validaIdade(){
    var validar;
    var idade = prompt("Qual a sua idade?");
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
alert(soma(5,10));
console.log(validaIdade());
*/


/*var nome = "Giovana Kerche Bonás";
var idade = 21;
var lista = ["maça", "pera", "uva", "salada mista"];
var idade2 = 21;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vinda " + nome +" - "+ idade +" anos");
alert("Soma: " + (idade+idade2));
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));
console.log(lista[0]);
lista.push("laranja");
console.log(lista);
lista.pop();
console.log(lista.reverse);
console.log(lista.join(" - "));
*/
/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
*/
/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
*/
/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/
/*
var count = 0;
while(count<=5){
    console.log(count);
    count++;
}
*/
/*
for(var count = 0; count <= 5; count++){
    console.log(count);
}*/
/*
var d = new Date();
alert(d.getFullYear());
*/