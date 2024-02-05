import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar";

export function RecentSales() {
  const bookkeeping: Props = {
    bookkeepingType: "Income",
    itemName: "sample",
    cost: 1000,
  };

  const list = [...Array(5)].map((_) => bookkeeping);
  return (
    <div className="space-y-8">
      {list.map((bookkeeping) => (
        <Row {...bookkeeping} />
      ))}
    </div>
  );
}

type BookkeepingType = "Income" | "Expenditure";

type Props = {
  bookkeepingType: BookkeepingType;
  itemName: string;
  cost: number;
};
const Row = (props: Props) => {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>
          {props.bookkeepingType === "Income" ? "収入" : "支出"}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{props.itemName}</p>
        <p className="text-sm text-muted-foreground">雑費</p>
      </div>
      <div className="ml-auto font-medium">{props.cost.toLocaleString()}円</div>
    </div>
  );
};
