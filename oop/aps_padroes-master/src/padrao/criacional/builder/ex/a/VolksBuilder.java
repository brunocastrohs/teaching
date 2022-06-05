package padrao.criacional.builder.ex.a;

public class VolksBuilder extends CarroBuilder {
	  @Override
	    public void buildPreco() {
	        // Opera��o complexa. 
	        carro.preco = 32000.00;
	    }
	 
	    @Override
	    public void buildDscMotor() {
	        // Opera��o complexa.
	        carro.dscMotor = "IT 1.0";
	    }
	 
	    @Override
	    public void buildAnoDeFabricacao() {
	        // Opera��o complexa.
	        carro.anoDeFabricacao = 2016;
	    }
	 
	    @Override
	    public void buildModelo() {
	        // Opera��o complexa.
	        carro.modelo = "Gol";
	    }
	 
	    @Override
	    public void buildMontadora() {
	        // Opera��o complexa.
	        carro.montadora = "Volkswagen";
	    }
}
