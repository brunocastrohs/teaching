package padrao;

import java.util.Calendar;
import java.util.Scanner;

import padrao.comportamental.iterator.ColecaoContato;
import padrao.comportamental.iterator.Contato;
import padrao.criacional.abstractfactory.FabricaAbstrata;
import padrao.criacional.abstractfactory.TelaLogin;
import padrao.criacional.abstractfactory.TelaLogout;
import padrao.criacional.builder.app.BuilderEtiquetaNutricional;
import padrao.criacional.builder.app.EtiquetaNutricional;
import padrao.criacional.factorymethod.app.Criador;
import padrao.criacional.factorymethod.app.TelaLogon;
import padrao.criacional.prototype.app.PrototipoFiguraGeometrica;
import padrao.criacional.prototype.app.PrototipoQuadrado;
import padrao.criacional.prototype.app.PrototipoTriangulo;
import padrao.criacional.singleton.Calculadora;
import padrao.estrutural.adapter.AposCalc;
import padrao.estrutural.adapter.AposCalcLegadoAdapter;
import padrao.estrutural.adapter.CalculadoraPREV;
import padrao.estrutural.bridge.ex1.Abstracao;
import padrao.estrutural.bridge.ex1.AbstracaoRefinada;
import padrao.estrutural.bridge.ex1.ImplementacaoA;
import padrao.estrutural.bridge.ex1.ImplementacaoB;
import padrao.estrutural.composite.Camiseta;
import padrao.estrutural.composite.Jaqueta;
import padrao.estrutural.composite.SacolaComposite;
import padrao.estrutural.composite.VestuarioComponent;
import padrao.estrutural.decorator.ex1.Componente;
import padrao.estrutural.decorator.ex1.ComponenteConcreto;
import padrao.estrutural.decorator.ex1.Decorador;
import padrao.estrutural.decorator.ex1.DecoradorConcretoA;
import padrao.estrutural.decorator.ex1.DecoradorConcretoB;
import padrao.estrutural.facade.CPU;
import padrao.estrutural.facade.ComputadorFacade;
import padrao.estrutural.facade.HardDrive;
import padrao.estrutural.facade.Memoria;
import padrao.estrutural.proxy.Operador;
import padrao.estrutural.proxy.Proxy;

public class Cliente {
	
	public static void testarAbstractFactory() throws Exception{
		/**Fornecer uma interface para cria��o de fam�lias de objetos relacionados ou dependentes
		   sem especificar suas classes concretas.*/
		FabricaAbstrata fbs = FabricaAbstrata.getInstance("2-YYSYAYSD"); 
		//TelaLogin tlgn = fbs.gerarTelaLogin();
		//tlgn.mostrarTelaLogin();
		TelaLogout tlgt = fbs.gerarTelaLogout();
		tlgt.mostrarTelaLogout();
		
		//codigo swing para gerar tela;
	}
	
	public static void testarBuilder() throws Exception{
		/**Separar a constru��o de um objeto complexo da sua representa��o de modo que o
		   mesmo processo de constru��o possa criar diferentes representa��es.*/
		EtiquetaNutricional etq1 = new BuilderEtiquetaNutricional(100, 40).build();
		etq1 = new BuilderEtiquetaNutricional(100, 40).colesterol(90).gorduraSaturada(2).gorduraTrans(1).build();
		EtiquetaNutricional etq2 = new BuilderEtiquetaNutricional(100, 40).colesterol(40).sodio(2).build();
		
	}
	
	public static void testarFactoryMethod() throws Exception{
		/**Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que
		   classe instanciar. O Factory Method permite adiar a instancia��o para subclasses.*/
		String serial = "";
		TelaLogon cdr = Criador.metodoFabrica(serial); 
		
	}
	
	public static void testarPrototype() throws Exception{
		/**Especificar os tipos de objetos a serem criados usando uma inst�ncia-prot�tipo e criar
		   novos objetos pela c�pia desse prot�tipo.*/
		PrototipoFiguraGeometrica qd = new PrototipoQuadrado(4);
		
		PrototipoFiguraGeometrica tg = new PrototipoTriangulo(4);
		
		PrototipoFiguraGeometrica list[] = {qd, qd.clonar(), tg, tg.clonar(), tg.clonar()};
		
		for(PrototipoFiguraGeometrica fg : list){
			fg.imprimirFigura();
			System.out.print('\n');
		}
	}
	
	public static void testarSingleton() throws Exception{
		/**Garantir que uma classe tenha somente uma inst�ncia e fornecer um ponto global de
		   acesso para a mesma.*/
		Calculadora.getInstance().soma(10, 3);
		
		Calculadora.getInstance().imprimirInfo();
		
	}
	
	/**						ESTRUTURAIS						**/
	
	public static void testarAdapter() throws Exception{
		/**Converte uma interface de uma classe para outra interface que o 
		   cliente espera encontrar. O Adaptador permite que classes com interfaces 
		   incompat�veis trabalhem juntas.*/
		
		AposCalc apcl = new AposCalcLegadoAdapter();
		
		Calendar data = Calendar.getInstance();
		data.set(Calendar.YEAR, 2000);
		data = apcl.calcularDataAposentadoria(data, 'm');
		
		System.out.println("Data prevista para pedir aposentadoria: ");
		System.out.println("Ano: "+data.get(Calendar.YEAR));
		System.out.println("M�s: "+(data.get(Calendar.MONTH)+1));
		System.out.println("Dia do M�s: "+data.get(Calendar.DAY_OF_MONTH));
		
	}
	
	public static void testarBridge() throws Exception{
		/**Separa uma abstra��o da sua implementa��o, de modo que as 
		 * duas possam variar independentemente..*/
		Abstracao[] abstracoes = new Abstracao[2];
        abstracoes[0] = new AbstracaoRefinada(new ImplementacaoA());
        abstracoes[1] = new AbstracaoRefinada(new ImplementacaoB());
        for(Abstracao abstracao:abstracoes)
            abstracao.operacao();
		
	}
	
	public static void testarComposite() throws Exception{
		/**Compor objetos em estruturas de �rvore para representarem hierarquias partes-todo.
		   Composite permite aos clientes tratarem de maneira uniforme 
		   objetos individuais e composi��es de objetos..*/
		VestuarioComponent cm1 = new Camiseta(1080);
		VestuarioComponent cm2 = new Camiseta(1090);
		VestuarioComponent cm3 = new Jaqueta(1070);
		VestuarioComponent cmp = new SacolaComposite(1010);
		cmp.adicionar(cm1);
		cmp.adicionar(cm2);
		cmp.adicionar(cm3);
		cmp.printCodigo();
		
	}
	
	public static void testarDecorator() throws Exception{
		/**Dinamicamente, agregar responsabilidades adicionais a um objeto. Os Decorators
		   fornecem uma alternativa flex�vel ao uso de subclasses para extens�o de funcionalidades.*/
		Componente c = new ComponenteConcreto();
		Decorador d1 = new DecoradorConcretoA();
		Decorador d2 = new DecoradorConcretoB();
		d1.setComponente(c);
		d2.setComponente(d1);
		d2.operacao();
	}
	
	public static void testarFacade() throws Exception{
		/**O Padr�o Facade fornece uma interface unificada para um conjunto de interfaces em um 
		   subsistema. O Facade define uma interface de n�vel mais alto que facilita a utiliza��o 
		   do subsistema*/
		ComputadorFacade cpf = new ComputadorFacade(new CPU(), new Memoria(), new HardDrive());
		cpf.ligarComputador();
		
	}
	
	public static void testarProxy() throws Exception{
		/**Fornecer um substituto (surrogate) ou marcador da localiza��o de outro objeto 
		   para controlar o acesso a esse objeto. Em sua forma mais geral, � uma classe 
		   que funciona como uma interface para outra classe.*/
		Operador opr = new Proxy();
		opr.operacao();
		
	}
	
	/**						COMPORTAMENTAIS					**/
	
	public static void testarTemplateMethod() throws Exception{
		/**Define o esqueleto de um algoritmo em uma opera��o, postergando a defini��o 
		 * de alguns passos para subclasses. O Template Method permite que as subclasses 
		 * redefinam certos passos de um algoritmo(entidade abstrata - template method) sem 
		 * alterar a estrutura do pr�prio algoritmo*/
		
		
		
	}
	
	public static void testarIterator() throws Exception{
		/**Fornece uma maneira de acessar seq�encialmente os elementos de uma 
		 * agrega��o de objetos sem expor sua representa��o subjacente.*/
		ColecaoContato clc = new ColecaoContato(20);
		clc.add(new Contato(1080,"Nome 1", "88888 - 88888"));
		clc.add(new Contato(1090,"Nome 2", "88888 - 88888"));
		clc.add(new Contato(1100,"Nome 3", "88888 - 88888"));
		
		while(clc.hasNext()){
			System.out.println(clc.next());
		}
		
		//for(int i = 0; i < clc.lista.length;i++)
			//System.out.println(clc.lista[i].id);
		
	}
	
	public static void main(String[] args) throws Exception{
		testarAbstractFactory();
		
		//testarPrototype();
		//testarAdapter();
		//testarDecorator();
	//	testarFacade();
		//testarIterator();
		//testarDecorator();
				
		
		
	}

}
