# my_function = def messing_around(a) puts "just messing with #{a}" end
# method(my_function).call("Ruby")

my_proc = Proc.new {|a| puts "just messing with #{a}"}
my_proc.call("Ruby")
my_proc.call()

# my_lambda = lambda { |a| "just messing with #{a}" }
# my_lambda.call("Ruby")
# my_lambda.call()
