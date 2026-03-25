// src/pages/Notifications.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';

const notifications = [
  { id: 1, title: 'New user signed up', time: '2 minutes ago', read: false },
  { id: 2, title: 'Subscription renewed', time: '1 hour ago', read: true },
  { id: 3, title: 'Server maintenance completed', time: 'Yesterday', read: true },
];

export default function Notifications() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Notifications</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`flex items-start justify-between border-b pb-4 last:border-0 ${
                  !notif.read ? 'bg-muted/50 p-3 rounded-lg' : ''
                }`}
              >
                <div>
                  <p className={`font-medium ${!notif.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {notif.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{notif.time}</p>
                </div>
                {!notif.read && <Badge variant="default">New</Badge>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}