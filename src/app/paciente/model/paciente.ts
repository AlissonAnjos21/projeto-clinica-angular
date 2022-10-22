export interface Paciente {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  telefone: string;
  telefoneFamiliar: string;
  ocupacao: string;
  endereco: string;
  planoSaude: string;
  alergias: string[];
  doencas: string[];
}
