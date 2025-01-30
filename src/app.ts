import { ControleDeAcesso, Monitoramento } from "./Seguranca/index";
import { GestaoFinanceira, Pagamentos } from "./Contabilidade/index";

const acesso = new ControleDeAcesso();
    console.log(acesso.permitirAcesso("Recepcionista", "Operacional"));
    console.log(acesso.permitirAcesso("Gerente", "Recepcao"));
    console.log(acesso.permitirAcesso("Recepcionista", "Recepcao"));

const Financeiro = new GestaoFinanceira();
console.log(Financeiro.calcularOrcamento(50.000, 25.000));
console.log(Financeiro.calcularOrcamento(325.000, 100.000));
console.log(Financeiro.calcularOrcamento(10.000, 25.000));

const pag = new Pagamentos();
console.log(pag.realizarPagamento(1000, "Felipe"));
    