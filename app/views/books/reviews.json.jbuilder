# json.array! @reviews do |review|
#   json.partial! "book/item", review: review
# end

json.array! @book.reviews do |review|
  json.(review, :user_id, :book_id, :text, :rating, :created_at)
end
