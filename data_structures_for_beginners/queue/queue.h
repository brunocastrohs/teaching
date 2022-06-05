typedef struct queue Queue;

Queue * create(int n);

int enqueue(Queue* ds, int e);

int dequeue(Queue* ds);

int search(Queue* ds, int e);

int size(Queue* ds);

void printAll(Queue* ds);
