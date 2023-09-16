class DebtSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :status, :created_at

  belongs_to :user
end
