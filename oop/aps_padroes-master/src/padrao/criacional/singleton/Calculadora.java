package padrao.criacional.singleton;

public class Calculadora {

	private double versao;
	private String nome;
	
	private static Calculadora instance = new Calculadora(1.01, "Gambiators");

	private Calculadora() {}

	private Calculadora(double versao, String nome) {
		this.versao = versao;
		this.nome = nome;
	}
	
	public static Calculadora getInstance() {
		return instance;
	}

	public void soma(int a, int b) {
		System.out.println(a + b);
	}

	public void subtracao(int a, int b) {
		System.out.println(a - b);
	}

	public void multiplicacao(int a, int b) {
		System.out.println(a * b);
	}

	public void divisao(int a, int b) {
		System.out.println(a / b);
	}

	public void imprimirInfo() {
		System.out.println("Calculadora " + this.nome + "\nVersão: " + this.versao);
	}

}
