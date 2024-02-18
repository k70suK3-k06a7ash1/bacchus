"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spacer } from "@nextui-org/spacer";
import { ReactNode, useState } from "react";
import { CgAddR } from "react-icons/cg";
type TComposition = {
  children: ReactNode;
};
export default function Register() {
  const [cost, setCost] = useState(0);
  return (
    <>
      <div className="py-4 px-8">
        <InputWrapper>
          <Label htmlFor="cost">品目</Label>
          <Input size={18} placeholder="品目" id="cost" type="number" />
        </InputWrapper>
        <Spacer y={4} />
        <InputWrapper>
          <Label htmlFor="cost">金額</Label>
          <Center currency="円">
            <Input
              size={18}
              onChange={(value) => setCost(Number(value.currentTarget.value))}
              id="cost"
              type="number"
            />
          </Center>
        </InputWrapper>
        <Spacer y={8} />
        <div className="flex justify-center">
          <CgAddR size={48} />
        </div>

        {/* <Spacer y={4} /> */}
        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">金額</Label>
          <Center currency="ドル">
            <Input value={cost / 150} disabled id="cost" type="number" />
          </Center>
        </div> */}
      </div>
    </>
  );
}

type Props = {
  currency: string;
};
const Center = ({ children, currency }: TComposition & Props) => (
  <div className="flex items-center">
    {children} <Spacer x={2} />
    {currency}
  </div>
);
const InputWrapper = ({ children }: TComposition) => (
  <div className="grid w-full max-w-sm items-center gap-1.5">{children}</div>
);
