package padrao.comportamental.templatemethod;

public class Cliente {
	
	public static void main(String a[]){
		
		Instalador it1 = new InstaladorA();
		it1.setup();
		
		Instalador it2 = new InstaladorB();
		it2.setup();
		
		
	}
	

}
