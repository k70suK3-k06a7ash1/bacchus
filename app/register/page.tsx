"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spacer } from "@nextui-org/spacer";
import { ReactNode, useState } from "react";

type TComposition = {
  children: ReactNode;
};
export default function Register() {
  const [cost, setCost] = useState(0);
  return (
    <>
      <div className="py-4 px-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">品目</Label>
          <Input placeholder="金額" id="cost" type="number" />
        </div>
        <Spacer y={4} />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">金額</Label>
          <Center currency="円">
            <Input
              onChange={(value) => setCost(Number(value.currentTarget.value))}
              placeholder="現地通貨"
              id="cost"
              type="number"
            />
          </Center>
        </div>
        <Spacer y={4} />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">金額</Label>
          <Center currency="円">
            <Input
              value={cost}
              disabled
              placeholder="母国通貨"
              id="cost"
              type="number"
            />
          </Center>
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
