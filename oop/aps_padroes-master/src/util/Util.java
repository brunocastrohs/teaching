package util;

public class Util {

	private static Util util = new Util();
	
	public static Util getInstance() {
		return util;
	}
	
	public boolean validarSerial(String serial) {
		return serial.length()>14;
	}
	
	public int codigoBanco(String serial) {
		String data[] = serial.split("-");
		return (data.length>0)? Integer.parseInt(data[0]):-1;
	}
	
}
