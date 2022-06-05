package padrao.criacional.abstractfactory;

public abstract class TelaLogin {

	private String logo;
	private String mensagem;
	
	public TelaLogin(String l, String m){
		this.logo = l;
		this.mensagem = m;
	}
	
	public String getLogo() {
		return logo;
	}

	public String getMensagem() {
		return mensagem;
	}
	
	public abstract void mostrarTelaLogin();
	
}
