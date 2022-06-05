package padrao.estrutural.adapter;

import java.util.Calendar;

public class CalculadoraPREV implements AposCalc{

	@Override
	public Calendar calcularDataAposentadoria(Calendar dataAdmissao, char genero) {
		
		if(dataAdmissao != null && (genero == 'm' || genero == 'f')){
			
			int ano = dataAdmissao.get(Calendar.YEAR);
			
			ano += genero == 'm' ? 35:30;
			
			dataAdmissao.set(Calendar.YEAR, ano);
			
			Calendar dataAposentadoria = dataAdmissao;
			
			return dataAposentadoria;
			
		}else
			throw new RuntimeException("Dados de entrada inválidos!.");
		
	}

	
	
}
