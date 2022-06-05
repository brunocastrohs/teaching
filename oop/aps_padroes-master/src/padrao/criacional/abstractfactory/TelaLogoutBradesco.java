package padrao.criacional.abstractfactory;

import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class TelaLogoutBradesco extends TelaLogout{

	public TelaLogoutBradesco(){
		super("C:\\Users\\bruno\\OneDrive\\Documentos\\java_workspace\\APS\\src\\padrao\\criacional\\abstractfactory\\bradesco.png","O Bradesco agradece sua preferência...");
	}

	public void mostrarTelaLogout() {
		final ImageIcon icon = new ImageIcon(this.getLogo());
        JOptionPane.showMessageDialog(null, this.getMensagem(), "LOGOUT", JOptionPane.INFORMATION_MESSAGE, icon);
	}
	
}
