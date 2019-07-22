package pack;
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

import java.util.*;

class ResistorColor {
    HashMap<String,int> colorCode = new HashMap<>();
    ResistorColor()
    {
        colorCode.put("black",0);
        colorCode.put("brown",1);
        colorCode.put("red",2);
        colorCode.put("orange",3);
        colorCode.put("yellow",4);
        colorCode.put("green",5);
        colorCode.put("blue",6);
        colorCode.put("violet",7);
        colorCode.put("grey",8);
        colorCode.put("white",9);

    }
    int colorCode(String color) {
        return colorCode.get(color)

    }

    String[] colors() {
        String[] colors = new String[];
        for(String color:colorCode.keySet())
        {

        }

    }
}
