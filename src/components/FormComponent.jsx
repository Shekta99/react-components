import "./FormComponentStyle.css";

function FormComponent() {
  return (
    <div>
      <label for="name-input" className="form-element">
        Name:
      </label>
      <input type="text" id="name-input" className="form-element" />
      <label for="age-input" className="form-element">
        Age:
      </label>
      <input type="text" id="age-input" className="form-element" />
    </div>
  );
}

export default FormComponent;
