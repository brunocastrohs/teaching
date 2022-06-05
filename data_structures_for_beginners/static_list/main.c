#include <stdio.h>
#include <stdlib.h>
#include "list.h"
int main()
{
    List *ds = create(3);
    add(ds, 10);
    add(ds, 20);
    remove(ds);
    add(ds, 30);
    remove(ds);
    return 1;
}
