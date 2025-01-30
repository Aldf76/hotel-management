export class Funcionarios {
    listarFuncionarios(): string[] {
      return ["João", "Maria", "Carlos"];
    }
  
    adicionarFuncionario(nome: string): void {
      console.log(`Funcionário ${nome} adicionado.`);
    }
  }