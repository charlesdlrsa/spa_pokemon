// Redux actions
export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const FETCH_REQUESTED = 'FETCH_REQUESTED';
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';

export const openDrawer = (id) => {
  return {
    type: OPEN,
    id,
  }
};

export const closeDrawer = () => {
  return {
    type: CLOSE,
  }
};

export const savePokemon = (pokemon) => {
  return {
    type: FETCH_SUCCEEDED,
    pokemon,
  }
}
