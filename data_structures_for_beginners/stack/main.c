#include <stdio.h>
#include <stdlib.h>
#include "stack.h"
int main()
{
    Stack *ds = create(2);
    push(ds, 10);
    push(ds, 20);
    pop(ds);
    push(ds, 30);
    pop(ds);
    pop(ds);
    return 1;
}
