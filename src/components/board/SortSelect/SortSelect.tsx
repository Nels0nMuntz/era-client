import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  placeholder: string;
  items: { name: string; value: string }[];
  value: string;
  onChange?: (value: string) => void;
}

export function SortSelect({ items, placeholder, value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map(({ name, value }, index) => (
          <SelectItem value={value} key={index}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
