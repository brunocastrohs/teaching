package padrao.criacional.abstractfactory;

import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class TelaLogoutItau extends TelaLogout{

	public TelaLogoutItau(){
		super("C:\\Users\\bruno\\OneDrive\\Documentos\\java_workspace\\APS\\src\\padrao\\criacional\\abstractfactory\\itau.png","O Itaú agradece sua preferência...");
	}

	public void mostrarTelaLogout() {
		final ImageIcon icon = new ImageIcon(this.getLogo());
        JOptionPane.showMessageDialog(null, this.getMensagem(), "LOGOUT", JOptionPane.INFORMATION_MESSAGE, icon);
	}

	
}
