package padrao.comportamental.templatemethod;

public class InstaladorB extends Instalador{

	@Override
	public void configurarInstalador() {
		System.out.println("Assinar termo de uso...");
		System.out.println("Escolher pasta de instala��o...");
		System.out.println("Importar configura��es de vers�o antiga...");
		System.out.println("Instalando...");
	}

}
