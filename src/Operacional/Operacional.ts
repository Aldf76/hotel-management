import { FuncionarioSeguranca } from "../Seguranca/Seguranca";
import { ITrabalhador } from "../shared/interfaces/IAcesso";

export class Camareira extends FuncionarioSeguranca implements ITrabalhador {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 1;
  }

  trabalhar(): void {
    console.log("Realizando limpeza dos quartos");
  }

  reporItens(): void {
    console.log("Repondo itens de higiene");
  }
}

export class Manutencao extends FuncionarioSeguranca implements ITrabalhador {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 2;
  }

  trabalhar(): void {
    console.log("Realizando manutenções prediais");
  }

  consertarEquipamento(): void {
    console.log("Consertando equipamento avariado");
  }
}