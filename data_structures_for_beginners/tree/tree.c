#include <stdio.h>
#include <stdlib.h>
#include "tree.h"


struct node{
    Node *left;
    Node *right;
    int v;
};

struct tree{
    Node *root;
    int size;
};

Node * createNode(int value){
    Node *node = (Node *) malloc(sizeof(Node)); //1 | 1 x Y
    node->v = value; 
    node->left = NULL;
    node->right = NULL;
    printf("Instância de Node criada em %p!\n\n", node);//1 | 0
    return node;
}

void printNode(Node* n){
    if(n!=NULL && n->left !=NULL && n->right !=NULL){
        printf("Node | V %i | L %i | R %i \n\n", n->v, n->left->v, n->right->v);
    }else if(n!=NULL && n->left !=NULL && n->right ==NULL){
        printf("Node | V %i | L %i | R NULL \n\n", n->v, n->left->v);
    }else if(n!=NULL && n->left == NULL && n->right !=NULL){
        printf("Node | V %i | L NULL | R %i \n\n", n->v, n->right->v);
    }
    else if(n!=NULL){
        printf("Node | V %i | NULL \n\n", n->v);
    }
}

Node* getLeft(Node *node){
    if(node != NULL && node->left !=NULL)
        return node->left;
    else
        return NULL;
}

Node* getRight(Node *node){
    if(node != NULL && node->right !=NULL)
        return node->right;
    else
        return NULL;

}

Tree *create()
{
    Tree *tree = (Tree *) malloc(sizeof(Tree)); // 1 | 1 x Y
    tree->root = NULL;
    tree->size = 0;
    printf("Instância de Tree criada em %p!\n\n", tree); // 1 | 0
    return tree;
}

void addRoot(Tree *tree, int value)
{
    Node *node = createNode(value);

    if (tree->size == 0)
    {
        tree->root = node;
        tree->size++;
    }
    
    
}

Node* getRoot(Tree *tree){
    if(tree != NULL && tree->root !=NULL)
        return tree->root;
    else
        return NULL;
}


void addSibling(Tree *tree, Node* current, int side,int value)
{
    Node *node = createNode(value);

    if(side == LEFT)
    {
        
        current->left = node;

    }else if(side == RIGHT){

        current->right = node;

    }

    tree->size++;
}

void search(Tree *tree, int value)
{

}

void print(Tree *tree)
{

    
}
