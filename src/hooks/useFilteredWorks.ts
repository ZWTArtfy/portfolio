import { useMemo } from 'react';
import type { WorkItem } from '../types';

export function useFilteredWorks(
  allItems: WorkItem[],
  activeFilter: string | null
): WorkItem[] {
  return useMemo(() => {
    if (!activeFilter) return allItems;
    return allItems.filter((item) => item.cat.id === activeFilter);
  }, [allItems, activeFilter]);
}
