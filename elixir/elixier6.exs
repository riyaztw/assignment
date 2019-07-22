defmodule Reverse do
	def reverse_num(num,sum \\ 0) when num>0 do
	reminder=rem num,10
	num = div num,10
		reverse_num(num,sum*10+reminder)
	end

	def reverse_num(0,sum) do
		sum
	end

	def reverse_str(str,new_str\\ "") when str != "" do
		new_str=String.at(str,0)<>new_str
		str1=String.slice(str,1..-1)
		reverse_str(str1,new_str)
	end
	def reverse_str("",new_str) do
		new_str
	end
		
	
end