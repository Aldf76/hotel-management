//Permite o gerenciamento de permissões dos módulos da aplicação
//Assim, os módulos podem usar a função verificarPermissao sem duplicar a lógica !
export const CARGOS_PERMITIDOS : Record<string, string[]> = {
    Recepcao: ['Recepcionista', 'Gerente'],
    RecursosHumanos: ['GestorRH'],
    Contabilidade: ['Financeiro', 'Gerente'],
    Administracao: ['Supervisor', 'Técnico'],
    Seguranca:['Seguranca', 'Gerente']
};

export function verificarPermissao(cargo: string, setor: string): boolean {
return CARGOS_PERMITIDOS[setor]?.includes(cargo) ?? false;
};