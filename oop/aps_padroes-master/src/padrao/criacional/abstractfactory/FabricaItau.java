package padrao.criacional.abstractfactory;

public class FabricaItau extends FabricaAbstrata{

	public TelaLogin gerarTelaLogin(){
		return new TelaLoginItau();
	};
	
	public TelaLogout gerarTelaLogout(){
		return new TelaLogoutItau();
	};
	
}
