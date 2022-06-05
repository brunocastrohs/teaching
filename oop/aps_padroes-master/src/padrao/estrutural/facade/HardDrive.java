package padrao.estrutural.facade;

public class HardDrive {
	public String read(int startPosition, int size) {
		System.out.println("lê dados do HD");
		return startPosition + "-" + size;
	}
	public void write(int position, String info) {
		System.out.println("escreve dados no HD");
	}
}