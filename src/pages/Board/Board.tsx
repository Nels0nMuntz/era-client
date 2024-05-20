import { BoardWithInfiniteloading, BoardWithPagination } from "@/components";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function Board() {
  const [infiniteScrollMode, setInfiniteScrollMode] = useState(false);  
  return (
    <div className='relative'>
      <div className='absolute right-8 top-4 flex items-center space-x-2'>
        <Switch
          checked={infiniteScrollMode}
          onCheckedChange={() => setInfiniteScrollMode(!infiniteScrollMode)}
          id='infinite-scroll'
        />
        <Label htmlFor='infinite-scroll'>Infinite scroll</Label>
      </div>
      {infiniteScrollMode ? <BoardWithInfiniteloading /> : <BoardWithPagination />}
    </div>
  );
}
