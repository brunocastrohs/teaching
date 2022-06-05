package padrao.estrutural.decorator.ex1;

public class DecoradorConcretoA extends Decorador
{
	private String estadoAgregado;
	
	public void operacao()
	{
		super.operacao();
		estadoAgregado = "atributo estadoAgregado adicionado";
		System.out.println("NovoEstado: "+ estadoAgregado);
		System.out.println("DecoradorConcretoA.operacao()");
	}
	
}