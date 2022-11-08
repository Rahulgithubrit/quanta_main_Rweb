import { useState } from "react";
import styles from "./AddNewEvent.module.css";

const AddNewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const handleEventName = (event) => {
    setEventName(event.target.value);
  };
  const handleEventDesc = (event) => {
    setEventDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <label htmlFor="">Name of the event:</label>
        <input type="text" value={eventName} onChange={handleEventName} />
        <label htmlFor="">Description of the event:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={eventDesc}
          onChange={handleEventDesc}
        ></textarea>
        <label htmlFor="">Upload an event banner:</label>
        <input type="file" className={styles.fileSelect} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddNewEvent;
