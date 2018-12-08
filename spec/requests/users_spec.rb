require 'rails_helper'

def json
  JSON.parse(response.body)
end


RSpec.describe 'Users API', type: :request do
  # initialize test data
  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }
  let(:created_at) {Time.now}
  # Test suite for GET /users
  describe 'GET /users' do
    # make HTTP get request before each example
    before { get '/users' }

    it 'returns users' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
         expect(response).to have_http_status(200)
       end
     end

   end


   describe 'POST /users' do
     # valid payload
     let(:valid_attributes) { { username: 'buzzlightyear', created_at: Time.now, password_digest: "Password", email: "buzzlightyear@gmail.com" } }

     context 'when the request is valid' do
       before { post '/users', params: valid_attributes }

       it 'creates a user' do
         expect(json['username']).to eq('buzzlightyear')
       end

       it 'returns status code 201' do
         expect(response).to have_http_status(201)
       end
     end
   end
