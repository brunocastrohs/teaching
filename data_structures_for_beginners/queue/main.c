#include <stdio.h>
#include <stdlib.h>
#include "queue.h"
int main()
{
    Queue *ds = create(3);
    enqueue(ds, 10);
    enqueue(ds, 20);
    dequeue(ds);
    enqueue(ds, 30);
    dequeue(ds);
    return 1;
}
