import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCount, lessCount, plusCount } from "@/counter/counterSlice";
import classNames from "classnames";

import "./Counter.scss";

export default function Counter() {
   const count = useSelector(getCount);
   
  const dispatch = useDispatch();

  const [changedCount, setChangedCount] = useState(false);

  const handleChangedCount = () => {
    setChangedCount(true);
    setTimeout(() => {
      setChangedCount(false);
    }, 300);
  };

  return (
    <div className="counter">
      <div className="counter__wrapper">
        <span
          className={classNames({
            changed_positive: changedCount && count > 0,
            changed_negative: changedCount && count < 0,
          })}
        >
          {count}
        </span>
        <button
          className="plus-btn"
          onClick={() => {
            dispatch(plusCount());
            handleChangedCount();
          }}
        >
          PLUS
        </button>
        <button
          className="minus-btn"
          onClick={() => {
            dispatch(lessCount());
            handleChangedCount();
          }}
        >
          MINUS
        </button>
      </div>
    </div>
  );
}
