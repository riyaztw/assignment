defmodule Rev do
	def reverse([head|tail]) do
		[reverse(tail)|head]
	end
	def reverse([]) do
		[]
	end
end
