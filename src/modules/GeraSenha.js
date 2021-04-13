"use strict";

function geraTempo(min = 0, max = 1500) {
    return Math.floor(Math.random() * (max - min) + min);
}

function geraLetra() {
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    let indice = Math.floor(Math.random() * (letras.length - 1));
    return letras.charAt(indice);
}

function geraSimbolo() {
    let simbolos = `!'?;,.*#@%$&/^~[´]{}`;
    let indice = Math.floor(Math.random() * (simbolos.length - 1));
    return simbolos.charAt(indice);
}

export default class GeraSenha {
    constructor(caracteres = 6, numeros, maiusculas, minusculas, simbolos) {
        this.caracteres = caracteres;
        this.numeros = numeros;
        this.maiusculas = maiusculas;
        this.minusculas = minusculas;
        this.simbolos = simbolos;
    }

    async geraSequencia() {
        let sequenciaArray = [];
        for (let i = 0; i < this.caracteres; i++) {
            let digitoTemp = '';
            let promises = [];
            for (let i = 0; i <= 4; i++) {
                if (this.numeros) promises.push(this.randNumber());
                if (this.maiusculas) promises.push(this.randMaiuscula());
                if (this.minusculas) promises.push(this.randMinuscula());
                if (this.simbolos) promises.push(this.randSymbol());
            }
            digitoTemp = await Promise.race(promises)
                .then(num => num)
                .catch(e => console.log('ERRO geraSequencia()', e));
            sequenciaArray.push(digitoTemp);
        }

        let sequencia = sequenciaArray.join('');
        return sequencia;
    }

    randNumber() {
        let number = Math.floor(Math.random() * 10);
        return new Promise((resolve, reject) => {
            if (number < 0 || number >= 10) {
                reject(new Error('BAD NUMBER'));
            } else {
                setTimeout(() => {
                    resolve(String(number));
                }, geraTempo());
            }
        });
    }

    randMaiuscula() {
        let letra = geraLetra().toUpperCase();
        return new Promise((resolve, reject) => {
            if (typeof letra !== 'string') {
                reject(new Error('BAD LETRA MAIUSCULA'));
            } else {
                setTimeout(() => {
                    resolve(letra);
                }, geraTempo());
            }
        })
    }

    randMinuscula() {
        let letra = geraLetra().toLowerCase();
        return new Promise((resolve, reject) => {
            if (typeof letra !== 'string') {
                reject(new Error('BAD LETRA MINUSCULA'));
            } else {
                setTimeout(() => {
                    resolve(letra);
                }, geraTempo());
            }
        })

    }

    randSymbol() {
        let simbolo = geraSimbolo();
        return new Promise((resolve, reject) => {
            if (typeof simbolo !== 'string') {
                reject(new Error('BAD SIMBOLO'));
            } else {
                setTimeout(() => {
                    resolve(simbolo);
                }, geraTempo());
            }
        })

    }


}
