// src/pages/Integrations.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';

const integrations = [
  { name: 'Slack', status: 'Connected', description: 'Notifications & alerts' },
  { name: 'Zapier', status: 'Not connected', description: 'Automation workflows' },
  { name: 'Google Analytics', status: 'Connected', description: 'Traffic & user insights' },
  { name: 'Stripe', status: 'Connected', description: 'Payments & billing' },
];

export default function Integrations() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Integrations</h1>

      <Card>
        <CardHeader>
          <CardTitle>Connected Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="font-medium">{integration.name}</p>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={integration.status === 'Connected' ? 'default' : 'secondary'}>
                    {integration.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-6">
            <Plus className="mr-2 h-4 w-4" /> Add Integration
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}