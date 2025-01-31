"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistenteRH = exports.GerenteRH = void 0;
const Seguranca_1 = require("../Seguranca/Seguranca");
class GerenteRH extends Seguranca_1.FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 3;
    }
    trabalhar() {
        console.log("Gerenciando equipe de RH");
    }
    contratarFuncionario(nome) {
        console.log(`Contratando novo funcionário: ${nome}`);
    }
}
exports.GerenteRH = GerenteRH;
class AssistenteRH extends Seguranca_1.FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 2;
    }
    trabalhar() {
        console.log("Organizando documentos de RH");
    }
    agendarEntrevista(data) {
        console.log(`Entrevista agendada para: ${data.toLocaleDateString()}`);
    }
}
exports.AssistenteRH = AssistenteRH;
