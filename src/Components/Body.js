import React from 'react';
import {Todos} from './Todos';

const Body = ({ todos,onDelete }) => (
  <div className="body">
    <Todos todos={todos} onDelete={onDelete}/>
  </div>
);

export default Body;
