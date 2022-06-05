package padrao.criacional.builder.ex.a;

public class ConcessionariaDirector {
   
	protected CarroBuilder builder;
 
    public ConcessionariaDirector(CarroBuilder builder) {
        this.builder = builder;
    }
 
    public void construirCarro() {
        builder.buildPreco();
        builder.buildAnoDeFabricacao();
        builder.buildDscMotor();
        builder.buildModelo();
        builder.buildMontadora();
    }
 
    public Carro getCarro() {
        return builder.getCarro();
    }
    
}