defmodule Reduce do
	def sum_list([head | tail ],accumulator) do
		sum_list(tail,head+accumulator)
	end

	def sum_list([],accumulator) do
		accumulator
	end
end

IO.puts Reduce.sum_list([1,2,3,4],0)