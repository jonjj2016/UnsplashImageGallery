import React from 'react';
import './ApprovalCard.css';
const ApprovalCard = ({ children, approveBtnText, rejectBtnText }) => {
  return (
    <div className='ui card'>
      <div className='content'>{children && children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <button className='ui green basic button  approve'>{approveBtnText}</button>
          <button className='ui red basic button'>{approveBtnText}</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
