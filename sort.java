import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class sort {
    public static void main(String args []){

        int size =6000;
        int arr[]= new int[size];
        for(int i=0;i<size;i++){
            arr[i]=(int)(Math.random()*1000);
        }

        System.out.println("Array length ="+size);
        System.out.println("\nElements randomly distributed :");
        compareSortingAlgorithms(arr);
    }


    private static void printSortingTime(SortType sortType, int[] arr){
        int arr2[]= new int[arr.length];
        System.arraycopy(arr, 0, arr2, 0, arr.length);

        long startTime= System.nanoTime();

        switch(sortType){
            case BUBBLE:
                BubbleSort.BubbleSort(arr2);
                break;
            case BITONIC:
                BubbleSort.bitonicSort(arr2,0,arr2.length,1);
                break;
            case COMB:
                BubbleSort.combSort(arr2);
                break;
            case HEAP:
                HeapSort.heapSort(arr2);
                break;
            case INSERTION:
                InsertionSort.insertionSort(arr2);
                break;
            case MERGE:
                MergeSort.MergeSort(arr2);
                break;
            case QUICK:
                QuickSort.quickSort(arr2);
                break;
            case SELECTION:
                SelectionSort.SelectionSort(arr2);
                break;
            case CYCLE:
                CycleSort.cyclesort(arr2);
                break;
        }

        long endTime= System.nanoTime();
        long duration =endTime-startTime;

        System.out.printf("%-17s %15d %n", sortType+ "_SORT", duration);
    }


    protected static void combSort(int [] arr){
        int n=arr.length;

        int gap=n;

        boolean swapped=true;

        while(gap!=1||swapped==true){
            gap=getNextGap(gap);

            swapped=false;

            for(int i=0;i<n-gap;i++){

                int temp=arr[i];
                arr[i]=arr[i+gap];
                arr[i+gap]=temp;

                swapped=true;
            }
        }
    }
    static int getNextGap(int gap){
        gap=(gap*10)/13;
        if(gap<1)
            return 1;
        return gap;
    }

    protected static void introSort(){
        Scanner sc=new Scanner(Sytem.in);
        System.out.print("Enter the number of elements:");
        int n=sc.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter"+n+"elements");
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }

        introSort(arr,0,n-1,calcDepth(arr));

        System.out.println("\nThe sorted array:");

        for (int i=0;i<n;i++){
            System.out.print(arr[i]+"");
        }

        System.out.println();
    }


    private static int partition(int arr[], int low,int high){
        int p=getPivot(arr, low,high),j=low;

        for(int i=low;i<=high;i++){
            if(arr[i]<p){
                swap(arr,i,j);
                j++;
            }
        }
        swap(arr,high,j);

        return j;
    }


    private static int getPivot(int arr[],int low,int high){
        Random rd=new Random();
        return arr[rd.nextInt((high-low)+1)+low];
    }

    private static void swap(int arr[], int x,int y){
        int aux=arr[x];
        arr[x]=arr[y];
        arr[y]=aux;
    }

    static int calcDepth(int arr[]){
        return ((int) Math.log(arr.length))*2;
    }
}
