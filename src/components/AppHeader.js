import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import TodoModel from './TodoModel';
import styles from '../styles/modules/app.module.scss';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className={styles.AppHeader}>
      <h1>Header</h1>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel modelOpen={modalOpen} setModelOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
