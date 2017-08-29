#include<iostream>
#include<vector>
#include<stdlib.h>
#include<queue>
#include<algorithm>
#include<stack>
#include <time.h>

using namespace std;  

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;

    /**
    int a = a + b;
    int b = a - b;
    int a = b - a;
    */
}

void buddle_sort01(int a[], int n) {
    int temp = 0;
    for(int i = 0; i < n -1; i++) {
        for(int j = 0; j < n -1 - i; j++) {
            if(a[j] > a[j+1]) {
                swap(a[j], a[j+1]);
            }
        }
    }
}

void buddle_sort02(int a[], int n){
    int temp = 0;
    int flag = false;
    for(int i = 0; i < n -1; i++) {
        for(int j = 0; j < n -1 - i; j++) {
            if(a[j] > a[j+1]) {
                swap(a[j], a[j+1]);
                flag = true;
            }
        }
        if(!flag) {
            break;
        }
    }
}

void buddle_sort03(int a[], int n){
    int temp = 0;
    int low = 0;
    int high = n - 1 ;
    while(low < high ) {
        for(int i = low; i < high; i++ ) {
            if(a[i] > a[i+1]){
                swap(a[i], a[i+1]);
            }
        }
        ++high;
        for(int j = high; j > low; j--) {
            if(a[j] > a[j+1]){
                swap(a[j], a[j+1]);
            }
        }
        --low;
    }
}

void simpleSelect01(int a[], int n) {
    int temp = 0;
    for(int i = 0; i < n; i++) {
        int min = i;
        for(int j = i + 1; j < n; j++) {
            if(a[j] < a[min] ){
                min = j;
            }
        }
        if(i != min) {
            swap(a[i], a[min]);
        }
    }
}

void simpleSelect02(int a[],int n) {
    int temp, i, j;
    for(i = 0; i < n; i++) {
        int min = i;
        for(j = i+1; i<n;j++) {
            if(a[j]<a[min]) {
                min = j;
            }
        }
        if(i != min) {
            swap(a[i], a[min]);
        }
    }
}

void shellSort(int a[],int n) {
    int gap, i, j;
    int temp;
    /*
    while(gap < n / 3) {
        gap = gap*3 + 1;
    }*/

    for(gap = n/3; gap > 0; gap /= 3 ) {
        for(i = gap; i < n; i++ ) {
            temp = a[i];
            for(j = i-gap; j>=0 && a[j] > temp; j-=gap){
                a[j+gap] = a[j];
            }
            a[j+gap] = temp;
        }
    }
}

void mergeArray(int a[], int first, int mid, int last, int temp[]) {
    int i = first, j = mid + 1;
    int m = mid, n = last;
    int k =0;

    while(i<=m && j<=n) {
        if(a[i] <= a[j]) {
            temp[k++] = a[i++];
        }else {
            temp[k++] = a[j++];
        }
    }

    // 如果a数组比较长，那么把a剩下的部分按序放进c里
    while(i<=m) {
        temp[k++] = a[i++];
    }
    // 如果b数组比较长，那么把b剩下的部分按序放进c里
    while(j<=n) {
        temp[k++] = a[j++];
    }

    for(i = 0; i < k; i++) {
        a[first + i] = temp[i];
    }
}

// 归并排序
void mergeSort(int a[], int first, int last, int temp[]) {
    if(first < last) {
        int mid = (first + last) / 2;
        mergeSort(a, first, mid, temp);  // 左边有序
        mergeSort(a, mid + 1, last, temp);   // 右边有序
        mergeArray(a, first, mid, last, temp);  // 合并
    }
}

void MergeSort(int a[], int n) {
    int *p = new int[n];
    if(p == NULL) {
        return;
    }
    mergeSort(a, 0, n-1, p);
    delete[] p;
}

// 快排
int AdjustArray(int a[], int left, int right) {
    int i = left, j = right;
    int x = a[left];
    while(i < j) {
        // 从右往左找大于x的数填充a[i]
        while(i<j && a[j] >= x)
            j--;
        if(i < j) {
            a[i] = a[j];
            i++;
        }

        //从左往右找小于x的值
        while(i<j && a[i] < x)
            i++;
        if(i<j) {
            a[j] =a[i];
            j--;
        }
    }
    a[i] = x;   // 最后i == j
    return i;
}

void quick_sort(int a[], int left, int right) {
    if(left<right) {
        int i = AdjustArray(a, left, right);
        quick_sort(a, left, i-1);
        quick_sort(a, i+1, right);
    }
}

void quick_sort2(int a[], int left, int right) {
    if(left < right) {
        //Swap(s[l], s[(l + r) / 2]); //将中间的这个数和第一个数交换
        int i = left, j = right;
        int x = a[left];
        while(i<j) {

            // 赋值之后，出现了空位
            while(i<j && a[j] >= x)
                j--;
            if(i<j) {
                a[i] = a[j];
            }

            while(i<j && a[i] < x)
                i++;
            if(i<j) {
                a[j] = a[i];
            }
        }
        a[i] = x;
        quick_sort2(a, left, i - 1);
        quick_sort2(a, i+1, right);
    }
}


// 直接插入【排序
void insert_sort(int a[], int n ) {
    int i, j, k;
    for(i = 1; i < n; i++) {
        // 为a[i]在左边的a[0...i-1]区间内找到一个合适的位置
        for(j = i-1; j>=0; j--) {
            if(a[j] < a[i])
                break;
        }

        // 如果找到
        if(j != i-1) {
            int temp = a[i];
            // 将比a[i]大的数往后移
            for(k = i-1; k > j; k--)
                a[k+1] = a[k];

            a[k+1] = temp;
        }
    }
}

int insert2(int a[], int n) {
    int i, j;  
    for (i = 1; i < n; i++)  
        if (a[i] < a[i - 1])  
        {  
            int temp = a[i];  
            for (j = i - 1; j >= 0 && a[j] > temp; j--)  
                a[j + 1] = a[j];  
            a[j + 1] = temp;  
        }  
}

int main() {
    int arr[] = {11,24,14,53,22,56,4,0,3,35,7,532,-5};
    int n = sizeof(arr)/sizeof(arr[0]);
    clock_t begin, end;
    begin = clock();
    // 冒泡排序
    //buddle_sort02(arr, n);
    //buddle_sort02(arr, n);
    //buddle_sort03(arr, n);

    // 简单选择排序
    //simpleSelect01(arr, n);
    //simpleSelect02(arr, n);

    // 希尔排序
    shellSort(arr, n);

    // 归并排序
    //MergeSort(arr, n);

    // 快排
    //quick_sort(arr, 0, n-1);
    //quick_sort2(arr, 0, n-1);

    // 直接插入排序
    insert_sort(arr, n);

    end = clock();
    cout << double(end-begin)  / 1000<< endl;
    for(int i = 0; i < n;  i++){
        cout<< arr[i]<<" ";
    }
    return 0;
}





