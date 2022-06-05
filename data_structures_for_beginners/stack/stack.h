typedef struct stack Stack;

Stack * create(int n);

int push(Stack* bag, int e);

int pop(Stack* bag);

int search(Stack* bag, int e);

int size(Stack* bag);

void printAll(Stack* bag);
