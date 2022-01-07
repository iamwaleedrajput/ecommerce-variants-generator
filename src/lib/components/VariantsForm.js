import React from "react";
import VariantValueInput from "./VariantValueInput";

export default function VariantsForm(props) {
  const handleGenerateVariant = () => {
    props.setVariants([]);
    const initialArray = props.values;
    // ** rearranging array
    const rearranged = [];
    const sortedArr = [];
    for (let i = 0; i < initialArray.length; i++) {
      rearranged.push({
        [initialArray[i]["name"]]: initialArray[i]["values"].map((i) => i.name),
      });
    }
    // ** creating unsorted dictionary to sort assendingly
    let unsortedSortedDictionary = Object.assign(
      {},
      ...rearranged.map((x) => x)
    );
    // ** sorting dictionary
    const sortedSortedDictionary = Object.keys(unsortedSortedDictionary)
      .sort()
      .reduce((r, k) => ((r[k] = unsortedSortedDictionary[k]), r), {});
    // ** converting sorted dictionary into array
    for (var key in sortedSortedDictionary) {
      if (sortedSortedDictionary.hasOwnProperty(key)) {
        const arr = sortedSortedDictionary[key];
        sortedArr.push(arr);
      }
    }
    // ** generate variants
    const lengthCheck = sortedArr.filter((i) => i.length > 0);
    const arrayForVariants = lengthCheck.reduce((a, b) =>
      a.reduce((r, v) => r.concat(b.map((w) => [].concat(v, w))), [])
    );
    if (lengthCheck.length === 1) {
      const combinations = arrayForVariants.map((a) => props.options(a));
      props.setVariants((c) => c.concat(combinations));
    } else {
      const combinations = arrayForVariants.map((a) =>
        props.options(a.join(`${props.seperater}`))
      );
      props.setVariants((c) => c.concat(combinations));
    }
  };

  return props.values.map((item, index) => (
    <div className="d-flex justify-content-between">
      <div className="w25">
        <label>{item.name}</label>
        <input
          placeholder={item.name}
          className="ecommerce-variant-input"
          disabled
        />
      </div>
      <VariantValueInput
        item={item}
        index={index}
        values={props.values}
        handleGenerateVariant={handleGenerateVariant}
      />
    </div>
  ));
}
