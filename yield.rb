def test_yield
  yield 'This'
  yield 'is'
  yield 'a'
  yield 'test'
end

test_yield { |arg| puts "<#{arg}>" }
