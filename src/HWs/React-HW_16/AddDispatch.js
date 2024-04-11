const AddDispatch = {
  handleAddRndNumber(dispatch) {
    dispatch({ type: "add" });
  },

   handleShuffle(dispatch) {
    dispatch({ type: "shuffle" });
  },

   handleAddUser(e, dispatch) {
    e.preventDefault();
    dispatch({ type: "addUser", payload: e.target.username.value });
    e.target.reset();
  },

   handleDelete(dispatch) {
    dispatch({ type: "delete" });
  },

   handleRename(dispatch) {
    dispatch({ type: "rename" });
  },

   handleUserAge(dispatch) {
    dispatch({ type: "addAge" });
  },
};

export default AddDispatch;
