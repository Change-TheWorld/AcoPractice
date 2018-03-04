#include <algorithm>
#include <string.h>
#include <vector>
#include <iostream>
#include <stack>
#include <queue>
#include <unordered_map>
#include <list>
#include <unordered_set>

using namespace std;

class Solution01 {
public:
	bool Find(vector<vector<int> > array, int target) {
		int row = array.size();
		if (row == 0)
			return false;

		int col = array[0].size();
		int i = 0, j = col - 1;
		while (i < row && j >= 0){
			if (array[i][j] == target)
				return true;
			else if (array[i][j] > target){
				j--;
			}
			else{
				i++;
			}			
		}
		return false;
	}

public:
	void test(){
		vector <vector<int>> array1{
            { 1, 2, 3, 4, 5 },
            { 6, 7, 8, 9, 10 },
            { 11, 12, 13, 14, 15 },
            { 16, 17, 18, 19, 20 }
        };

		vector<int> target{ 1, 2, 3, 10, 0, -1, 32, 34, 20, 16, 15, 6 };
		for (int i = 0; i != target.size(); i++){
            cout << "target " << target[i] << boolalpha 
                 << "    std:" << (1 <= target[i] && target[i] <= 20) 
                 << "  res:" << Find(array1, target[i]) << endl;
		}
	}

};

class Solution02 {
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
			}
			else {
				str[j--] = str[i];
			}
		}
	}

	void test() {
		vector<string> vec { 
			"We are Happy", 
			"hello",
			"", 
			"  hlee", 
			"hll  ", 
			"  srfe  ", 
			"  se  sd " 
        };
		for (int i = 0; i != vec.size(); i++) {
			char buf[256] = { 0 };
			strcpy(buf, vec[i].c_str());
			replaceSpace(buf, vec[i].size());
			cout << vec[i] << "|   " << buf << endl;
		}
	}
};

class Solution03 {
	struct ListNode {
		int val;
		struct ListNode *next;
		ListNode(int x) :
			val(x), next(NULL) {
		}
	};

public:
	vector<int> printListFromTailToHead(struct ListNode* head) {
		vector<int> res;
		stack<int> mystack;
		while (head) {
			mystack.push(head->val);
			head = head->next;
		}

		while (!mystack.empty()) {
			res.push_back(mystack.top());
			mystack.pop();
		}

		return res;
	}

	void display(const vector<int> & res) {
		for (auto item : res)
			cout << item << ' ';
		cout << endl;
	}

	void test() {
		ListNode myHead(0), a(1), b(2), c(3), d(4), e(5), f(6);
		a.next = &b; b.next = &c; c.next = &d;
		auto res = printListFromTailToHead(&a);
		display(res);

		res = printListFromTailToHead(&myHead);
		display(res);

		res = printListFromTailToHead(nullptr);
		display(res);

		e.next = &f;
		res = printListFromTailToHead(&e);
		display(res);
	}
};


int main(){
	Solution03 s;	
	s.test();

	cout<<"pause";
	return 0;
}



