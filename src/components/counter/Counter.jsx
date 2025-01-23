import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { increment, decrement, incrementByAmount } from "../../redux/slices/counterSlice";
import styles from './Counter.module.css'

export default function Counter() {

  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch( increment() );
  }

  const dec = () => {
    dispatch( decrement() );
  }

  const double = () => {
    dispatch( incrementByAmount(2) );
  }

  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addBtnClickHandler = () => {
    const parsed = +inputValue;
    if (!Number.isNaN(parsed))
      dispatch( incrementByAmount(parsed) );
    setInputValue('');
  }

  return (
    <div className={styles.counterWrapper}>
      <p className={styles.counterParagraph}>Now counter is: <span>{counter}</span></p>
      <button className={styles.counterBtn} onClick={inc}>Plus 1</button>
      <button className={styles.counterBtn} onClick={dec}>Minus 1</button>
      <button className={styles.counterBtn} onClick={double}>Double increment</button>

      <input className={styles.counterInput} placeholder="number" onChange={onInputChange} value={inputValue}></input>
      <button className={styles.counterBtn}  onClick={addBtnClickHandler}>Add number</button>
    </div>
  )
}