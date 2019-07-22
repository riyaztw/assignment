defmodule EO do
	def odd(n) do
		cond do 
			rem(n, 2) == 1 -> :isodd
			true -> :even
		end
	end

	def even_odd_list([head|tail]) do
		cond do
			odd(head) === :isodd -> [ head | even_odd_list(tail) ]
			true -> even_odd_list(tail)
		end
	end

	def even_odd_list([]) do
		[]
	end
end


