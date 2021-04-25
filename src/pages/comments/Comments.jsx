import AddCommentForm from '../../components/forms/add-comment-form';
import CommentList from '../../components/list/comments-list';
import CommentsProviderComponent from '../../contexts/comments-provider/CommentsProvider';
import PropTypes from 'prop-types';

function Comments({ title = 'Comments' }) {
  return (
    <CommentsProviderComponent>
      <h1 className="text-center mb-3">{title}</h1>
      <div className="row">
        <div className="col-4">
          <AddCommentForm />
        </div>
        <div className="col-8 d-flex flex-wrap">
          <CommentList />
        </div>
      </div>
    </CommentsProviderComponent>
  );
}

Comments.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Comments;
