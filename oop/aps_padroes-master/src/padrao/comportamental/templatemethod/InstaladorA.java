package padrao.comportamental.templatemethod;

public class InstaladorA extends Instalador{

	@Override
	public void inicilizarInstalador(){
		System.out.println("Processo de Instalação A....");
		System.out.println("Carregando modulos instalador...");
		System.out.println("Abrindo de interface instalação...");
	}
	
	@Override
	public void configurarInstalador() {
		System.out.println("Assinar termo de uso...");
		System.out.println("Escolher pasta de instalação...");
		System.out.println("Definir usuário e senha da aplicação...");
		System.out.println("Escolher modulos opcionais de instalação...");
		System.out.println("Instalando...");
		
	}

}
