import React, { useCallback } from "react"
import classNames from "classnames"
import useToDoStore from "../hooks/useToDoStore"

export function ToDoItem({ id, description, done }) {
  const { update, remove } = useToDoStore()
  const onChange = useCallback(() => update(id, !done), [id, done, update])
  const onClick = useCallback(() => remove(id), [id, remove])

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
