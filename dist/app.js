"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./Seguranca/index");
const index_2 = require("./Contabilidade/index");
const acesso = new index_1.ControleDeAcesso();
console.log(acesso.permitirAcesso("Recepcionista", "Operacional"));
console.log(acesso.permitirAcesso("Gerente", "Recepcao"));
console.log(acesso.permitirAcesso("Recepcionista", "Recepcao"));
const Financeiro = new index_2.GestaoFinanceira();
console.log(Financeiro.calcularOrcamento(50.000, 25.000));
console.log(Financeiro.calcularOrcamento(325.000, 100.000));
console.log(Financeiro.calcularOrcamento(10.000, 25.000));
const pag = new index_2.Pagamentos();
console.log(pag.realizarPagamento(1000, "Felipe"));
