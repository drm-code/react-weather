export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('previousState')

    return serializedState === null ? undefined : JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('previousState', serializedState)
  } catch (error) {
    console.log(error)
  }
}
