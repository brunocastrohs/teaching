#include <stdio.h>
#include <stdlib.h>
#include "list.h"

int main(){

    List *list = create();
    add(list, 5);
    add(list, 10);
    add(list, 15);
    print(list);
    search(list, 5);

}