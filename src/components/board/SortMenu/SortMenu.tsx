import { useEffect, useState } from "react";
import { ArrowDownUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SortSelect } from "../SortSelect/SortSelect";

interface Props {
  onChange: ({ sortBy, orderBy }: { sortBy: string; orderBy: string }) => void;
}

const sortByOptions = [
  {
    name: "Title",
    value: "title",
    orderByOptions: [
      {
        name: "ASC",
        value: "asc",
      },
      {
        name: "DESC",
        value: "desc",
      },
    ],
  },
  {
    name: "Date",
    value: "eventDate",
    orderByOptions: [
      {
        name: "ASC",
        value: "asc",
      },
      {
        name: "DESC",
        value: "desc",
      },
    ],
  },
  {
    name: "Organizer",
    value: "organizer",
    orderByOptions: [
      {
        name: "ASC",
        value: "asc",
      },
      {
        name: "DESC",
        value: "desc",
      },
    ],
  },
];

export function SortMenu({ onChange }: Props) {
  const [activeSortOption, setActiveSortOption] = useState(1);
  const [activeOrderOption, setActiveOrderOption] = useState(1);
  const onSortByOptionChange = (value: string) => {
    const selectedIndex = sortByOptions.findIndex((option) => option.value === value);
    if (selectedIndex >= 0) {
      setActiveSortOption(selectedIndex);
    }
  };
  const onOrderByOptionChange = (value: string) => {
    const selectedIndex = sortByOptions[activeSortOption].orderByOptions.findIndex(
      (option) => option.value === value,
    );
    if (selectedIndex >= 0) {
      setActiveOrderOption(selectedIndex);
    }
  };
  const activeSortByValue = sortByOptions[activeSortOption].value;
  const activeOrderByValue =
    sortByOptions[activeSortOption].orderByOptions[activeOrderOption].value;

  useEffect(() => {
    onChange({
      sortBy: activeSortByValue,
      orderBy: activeOrderByValue,
    });
  }, [activeSortOption, activeOrderOption]);

  return (
    <Popover>
      <div className='flex w-auto'>
        <PopoverTrigger asChild>
          <Button variant='outline'>
            <ArrowDownUp className='mr-2 h-4 w-4' />
            Sort
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className='w-[32rem]' align='start'>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <div className='col-span-2'>
                <SortSelect
                  items={sortByOptions.map(({ name, value }) => ({ name, value }))}
                  placeholder='Sort by'
                  value={activeSortByValue}
                  onChange={onSortByOptionChange}
                />
              </div>
              <SortSelect
                items={sortByOptions[activeSortOption].orderByOptions}
                placeholder='Order by'
                value={activeOrderByValue}
                onChange={onOrderByOptionChange}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
