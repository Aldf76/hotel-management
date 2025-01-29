// Faz com que as classes que implementam permissoes ( como a classe Segurança) sigam um padrão.
export interface IAcesso {
    permitirAcesso(cargo: string): boolean
}