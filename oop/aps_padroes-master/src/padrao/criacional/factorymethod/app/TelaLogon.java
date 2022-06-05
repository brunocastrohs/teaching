package padrao.criacional.factorymethod.app;

public abstract class TelaLogon {

	private String logo;
	private String mensagem;
	
	public TelaLogon(String l, String m){
		this.logo = l;
		this.mensagem = m;
	}
	
	public String getLogo() {
		return logo;
	}

	public String getMensagem() {
		return mensagem;
	}
	
}
