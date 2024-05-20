import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks";
import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function Searchbar({ value, onChange }: Props) {
  const commandRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(commandRef, () => {
    onChange("");
  });
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
