def print_list(array, first = 1)
  counter = first
  array.each do |item|
    puts yield(counter, item).to_s
    counter = counter.next
  end
end

print_list([1, 2, 3], 23) { |n| "<#{n}>" }

print_list(%w[alpha beta gamma], 5) do |x, y|
  "#{x} #{y}"
end
