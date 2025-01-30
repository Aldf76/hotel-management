export class Beneficios {
    //Calcula o benefício baseando-se no salário do Funcionário
    calcularBeneficio(funcionario: string, salario: number): number {
      return salario * 0.2; // Exemplo: 20% de benefício
    }
  

    listarBeneficios(): string[]{
        return ["Vale-Refeição", "Plano de Saúde", "Seguro"];
    } 
}