require 'rails_helper'

RSpec.describe 'categories API', type: :request do
  # initialize test data
  let!(:categories) { create_list(:category, 10) }
  let(:category_id) { categories.first.id }

  # Test suite for GET /categories
  describe 'GET /categories' do
    # make HTTP get request before each example
    before { get '/categories' }

    it 'returns categories' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
         expect(response).to have_http_status(200)
       end
     end




     describe 'GET /categories/:id' do
         before { get "/categories/#{category_id}" }

         context 'when the record exists' do
           it 'returns the category' do
             expect(json).not_to be_empty
             expect(json['id']).to eq(category_id)
           end

           it 'returns status code 200' do
             expect(response).to have_http_status(200)
           end
         end

         context 'when the record does not exist' do
           let(:category_id) { 100 }

           it 'returns status code 404' do
             expect(response).to have_http_status(404)
           end

           it 'returns a not found message' do
             expect(response.body).to match(/Couldn't find Category/)
           end
         end
       end

       # Test suite for POST /categories
        describe 'POST /categories' do
          # valid payload
          let(:valid_attributes) { { title: 'Learn Elm', created_by: '1' } }

          context 'when the request is valid' do
            before { post '/categories', params: valid_attributes }

            it 'creates a category' do
              expect(json['title']).to eq('Learn Elm')
            end

            it 'returns status code 201' do
              expect(response).to have_http_status(201)
            end
          end
        end

          context 'when the request is invalid' do
            before { post '/categories', params: { title: 'Foobar' } }

            it 'returns status code 422' do
              expect(response).to have_http_status(422)
            end

            it 'returns a validation failure message' do
              expect(response.body)
                .to match(/Validation failed: Created by can't be blank/)
            end
          end
        end

        # Test suite for PUT /categories/:id
        describe 'PUT /categories/:id' do
          let(:valid_attributes) { { title: 'Shopping' } }

          context 'when the record exists' do
            before { put "/categories/#{category_id}", params: valid_attributes }

            it 'updates the record' do
              expect(response.body).to be_empty
            end

            it 'returns status code 204' do
              expect(response).to have_http_status(204)
            end
          end
        end





       describe 'DELETE /categories/:id' do
          before { delete "/categories/#{category_id}" }

          it 'returns status code 204' do
            expect(response).to have_http_status(204)
          end
        end
      
