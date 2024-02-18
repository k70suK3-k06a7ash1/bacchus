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
      <div className="h-[52px] bg-black flex items-center px-8">
        <span className="text-white text-lg">Bacchus</span>
      </div>
      <div className="py-4 px-8">
        家計簿登録
        <Spacer y={8} />
        <InputWrapper>
          <Label htmlFor="cost">品目</Label>
          <Spacer y={2} />
          <Input id="cost" type="number" />
        </InputWrapper>
        <Spacer y={6} />
        <InputWrapper>
          <Label htmlFor="cost">金額</Label>
          <Spacer y={2} />
          <Center currency="円">
            <Input
              onChange={(value) => setCost(Number(value.currentTarget.value))}
              id="cost"
              type="number"
            />
          </Center>
        </InputWrapper>
        <Spacer y={8} />
        <div className="flex justify-center ">
          <CgAddR size={48} onClick={() => window.alert("hello")} />
        </div>
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
  <div className="grid w-full items-center gap-1.5">{children}</div>
);
