"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auditor = exports.Contador = exports.FuncionarioContabilidade = void 0;
const Seguranca_1 = require("../Seguranca/Seguranca");
class FuncionarioContabilidade extends Seguranca_1.FuncionarioSeguranca {
    gerarRelatorio() {
        console.log("Relatório financeiro gerado");
    }
}
exports.FuncionarioContabilidade = FuncionarioContabilidade;
class Contador extends FuncionarioContabilidade {
    permitirAcesso(nivel) {
        return nivel >= 3;
    }
    trabalhar() {
        console.log("Realizando lançamentos contábeis");
    }
    calcularFolhaPagamento() {
        console.log("Calculando folha de pagamento");
    }
}
exports.Contador = Contador;
class Auditor extends FuncionarioContabilidade {
    permitirAcesso(nivel) {
        return nivel >= 4;
    }
    trabalhar() {
        console.log("Realizando auditoria financeira");
    }
    verificarContas() {
        console.log("Verificando contas do hotel");
    }
}
exports.Auditor = Auditor;
