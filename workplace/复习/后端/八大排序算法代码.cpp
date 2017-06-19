/*
// 插入
void insertList(seqlist *L, datatype x, int i) {
    int j;
    if(i < 1 || i > L->length) {
        error("poisition error!");
    }
    if(l->length >= listsize) {
        error("OverFlow!");
    }
    for(j = L->length - 1; j >= i-1; j--) {  // 结点后移
        L->data[j+1] = L->data[j];
    }
    L->data[i-1] = x;
    L->length++;
}

// 删除
void delete(seqlist *L,int i) {
    int j;
    if(i < 1 || i > L->length) {
        error("position error!");
    }
    for(j = i; j <= L->length -1; j++) {
        L->data[j-1] = L->data[j];
    }
    L->length--;
}

// 
*/

/*
// 插入排序,时间复杂度O(n^2)
void print(int a[],int n,int i){
    cout<< i << ":";
    for(int j = 0;j< 8;j++){
        cout<<a[j]<<"  ";
    }
    cout<<endl;
}

void InsertSort(int a[],int n){
    for(int i = 1;i < n; i++) {
        if(a[i] < a[i-1]) {
            int j = i-1;
            int x = a[i];   // 哨兵
            a[i] = a[i-1];
            while(x < a[j]){
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = x;
        }
    }
}

int main() {
    int a[8] = {3,14,3,46,5,9,6,6};
    InsertSort(a,8);
    print(a,8,8);
}


// 希尔排序
void ShellInsertSort(int a[],int n,int dk) {
    for(int i = dk; i < n; ++i) {
        if(a[i] < a[i-dk]) {
            int j = i - dk;
            int x = a[i];
            a[i] = a[i-dk];
            while(x < a[j]) {
                a[j+dk] = a[j];
                j -= dk;
            }
            a[j+dk] = x;
        }
        print(a,n,i);
    }
}

void shellSort(int a[],int n) {
    int dk = n/2;
    while(dk >= 1){
        ShellInsertSort(a,n,dk);
        dk = dk/2;
    }
}

// 简单选择排序
// 选出数组最小值
int SelectMinKey(int a[], int n, int i) {
    int k =i;
    for(int j = i + 1; j < n; ++j) {
        if(a[k] >a[j])
            k = j;
    }
    return k;
}

void selectSort(int a[], int n){
    int key,tmp;
    for(int i = 0; i < n; ++i){
        key = SelectMinKey(a,n,i);
        if(key != i) {  //选出 最小的数组，与第i位进行交换
            tmp = a[i];
            a[i] = a[key];
            a[key] = tmp;
        }
        print(a,n,i);
    }
}

// 改进,找出最大和最小值，二元选择排序！
void SelectSort(int r[], int n){
    int i,j,min,max,tmp;
    for(i = 1; i <= n/2; i++){
        min = i;max = i;
        for(j = i+1; j< n-i; j++) {
            if(r[j] > r[max]){
                max = j;
                continue;
            }
            if(r[j] < r[min]){
                min = j;
            }
        }
        tmp = r[i-1];r[i-1] = r[min];r[min] = tmp;
        tmp = r[n-i];r[n-i] = r[max];r[max] = tmp;
    }
}
*/
//堆排序
#include<iostream>
using namespace std;

int main(){
    int a[] = {1,2,3};
    cout<<a.length();
}







