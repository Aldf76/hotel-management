"use strict";
/// <reference path="../Seguranca/Monitoramento.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManagement = void 0;
var HotelManagement;
(function (HotelManagement) {
    var Contabilidade;
    (function (Contabilidade) {
        class GestaoFinanceira {
            calcularOrcamento(orcamento, despesas) {
                return orcamento - despesas;
            }
        }
        Contabilidade.GestaoFinanceira = GestaoFinanceira;
        class Pagamentos {
            realizarPagamento(valor, destinatario) {
                console.log(`Pagamento de R$${valor} realizado para ${destinatario}.`);
            }
        }
        Contabilidade.Pagamentos = Pagamentos;
    })(Contabilidade = HotelManagement.Contabilidade || (HotelManagement.Contabilidade = {}));
})(HotelManagement || (exports.HotelManagement = HotelManagement = {}));
