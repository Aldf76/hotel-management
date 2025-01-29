export namespace HotelManagement.Seguranca {

    export class ControleDeAcesso {
        //retorna um boolean ( se o cargo é permitido ou não o acesso )
      permitirAcesso(cargo: string, setor: string): boolean {
        //definindo quais cargos podem acessar quais setores
        // o objeto recebe uma string ( setor ) e um array de strings ( cargos )
        const CARGOS_PERMITIDOS: Record<string, string[]> = {
          Recepcao: ["Recepcionista", "Gerente"],
          RecursosHumanos: ["GestorRH"],
          Contabilidade: ["Financeiro", "Gerente"],
          Operacional: ["Supervisor", "Técnico"],
          Seguranca: ["Segurança", "Gerente"]
        };
        //retorna a lista de cargos permitidos e o setor
        // se for undefined, ele retorna falso por conta do ( ?? ) .
        return CARGOS_PERMITIDOS[setor]?.includes(cargo) ?? false;
      }
    }

    const acesso = new HotelManagement.Seguranca.ControleDeAcesso();
    console.log(acesso.permitirAcesso("Recepcionista", "Operacional"));
    console.log(acesso.permitirAcesso("Gerente", "Recepcao"));
    console.log(acesso.permitirAcesso("Recepcionista", "Recepcao"));
  
    export class Monitoramento {
      registrarOcorrencia(ocorrencia: string): void {
        console.log(`Ocorrência registrada: ${ocorrencia}`);
      }
    }
  }
  