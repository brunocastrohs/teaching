package padrao.estrutural.proxy;

public class Proxy implements Operador {

	OperadorConcreto op = new OperadorConcreto();
	
	public void operacao() {
		this.op.operacao();
	}

}
