package padrao.estrutural.bridge.ex2;

public class Cliente {
	public static void main(String[] args) {
		GeradorArquivoTxt arquivoTxt = new GeradorArquivoTxt();
		Recibo reciboAbril = new Recibo("XX", "Camilo Lopes", 50.00, arquivoTxt);
		reciboAbril.geraArquivo();
	}
}
