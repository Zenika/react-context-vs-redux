import React from "react"
import classNames from "classnames"

export function ToDoItem({ id, description, done }) {
  return (
    <>
      <label
        className={classNames('checkbox is-flex-grow-1', { 'has-text-grey-light': done })}
        htmlFor={`item-${id}`}
      >
        <input
          id={`item-${id}`}
          className="mr-1"
          type="checkbox"
          checked={done}
        />
        {description}
      </label>
      <button className="delete ml-2" title={`Delete: ${description}`}></button>
    </>
  )
}
