// Redux actions
export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

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
