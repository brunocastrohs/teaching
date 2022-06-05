#include <stdio.h>
#include <stdlib.h>
#include "list.h"
struct list
{
    int *data;
    int n;
    int size;
};

List *create(int n) //1 T(c), O(c), c = 6 | O(n)
{
    List *list = (List *)malloc(sizeof(List)); //1 | 1 x Y
    list->data = (int *)calloc(n, sizeof(int)); //1 | n x 4
    list->n = n; //1 | 0
    list->size = 0; //1 | 0
    printf("Instância de List criada em %p!\n\n", list);//1 | 0
    return list;
}

int add(List *list, int x)
{
    if (list->size < list->n)
    { // avalia se list não está cheio e se o elemento e é positivo
        list->data[list->size++] = x;
        return 1;
    }
    return 0;
}

//remove o elemento do ínicio da Lista, e retorna esse elemento
int remove(List *list, int e) //2 T(n) = 13 + size | T(n) = 4
{                                   // = 13 + n
    if(list->size > 0){ //1
       
        int i = 0; //1
        int k = 0; //1
        int e = list->data[0]; //1
        int* aux_data = (int *)calloc(list->n, sizeof(int)); //1
        
        for(i = 0; i < list->size; i++){ //size
            if(e != list->data[i]){ //1
                aux_data[k++] = list->data[i];//1
            }
        }

        free(list->data); //1

        list->data = aux_data; //1
        list->size = k; //1

        return e; //1
    }
    return 0; //1
}

int search(List *list, int e)
{
    return 0;
}

int size(List *list)
{
    return 0;
}

void printAll(List *list) {}
