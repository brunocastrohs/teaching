package padrao.criacional.prototype.app;

public class PrototipoQuadrado extends PrototipoFiguraGeometrica {

	@Override
	public PrototipoFiguraGeometrica clonar() {
		return new PrototipoQuadrado(this);
	}

	public PrototipoQuadrado(PrototipoQuadrado prototipoQuadrado) {
		this.dimensao = prototipoQuadrado.getDimensao();
	}

	public PrototipoQuadrado(int dimensao) {
		this.dimensao = dimensao;
	}

	@Override
	public void imprimirFigura() {

		int lado = this.dimensao;

		for (int i = 0; i < lado; i++) {
			if (i == 0 || i == (lado - 1)) {
				for (int j = 0; j < lado; j++) {
					System.out.print("*");
				}
			} else {
				for (int j = 0; j < lado; j++) {
					if (j == 0 || j == (lado - 1)) {
						System.out.print("*");
					} else {
						System.out.print(" ");
					}
				}
			}
			System.out.println();
		}

	}

}
