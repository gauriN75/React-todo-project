import React from 'react';
import Button, { SelectButton } from './Button';
import TodoModel from './TodoModel';
import styles from '../styles/modules/app.module.scss';

function AppHeader() {
  return (
    <div className={styles.AppHeader}>
      <h1>Header</h1>
      <Button variant="primary">Add Task</Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel />
    </div>
  );
}

export default AppHeader;
