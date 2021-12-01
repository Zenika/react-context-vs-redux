import { useEffect, useCallback } from 'react'
import {
  getAll,
  create as createAPICall,
  update as updateAPICall,
  remove as removeAPICall
} from '../api/request'

export default function useToDoAction(dispatch) {
  useEffect(() => {
    getAll().then(
      (data) => dispatch?.({ type: 'populate', payload: data })
    )
  }, [dispatch])

  const create = useCallback(
    async (list, description) => {
      const payload = await createAPICall({ list, description })
      dispatch?.({ type: 'create', payload })
    },
    [dispatch]
  )

  const update = useCallback(
    async (id, done) => {
      const payload = await updateAPICall({ id, done })
      dispatch?.({ type: 'update', payload })
    },
    [dispatch]
  )

  const remove = useCallback(
    async (id) => {
      await removeAPICall(id)
      dispatch?.({ type: 'delete', payload: id })
    },
    [dispatch]
  )

  return { create, update, remove }
}
