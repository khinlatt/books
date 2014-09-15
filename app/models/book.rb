class Book < ActiveRecord::Base
  validates_presence_of :title, :author, :isbn, :description, :image_url

  has_many :reviews
  has_many :users, through: :reviews
end
