package padrao.criacional.builder.ex.b;

public class Colaborador {

	String nome;
	String sobreNome;
	float salario;
	String cargo;
	int matricula;
	String cpf;
	char genero;
	
	public Colaborador(ColaboradorBuilder builder) {
		super();
		this.nome = builder.nome;
		this.sobreNome = builder.sobreNome;
		this.salario = builder.salario;
		this.cargo = builder.cargo;
		this.matricula = builder.matricula;
		this.cpf = builder.cpf;
		this.genero = builder.genero;
	}
	
	public static class ColaboradorBuilder{
		
		String nome;
		String sobreNome;
		float salario;
		String cargo;
		int matricula;
		String cpf;
		char genero;
		
		public ColaboradorBuilder(String nome, String sobreNome) {
			this.nome = nome;
			this.sobreNome = sobreNome;
		}
		
		public ColaboradorBuilder salario(float salario) {
			this.salario = salario;
			return this;
		}
		
		public ColaboradorBuilder cargo(String cargo) {
			this.cargo = cargo;
			return this;
		}
		
		public ColaboradorBuilder matricula(int matricula) {
			this.matricula = matricula;
			return this;
		}
		
		public ColaboradorBuilder cpf(String cpf) {
			this.cpf = cpf;
			return this;
		}
		
		public ColaboradorBuilder genero(char genero) {
			this.genero = genero;
			return this;
		}
		
		public Colaborador build() {
			return new Colaborador(this);
		}
	}
	
}
