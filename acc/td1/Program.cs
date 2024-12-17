using System;
using System.Diagnostics;
using System.Collections.Generic;

namespace AlgoritmosDeDecisao
{
    class Program
    {
        static void Main(string[] args)
        {
            // Criar instância do problema da Mochila
            var instancia = CriarInstancia();

            // Submeter aos algoritmos e medir o tempo e memória
            TestarAlgoritmo("Força Bruta", () => ForcaBruta.Executar(instancia));
            TestarAlgoritmo("Divisão e Conquista", () => DivisaoConquista.Executar(instancia));
            TestarAlgoritmo("Programação Dinâmica", () => ProgramacaoDinamica.Executar(instancia));
            TestarAlgoritmo("Algoritmo Guloso", () => AlgoritmoGuloso.Executar(instancia));
        }

        // Método que cria uma instância do problema da Mochila
        private static List<Item> CriarInstancia()
        {
            return new List<Item>
            {
                new Item { Peso = 2, Valor = 3 },
                new Item { Peso = 3, Valor = 4 },
                new Item { Peso = 4, Valor = 5 },
                new Item { Peso = 5, Valor = 6 }
            };
        }

        // Método que testa um algoritmo e mede o tempo de execução e consumo de memória
        private static void TestarAlgoritmo(string nomeAlgoritmo, Action algoritmo)
        {
            Console.WriteLine($"Testando algoritmo: {nomeAlgoritmo}");

            // Medindo tempo de execução
            var stopwatch = new Stopwatch();
            stopwatch.Start();

            // Medindo memória
            var startMemory = GC.GetTotalMemory(true);

            algoritmo(); // Executa o algoritmo

            var endMemory = GC.GetTotalMemory(true);

            stopwatch.Stop();

            var tempoExecucao = stopwatch.ElapsedMilliseconds;
            var consumoMemoria = (endMemory - startMemory) / 1024; // Memória em KB

            // Exibe os resultados
            Console.WriteLine($"Tempo de execução: {tempoExecucao}ms");
            Console.WriteLine($"Memória consumida: {consumoMemoria} KB");
            Console.WriteLine();
        }
    }

    public class Item
    {
        public int Peso { get; set; }
        public int Valor { get; set; }
    }

    // Algoritmos (exemplo de implementação para o problema da mochila)
    public static class ForcaBruta
    {
        public static void Executar(List<Item> itens)
        {
            int capacidadeMaxima = 5;
            var resultado = ResolverMochilaForcaBruta(itens, capacidadeMaxima);
            Console.WriteLine($"Valor máximo (Força Bruta): {resultado}");
        }

        private static int ResolverMochilaForcaBruta(List<Item> itens, int capacidadeMaxima)
        {
            int n = itens.Count;
            int melhorValor = 0;
            for (int i = 0; i < (1 << n); i++)
            {
                int pesoTotal = 0;
                int valorTotal = 0;

                for (int j = 0; j < n; j++)
                {
                    if ((i & (1 << j)) != 0)
                    {
                        pesoTotal += itens[j].Peso;
                        valorTotal += itens[j].Valor;
                    }
                }

                if (pesoTotal <= capacidadeMaxima && valorTotal > melhorValor)
                {
                    melhorValor = valorTotal;
                }
            }

            return melhorValor;
        }
    }

    public static class DivisaoConquista
    {
        public static void Executar(List<Item> itens)
        {
            int capacidadeMaxima = 5;
            var resultado = ResolverMochilaDivisaoConquista(itens, capacidadeMaxima, 0, 0);
            Console.WriteLine($"Valor máximo (Divisão e Conquista): {resultado}");
        }

        private static int ResolverMochilaDivisaoConquista(List<Item> itens, int capacidadeMaxima, int indice, int valorAtual)
        {
            if (indice == itens.Count)
                return valorAtual;

            int valorComItem = 0;
            if (itens[indice].Peso <= capacidadeMaxima)
            {
                valorComItem = ResolverMochilaDivisaoConquista(itens, capacidadeMaxima - itens[indice].Peso, indice + 1, valorAtual + itens[indice].Valor);
            }

            int valorSemItem = ResolverMochilaDivisaoConquista(itens, capacidadeMaxima, indice + 1, valorAtual);

            return Math.Max(valorComItem, valorSemItem);
        }
    }

    public static class ProgramacaoDinâmica
    {
        public static void Executar(List<Item> itens)
        {
            int capacidadeMaxima = 5;
            var resultado = ResolverMochilaProgramacaoDinamica(itens, capacidadeMaxima);
            Console.WriteLine($"Valor máximo (Programação Dinâmica): {resultado}");
        }

        private static int ResolverMochilaProgramacaoDinamica(List<Item> itens, int capacidadeMaxima)
        {
            int n = itens.Count;
            int[,] tabela = new int[n + 1, capacidadeMaxima + 1];

            for (int i = 0; i <= n; i++)
            {
                for (int j = 0; j <= capacidadeMaxima; j++)
                {
                    if (i == 0 || j == 0)
                    {
                        tabela[i, j] = 0;
                    }
                    else if (itens[i - 1].Peso <= j)
                    {
                        tabela[i, j] = Math.Max(tabela[i - 1, j], tabela[i - 1, j - itens[i - 1].Peso] + itens[i - 1].Valor);
                    }
                    else
                    {
                        tabela[i, j] = tabela[i - 1, j];
                    }
                }
            }

            return tabela[n, capacidadeMaxima];
        }
    }

    public static class AlgoritmoGuloso
    {
        public static void Executar(List<Item> itens)
        {
            int capacidadeMaxima = 5;
            var resultado = ResolverMochilaGuloso(itens, capacidadeMaxima);
            Console.WriteLine($"Valor máximo (Algoritmo Guloso): {resultado}");
        }

        private static int ResolverMochilaGuloso(List<Item> itens, int capacidadeMaxima)
        {
            var itensOrdenados = new List<Item>(itens);
            itensOrdenados.Sort((x, y) => (y.Valor / y.Peso).CompareTo(x.Valor / x.Peso));

            int valorTotal = 0;
            int pesoTotal = 0;

            foreach (var item in itensOrdenados)
            {
                if (pesoTotal + item.Peso <= capacidadeMaxima)
                {
                    pesoTotal += item.Peso;
                    valorTotal += item.Valor;
                }
                else
                {
                    break;
                }
            }

            return valorTotal;
        }
    }
}