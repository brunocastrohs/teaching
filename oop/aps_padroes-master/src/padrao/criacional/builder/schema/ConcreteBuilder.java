package padrao.criacional.builder.schema;

public class ConcreteBuilder implements Builder{

	public void buildPart(){}
	
	public Product getResult(){
		return new Product();
	}
	
}
