"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleDeAcesso = void 0;
class ControleDeAcesso {
    //retorna um boolean ( se o cargo é permitido ou não o acesso )
    permitirAcesso(cargo, setor) {
        var _a, _b;
        //definindo quais cargos podem acessar quais setores
        // o objeto recebe uma string ( setor ) e um array de strings ( cargos )
        const CARGOS_PERMITIDOS = {
            Recepcao: ["Recepcionista", "Gerente"],
            RecursosHumanos: ["GestorRH"],
            Contabilidade: ["Financeiro", "Gerente"],
            Operacional: ["Supervisor", "Técnico"],
            Seguranca: ["Segurança", "Gerente"],
        };
        //retorna a lista de cargos permitidos e o setor
        // se for undefined, ele retorna falso por conta do ( ?? ) .
        return (_b = (_a = CARGOS_PERMITIDOS[setor]) === null || _a === void 0 ? void 0 : _a.includes(cargo)) !== null && _b !== void 0 ? _b : false;
    }
}
exports.ControleDeAcesso = ControleDeAcesso;
