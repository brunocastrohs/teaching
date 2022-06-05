package padrao.estrutural.decorator.ex1;

public abstract class Decorador extends Componente {
	
	protected Componente componente;

	public void setComponente(Componente component) {
		this.componente = component;
	}

	public void operacao() {
		if (componente != null)
			componente.operacao();
	}
}