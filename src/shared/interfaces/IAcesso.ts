// Faz com que as classes que implementam permissoes ( como a classe Segurança) sigam um padrão.
export interface ITrabalhador {
    trabalhar(): void;
  }
  
  // o método espera um número para definir o nível de acesso que o funcionário tem e 
  // retorna um booleano indicando se o acesso é permitido ou não
  export interface IAcesso {
    permitirAcesso(nivel: number): boolean;
  }