import { useDispatch } from "react-redux";
import { filterContacts } from "../../Redux/Store";

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={onChange}></input>
    </div>
  );
};

export default Filter;
