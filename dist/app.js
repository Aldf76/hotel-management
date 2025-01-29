"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Seguranca_1 = require("./Seguranca/Seguranca");
const acesso = new Seguranca_1.HotelManagement.Seguranca.ControleDeAcesso();
console.log(acesso.permitirAcesso("Recepcionista", "Operacional"));
console.log(acesso.permitirAcesso("Gerente", "Recepcao"));
console.log(acesso.permitirAcesso("Recepcionista", "Recepcao"));
