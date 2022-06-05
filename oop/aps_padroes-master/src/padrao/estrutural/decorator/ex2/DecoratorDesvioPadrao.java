package padrao.estrutural.decorator.ex2;

public class DecoratorDesvioPadrao extends Decorator
{
	
	public void operacao(int array[]){
		super.operacao(array);
		double m = calcularDesvio(array);
		System.out.println("O desvio para a sequência é: "+ m);
	}
	
	double calcularDesvio(int array[]){
		
		int s = 0;
		double m = 0.0, d = 0.0; 
		
		for(int i = 0; i < array.length;i++){
			s += array[i];
		}
		m = s/array.length;
		for(int i = 0; i < array.length;i++){
			d += Math.pow((array[i] - m), 2) ;
		}
		d = Math.sqrt(d/array.length);
		
		return d;
		
	}
	
}