package padrao.criacional.prototype.ex.b;

public class Cliente {

	public static void main(String[] args) {

		Pessoa person1 = new Pessoa("Fred");
		System.out.println("person 1:" + person1);
		Pessoa person2 = (Pessoa) person1.doClone();
		System.out.println("person 2:" + person2);

		Cachorro dog1 = new Cachorro("Wooof!");
		System.out.println("dog 1:" + dog1);
		Cachorro dog2 = (Cachorro) dog1.doClone();
		System.out.println("dog 2:" + dog2);

	}
	
}
