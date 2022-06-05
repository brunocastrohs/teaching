package padrao.criacional.factorymethod.ex.a;

public abstract class Massa {
	
	private float valor;
	private int tamanho;
	
	public Massa(float valor, int tamanho){
		this.tamanho = tamanho;
		this.valor = valor;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}
	
	public int getTamanho() {
		return tamanho;
	}

	public void setTamanho(int tamanho) {
		this.tamanho = tamanho;
	}

}
