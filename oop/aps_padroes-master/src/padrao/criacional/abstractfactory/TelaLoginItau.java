package padrao.criacional.abstractfactory;

import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class TelaLoginItau extends TelaLogin {

	public TelaLoginItau() {
		super("C:\\Users\\bruno\\OneDrive\\Documentos\\java_workspace\\APS\\src\\padrao\\criacional\\abstractfactory\\itau.png", "Bem vindo ao Itaú.");
	}

	public void mostrarTelaLogin() {
		final ImageIcon icon = new ImageIcon(this.getLogo());
		JOptionPane.showMessageDialog(null, this.getMensagem(), "LOGON", JOptionPane.INFORMATION_MESSAGE, icon);
	}

}
