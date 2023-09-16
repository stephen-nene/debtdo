class UserSerializer < ActiveModel::Serializer
  attributes :username, :email

  has_many :day_tasks, if: :condition

  def condition
    @instance_options[:flag] != "restrict"
  end
end
