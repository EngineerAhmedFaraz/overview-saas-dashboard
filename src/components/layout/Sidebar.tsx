// src/components/layout/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Navigation data ──
import { navItems, type NavItem } from '@/data/navigation';

// ── Use shared store ──
import { useSidebarStore } from '@/stores/useSidebarStore';

export default function Sidebar() {
  const location = useLocation();

  // Get state and toggle from store
  const { isCollapsed, toggleCollapse } = useSidebarStore();

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-background">
      {/* Header with logo name + toggle button */}
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <span className="text-xl font-bold truncate">Overview</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapse}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Navigation – icons only when collapsed */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item: NavItem) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center rounded-lg px-3 py-2.5 transition-all
                hover:bg-accent hover:text-accent-foreground
                ${isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}
                ${isCollapsed ? 'justify-center' : 'gap-3'}
              `}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className={`
          hidden md:block
          transition-all duration-300 ease-in-out
          border-r border-border bg-background
          ${isCollapsed ? 'w-16' : 'w-56'}
        `}
      >
        <SidebarContent />
      </div>

      {/* Mobile sheet – always full width */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed top-4 left-4 z-40">
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}