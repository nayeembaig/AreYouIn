import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog } from   '@fortawesome/free-solid-svg-icons';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
   
  <div className="container">
<div class="message-container" style={{border: "1px solid #EFF9FC", borderRadius: "5px", backgroundColor:"#EFF9FC"}}>
    <div class="status-bar" style={{padding:"2px", marginTop:"2px"}}>
    <h2 class="my-0">

      <div class="message-content">
     
     <div class="message-header">
       <div class="header-image">
         <img src="https://mjmao93648.i.lithium.com/t5/image/serverpage/image-id/12183i65F6690CCF8E041D/image-dimensions/150x150/image-coordinates/436%2C15%2C1312%2C891?v=1.0" width="40" alt="Shay" title="Shay" />
       </div>
       <div class="header-info">
         <div class="user-details">
           <div class="user-top">
             <a class="user-name" href="#" >   <Link to={`/profile/${user}`}>
       
       <h4>{name}</h4>
     </Link></a>
     
           </div>
           <div class="user-bottom">
           
           </div>
         </div>
         <div class="message-details">
           
           <div class="message-date" style={{color:"black"}}>
             <span>  Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></span>
           </div>
           {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deleteComment(postId, _id)}
              type='button'
              className='btn btn-light'
              
            >
             X
            </button>
          )}
         </div>
       </div>
     </div>
    
     <div class="message-content-body" style={{padding:"20px", color:"black"}}>
       <p>
       {text}
       </p>
     </div>
   </div>
    
        
      
       
       </h2>
    </div>
    </div>

  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
