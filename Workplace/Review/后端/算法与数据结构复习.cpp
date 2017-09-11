struct ListNode {
    int m_nValue;
    listNode* m_pNext;
}

// 往链表的末尾添加一个节点
/**
 * 注意第一个参数为指向指针的指针，因为往一个空链表里插入一个节点时，新插入的节点就是链表的头指针，由于此时会改动头指针，因此必须把pHead参数设置为指向指针的指针，否则出了这个函数，pHead依然是一个空指针
*/

void addToTail(ListNode** pHead, int value) {
    ListNode* pNew = new ListNode();
    pNew->m_nValue = value;
    pNew->m_pNext = NULL;
    if(*pHead == NULL) {
        *pHead = pNew;
    }else {
        ListNode* pNode = *pHead;
        while(pNode->m_pNext != NULL) 
            pNode = pNode->m_pNext;
        pNode->m_pNext = pNew;
    }
}

void removeNode(ListNode** pHead, int value) {
    if(pHead == NULL || *pHead == NULL)
        return;
    ListNode* pToBeDelete = NULL;
    if((*pHead)->m_nValue == value) {
        pToBeDelete = *pHead;
        *pHead = (*pHead)->m_pNext;
    }else{
        listNode* pNode = *pHead;
        while(pNode->m_pNext != NULL && pNode->m_pNext->m_nValue != value)
            pNode = pNode->m_pNext;
        if(pNode->m_pNext != NULL && pNode->m_pNext->m_nValue == value) {
            pToBeDelete = pNode->m_pNext;
            pNode->m_pNext = pNode->m_pNext->m_pNext;
        }
    }
    if(pToBeDelete != NULL){
        delete pToBeDelete;
        pToBeDelete = NULL;
    }
}

void printListReversing(ListNode *pHead) {
    stack<ListNode*> nodes;
    ListNode* pNode = pHead;
    while(pNode != NULL) {
        nodes.push(pNode);
        pNode = pNode->m_pNext;
    }
    while(!nodes.empty()) {
        pNode = nodes.top();
        cout<< pNode->m_nValue;
        nodes.pop();
    }
}

// 递归实现
void printListReversing_digui(ListNode* pHead) {
    if(pHead != NULL) {
        if(pHead->m_pNext != NULL) {
            printListReversing_digui(pHead->m_pNext);
        }
        cout<< pHead->m_nValue;
    }
}


























