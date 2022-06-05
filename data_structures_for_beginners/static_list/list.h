typedef struct list List;

List * create(int n);

int add(List* ds, int e);

int remove(List* ds, int e);

int search(List* ds, int e);

int size(List* ds);

void printAll(List* ds);