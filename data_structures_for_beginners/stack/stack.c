#include <stdio.h>
#include <stdlib.h>
#include "stack.h"
struct stack
{
    int *data;
    int n;
    int size;
};

Stack *create(int n)
{
    Stack *stack = (Stack *)malloc(sizeof(Stack));
    stack->data = (int *)calloc(n, sizeof(int));
    stack->n = n;
    stack->size = 0; // zero, pois nenhum elemento foi inserido.
    printf("Instância de Stack criada em %p!\n\n", stack);
    return stack;
}

int push(Stack *stack, int e)
{
    if (stack->size < stack->n)
    { // avalia se stack não está cheio e se o elemento e é positivo
        stack->data[stack->size] = e;
        return 1;
    }
    return 0;
}

//remove o elemento do topo de P, e retorna esse elemento
int pop(Stack *stack)
{
    if(stack->size > 0){
        int e = stack->data[stack->size-1];
        stack->size--;
        return e;
    }
    return 0;
}

int search(Stack *stack, int e)
{
    return 0;
}

int size(Stack *stack)
{
    return 0;
}

void printAll(Stack *stack) {}
