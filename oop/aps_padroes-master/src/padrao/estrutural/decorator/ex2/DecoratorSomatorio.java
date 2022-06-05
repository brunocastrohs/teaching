package padrao.estrutural.decorator.ex2;

public class DecoratorSomatorio extends Decorator
{
	
	public void operacao(int array[]){
		super.operacao(array);
		double m = calcularMedia(array);
		System.out.println("O somat�rio para a sequ�ncia �: "+ m);
	}
	
	double calcularMedia(int array[]){
		
		double s = 0;
		for(int i = 0; i < array.length;i++)
			s += array[i];
		return s;
		
	}
	
}