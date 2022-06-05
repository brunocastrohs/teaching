package padrao.estrutural.composite;

public class Cliente {
	
	public static void main(String[] args) throws Exception{
		VestuarioComponent cm1 = new Camiseta(1080);
		VestuarioComponent cm2 = new Camiseta(1090);
		VestuarioComponent cm3 = new Jaqueta(1070);
		VestuarioComponent cmp = new SacolaComposite(1010);
		cmp.adicionar(cm1);
		cmp.adicionar(cm2);
		cmp.adicionar(cm3);
		cmp.printCodigo();
    }
	
}
