"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamentos = void 0;
class Pagamentos {
    realizarPagamento(valor, destinatario) {
        console.log(`Pagamento de R$${valor} realizado para ${destinatario}.`);
    }
}
exports.Pagamentos = Pagamentos;
