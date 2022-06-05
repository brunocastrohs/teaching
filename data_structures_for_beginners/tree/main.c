#include <stdio.h>
#include <stdlib.h>
#include "tree.h"

int main(){

    Tree *tree = create();
    addRoot(tree, 4);
    addSibling(tree, getRoot(tree), LEFT, 5);
    addSibling(tree, getRoot(tree), RIGHT, 10);
    addSibling(tree, getLeft(getRoot(tree)), LEFT, 15);



}