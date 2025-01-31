"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutencao = exports.Camareira = void 0;
const Seguranca_1 = require("../Seguranca/Seguranca");
class Camareira extends Seguranca_1.FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 1;
    }
    trabalhar() {
        console.log("Realizando limpeza dos quartos");
    }
    reporItens() {
        console.log("Repondo itens de higiene");
    }
}
exports.Camareira = Camareira;
class Manutencao extends Seguranca_1.FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 2;
    }
    trabalhar() {
        console.log("Realizando manutenções prediais");
    }
    consertarEquipamento() {
        console.log("Consertando equipamento avariado");
    }
}
exports.Manutencao = Manutencao;
