package padrao.criacional.factorymethod.ex.b;

public class Homem extends Pessoa{
	
	public Homem(String nome) {
		this.nome = nome;
		System.out.println("Ol� Senhor " + this.nome);
	}

}
