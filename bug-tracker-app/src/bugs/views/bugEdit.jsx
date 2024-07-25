import { useState } from "react";

const BugEdit = ({ createNew }) => {
  const [newBugName, setNewBugName] = useState("");
  const onBtnAddNewClick = () => {
    setNewBugName("");
    createNew(newBugName);
  };
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input
        type="text"
        value={newBugName}
        onInput={(evt) => setNewBugName(evt.target.value)}
      />
      <button onClick={onBtnAddNewClick}>Add New</button>
    </section>
  );
};
export default BugEdit;