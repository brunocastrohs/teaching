package padrao.criacional.prototype.ex.b;

public class Pessoa implements Prototype {

	String nome;

	public Pessoa(String n) {
		this.nome = n;
	}

	@Override
	public Prototype doClone() {
		return new Pessoa(nome);
	}

	public String toString() {
		return "This person is named " + nome;
	}
}