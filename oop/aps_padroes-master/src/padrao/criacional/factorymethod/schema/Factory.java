package padrao.criacional.factorymethod.schema;

public class Factory {
	
	public AbstractProduct factoryMethod(int type){
		
		if(type == 1)
			return new ProductA();
		else if(type == 2)
			return new ProductB();
		else 
			return null;
		
	}

}
