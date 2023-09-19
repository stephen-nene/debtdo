class ApplicationController < ActionController::API
  include ActionController::Cookies

  def index
    render file: Rails.root.join("public", "index.html"), content_type: "text/html"
  end
end
