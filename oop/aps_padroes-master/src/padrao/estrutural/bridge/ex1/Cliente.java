package padrao.estrutural.bridge.ex1;

public class Cliente {
	public static void main(String[] args) {
		
		Abstracao abstracoes;
		
		abstracoes = new AbstracaoRefinada(new ImplementacaoA());
		
		abstracoes.operacao();
		
		abstracoes = new AbstracaoRefinada(new ImplementacaoB());
		
		abstracoes.operacao();
		
		/*Abstracao abstracoes1 = new AbstracaoRefinada(new ImplementacaoB());
        
		Abstracao[] abstracoes = {abstracoes0, abstracoes1};
        
		for(Abstracao abstracao:abstracoes)
            abstracao.operacao();*/
		
    }
}
