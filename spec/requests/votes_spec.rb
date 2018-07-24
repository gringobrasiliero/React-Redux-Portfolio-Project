require 'rails_helper'

RSpec.describe 'Votes API' do
  let!(:user) { create(:user) }
  let(:user_id) { user.id }
  let!(:category) { create(:category) }
  let(:category_id) { category.id }

  let!(:post) { create(:post) }
  let(:post_id) { post.id }
let!(:votes) { create_list(:vote, 20, user_id: user.id, created_at: Time.now, post_id: post.id) }

  let(:id) { votes.first.id }
# Test suite for GET /posts/:post_id/votes
describe 'GET /posts/:post_id/votes' do
  before { get "/posts/#{post_id}/votes" }

  context 'when votes exists' do
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns all posts votes' do
      expect(json.size).to eq(20)
    end
  end
end


# Test suite for GET /posts/:post_id/votes/:id
describe 'GET /posts/:post_id/votes/:id' do
  before { get "/posts/#{post_id}/votes/#{id}" }

  context 'when posts vote exists' do
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns the vote' do
      expect(json['id']).to eq(id)
    end
  end

  context 'when posts vote does not exist' do
    let(:id) { 0 }

    it 'returns status code 404' do
      expect(response).to have_http_status(404)
    end

    it 'returns a not found message' do
      expect(response.body).to match(/Couldn't find Vote/)
    end
  end
end

# Test suite for POST /posts/:post_id/votes
describe 'POST /posts/:post_id/votes' do
  let(:valid_attributes) { {  like: true, created_at: Time.now, post_id: 1, user_id: 1} }

  context 'when request attributes are valid' do
    before { post "/posts/#{post_id}/votes", params: valid_attributes }

    it 'returns status code 201' do
      expect(response).to have_http_status(201)
    end
  end

  context 'when an invalid request' do
    before { post "/posts/#{post_id}/votes", params: {} }

    it 'returns status code 422' do
      expect(response).to have_http_status(422)
    end


  end
end






end
