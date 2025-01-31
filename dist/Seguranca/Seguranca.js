"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guarda = exports.SistemaCamera = exports.FuncionarioSeguranca = void 0;
//É uma classe que não pode ser instanciada e normalmente são usadas como classe "pai".
//Ela serve como "molde" para outras. Além de ter métodos também abstratos e obrigatórios que
//obrigam  os outros setores do hotel a seguir comportamentos como
// implementar o permitir Acesso e o registro de entrada
class FuncionarioSeguranca {
    // Método para todos os funcionários
    registrarEntrada() {
        console.log("Entrada registrada no sistema de segurança");
    }
}
exports.FuncionarioSeguranca = FuncionarioSeguranca;
class SistemaCamera extends FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 2;
    }
    trabalhar() {
        console.log("Checando as câmeras de segurança");
    }
    monitorarAreasComuns() {
        console.log("Monitorando áreas comuns do hotel");
    }
}
exports.SistemaCamera = SistemaCamera;
class Guarda extends FuncionarioSeguranca {
    permitirAcesso(nivel) {
        return nivel >= 1;
    }
    fazerRonda() {
        console.log("Fazendo ronda pelo hotel");
    }
}
exports.Guarda = Guarda;
