require "test_helper"

class BrainDumpsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @brain_dump = brain_dumps(:one)
  end

  test "should get index" do
    get brain_dumps_url, as: :json
    assert_response :success
  end

  test "should create brain_dump" do
    assert_difference("BrainDump.count") do
      post brain_dumps_url, params: { brain_dump: { Content: @brain_dump.Content, daytask_id: @brain_dump.daytask_id } }, as: :json
    end

    assert_response :created
  end

  test "should show brain_dump" do
    get brain_dump_url(@brain_dump), as: :json
    assert_response :success
  end

  test "should update brain_dump" do
    patch brain_dump_url(@brain_dump), params: { brain_dump: { Content: @brain_dump.Content, daytask_id: @brain_dump.daytask_id } }, as: :json
    assert_response :success
  end

  test "should destroy brain_dump" do
    assert_difference("BrainDump.count", -1) do
      delete brain_dump_url(@brain_dump), as: :json
    end

    assert_response :no_content
  end
end
