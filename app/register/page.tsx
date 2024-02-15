import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spacer } from "@nextui-org/spacer";

export default function Register() {
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
          <Input placeholder="現地通貨" id="cost" type="number" />
        </div>
        <Spacer y={4} />

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">金額</Label>
          <Input disabled placeholder="母国通貨" id="cost" type="number" />
        </div>
      </div>
    </>
  );
}
