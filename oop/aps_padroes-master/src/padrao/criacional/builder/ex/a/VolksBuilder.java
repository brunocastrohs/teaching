package padrao.criacional.builder.ex.a;

public class VolksBuilder extends CarroBuilder {
	  @Override
	    public void buildPreco() {
	        // Operação complexa. 
	        carro.preco = 32000.00;
	    }
	 
	    @Override
	    public void buildDscMotor() {
	        // Operação complexa.
	        carro.dscMotor = "IT 1.0";
	    }
	 
	    @Override
	    public void buildAnoDeFabricacao() {
	        // Operação complexa.
	        carro.anoDeFabricacao = 2016;
	    }
	 
	    @Override
	    public void buildModelo() {
	        // Operação complexa.
	        carro.modelo = "Gol";
	    }
	 
	    @Override
	    public void buildMontadora() {
	        // Operação complexa.
	        carro.montadora = "Volkswagen";
	    }
}
