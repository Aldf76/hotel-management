
import { Recepcionista, Concierge } from "./Recepcao/Recepcao";
import { GerenteRH, AssistenteRH } from "./RecursosHumanos/RH";
import { Contador, Auditor } from "./Contabilidade/Contabilidade";
import { Camareira, Manutencao } from "./Operacional/Operacional";
import { SistemaCamera } from "./Seguranca/Seguranca";

function testarTodosMetodos(funcionario: any): void {
  console.log("----- TESTANDO MÉTODOS -----");
  
  // Métodos comuns (herdados/implementados)
  console.log(`Acesso nível 2: ${funcionario.permitirAcesso(2)}`);
  funcionario.trabalhar();
  funcionario.registrarEntrada();

  // Métodos específicos por classe
  if (funcionario instanceof Recepcionista) {
    funcionario.checkIn("João Silva");
  }
  if (funcionario instanceof Concierge) {
    funcionario.reservarRestaurante();
  }
  if (funcionario instanceof GerenteRH) {
    funcionario.contratarFuncionario("Maria Souza");
  }
  if (funcionario instanceof AssistenteRH) {
    funcionario.agendarEntrevista(new Date());
  }
  if (funcionario instanceof Contador) {
    funcionario.calcularFolhaPagamento();
  }
  if (funcionario instanceof Auditor) {
    funcionario.verificarContas();
  }
  if (funcionario instanceof Camareira) {
    funcionario.reporItens();
  }
  if (funcionario instanceof Manutencao) {
    funcionario.consertarEquipamento();
  }
  if (funcionario instanceof SistemaCamera) {
    funcionario.monitorarAreasComuns();
  }

  console.log("----------------------------\n");
}

// Testando TODAS as classes do projeto
const funcionarios = [
  new Recepcionista(),
  new Concierge(),
  new GerenteRH(),
  new AssistenteRH(),
  new Contador(),
  new Auditor(),
  new Camareira(),
  new Manutencao(),
  new SistemaCamera(),
];

funcionarios.forEach(testarTodosMetodos);

/*
import { Recepcionista } from "./Recepcao/Recepcao";
import { GerenteRH } from "./RecursosHumanos/RH";
import { Contador } from "./Contabilidade/Contabilidade";
import { Camareira } from "./Operacional/Operacional";

//Queria uma forma de testar a maioria dos métodos mais rapidamente
function demonstrarFuncionario(funcionario: any): void {
  console.log(`Permissão de acesso: ${funcionario.permitirAcesso(2)}`);
  funcionario.trabalhar();
  funcionario.registrarEntrada();
}

const funcionarios = [
  new Recepcionista(),
  new GerenteRH(),
  new Contador(),
  new Camareira(),
];

funcionarios.forEach(demonstrarFuncionario);
*/