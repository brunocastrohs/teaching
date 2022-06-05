package padrao.criacional.factorymethod.ex.a;

public class EspagueteFactory extends Factory{
	
	public Massa made(int tamanho) {
		if(tamanho == MassaConstants.SIZE_G) {
			return new Espaguete(EspagueteConstants.PRECO_G, MassaConstants.SIZE_G);
		}else if(tamanho == MassaConstants.SIZE_M) {
			return new Espaguete(EspagueteConstants.PRECO_M, MassaConstants.SIZE_M);
		}else if(tamanho == MassaConstants.SIZE_P) {
			return new Espaguete(EspagueteConstants.PRECO_P, MassaConstants.SIZE_P);
		}
		else
			return null;
		
	};

}
