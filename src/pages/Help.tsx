// src/pages/Help.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Help() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Help & Support</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <details className="border rounded-lg p-3">
                <summary className="font-medium cursor-pointer">How do I upgrade my plan?</summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  Go to Subscriptions page and click "Upgrade" on the desired plan.
                </p>
              </details>
              {/* Add 3-4 more FAQ items */}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe your issue..." rows={5} />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}