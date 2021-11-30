import React from "react"
import classNames from "classnames"
import useToDoContext from "../hooks/useToDoContext"

export function ToDoItem({ id, description, done }) {
  const { update, remove } = useToDoContext()
  const onChange = () => update(id, !done)
  const onClick = () => remove(id)

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
          onChange={onChange}
        />
        {description}
      </label>
      <button
        className="delete ml-2"
        title={`Delete: ${description}`}
        onClick={onClick}
      ></button>
    </>
  )
}
