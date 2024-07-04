import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, checkHandler }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__element checkbox__element_type_default"
        type="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <span className=" checkbox__element checkbox__element_type_custom" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;