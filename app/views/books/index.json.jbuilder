json.array! @books do |book|
  json.partial! "books/item", book: book
end
