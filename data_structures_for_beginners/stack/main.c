#include <stdio.h>
#include <stdlib.h>
#include "stack.h"
int main()
{
    Stack *ds = create(5);
    push(ds, 10);
    push(ds, 5);
    push(ds, 15);
    pop(ds);
    push(ds, 25);
    return 1;
}
