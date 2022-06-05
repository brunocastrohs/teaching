package padrao.comportamental.templatemethod;

public abstract class Instalador {
	
	// template method
	public boolean setup(){
		
		try{
			System.out.println("\n ********************************************** \n");
			this.inicilizarInstalador();
			this.configurarInstalador();
			this.encerrarInstalador();
			System.out.println("\n ********************************************** \n");
			return true;
		}catch(Exception e){
			System.err.println("Erro inesperado. Fechando instalador");
			return false;
		}
		
	} 
	
	public void inicilizarInstalador(){
		System.out.println("Carregando modulos instalador...");
		System.out.println("Abrindo de interface instalação...");
	}
	
	public abstract void configurarInstalador();
	
	public void encerrarInstalador(){
		System.out.println("Instalacão Completa!");
		System.out.println("Deseja Abrir: ( ) Readme ( ) Rodar Aplicação");
		System.out.println("Fechando instalador...");
	}

}
