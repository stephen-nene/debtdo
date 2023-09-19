# config/initializers/session_store.rb

if Rails.env.production?
    Rails.application.config.session_store :cookie_store, key: "debtodo", domain: :all, expire_after: 2.days, samesite: :none, secure: true
  else
    Rails.application.config.session_store :cookie_store, key: "debtodo"
  end
  