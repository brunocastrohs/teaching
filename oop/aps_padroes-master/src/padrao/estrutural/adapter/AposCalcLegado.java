package padrao.estrutural.adapter;

public class AposCalcLegado {
	
	protected AposCalcLegado(){}

	public String calcularAposentadoria(String dataAdmissao, char genero) {
		if (dataAdmissao != null && (genero == 'm' || genero == 'f')) {
			String dtAUX[] = dataAdmissao.split("/");

			dtAUX[2] = "" + (genero == 'm' ? Integer.parseInt(dtAUX[2]) + 35 : Integer.parseInt(dtAUX[2]) + 30);

			return dtAUX[0] + "/" + dtAUX[1] + "/" + dtAUX[2];
		} else
			throw new RuntimeException("Dados de entrada inválidos!.");

	}

}
