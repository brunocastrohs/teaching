package padrao.estrutural.composite;

public class Camiseta extends VestuarioComponent {

	 public Camiseta(int c) {
	  this.codigo = c;
	 }
	 
	 public void printCodigo() {
		  System.out.println("Codigo da camiseta: "+this.codigo);
	 }
	
}

