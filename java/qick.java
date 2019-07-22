import java.util.*;
class quicksort
{
	int partition(int arr[],int low,int high)
	{
		int pivot=arr[high];
		int i=low-1;

		for(int j=low;j<high;j++)
		{
			if(arr[j]<=pivot)
			{
				i++;
				int temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
		int temp=arr[i+1];
		arr[i+1]=arr[high];
		arr[high]=temp;

		return i+1;

	}
	void sort(int arr[],int low,int high)
	{
		if(low<high)
		{
			int pi=partition(arr,low,high);
			sort(arr,low,pi-1);
			sort(arr,pi+1,high);
		}
	}
	 int[] readArray()
	{
			Scanner read=new Scanner(System.in);
			System.out.println("Enter the size of an Array");
			int n=read.nextInt();
			int arr[]=new int[n];
			System.out.println("Enter the elements into the array");
			for(int i=0;i<n;i++)
			{
				arr[i]=read.nextInt();
			}
			//printArray(arr);
		return arr;
	}
	 void printArray(int arr[])
	{
		int n=arr.length;
		for(int i=0 ;i<n;i++)
		{
			System.out.print(arr[i]+" ");
		}
	}

}

class qick
{
	public static void main(String[] args) {
		quicksort obj=new quicksort();
		int arr[]=obj.readArray();
		int n=arr.length;

		obj.sort(arr,0,n-1);

		System.out.println("Sorted ");
		obj.printArray(arr);

	}
}