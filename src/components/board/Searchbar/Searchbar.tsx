import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function Searchbar({ value, onChange }: Props) {
  return (
    <Input
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      type='text'
      placeholder='Search participants...'
      className="w-full max-w-md"
    />
  );
}
