package padrao.comportamental.iterator;

public class ColecaoContato implements Iteravel, 
		Colecao {

	int posicaoIteracao;
	int posicaoCRUD;
	private Contato lista[];
	
	public ColecaoContato(int tamanho){
		this.lista = new Contato[tamanho];
		this.posicaoIteracao = 0;
		this.posicaoCRUD = 0;
	}
	
	public void add(Object c){
		this.lista[posicaoCRUD] = (Contato) c;
		posicaoCRUD++;
	}
	
	public Object next() {
		Contato c = lista[posicaoIteracao];
		posicaoIteracao++;
		return c;
	}
	
	public boolean hasNext() {
		
		if (posicaoIteracao >= lista.length || 
				lista[posicaoIteracao] == null) {
			this.posicaoIteracao = 0;
			return false;
		} else {
			return true;
		}
		
	}
	
	
}
