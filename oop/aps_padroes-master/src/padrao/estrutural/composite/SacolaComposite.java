package padrao.estrutural.composite;

import java.util.ArrayList;

public class SacolaComposite extends VestuarioComponent {

	ArrayList<VestuarioComponent> pecas = new ArrayList<VestuarioComponent>();

	public SacolaComposite() {
	}

	public SacolaComposite(int c) {
		this.codigo = c;
	}

	public void printCodigo() {
		System.out.println("Codigo da sacola: "+this.codigo);
		for (VestuarioComponent peca : pecas) {
			peca.printCodigo();
		}
	}

	@Override
	public void adicionar(VestuarioComponent vestuario) {
		this.pecas.add(vestuario);
	}

	@Override
	public void remover(int codigo) throws Exception {
		for (VestuarioComponent peca : pecas) {
			if (peca.getCodigo() == codigo) {
				this.pecas.remove(peca);
				return;
			}
		}
		throw new Exception("Não existe esta camiseta");
	}

	public VestuarioComponent getCamiseta(int codigo) throws Exception {
		for (VestuarioComponent peca : pecas) {
			if (peca.getCodigo() == codigo) {
				return peca;
			}
		}
		throw new Exception("Não existe esta camiseta");
	}

}
