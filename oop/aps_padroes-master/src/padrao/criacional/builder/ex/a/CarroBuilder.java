package padrao.criacional.builder.ex.a;

public abstract class CarroBuilder {
	protected Carro carro;
	 
    public CarroBuilder() {
        carro = new Carro();
    }
 
    public abstract void buildPreco();
 
    public abstract void buildDscMotor();
 
    public abstract void buildAnoDeFabricacao();
 
    public abstract void buildModelo();
 
    public abstract void buildMontadora();
 
    public Carro getCarro() {
        return carro;
    }
}
