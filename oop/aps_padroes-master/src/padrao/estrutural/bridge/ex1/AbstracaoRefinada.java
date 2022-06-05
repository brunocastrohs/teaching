package padrao.estrutural.bridge.ex1;

public class AbstracaoRefinada implements Abstracao{
   
	private Implementador implementador;
    
	public AbstracaoRefinada(Implementador implementador){
        this.implementador = implementador;
    }
   
	public void operacao(){
        implementador.operacaoConcreta();
    }
    
}