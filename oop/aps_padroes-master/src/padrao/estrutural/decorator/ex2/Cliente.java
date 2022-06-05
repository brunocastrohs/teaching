package padrao.estrutural.decorator.ex2;

public class Cliente {

	public static void main(String a[]){
		int seq[] = {10, 7, 4, 9, 5};
		Estatistics es = new ImpressaoSequencia();
		Decorator som = new DecoratorSomatorio();
		Decorator dp = new DecoratorDesvioPadrao();
		Decorator me = new DecoratorMedia();
		som.setComponente(es);
		me.setComponente(som);
		dp.setComponente(me);
		dp.operacao(seq);
	}
	
}
