# app/models/brain_dump.rb
class BrainDump < ApplicationRecord
  belongs_to :day_task


  validates :content, length: { minimum: 3 }

end
