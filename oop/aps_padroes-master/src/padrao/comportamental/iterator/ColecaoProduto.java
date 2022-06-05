package padrao.comportamental.iterator;

public class ColecaoProduto implements Iteravel, Colecao {

	int posicaoIteracao;
	int posicaoCRUD;
	Produto lista[];
	
	public ColecaoProduto(int tamanho){
		this.lista = new Produto[tamanho];
		this.posicaoIteracao = 0;
		this.posicaoCRUD = 0;
	}
	
	public void add(Object p){
		this.lista[posicaoCRUD] = (Produto) p;
		posicaoCRUD++;
	}
	
	public Object next() {
		Produto p = lista[posicaoIteracao];
		posicaoIteracao++;
		return p;
	}
	
	public boolean hasNext() {
		
		if (posicaoIteracao >= lista.length || lista[posicaoIteracao] == null) {
			this.posicaoIteracao = 0;
			return false;
		} else {
			return true;
		}
		
	}
	
	
}
