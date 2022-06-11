class Address < ApplicationRecord
  belongs_to :location

  validates :street, presence: true
  validates :state, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :region, presence: true
  validates :zip, presence: true, length: {minimum: 5, maximum: 5}


end
