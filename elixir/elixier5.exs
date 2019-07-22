defmodule For do
	def print_num([head|tail]) do
		IO.puts head
		print_num(tail)
	end
	def print_num([]) do
		
	end
end

