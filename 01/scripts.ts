type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

type UsuarioAtualizado = Omit<Usuario, "rg">;
type UsuarioObrigatorio = Required<UsuarioAtualizado>;

const cadastrarUsuário = (info: Required<Usuario>): Usuario => {
  return info;
};
