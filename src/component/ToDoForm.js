export default function ToDoForm({ listNames }) {
  return (
    <form className="box">
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
            {listNames.map((name) => <option value={name} />)}
          </datalist>
        </div>
      </div>

      <button className="button is-primary">Add</button>
    </form>
  )
}
