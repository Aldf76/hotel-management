import { FuncionarioSeguranca } from "../Seguranca/Seguranca";
import { ITrabalhador } from "../shared/interfaces/IAcesso";

export class Recepcionista extends FuncionarioSeguranca implements ITrabalhador {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 2;
  }

  trabalhar(): void {
    console.log("Atendendo hóspedes na recepção");
  }

  checkIn(nome: string): void {
    console.log(`Check-in realizado para: ${nome}`);
  }
}

export class Concierge extends FuncionarioSeguranca implements ITrabalhador {
  permitirAcesso(nivel: number): boolean {
    return nivel >= 3;
  }

  trabalhar(): void {
    console.log("Prestando serviços de concierge");
  }

  reservarRestaurante(): void {
    console.log("Reserva de restaurante realizada");
  }
}