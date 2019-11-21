import React from 'react';
const Comment = ({ image, name, post, time }) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={image} alt='Avatar' />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {name}
        </a>
        <div className='metadata'>
          <span className='date'>{time}</span>
        </div>
        <div className='text'>{post}</div>
      </div>
    </div>
  );
};

export default Comment;
