typedef struct bag Bag;

Bag * create(int n);

int insert(Bag* bag, int e);

int get(Bag* bag);

int search(Bag* bag, int e);

int size(Bag* bag);

void printAll(Bag* bag);
