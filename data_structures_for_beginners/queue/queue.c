#include <stdio.h>
#include <stdlib.h>
#include "queue.h"
struct queue
{
    int *data;
    int n;
    int size;
};

Queue *create(int n) //1 T(c), O(c), c = 6 | O(n)
{
    Queue *queue = (Queue *)malloc(sizeof(Queue)); //1 | 1 x Y
    queue->data = (int *)calloc(n, sizeof(int)); //1 | n x 4
    queue->n = n; //1 | 0
    queue->size = 0; //1 | 0
    printf("Instância de Queue criada em %p!\n\n", queue);//1 | 0
    return queue;
}

int enqueue(Queue *queue, int x)
{
    if (queue->size < queue->n)
    { // avalia se queue não está cheio e se o elemento e é positivo
        queue->data[queue->size++] = x;
        return 1;
    }
    return 0;
}

//remove o elemento do ínicio da Fila, e retorna esse elemento
int dequeue(Queue *queue) 
{
    if(queue->size > 0){
       
        int i = 0;
        int e = queue->data[0];
        int* aux_data = (int *)calloc(queue->n, sizeof(int)); 
        
        for(i = 0; i < queue->size-1; i++){
            aux_data[i] = queue->data[i+1];
        }

        free(queue->data);

        queue->data = aux_data;
        queue->size--;

        return e;
    }
    return 0;
}

int search(Queue *queue, int e)
{
    return 0;
}

int size(Queue *queue)
{
    return 0;
}

void printAll(Queue *queue) {}
