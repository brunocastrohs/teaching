package padrao.criacional.builder.ex.b;

public class Cliente {
	
	public static void main(String args[]){

		Colaborador clb2 = 
				new Colaborador.ColaboradorBuilder("Joao", "Pedro")
				.genero('m').cpf("00000-00").build();
		
		
		Usuario usr = new Usuario.UsuarioBuilder("Nome", "2222222222")
				.bairro("Bairro X")
				.informacoes("Informacoes exemplo...")
				.build();
		
		
	}
	
}
