package padrao.criacional.abstractfactory;

public class FabricaBradesco extends FabricaAbstrata{

	public TelaLogin gerarTelaLogin(){
		return new TelaLoginBradesco();
	};
	
	public TelaLogout gerarTelaLogout(){
		return new TelaLogoutBradesco();
	};
	
}
