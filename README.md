# Getting Started with Create React App

```

import { useState } from "react";
import { VariantsCreator } from "ecommerce-variants-generator";

function App() {
const [valueArr, setValueArr] = useState([]),
[variants, setVariants] = useState([]);

const options = (e) => {
const list = { name: e };
return list;
};

return (
    <VariantsCreator
        variantLabel="Combination name"
        variantLabelPlaceholder="Combination name"
        variantValue="Value"
        variantValuePlaceholder="Value"
        values={valueArr}
        setValues={setValueArr}
        options={options}
        setVariants={setVariants}
        seperater=" / "
      />
      {variants.map((i) => (
        <li>{i.name}</li>
      ))}
)
}

export default App;

```
