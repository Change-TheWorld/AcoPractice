面试官看重的是面试者的综合素质，但是，基础是最重要的，只有基础扎实，才会进行更深入的考察。

首先对公司近况，项目情况有所了解。保持热情，准备好合适的问题，在最后询问面试官。

电话面试：为了清楚地表达自己的想法，应该用尽可能形象化的语言把细节说清楚。

当听不清楚面试官的问题时，不要不懂装懂，要大胆地向面试官多提问，直到问清楚为止。

面向JD（职位描述）编程

面试官找的是最适合该职位的人，而不是最牛逼的人

保持好奇心

当有共享桌面面试的时候，最好养成以下几个好习惯：

1. 思考清楚再写代码：头脑里先过一遍，有哪些需要注意的点，特殊情况，如果在没有形成清晰的思路之前就开始写代码，肯定会漏洞百出，还会让自己处于被动的状态。
2. 良好的代码命名和缩进对齐习惯：变量和函数的命名，合理的缩进，括号对齐，会让面试官耳目一新。
3. 单元测试：如果写完代码之后，能够立即对该函数进行全面的单元测试，就可以说明自己有专业的软件开发经验。如果能够先写单元测试用例，再写解决问题的函数，那么，绝对是一大亮点。
4. 在发现代码运行结果不正确时，应该立即设置断点，进行调试，查看相关信息，最终找到问题所在。这也体现了一个程序员的调试素养。
5. 共享桌面，面试官最关心的是应聘者的编程习惯和调试能力。

如果有机会去参加面试，那么，有几点也需要注意：

1. 规划好路线，提前到场！预计8点出发，9点到，那么就应该7点半出发，迟到会很印象印象分。
2. 穿得体的衣服：不用穿正装，一套干净整洁的衣服就行。
3. 注意面试的流程：如果面试流程过多，最好带一些提神的饮料/食物，用于恢复精力。
4. 准备几个问题：每一轮面试的最后，面试官都会让应聘者问几个问题，所以，应该提前准备好几个问题。（不要问薪水，不要立即打听面试结果，推荐问与职位/项目有关的问题）

# 面试的三个环节

## 行为面试

是一个暖场的过程，面试官会注意应聘者的性格特点，深入地了解简历中列举的项目经历。一般都会让做
### 自我介绍

面试官手里有自己的简历，因此，此时的自我介绍就不需要花太多时间。

用30秒到一分钟的时间介绍自己的主要学习经历，工作经历，项目经历就行。

### 介绍项目经验

STAR法则：

1. Situation: 简短的项目背景，比如项目的规模，开发的软件功能，目标用户等等。
2. Task: 自己完成的任务。最好写的详细一点，区分 参与 和 负责。
3. Action: 为了完成任务自己做了哪些工作，是怎么做的。这里可以详细介绍。
4. Result: 自己的贡献。比如按时完成了多少功能，修复了多少 bug 等等。

面试官可能会追问：

1. 你在项目中遇到的最大的问题是什么？你是怎么解决的？
2. 从这个项目中你学到了什么？
3. 什么时候会和其他团队成员（开发/测试/设计/项目经理）有什么样的冲突？你们是怎么解决冲突的？

针对每一个项目，都应该提前做好相应的准备，准备充分了，在面试的时候就能表现得游刃有余。

> 在介绍项目经验（包括简历上介绍和面试时口头介绍）时，不需要对项目的背景做太多的描述，而应该突出自己完成的工作以及取得的成绩。

### 回答为什么跳槽

不要抱怨，也不要流露出负面的情绪。作者给出的一般回答是：

现在的工作做了一段时间，已经没有太多的激情了，因此希望寻找一份更有挑战的工作，然后具体论述为什么有些厌倦现在的职位，以及面试的职位我为什么有兴趣。

## 技术面试

要求：

1. 基础知识扎实全面，包括编程语言、数据结构、算法等
2. 能写出正确的、完整的、鲁棒的高质量代码
3. 能思路清晰地分析、解决复杂问题
4. 能从时间、空间复杂度两方面优化算法效率
5. 具备优秀的沟通能力、学习能力、发散思维能力等

编程语言，数据结构，算法

当遇到简单的问题（肯定是陷阱），一定要注意细节，考虑边界/特殊情况，写出完整、鲁棒的代码；遇到复杂的问题，可以通过画图，举例子分析，以及分解复杂问题。先弄清思路，再动手编程，同时，应该考虑时间和空间的复杂度，尽量做优化。

同时，遇到疑惑的地方，多向面试官提问，弄清要求，表现自己的沟通能力，如果前后两个问题之间有联系的话，可以迁移一下，展示自己良好的学习能力。

总之，面试的时候，尽情展示自己的各种能力，和别人不一样的地方。你的亮点，才能吸引面试官的注意力。

对于第四点，优化效率的能力，举个栗子：求菲波那切数列，很多人喜欢用递归公式： `f(n) = f(n-1) + f(n-2)` 求解，但是分析得知，很多计算都是重复的，时间复杂度以 n 的指数增城，但是，如果我们先求初 `f(1)`, `f(2)`, 再根据他们求出 `f(3)`，再根据 `f(2)`, `f(3)` 求出 `f(4)`,一依次类推，一个循环求出 `f(n)`，时间复杂度只有 `O(n)`!

查找和排序， 面试中考的最频繁

综合素质（沟通能力，学习能力，分析问题的方法，逻辑，团队合作等等），知识迁移，抽象建模能力，发散思维能力

# 需要掌握的基础知识

## 数据结构

### 数组

占据一块连续的内存，并按照顺序存储数据。

实现哈希表：数组的下标作为键值（key）, 数组里的值作为哈希表里的（value）;

#### 面试题三：二维数组中的查找

C++版

```c++
class Solution {
public:
    bool Find(int target, vector<vector<int> > array) {
        int row = array.size();
        if (row == 0)
            return false;

        int col = array[0].size();
        int i = 0, j = col - 1;
        while (i < row && j >= 0){
            if (array[i][j] == target){
                return true;
            } else if (array[i][j] > target){
                j--;
            } else{
                i++;
            }
        }
        return false;
    }
};

```

JS

```js
function Find(target, array)
{
    // write code here
    var arrRow = array.length;
    var arrCol = array[0].length;
    var result = false;
    if(arrRow === 0 || arrCol === 0){
        return result;
    }
    for(var i = 0, j = arrCol - 1;i <= arrRow-1 && j >= 0;) {
       if(array[i][j] < target) {
          i++;
       }else if(array[i][j] > target) {
          j--;
       }else {
          result = true;
          break;
       }
    }
    return result;
}
module.exports = {
    Find : Find
};
```

#### 面试题四： 替换空格

```c++
class Solution {
public:
    void replaceSpace(char *str, int length) {
        //find space num
        int count = 0;
        for (int i = 0; i < length; i++) {
            if (str[i] == ' ')
                count++;
        }

        int new_length = length + 2 * count;
        int j = new_length - 1;
        for (int i = length - 1; i >= 0; i--) {
            if (count == 0)
            break;

            if (str[i] == ' ') {
                str[j--] = '0';
                str[j--] = '2';
                str[j--] = '%';
                count--;
            } else {
                str[j--] = str[i];
            }
        }
    }
};
```

```js
function replaceSpace(str)
{
   return str.replace(/\s/g, '%20');
}
module.exports = {
    replaceSpace : replaceSpace
};
```

> Tips: 合并两个数组（包括字符串）时，如果从前往后复制每个数组（或字符）需要重复移动数字（或字符）多次，那么我们可以考虑从后往前复制，这样就能减少移动的次数，从而提高效率。

### 链表

用指针把若干个节点连接成链状结构，一种动态的数据结构，无需知道链表的长度，插入一个节点，只需要为新节点分配内存，然后调整指针的指向来确保新节点已经被链接到链表当中，由于没有闲置的内存，所以链表的空间效率比数组高。

数组查找快，链表查找时间复杂度为 O(n)

```c++
struct ListNode {
    int m_nValue;
    ListNode* m_pNext;
};

// 在末尾加一个节点
// 注意 pHead 是指向指针的指针，由于要避免改动头指针，所以必须这样做，否则， 出了这个函数，pHead 仍然是一个空指针
void addToTail(ListNode** pHead, int value) {
    ListNode* pNew = new ListNode();
    pNew->mValue = value;
    pNew->m_pNext = NULL;

    if(*pHead == NULL) {
        *pHead = pNew;
    }else{
        ListNode* pNode = *pHead;
        while(pNode->m_pNext != NULL)
            pNode = pNode->m_pNext;
        pNode->m_pNext = pNew;
    }
}

void removeNode(ListNode** pHead, int value) {
    if(pHead == NULL || *pHead == NULL) 
        return;
    ListNode* pToBeDeleted = NULL;
    if((*pHead) ->m_nValue == value) {
        pToBeDeleted = *pHead;
        *pHead = (*pHead)->m_pNext;
    }else {
        ListNode* pNode = *pHead;
        while(pNode->m_pNext != NULL 
            && pNode->m_pNext->m_nValue != value)
                pNode = pNode->m_pNext;
        if(pNode->m_pNext != NULL && pNode->m_pNext->m_nValue == value) {
            pToBeDeleted = pNode->m_pNext;
            pNode->m_pNext = pNode->m_pNext->m_pNext;
        }
    }
    if(pToBeDeleted != NULL) {
        delete pToBeDeleted;
        pToBeDeleted = NULL;
    }
}
```

#### 面试题五：从尾到头打印链表

```c++
struct ListNode {
    int m_nValue;
    ListNode* m_pNext;
};

void printReverse(ListNode* Node) {
    std::stack<ListNode*> nodes;

    ListNode* pNode = pHead;
    while(pNode != NULL) {
        nodes.push(pNode);
        pNode = pNode->m_pNext;
    }

    while(!nodes.empty()) {
        pNode = nodes.top();
        printf("%d\t", pNode->m_nValue);
    }
}

// 递归方法, 当链表很长时，递归的层级很深，可能导致函数调用栈一处，因此，使用栈，基于循环实现的代码，鲁棒性要好很多。
void printReverse2(ListNode* pHead) {
    if(pHead != NULL) {
        if(pHead->m_pNext != NULL) {
            printReverse2(pHead->m_pNext);
        }
        printf("%d\t", pHead->m_nValue);
    }
}
```

```c++
/**
*  struct ListNode {
*        int val;
*        struct ListNode *next;
*        ListNode(int x) :
*              val(x), next(NULL) {
*        }
*  };
*/
class Solution {
public:
    vector<int> printListFromTailToHead(ListNode* head) {
        stack<int> nodes;
        vector<int> result;
        ListNode* pNode = head;
        while(pNode != NULL) {
            nodes.push(pNode->val);
            pNode = pNode->next;
        }
        while(!nodes.empty()){
            result.push_back(nodes.top());
            nodes.pop();
        }

        return result;
    }
};
```

#### 面试题七：用两个栈实现队列

```c++
class Solution
{
public:
    void push(int node) {
        stack1.push(node);
    }

    int pop() {
        int temp;
        if(stack2.empty()) {
            while(!stack1.empty()) {
                temp = stack1.top();
                stack2.push(temp);
                stack1.pop();
            }
        }
        temp = stack2.top();
        stack2.pop();
        return temp;
    }

private:
    stack<int> stack1;
    stack<int> stack2;
};
```

用两个栈实现一个队列的功能?要求给出算法和思路!
<分析>：
入队：将元素进栈A
出队：判断栈B是否为空，如果为空，则将栈A中所有元素pop，并push进栈B，栈B出栈；
 如果不为空，栈B直接出栈。
用两个队列实现一个栈的功能?要求给出算法和思路!
<分析>：
入栈：将元素进队列A
出栈：判断队列A中元素的个数是否为1，如果等于1，则出队列，否则将队列A中的元素   以此出队列并放入队列B，直到队列A中的元素留下一个，然后队列A出队列，再把   队列B中的元素出队列以此放入队列A中。

```c++
class Solution
{
public:
    void push(int node) {
        queue1.push(node);
    }

    int pop() {
        int temp;
        if(stack2.length() == 1) {
            queue.pop();
        }
        return temp;
    }

private:
    queue<int> queue1;
    queue<int> queue2;
};
```

```js
var stack = [];
function push(node)
{
    // write code here
    stack.push(node);
}
function pop()
{
    // write code here
    return stack.shift();
}
module.exports = {
    push : push,
    pop : pop
};
```

### 树

四种遍历： 以根节点为基准

1. 前序遍历：先根，再左，然后右
2. 中序遍历：先左，再根，然后右
3. 后序遍历：先左，再右，然后根
4. 宽度优先遍历

三种遍历方式，分别有递归和循环两种方式

```c++
class Solution04 {
	//Definition for binary tree
    struct TreeNode {
        int val;
        TreeNode *left;
		TreeNode *right;
        TreeNode(int x) : val(x), left(NULL), right(NULL) {}
	};

public:
    struct TreeNode* reConstructBinaryTree(vector<int> pre, vector<int> in) {
        bool valid = true;
        auto res = reConstructBinaryTree(pre, in, valid);
        if (!valid)
            return nullptr;
		return res;
	}

	struct TreeNode* reConstructBinaryTree(vector<int> & pre, vector<int> & in, bool & valid) {
		struct TreeNode * res = nullptr;
		if (!valid || pre.size() != in.size() || pre.size() == 0)
			return res;

		int split = pre[0];
		int split_in = 0;
		bool flag = false;
		for (int i = 0; i != in.size(); i++){
			if (split == in[i]){
				split_in = i;
				flag = true;
				break;
			}
		}

		if (!flag){
			valid = false;
			return res;
		}

		vector<int> pre_prefix(pre.begin() + 1, pre.begin() + split_in + 1);
		vector<int> pre_suffix(pre.begin() + split_in + 1, pre.end());


		vector<int> in_prefix(in.begin(), in.begin() + split_in);
		vector<int> in_suffix(in.begin() + split_in + 1, in.end());
		struct TreeNode * left = reConstructBinaryTree(pre_prefix, in_prefix, valid);
		struct TreeNode * right = reConstructBinaryTree(pre_suffix, in_suffix, valid);
		res = new TreeNode(split);
		res->left = left;
		res->right = right;

		return res;
	}

```

```js
function reConstructBinaryTree(pre, vin) {
    if(pre.length == 0 || vin.length == 0) 
        return null;
    var binaryTree = new TreeNode(pre[0]);
    var pre_left = [],
        pre_right = [],
        vin_left = [],
        vin_right = [];
    var index = vin.indexOf(pre[0]);
    pre_left = pre.slice(1, index+1);
    pre_right = pre.slice(index+1);
    vin_left = vin.slice(0,index);
    vin_right = vin.slice(index+1);

    binaryTree.left = reConstructBinaryTree(pre_left, vin_left);
    binaryTree.right = reConstructBinaryTree(pre_right, vin_right);

    return binaryTree;
}
```

#### 面试题8： 旋转数组的最小数字
```c++
int min(int* numbers, int length) {
    if(numbers == NULL || length <= 0)
        throw new std::exception("Invalid parameters");
    int left = 0;
    int right = length-1;
    int indexMid = left;
    while(numbers[left] >= numbers[right]) {
        if((right - left) == 1) {
            indexMid = right;
            break;
        }
        indexMid = (left + right) / 2;

        if(numbers[indexMid] == numbers[right] && numbers[indexMid] == numbers[left]){
            return MinInOrder(numbers, left, right);
        }
        if(numbers[indexMid] >= numbers[left]){
            left = indexMid;
        }else if(numbers[indexMid] <= numbers[right]){
            right = indexMid;
        }
    }
    return numbers[indexMid];
}

int MinInOrder(int* numbers, int left, int right){
    int result = numbers[left];
    for(int i = left + 1; i <= right; ++i) {
        if(result > number[i])
            result = numbers[i];
    }
    return result;
}

```

```c++
class Solution {
public:
    int minNumberInRotateArray(vector<int> rotateArray) {
        
        /*
        if(rotateArray.size() <= 0) {
            return 0;
        }
        int length = rotateArray.size();
        int index1 = 0;
        int index2 = length -1;
        int indexMid = index1;
        
        while(rotateArray[index1] >= rotateArray[index2]) {
            if((index2 - index1) == 1) {
                indexMid = index2;
                break;
            }
            
            indexMid = (index1 + index2) / 2;
            if(rotateArray[indexMid] >= rotateArray[index1]) {
                index1 = indexMid;
            }else if(rotateArray[indexMid] <= rotateArray[index2]) {
                index2 = indexMid;
            }
        }
        return rotateArray[indexMid];*/
        sort(rotateArray.begin(), rotateArray.end());
        return rotateArray[0];
    }
};
```

### 循环和递归

```c++
long long fibonacci(unsigned int n) {
    if(n <= 0 || n == 1) 
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 升级版
long long fibonacci(unsigned n) {
        if(n <= 0)
            return 0;
		if(n == 1 || n == 2)
            return 1;
        
        int f1 = 1;
        int f2 = 1;
        int f3 = 0;
        for(int i = 3; i <= n; ++i) {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }
        return f3;
}

```

典型的青蛙跳台阶的问题：设 n 阶台阶有 `f(n)` 种跳法， 当 n>2 时，第一次跳有两种不同的选择：
1. 第一次只跳一格，则跳法数目等于 `f(n-1)`;
2. 第一次跳两格，跳法数目等于 `f(n-2)`;
所以 `f(n) = f(n-1) + f(n-2)`;

如果改成： 一次可以跳1格，也可以跳2格...也可以跳n格，那么，最终有多少种跳法？
根据数学归纳法，有 f(n) = 2^(n-1)

### 进制

#### 面试题10： 二进制中1的个数
1 的二进制是01， 不断地左移，1的位置也随之左移，然后和 n 做与运算即可
```c++
// 解法一
class Solution {
public:
     int  NumberOf1(int n) {
         int count = 0;
         int flag = 1;
         while(flag) {
             if(n & flag)
                 count++;
             flag = flag << 1;
         }
         return count;
     }
};

// 解法二
// 将一个数 减一 之后，再和他自身做与运算，会把该整数出现1的位置，最右边的那一个1 变成0
class Solution 
{
public:
     int  NumberOf1(int n) 
     {
         int count = 0;
         while(n) 
         {
            count++;
            n = (n -1) & n;
         }
         return count;
     }
};
```

## 代码的规范性
1. 清晰的书写：每个字母尽量写清楚，减慢写字速度。
2. 清晰的布局：合理的碎金，括号对齐，成队出现。
3. 合理的命名: 用完整的英文单词组合命名变量和函数。

2 2 4 8 14 26

#include <stdio.h>
#include <math.h>

int main()
{
    double sum = 0;
    int index = 0;
    double temp = 0;
    int n = 0 ,m = 0;

    while(scanf("%d%d",&n,&m) != EOF)
    {
      temp = n * 1.0;
      sum = 0;
      for(index = 0; index < m; index++)
      {
          sum += temp;
          temp = sqrt(temp);
      }
      printf("%.2f",sum);
    }

    return 0;
}

#include <stdio.h>
#include <math.h>

int NumberOf1(int n) 
{
    int count = 0;
    while(n) 
    {
        count++;
        n = (n -1) & n;
    }
    return count;
}

int power(int a) {
    int result = 1;
    for(int i = 0; i<a; ++i)
        result = result<<1;
    return result;
}

int main() {
    int a,b,c;
    int sum = 0;
    int result = 0;
    scanf("%d%d%d",&a,&b,&c);
    if(c>=1 && a > b && b > c && a <=100000000){
        int temp = power(a) + power(b) + power(c);
        sum += temp;
        result = NumberOf1(sum);
        cout << result;
    }
    return 0;
}












































