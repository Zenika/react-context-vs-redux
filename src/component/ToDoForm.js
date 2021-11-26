import React, { useCallback, useRef } from "react"
import useToDoContext from "../hooks/useToDoContext"

export default function ToDoForm({ listNames }) {
  const { create } = useToDoContext()
  const description = useRef(null)
  const list = useRef(null)

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    create(
      list.current.value,
      description.current.value
    )
  }, [create])

  return (
    <form className="box" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="description">To be done:</label>
        <div className="control">
          <input
            id="description"
            className="input is-primary"
            ref={description}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="list">List name:</label>
        <div className="control">
          <input
            id="list"
            className="input"
            list="list-name"
            autoComplete="off"
            ref={list}
          />
          <datalist id="list-name">
            {listNames.map((name) => <option key={name} value={name} />)}
          </datalist>
        </div>
      </div>

      <button className="button is-primary">Add</button>
    </form>
  )
}
