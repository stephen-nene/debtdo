class TimeFrameSerializer < ActiveModel::Serializer
  attributes :task, :description, :start, :end
end
