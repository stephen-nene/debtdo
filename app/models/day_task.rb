class DayTask < ApplicationRecord
  belongs_to :user
  has_many :brain_dumps
  has_many :time_frames

  accepts_nested_attributes_for  :brain_dumps, :time_frames
end
