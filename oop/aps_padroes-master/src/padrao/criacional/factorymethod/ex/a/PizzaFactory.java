package padrao.criacional.factorymethod.ex.a;

public class PizzaFactory extends Factory{
	
	public Massa made(int tamanho) {
		if(tamanho == MassaConstants.SIZE_G) {
			return new Pizza(PizzaConstants.PRECO_G, MassaConstants.SIZE_G);
		}else if(tamanho == MassaConstants.SIZE_M) {
			return new Pizza(PizzaConstants.PRECO_M, MassaConstants.SIZE_M);
		}else if(tamanho == MassaConstants.SIZE_P) {
			return new Pizza(PizzaConstants.PRECO_P, MassaConstants.SIZE_P);
		}
		else
			return null;
		
	};

}
