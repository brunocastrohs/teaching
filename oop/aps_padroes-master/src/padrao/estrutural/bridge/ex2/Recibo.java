package padrao.estrutural.bridge.ex2;

public class Recibo implements Arquivo {
    private String emissor;
    private String favorecido;
    private double valor;
    /*como sempre orientado a interfaces
     * assim deixamos a chamada com base no tipo
     * passado
     */
    private GeradorDeArquivo geradorDeArquivo;

    //para gerar o recibo o usuario é obrigado informar o tipo desejado
    public Recibo(String emissor, String favorecido, double valor,GeradorDeArquivo tipoDoArquivo) {
        super();
        this.emissor = emissor;
        this.favorecido = favorecido;
        this.valor = valor;
        geradorDeArquivo = tipoDoArquivo;
    }

    @Override
    public void geraArquivo()  {
        StringBuilder dados = new StringBuilder();
            dados.append("Recibo: ");
            dados.append("\n");
            dados.append("Empresa: " + this.emissor);
            dados.append("\n");
            dados.append("Cliente: " + this.favorecido);
            dados.append("\n");
            dados.append("Valor: "+ this.valor);
            //informando os dados que serão gerados
            this.geradorDeArquivo.criarArquivo(dados.toString());
    }
}
