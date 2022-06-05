package padrao.criacional.abstractfactory;

import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class TelaLoginBradesco extends TelaLogin{

	public TelaLoginBradesco(){
		super("C:\\Users\\bruno\\OneDrive\\Documentos\\java_workspace\\APS\\src\\padrao\\criacional\\abstractfactory\\bradesco.png","Bem vindo ao Bradesco.");
	}

	public void mostrarTelaLogin() {
		final ImageIcon logoIMG = new ImageIcon(this.getLogo());
        JOptionPane.showMessageDialog(null, this.getMensagem(), "LOGON", JOptionPane.INFORMATION_MESSAGE, logoIMG);
	}
}
