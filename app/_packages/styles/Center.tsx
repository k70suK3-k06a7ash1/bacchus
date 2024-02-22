import { Spacer } from "@nextui-org/spacer";
import { TComposition } from "../types";

type Props = {
  currency: string;
};

export const Center = ({ children, currency }: TComposition & Props) => (
  <div className="flex items-center">
    {children} <Spacer x={2} />
    {currency}
  </div>
);
