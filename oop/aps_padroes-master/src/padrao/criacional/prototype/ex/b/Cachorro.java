package padrao.criacional.prototype.ex.b;

public class Cachorro implements Prototype {

	String som;

	public Cachorro(String s) {
		this.som = s;
	}

	@Override
	public Prototype doClone() {
		return new Cachorro(som);
	}

	public String toString() {
		return "This dog says " + som;
	}
	
}
