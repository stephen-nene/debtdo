class DayTaskSerializer < ActiveModel::Serializer
  attributes :id, :priorities, :brain_dumps, :created_at
  
  # belongs_to :user
  has_many :brain_dumps
  has_many :time_frames

end
