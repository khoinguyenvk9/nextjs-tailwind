import { FC, useState } from "react";

const Wrapper: FC<{ title: string; children: any }> = ({ title, children }) => {
  return (
    <div className="bg-white text-black w-36 p-9">
      <h1>{title}</h1>
      <div className="bg-green-500">{children}</div>
    </div>
  );
};

const Product = () => {
  return <div className="bg-pink-500">Product content</div>;
};

const Shipping = () => {
  return <div className="bg-yellow-500">shiopping content</div>;
};
const A = () => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <Wrapper title="product">
        {step == 0 ? <Product /> : <Shipping />}
      </Wrapper>
      <button onClick={() => setStep(step + 1)}>next step</button>
    </div>
  );
};

export default A;
