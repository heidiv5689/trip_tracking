class Location < ApplicationRecord
  belongs_to :trip


  validates :loca_name, presence: true 
  
end
