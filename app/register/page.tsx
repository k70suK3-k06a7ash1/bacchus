import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  return (
    <>
      <div className="py-4 px-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">金額</Label>
          <Input placeholder="金額" id="cost" type="number" />
        </div>
      </div>
    </>
  );
}
