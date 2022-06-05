package padrao.criacional.builder.ex.a;

public class FiatBuilder extends CarroBuilder {
	  @Override
	    public void buildPreco() {
	        // Operação complexa. 
	        carro.preco = 36000.00;
	    }
	 
	    @Override
	    public void buildDscMotor() {
	        // Operação complexa.
	        carro.dscMotor = "Fire Flex 1.0";
	    }
	 
	    @Override
	    public void buildAnoDeFabricacao() {
	        // Operação complexa.
	        carro.anoDeFabricacao = 2016;
	    }
	 
	    @Override
	    public void buildModelo() {
	        // Operação complexa.
	        carro.modelo = "Palio";
	    }
	 
	    @Override
	    public void buildMontadora() {
	        // Operação complexa.
	        carro.montadora = "Fiat";
	    }
}
