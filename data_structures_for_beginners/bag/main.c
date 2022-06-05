#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "bag.h"
int main()
{
    srand(time(NULL)); //inicializa o gerador de números randômicos.
    Bag *bag = create(2);
    insert(bag, 10);
    insert(bag, 20);
    return 1;
}
