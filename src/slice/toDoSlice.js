import { createSlice } from '@reduxjs/toolkit'
import { create, getAll, remove, update } from '../api/request'
import toDoReducer from '../reducer/toDoReducer'

const toDoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    populateAction: toDoReducer.populate,
    createAction: toDoReducer.create,
    updateAction: toDoReducer.update,
    removeAction: toDoReducer.delete,
  },
})

const { createAction, updateAction, removeAction, populateAction } = toDoSlice.actions

const populateActionAsync = () => async (dispatch, getState) => {
  const data = await getAll()
  dispatch(populateAction(data))
}

const createActionAsync = (item) => async (dispatch, getState) => {
  const data = await create(item)
  dispatch(createAction(data))
}

const updateActionAsync = (item) => async (dispatch, getState) => {
  const data = await update(item)
  dispatch(updateAction(data))
}

const removeActionAsync = (id) => async (dispatch, getState) => {
  await remove(id)
  dispatch(removeAction(id))
}

export { populateActionAsync, createActionAsync, updateActionAsync, removeActionAsync }

export default toDoSlice
