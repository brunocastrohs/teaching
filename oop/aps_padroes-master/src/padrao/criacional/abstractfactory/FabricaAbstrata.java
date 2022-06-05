package padrao.criacional.abstractfactory;

import util.Util;
import util.UtilConstantes;

public abstract class FabricaAbstrata {

	public abstract TelaLogin gerarTelaLogin();
	
	public abstract TelaLogout gerarTelaLogout();
	
	public static FabricaAbstrata getInstance(String serial) throws Exception{
		
		int codigoBanco = Util.getInstance().codigoBanco(serial);
		
		if(codigoBanco == UtilConstantes.CODIGO_BRADESCO)
			return new FabricaBradesco();
		else if(codigoBanco == UtilConstantes.CODIGO_ITAU)
			return new FabricaItau();
		else{
			throw new Exception("Serial inválido!");
		}
	}
	
}
