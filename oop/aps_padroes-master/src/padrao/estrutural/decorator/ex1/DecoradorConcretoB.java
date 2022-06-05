package padrao.estrutural.decorator.ex1;

public class DecoradorConcretoB extends Decorador
{
	public void operacao()
	{
		super.operacao();
		agregarComportamento();
		System.out.println("DecoradorConcretoB.operacao()");
	}
	void agregarComportamento()
	{
		System.out.println("comportamento acrescentado B");
	}
	
}