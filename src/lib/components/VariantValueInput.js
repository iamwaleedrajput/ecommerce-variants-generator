import React, { useState } from "react";

export default function VariantValueInput(props) {
  const [state, setState] = useState("");

  const filterValues = (id, index) => {
    const newList = props.values[index]["values"].filter((i) => i.id !== id);
    props.values[index]["values"] = newList;
    props.handleGenerateVariant();
  };

  const handleVariantValue = (e, index) => {
    if (e.key === "Enter" || e.key === ",") {
      props.values[index]["values"].push({
        ["name"]: state,
        ["id"]: Date.now(),
      });
      setState("");
      props.handleGenerateVariant();
    }
  };
  return (
    <div className="w70">
      <label>Values</label>
      <div className="variants-values d-flex flex-wrap ">
        {props.item.values.map((i, ind) => (
          <div className="ecommerce-variants" key={ind}>
            {i.name}{" "}
            <span
              onClick={() => filterValues(i.id, props.index)}
              className="cursor-pointer"
            >
              &times;
            </span>
          </div>
        ))}
        <input
          placeholder={props.item.name}
          value={state.replace(",", "")}
          className="ecommerce-variant-values"
          onChange={(e) => setState(e.target.value)}
          onKeyDown={(e) => handleVariantValue(e, props.index)}
          id="variants"
        />
      </div>
    </div>
  );
}
