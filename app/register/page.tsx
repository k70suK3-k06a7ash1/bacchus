"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spacer } from "@nextui-org/spacer";
import { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { Center } from "../_packages/styles/Center";
import { InputWrapper } from "../_packages/styles/InputWrapper";

export default function Register() {
  const [cost, setCost] = useState(0);
  return (
    <>
      <div className="py-4 px-8">
        家計簿登録
        <Spacer y={8} />
        <InputWrapper>
          <Label htmlFor="title">品目</Label>
          <Spacer y={2} />
          <Input className="text-xl" id="title" type="number" />
        </InputWrapper>
        <Spacer y={6} />
        <InputWrapper>
          <Label htmlFor="cost">金額</Label>
          <Spacer y={2} />
          <Center currency="円">
            <Input
              className="text-xl"
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
