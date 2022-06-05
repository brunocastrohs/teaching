package padrao.criacional.prototype.app;

public class PrototipoTriangulo extends PrototipoFiguraGeometrica {

	@Override
	public PrototipoFiguraGeometrica clonar() {
		return new PrototipoTriangulo(this);
	}

	public PrototipoTriangulo(PrototipoTriangulo prototipoTriangulo) {
		this.dimensao = prototipoTriangulo.getDimensao();
	}

	public PrototipoTriangulo(int dimensao) {
		this.dimensao = dimensao;
	}

	@Override
	public void imprimirFigura() {
		int i, j;
		for (i = 1; i <= this.dimensao; i = i + 1) {
			for (j = 1; j <= i; j = j + 1)
				System.out.print('*');
			System.out.print('\n');
		}

	}

}
