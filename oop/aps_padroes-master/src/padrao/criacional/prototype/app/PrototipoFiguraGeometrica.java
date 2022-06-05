package padrao.criacional.prototype.app;

public abstract class PrototipoFiguraGeometrica {

	protected int dimensao = 0;

	public int getDimensao() {
		return dimensao;
	}

	public void setDimensao(int dimensao) {
		this.dimensao = dimensao;
	}

	public abstract PrototipoFiguraGeometrica clonar();

	public abstract void imprimirFigura();

}
