typedef struct node Node;

typedef struct list List;

Node * createNode(int value);

void printNode(Node* n);

List * create();

void add(List* list, int value);

void pop(List* list, int value);

void search(List* list, int value);

void print(List* list);

