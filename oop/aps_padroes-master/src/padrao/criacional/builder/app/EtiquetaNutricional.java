package padrao.criacional.builder.app;

public class EtiquetaNutricional {
	private Integer tamanhoPorcao;
	private Integer calorias;
	private Integer porcaoTotalDaEmbalagem;
	private Integer gorduraTotal;
	private Integer gorduraSaturada;
	private Integer gorduraTrans;
	private Integer sodio;
	private Integer colesterol;
	
	public EtiquetaNutricional(BuilderEtiquetaNutricional bld) {
		this.tamanhoPorcao = bld.tamanhoPorcao;
		this.porcaoTotalDaEmbalagem = bld.porcaoTotalDaEmbalagem;
		this.calorias = bld.calorias;
		this.gorduraTotal = bld.gorduraTotal;
		this.gorduraSaturada = bld.gorduraSaturada;
		this.gorduraTrans = bld.gorduraTrans;
		this.sodio = bld.sodio;
		this.colesterol = bld.colesterol;
	}
	
}
