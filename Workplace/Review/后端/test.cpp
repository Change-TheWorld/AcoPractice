#include "sta"
#include <iostream>
#include <stack>
#include<string>

using namespace std;
int power(int a) {
	int result = 1;
	for (int i = 0; i < a; ++i)
		result = result << 1;
	return result;
}

int main() {
	/*int a, b, c;
	int sum = 0;
	scanf("%d%d%d", &a, &b, &c);
	if (c >= 1 && a > b && b > c && a <= 100000000){
		sum +=
	}*/
	cout << power(4);
	return 0;
}


bool symm(unsigned n)
{
	unsigned i = n; 
	unsigned m = 0;
	while (i > 0)
	{	
		m = m * 10 + i % 10;
	    i /= 10;
	}
	return m == n;
}

int main()
{
    int N;
    int count = 0;
    cin >> N;

	for (unsigned m = 1; m < 1000; m++)
        if (symm(m) && symm(m*m) && symm(m*m*m))
            ++count;
    cout << count;
	return 0;
}

#include <stdio.h>
#include <iostream>
using namespace std;

bool isHuiWen(int n) {
    bool result = false;
    vector<int> binArray;
    int len = 0;
    while (n != 0)
    {
        binArray[len++].push_back(n%2);
        n = n/2;
    }

    for (int i=0; i<len ;i++) {
        if (binArray[i] != binArray[len-1-i] )
        {
            flag = true;
            break;
        }
    }
    return result;
}

int main()
{
    long long n; 
    int count = 0;
    cin >> n;
    if(n >=1 && n <= 1000000000000000000) {
        for(long long i = 0; i < n; ++i) {
            if(isHuiWen(i))
                ++count;
        }
    }
    
    cout<<count;
    return 0;
}