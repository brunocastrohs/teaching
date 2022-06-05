package padrao.comportamental.templatemethod;

public class InstaladorA extends Instalador{

	@Override
	public void inicilizarInstalador(){
		System.out.println("Processo de Instala��o A....");
		System.out.println("Carregando modulos instalador...");
		System.out.println("Abrindo de interface instala��o...");
	}
	
	@Override
	public void configurarInstalador() {
		System.out.println("Assinar termo de uso...");
		System.out.println("Escolher pasta de instala��o...");
		System.out.println("Definir usu�rio e senha da aplica��o...");
		System.out.println("Escolher modulos opcionais de instala��o...");
		System.out.println("Instalando...");
		
	}

}
