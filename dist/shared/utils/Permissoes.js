"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARGOS_PERMITIDOS = void 0;
exports.verificarPermissao = verificarPermissao;
//Permite o gerenciamento de permissões dos módulos da aplicação
//Assim, os módulos podem usar a função verificarPermissao sem duplicar a lógica !
exports.CARGOS_PERMITIDOS = {
    Recepcao: ['Recepcionista', 'Gerente'],
    RecursosHumanos: ['GestorRH'],
    Contabilidade: ['Financeiro', 'Gerente'],
    Administracao: ['Supervisor', 'Técnico'],
    Seguranca: ['Seguranca', 'Gerente']
};
function verificarPermissao(cargo, setor) {
    var _a, _b;
    return (_b = (_a = exports.CARGOS_PERMITIDOS[setor]) === null || _a === void 0 ? void 0 : _a.includes(cargo)) !== null && _b !== void 0 ? _b : false;
}
;
