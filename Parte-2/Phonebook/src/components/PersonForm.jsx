import ActionButton from "./ActionButton";
import Input from "./Input";
import PropTypes from "prop-types";

const PersonForm = ({
  nameValue,
  onChangeName,
  numberValue,
  onChangeNumber,
  onClick,
}) => {
  return (
    <form>
      <Input value={nameValue} onChange={onChangeName} title="Name" />
      <Input value={numberValue} onChange={onChangeNumber} title="Number" />
      <div className="mb-2 p-2">
        <ActionButton onClick={onClick} title="Add" />
      </div>
    </form>
  );
};

PersonForm.propTypes = {
  nameValue: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  numberValue: PropTypes.string.isRequired,
  onChangeNumber: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PersonForm;
