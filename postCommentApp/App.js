import React from 'react';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard.component';
import './App.css';
import Comment from './components/Comment.component';
function App() {
  return (
    <div className='ui container comments'>
      <ApprovalCard rejectBtnText='Reject' approveBtnText='Approve'>
        <Comment
          image={faker.image.avatar()}
          name={faker.name.firstName()}
          post='Nice post man!'
          time='Today at 6:5 4PM'
        />
      </ApprovalCard>
      <ApprovalCard rejectBtnText='Reject' approveBtnText='Approve'>
        <Comment
          image={faker.image.avatar()}
          name={faker.name.firstName()}
          post='Nice post man!'
          time='Yesterday at 2:04 AM'
        />{' '}
      </ApprovalCard>

      <ApprovalCard rejectBtnText='Reject' approveBtnText='Approve'>
        <Comment
          image={faker.image.avatar()}
          name={faker.name.firstName()}
          post='Nice post man!'
          time='Today at 11:50 PM'
        />{' '}
      </ApprovalCard>
      <ApprovalCard reverserd={true} rejectBtnText='Reject' approveBtnText='Approve'>
        <h3>Are You serious??</h3>
      </ApprovalCard>
    </div>
  );
}

export default App;
