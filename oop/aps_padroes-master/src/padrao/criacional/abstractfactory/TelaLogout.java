package padrao.criacional.abstractfactory;

public abstract class TelaLogout {
	
	private String logo;
	private String mensagem;
	
	public TelaLogout(String l, String m){
		this.logo = l;
		this.mensagem = m;
	}

	public String getLogo() {
		return logo;
	}

	public String getMensagem() {
		return mensagem;
	}
	
	public abstract void mostrarTelaLogout();
	
}
