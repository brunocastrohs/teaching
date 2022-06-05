const int LEFT = 1;
const int RIGHT = 2;


typedef struct node Node;

typedef struct tree Tree;

Node * createNode(int value);

void printNode(Node* n);

Node* getLeft(Node *node);

Node* getRight(Node *node);

Tree * create();

Node* getRoot(Tree *tree);

void addRoot(Tree *tree, int value);

void addSibling(Tree *tree, Node* current, int side,int value);

void search(Tree* tree, int value);

void print(Tree* tree);

