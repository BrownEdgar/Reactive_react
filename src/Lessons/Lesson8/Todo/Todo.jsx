import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./Todo.scss";

function Todo({ todo } ) {
    return (
        // <div>
        //         <h1>{title}</h1>
        //         <h1>Age: {age}</h1>
        // </div >
        <div className="Todo">
            <span
                className={classNames("Todo__status", {
                    "Todo__status-green": todo.completed,
                    "Todo__status-red": !todo.completed,
                })}
            ></span>
            <h1>{todo.title}</h1>
        </div>
    );
}

export default Todo;

Todo.defaultProps = {
    age: 20
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    age: PropTypes.number,
    arr: PropTypes.arrayOf(PropTypes.number).isRequired,
    todo: PropTypes.exact({
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bull.isRequired,
    }).isRequired
};