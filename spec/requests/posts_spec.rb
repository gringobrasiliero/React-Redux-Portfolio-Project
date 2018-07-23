# spec/requests/posts_spec.rb
require 'rails_helper'

RSpec.describe 'Posts API' do
  # Initialize the test data
  let!(:user) { create(:user) }
  let!(:category) { create(:category) }
  let!(:posts) { create_list(:post, 20, category_id: category.id, user_id: user.id, created_at: Time.now) }
  let(:user_id) { user.id }

  let(:category_id) { category.id }
  let(:category_id) {1}

  let(:id) { posts.first.id }

  # Test suite for GET /categories/:category_id/posts
  describe 'GET /categories/:category_id/posts' do
    before { get "/categories/#{category_id}/posts" }

    context 'when post exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all categories posts' do
        expect(json.size).to eq(20)
      end
    end


  end

  # Test suite for GET /categories/:category_id/posts/:id
  describe 'GET /categories/:category_id/posts/:id' do
    before { get "/categories/#{category_id}/posts/#{id}" }

    context 'when categories post exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the post' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when categories post does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Post/)
      end
    end
  end

  # Test suite for PUT /categories/:category_id/posts
  describe 'POST /categories/:category_id/posts' do
    let(:valid_attributes) { { post: 'Visit Narnia', created_at: Time.now, category_id: '1'} }

    context 'when request attributes are valid' do
      before { post "/categories/#{category_id}/posts", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/categories/#{category_id}/posts", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end


    end
  end

  # Test suite for PUT /posts/:category_id/posts/:id
  describe 'PUT /categories/:category_id/posts/:id' do
    let(:valid_attributes) { { post: 'Mozart' } }

    before { put "/categories/#{category_id}/posts/#{id}", params: valid_attributes }

    context 'when post exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the post' do
        updated_post = Post.find(id)
        expect(updated_post.post).to match(/Mozart/)
      end
    end

    context 'when the post does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Post/)
      end
    end
  end
end
  # Test suite for DELETE /posts/:id
