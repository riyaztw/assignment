//time complexity O(n^2)
//space complexity O(1) ...only temp is reqired

import java.util.*;
class BubbleSort
{
	void bubbleSort(int arr[])
	{
		int n=arr.length;
		for(int i=0;i<n-1;i++)
		{
			for(int j=0;j<n-i-1;j++)
			{
				if(arr[j]>arr[j+1])
				{
					int temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}
		}
	}
}
class bubble
{
	public static void main(String args[])
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
			
			BubbleSort obj=new BubbleSort();
			obj.bubbleSort(arr);
			System.out.println("Array after sorting");
			//System.out.println(arr);
			printArray(arr);
	}
	public static void printArray(int arr[])
	{
		int n=arr.length;
		for(int i=0 ;i<n;i++)
		{
			System.out.print(arr[i]+" ");
		}
	}

}