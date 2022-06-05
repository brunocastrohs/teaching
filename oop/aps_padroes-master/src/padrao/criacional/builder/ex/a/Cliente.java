package padrao.criacional.builder.ex.a;

public class Cliente {
	public static void main(String[] args) {
	    ConcessionariaDirector concessionaria = new ConcessionariaDirector(new FiatBuilder());
	 
	    concessionaria.construirCarro();
	    Carro carro = concessionaria.getCarro();
	    System.out.println("Carro: " + carro.modelo + "/" + carro.montadora
	            + "\nAno: " + carro.anoDeFabricacao + "\nMotor: "
	            + carro.dscMotor + "\nValor: " + carro.preco);
	 
	    System.out.println();
	 
	    concessionaria = new ConcessionariaDirector(new VolksBuilder());
	    concessionaria.construirCarro();
	    carro = concessionaria.getCarro();
	    System.out.println("Carro: " + carro.modelo + "/" + carro.montadora
	            + "\nAno: " + carro.anoDeFabricacao + "\nMotor: "
	            + carro.dscMotor + "\nValor: " + carro.preco);
	}
}
