package padrao.criacional.factorymethod.app;

import util.Util;
import util.UtilConstantes;

public abstract class Criador{

	public static TelaLogon metodoFabrica(String serial) throws Exception{
		if(Util.getInstance().validarSerial(serial) && Util.getInstance().codigoBanco(serial) == UtilConstantes.CODIGO_BRADESCO)
			return new TelaLogonBradesco();
		else if(Util.getInstance().validarSerial(serial) && Util.getInstance().codigoBanco(serial) == UtilConstantes.CODIGO_ITAU)
			return new TelaLogonItau();
		else if(Util.getInstance().validarSerial(serial) && Util.getInstance().codigoBanco(serial) == UtilConstantes.CODIGO_BANCO_BRASIl)
			return new TelaLogonBancoBrasil();
		else{
			throw new Exception("Serial inválido!");
		}
	}
	
}
