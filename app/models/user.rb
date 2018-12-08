class User < ApplicationRecord
  has_secure_token
  has_secure_password

    before_save { self.email.downcase! }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: {case_sensitive: false},
              length: {maximum: 50}, format: { with: VALID_EMAIL_REGEX }
    validates :username, presence: true,  uniqueness: true
    validates :password_digest, length: {minimum: 5}

end
