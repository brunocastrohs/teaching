package padrao.estrutural.composite;

public abstract class VestuarioComponent {

	 int codigo;

	 public void printCodigo() {
	  System.out.println(this.codigo);
	 }


	 public int getCodigo() {
	  return this.codigo;
	 }


	 public void adicionar(VestuarioComponent vestuario) throws Exception {
	  throw new Exception("erro");
	 }


	 public void remover(int codigo) throws Exception {
	  throw new Exception("Erro");
	 }

	 public VestuarioComponent getVestuario(int codigo) throws Exception {
	  throw new Exception("Erro");
	 }
	 
	}