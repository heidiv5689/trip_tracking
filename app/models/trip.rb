class Trip < ApplicationRecord
  belongs_to :user


  validates :name, presence: true 
  validates :duration, presence: true
end
