
import { FuncionarioSeguranca } from "../Seguranca/Seguranca";
import { ITrabalhador } from "../shared/interfaces/IAcesso";

export abstract class FuncionarioContabilidade extends FuncionarioSeguranca implements ITrabalhador {
  abstract trabalhar(): void;
  
  gerarRelatorio(): void {
    console.log("Relatório financeiro gerado");
  }
}

export class Contador extends FuncionarioContabilidade {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 3;
  }

  trabalhar(): void {
    console.log("Realizando lançamentos contábeis");
  }

  calcularFolhaPagamento(): void {
    console.log("Calculando folha de pagamento");
  }
}

export class Auditor extends FuncionarioContabilidade {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 4;
  }

  trabalhar(): void {
    console.log("Realizando auditoria financeira");
  }

  verificarContas(): void {
    console.log("Verificando contas do hotel");
  }
}