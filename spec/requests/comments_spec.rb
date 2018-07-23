require 'rails_helper'

RSpec.describe 'Comments API' do
  # Initialize the test data
  let!(:user) { create(:user) }
  let!(:category) { create(:category) }
    let!(:post) { create(:post) }
  let!(:comments) { create_list(:comment, 20, post_id: post.id, user_id: user.id, created_at: Time.now) }
  let(:user_id) { user.id }
  let(:post_id) { post.id }
  let(:id) { comments.first.id }


  # Test suite for GET /posts/:post_id/comments
  describe 'GET /posts/:post_id/comments' do
    before { get "/posts/#{post_id}/comments" }

    context 'when post exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all posts comments' do
        expect(json.size).to eq(20)
      end
    end
  end

  # Test suite for GET /posts/:post_id/comments/:id
  describe 'GET /posts/:post_id/comments/:id' do
    before { get "/posts/#{post_id}/comments/#{id}" }

    context 'when posts comment exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the comment' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when posts comment does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Comment/)
      end
    end
  end

  # Test suite for PUT /posts/:post_id/comments
  describe 'POST /posts/:post_id/comments' do
    let(:valid_attributes) { { comment: 'Visit Narnia', created_at: Time.now, post_id: 1, user_id: 1} }

    context 'when request attributes are valid' do
      before { post "/posts/#{post_id}/comments", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/posts/#{post_id}/comments", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end


    end
  end

  # Test suite for PUT /posts/:post_id/comments/:id
  describe 'PUT /posts/:post_id/comments/:id' do
    let(:valid_attributes) { { comment: 'Mozart' } }

    before { put "/posts/#{post_id}/comments/#{id}", params: valid_attributes }

    context 'when comment exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the comment' do
        updated_post = Comment.find(id)
        expect(updated_post.post).to match(/Mozart/)
      end
    end

    context 'when the comment does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Comment/)
      end
    end
  end
end
