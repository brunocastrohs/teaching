package padrao.estrutural.decorator.ex2;

public class ImpressaoSequencia extends Estatistics
{
	public void operacao(int array[]){
		System.out.print("Sequencia: [");
		for(int i = 0; i < array.length;i++)
			System.out.print("\t"+ array[i]);
		System.out.println("]");
		
		
	}
	
}