# app/models/day_task.rb

class DayTask < ApplicationRecord
  belongs_to :user
  has_many :brain_dumps
  has_many :time_frames

  accepts_nested_attributes_for :brain_dumps, :time_frames

  validate :validate_priorities_count

  private

  def validate_priorities_count
    if priorities.nil? || priorities.count != 3
      errors.add(:priorities, "must contain exactly 3 elements")
    end
  end
end
