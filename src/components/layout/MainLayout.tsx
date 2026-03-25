// src/components/layout/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSidebarStore } from '@/stores/useSidebarStore';

export default function MainLayout() {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <aside
        className={`
          hidden md:block
          flex-shrink-0
          border-r border-border
          bg-background
          fixed inset-y-0 left-0 z-20
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-56'}
        `}
      >
        <Sidebar />
      </aside>

      {/* Header + Main – margin adjusts dynamically */}
      <div 
        className={`
          flex-1 flex flex-col
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'md:ml-16' : 'md:ml-56'}
        `}
      >
        <Header />

        <main className="flex-1 overflow-y-auto bg-muted/20">
          <div className="p-4 md:p-6 lg:p-8 xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}