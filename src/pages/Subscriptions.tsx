// src/pages/Subscriptions.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  { name: 'Free', price: '$0', features: ['Basic analytics', '5 users', 'Community support'], current: false },
  { name: 'Pro', price: '$29', features: ['Everything in Free', 'Unlimited users', 'Priority support', 'API access'], current: true },
  { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'SLA'], current: false },
];

export default function Subscriptions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subscriptions & Billing</h1>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Pro Plan</h3>
              <p className="text-sm text-muted-foreground">Next billing: April 15, 2026</p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.current ? 'border-primary border-2' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {plan.name}
                {plan.current && <Badge>Current</Badge>}
              </CardTitle>
              <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/mo</span></p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6" variant={plan.current ? 'outline' : 'default'} disabled={plan.current}>
                {plan.current ? 'Current Plan' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Upgrade'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}