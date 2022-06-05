package padrao.estrutural.adapter;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;

public class AposCalcLegadoAdapter implements AposCalc {

	public Calendar calcularDataAposentadoria(Calendar dataAdmissao, char genero) throws Exception{
			
			AposCalcLegado apos = new AposCalcLegado();
			
			String dt = dataAdmissao.get(Calendar.DAY_OF_MONTH) + 
						"/"+(dataAdmissao.get(Calendar.MONTH)+1) +
						"/"+dataAdmissao.get(Calendar.YEAR) ;
			
			System.out.println("DATA DE ADMISSAO: "+dt);
			
			dt = apos.calcularAposentadoria(dt, genero);
			
			DateFormat f = DateFormat.getDateInstance();
			
			Calendar dataAposentadoria = Calendar.getInstance();
			
			dataAposentadoria.setTime(f.parse(dt));
			
			return dataAposentadoria;
			
	}

}
