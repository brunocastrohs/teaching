package padrao.estrutural.adapter;

import java.util.Calendar;

public interface AposCalc {

	public Calendar calcularDataAposentadoria(Calendar dataAdmissao, char genero) throws Exception;
	
}
