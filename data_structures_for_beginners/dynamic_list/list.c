#include <stdio.h>
#include <stdlib.h>
#include "list.h"

struct node{
    Node *next;
    int v;
};

struct list{
    Node *node;
    int size;
};

Node * createNode(int value){
    Node *node = (Node *) malloc(sizeof(Node)); //1 | 1 x Y
    node->v = value; //1 | n x 4
    node->next = NULL;
    printf("Instância de Node criada em %p!\n\n", node);//1 | 0
    return node;
}

void printNode(Node* n){
    if(n!=NULL && n->next !=NULL){
        printf("Node | V %i | N %i\n\n", n->v, n->next->v);
    }else if(n!=NULL){
        printf("Node | V %i | NULL \n\n", n->v);
    }
}

List *create()
{
    List *list = (List *) malloc(sizeof(List)); // 1 | 1 x Y
    list->node = NULL;
    list->size = 0;
    printf("Instância de List criada em %p!\n\n", list); // 1 | 0
    return list;
}

void add(List *list, int value)
{
    Node *node = createNode(value);

    if (list->size == 0)
    {
        list->node = node;
    }
    else
    {
        Node *current = list->node;

        while (current != NULL && current->next != NULL)
        {
            current = current->next;
        }

        current->next = node;
    }

    list->size++;
}

void pop(List *list, int value)
{
}

void search(List *list, int value)
{
    if (list->size == 0)
    {
        printf("A lista esta' va'zia!\n\n");
    }
    else
    {
        Node *current = list->node;
        printf("Elemento %i na encontrado em:[\t", value);
        int i = 0;
        while (current != NULL)
        {

            if (current->v == value)
                printf("%i \t", i);
            else
                printf("_ \t");

            current = current->next;

            i++;
        }
        printf("]\n\n");
    }
}

void print(List *list)
{

    if (list->size == 0)
    {
        printf("A lista esta' va'zia!");
    }
    else
    {
        Node *current = list->node;
        printf("Lista:[\t");
        while (current != NULL)
        {
            printf("%i \t", current->v);
            current = current->next;
        }
        printf("]\n\n");
    }
}
