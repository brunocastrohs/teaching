package padrao.criacional.builder.app;

import padrao.criacional.builder.ex.b.Usuario;

public class BuilderEtiquetaNutricional {
	
	//obrigatorios
	protected Integer tamanhoPorcao;
	protected Integer calorias;
	//opcionais
	protected Integer porcaoTotalDaEmbalagem;
	protected Integer gorduraTotal;
	protected Integer gorduraSaturada;
	protected Integer gorduraTrans;
	protected Integer sodio;
	protected Integer colesterol;
	
	public BuilderEtiquetaNutricional(Integer tamanhoPorcao, Integer calorias) {
		this.tamanhoPorcao = tamanhoPorcao;
		this.calorias = calorias;
	}
	
	public BuilderEtiquetaNutricional porcaoTotalDaEmbalagem(Integer val) {
		porcaoTotalDaEmbalagem = val;
		return this;
	}
	
	public BuilderEtiquetaNutricional gorduraTotal(Integer val) {
		gorduraTotal = val;
		return this;
	}

	public BuilderEtiquetaNutricional gorduraSaturada(Integer val) {
		gorduraSaturada = val;
		return this;
	}

	public BuilderEtiquetaNutricional gorduraTrans(Integer val) {
		gorduraTrans = val;
		return this;
	}

	public BuilderEtiquetaNutricional sodio(Integer val) {
		sodio = val;
		return this;
	}

	public BuilderEtiquetaNutricional colesterol(Integer val) {
		colesterol = val;
		return this;
	}
	
	public EtiquetaNutricional build(){
        return new EtiquetaNutricional(this);
    }
	
}
