
import React, { useReducer } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';


export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  //const user = useTracker(() => Meteor.user());
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <span>{"testeee"}</span>
      <button onClick={() => onDeleteClick(task)}>&times;</button>
    </li>
  );
};