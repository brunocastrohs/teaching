package padrao.criacional.factorymethod.ex.b;

public abstract class PessoaFactory {
	
	public static Pessoa madePessoa(String nome, String sexo) {
		if (sexo.equals("M"))
			return new Homem(nome);
		else if (sexo.equals("F"))
			return new Mulher(nome);
		else
			return null;
	}
	
}
