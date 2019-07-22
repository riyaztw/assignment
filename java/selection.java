import java.util.*;
class AB
{
	public static int[] readArray()
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
	public static void printArray(int arr[])
	{
		int n=arr.length;
		for(int i=0 ;i<n;i++)
		{
			System.out.print(arr[i]+" ");
		}
	}

}
class selection
{
	public static void main(String args[])
	{
		AB obj=new AB();
		int arr[]=obj.readArray();
		int n=arr.length;
		for(int i=0;i<n-1;i++)
		{
			int min_idx=i;
			for(int j=i+1;j<n;j++)
			{
				if(arr[min_idx]>arr[j])
				{
					min_idx=j;
				}
			}
			int temp=arr[min_idx];
			arr[min_idx]=arr[i];
			arr[i]=temp;
		}
		obj.printArray(arr);
	}
}