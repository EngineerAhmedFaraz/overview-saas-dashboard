import { create } from 'zustand';

interface SidebarState {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isCollapsed: (() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    return saved ? JSON.parse(saved) : false;
  })(),
  toggleCollapse: () =>
    set((state) => {
      const newValue = !state.isCollapsed;
      localStorage.setItem('sidebar-collapsed', JSON.stringify(newValue));
      return { isCollapsed: newValue };
    }),
}));