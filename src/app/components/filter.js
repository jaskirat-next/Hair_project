import { Form, radio, checkbox } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../../../public/sass/pages/filter.scss";
import { useState } from "react";

const Filter = () => {
  const [closefilter , setClosefilter] = useState(true);
  return (
    <div className="filter">
      <div className="filarr">
        <div className="left">
          <h3>Filters</h3>
        </div>
        <div className="right" onClick={()=>{!setClosefilter(false)}}>
          <FaArrowLeftLong />
        </div>
      </div>
      <div className="availability">
        <p>AVAILABILITY</p>
        <Form>
          <Form.Check // prettier-ignore
            name="group1"
            type="radio"
            id={`inline`}
            label={`In Stock `}
          />

          <Form.Check
            name="group1"
            type="radio"
            label={` Out of Stock`}
            id={`inline`}
          />
        </Form>
      </div>
      <div className="pcategory">
        <p>PRODUCT CATEGORY</p>
        <Form>
          <Form.Check // prettier-ignore
            type="checkbox"
            id={`default-`}
            label={`Hair Product `}
          />

          <Form.Check type="checkbox" label={`Loreum Epsum`} />
          <Form.Check type="checkbox" label={`Loreum Epsum`} />
          <Form.Check type="checkbox" label={`Loreum Epsum`} />
          <Form.Check type="checkbox" label={`Loreum Epsum`} />
          <Form.Check type="checkbox" label={`Loreum Epsum`} />
          <Form.Check type="checkbox" label={`Loreum Epsum`} />
          <Form.Check type="checkbox" label={`Loreum Epsum`} />
        </Form>
      </div>
      <div className="prange">
        <p>PRICE RANGE</p>
        <Form>
          <Form.Check // prettier-ignore
            reverse
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form>
      </div>
    </div>
  );
};
export default Filter;
