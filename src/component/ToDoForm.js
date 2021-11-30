import useToDoStore from "../hooks/useToDoStore"

export default function ToDoForm({ listNames }) {
  const { create } = useToDoStore()

  const onSubmit = (e) => {
    e.preventDefault()

    create(
      e.target.querySelector('[name=list]').value,
      e.target.querySelector('[name=description]').value
    )
  }

  return (
    <form className="box" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="description">To be done:</label>
        <div className="control">
          <input className="input is-primary" id="description" name="description" />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="list">List name:</label>
        <div className="control">
          <input className="input" id="list" name="list" list="list-name" />
          <datalist id="list-name">
            {listNames.map((name) => <option key={name} value={name} />)}
          </datalist>
        </div>
      </div>

      <button className="button is-primary">Add</button>
    </form>
  )
}
