import { FuncionarioSeguranca } from "../Seguranca/Seguranca";
import { ITrabalhador } from "../shared/interfaces/IAcesso";

export class GerenteRH extends FuncionarioSeguranca implements ITrabalhador {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 3;
  }

  trabalhar(): void {
    console.log("Gerenciando equipe de RH");
  }

  contratarFuncionario(nome: string): void {
    console.log(`Contratando novo funcionário: ${nome}`);
  }
}

export class AssistenteRH extends FuncionarioSeguranca implements ITrabalhador {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 2;
  }

  trabalhar(): void {
    console.log("Organizando documentos de RH");
  }

  agendarEntrevista(data: Date): void {
    console.log(`Entrevista agendada para: ${data.toLocaleDateString()}`);
  }
}