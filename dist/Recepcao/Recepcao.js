"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concierge = exports.Recepcionista = void 0;
const Seguranca_1 = require("../Seguranca/Seguranca");
class Recepcionista extends Seguranca_1.FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 2;
    }
    trabalhar() {
        console.log("Atendendo hóspedes na recepção");
    }
    checkIn(nome) {
        console.log(`Check-in realizado para: ${nome}`);
    }
}
exports.Recepcionista = Recepcionista;
class Concierge extends Seguranca_1.FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 3;
    }
    trabalhar() {
        console.log("Prestando serviços de concierge");
    }
    reservarRestaurante() {
        console.log("Reserva de restaurante realizada");
    }
}
exports.Concierge = Concierge;
