import { HotelManagement } from "./Seguranca/Seguranca";


const acesso = new HotelManagement.Seguranca.ControleDeAcesso();
    console.log(acesso.permitirAcesso("Recepcionista", "Operacional"));
    console.log(acesso.permitirAcesso("Gerente", "Recepcao"));
    console.log(acesso.permitirAcesso("Recepcionista", "Recepcao"));

    