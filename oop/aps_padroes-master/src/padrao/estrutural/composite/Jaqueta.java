package padrao.estrutural.composite;

public class Jaqueta extends VestuarioComponent {

	 public Jaqueta(int c) {
	  this.codigo = c;
	 }
	 
	 public void printCodigo() {
		  System.out.println("Codigo da jaqueta: "+this.codigo);
	 }
	
}

