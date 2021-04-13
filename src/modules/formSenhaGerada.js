import 'core-js/stable';
import 'regenerator-runtime/runtime';
import GeraSenha from './GeraSenha';

const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');
let caracteres;
let numeros;
let maiusculas;
let minusculas;
let simbolos;

export default () => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        caracteres = document.querySelector('#caracteres');
        numeros = document.querySelector('#numeros');
        maiusculas = document.querySelector('#maiusculas');
        minusculas = document.querySelector('#minusculas');
        simbolos = document.querySelector('#simbolos');

        const entrada = new GeraSenha(caracteres.value, numeros.checked, maiusculas.checked, minusculas.checked, simbolos.checked);
        console.log(entrada);
        gera(entrada);
    });
}


async function gera(entrada) {
    try {
        resultado.innerHTML = 'Gerando sua senha...';
        const senha = await entrada.geraSequencia();
        resultado.innerHTML = senha || 'Preencha os campos:';
        return (senha);
    } catch (e) {
        return console.log('ERRO NA FUNCAO GERA', e);
    }
}
