export type User = {
  id: string
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive'
  lastLogin: string
}

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2026-02-17 14:30",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "2026-02-16 09:15",
  },
  {
    id: "3",
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "User",
    status: "Inactive",
    lastLogin: "2026-01-20 18:45",
  },
  // Add 10–20 more entries like this for realism (copy-paste and change names/emails)
  {
    id: "4",
    name: "Sara Lee",
    email: "sara@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2026-02-18 10:00",
  },
  // ... keep adding until ~15–20 rows
]