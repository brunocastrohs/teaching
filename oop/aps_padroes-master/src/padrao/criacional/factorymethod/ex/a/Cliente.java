package padrao.criacional.factorymethod.ex.a;

public class Cliente {

	public static void main(String[] args) {

		int clientePediuMassa = MassaConstants.PIZZA;
		int clientePediuTamanho = MassaConstants.SIZE_G;
		
		Factory fc = clientePediuMassa==MassaConstants.PIZZA? new PizzaFactory():new EspagueteFactory();
		
		Massa m = fc.made(clientePediuTamanho);

		float valorDaConta = m.getValor();
		
		System.out.println(valorDaConta);
		
	}

}
