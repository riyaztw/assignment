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
class insertion
{
	public static void main(String[] args) {
		AB obj=new AB();
		int arr[]=obj.readArray();
		int n=arr.length;
		for(int i=1;i<n;i++)
		{
			int key=arr[i];
			int j=i-1;
			while(j>=0 && arr[j]>key)
			{
				arr[j+1]=arr[j];
				j=j-1;
			}
			arr[j+1]=key;
		}
		obj.printArray(arr);
	}
}