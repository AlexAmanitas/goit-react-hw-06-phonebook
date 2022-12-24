import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/sliceContacts';
import { setFilter } from 'redux/sliceFilter';
import { FilterBox, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    // console.log(evt.currentTarget.value);
    dispatch(setFilter(evt.currentTarget.value));

    dispatch(filterContacts(evt.currentTarget.value));

    // props.onChange(filter);
  };
  const filter = useSelector(state => state.filter.value);
  // const set = useSelector(state => state);
  // console.log(set);

  return (
    <FilterBox>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input id="filter" type="text" value={filter} onChange={handleChange} />
    </FilterBox>
  );
};

export default Filter;

Filter.propTypes = {
  props: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }),
};
