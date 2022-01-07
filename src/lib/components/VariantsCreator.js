import React from "react";
import VariantsForm from "./VariantsForm";

export default function VariantsCreator(props) {
  const handleChangeVariantValue = (e) => {
    if ((e.key === "Enter" || e.key === "Tab") && e.target.value) {
      const data = {
        ["name"]: e.target.value.toLowerCase(),
        values: [],
        id: Date.now(),
      };
      props.setValues((c) => c.concat(data));
      document.getElementById("ecommerce-combination-input-creator").value = "";
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="w25">
          <label>{props.variantLabel}</label>
          <input
            placeholder={props.variantLabelPlaceholder}
            className="ecommerce-variant-input"
            //   onChange={(e) => handleChangeConbinationValue(e.target.value)}
            onKeyDown={(e) => handleChangeVariantValue(e)}
            id="ecommerce-combination-input-creator"
          />
        </div>
        <div className="w70">
          <label>{props.variantValue}</label>
          <input
            className={"ecommerce-variant-input"}
            disabled
            placeholder={props.variantValuePlaceholder}
          />
        </div>
      </div>
      <VariantsForm
        values={props.values}
        options={props.options}
        setVariants={props.setVariants}
        seperater={props.seperater}
      />
    </div>
  );
}
