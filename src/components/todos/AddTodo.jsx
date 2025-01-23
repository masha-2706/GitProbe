import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todoSlice'

export default function AddTodo() {

  const [todo, setTodo] = useState('');

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const dispatch = useDispatch();

  const btnClickHandler = () => {
    if (todo) dispatch(addTodo(todo));
  }

  return (
    <div>
      <input type='text' placeholder='Todo name' value={todo} onChange={handleTodoChange}/>
      <button onClick={btnClickHandler}>Add Todo</button>
    </div>
  )
}