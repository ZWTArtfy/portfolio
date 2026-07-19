export interface Category {
  id: string;
  name: string;
  emoji: string;
  folder: string;
  desc: string;
  color: 'peach' | 'mint' | 'sky' | 'lav' | 'coral' | 'yellow' | 'rose';
  files: string[];
}

export interface WorkItem {
  cat: Category;
  fn: string;
}

export interface LightboxState {
  isOpen: boolean;
  items: WorkItem[];
  currentIndex: number;
}
