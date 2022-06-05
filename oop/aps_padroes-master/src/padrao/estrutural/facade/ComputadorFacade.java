package padrao.estrutural.facade;

public class ComputadorFacade {
	private CPU cpu = null;
	private Memoria memoria = null;
	private HardDrive hardDrive = null;

	public ComputadorFacade(CPU cpu,
					Memoria memoria,
					HardDrive hardDrive) {
		this.cpu = cpu;
		this.memoria = memoria;
		this.hardDrive = hardDrive;
	}

	public void ligarComputador() {
		cpu.start();
		String hdBootInfo = hardDrive.read(SystemSetup.BOOT_SECTOR, SystemSetup.SECTOR_SIZE);
		memoria.load(SystemSetup.BOOT_ADDRESS, hdBootInfo);
		cpu.execute();
		memoria.free(SystemSetup.BOOT_ADDRESS, hdBootInfo);
	}
}
