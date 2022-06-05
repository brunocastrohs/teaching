package padrao.comportamental.templatemethod;

public class InstaladorB extends Instalador{

	@Override
	public void configurarInstalador() {
		System.out.println("Assinar termo de uso...");
		System.out.println("Escolher pasta de instalação...");
		System.out.println("Importar configurações de versão antiga...");
		System.out.println("Instalando...");
	}

}
