// src/data/navigation.ts

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Users2,
  CreditCard,
  Settings,
  Plug,
  Bell,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';


export type NavItem = {
  label: string;
  icon: LucideIcon;
  path: string;
  // You can easily extend later: disabled?: boolean; badge?: number; etc.
};

export const navItems: readonly NavItem[] = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    path: '/analytics',
  },
  {
    label: 'Users',
    icon: Users,
    path: '/users',
  },
  {
    label: 'Team',
    icon: Users2,
    path: '/team',
  },
  {
    label: 'Subscriptions',
    icon: CreditCard,
    path: '/subscriptions',
  },
  {
    label: 'Settings',
    icon: Settings,
    path: '/settings',
  },
  {
    label: 'Integrations',
    icon: Plug,
    path: '/integrations',
  },
  {
    label: 'Notifications',
    icon: Bell,
    path: '/notifications',
  },
  {
    label: 'Help',
    icon: HelpCircle,
    path: '/help',
  },
] as const;