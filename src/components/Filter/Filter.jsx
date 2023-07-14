import { Label, Input } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterValue } from "redux/selectors";
import { setFilterValue } from "redux/filterSlice";

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <Label>Find contacts by name
      <Input
        value={filter}
        onChange={onFilterChange}
        type="text"
        name="filter"
      />
    </Label>);
};