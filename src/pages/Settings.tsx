import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Save } from 'lucide-react';
import { useThemeStore } from '@/stores/useThemeStore';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  // Get theme state from store
  const { theme } = useThemeStore();

  // Function to set specific theme
  // const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
  //   if (newTheme === 'system') {
  //     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  //     document.documentElement.classList.toggle('dark', systemTheme === 'dark');
  //     localStorage.setItem('theme', 'system');
  //   } else {
  //     document.documentElement.classList.toggle('dark', newTheme === 'dark');
  //     localStorage.setItem('theme', newTheme);
  //   }
  //   // You can also update zustand if needed, but since toggleTheme exists, we can use it for light/dark
  // };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Ahmed Faraz" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="ahmed@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Organization</Label>
                <Input id="company" defaultValue="My SaaS Startup" />
              </div>

              <Separator />

              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab - unchanged */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>

                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab - unchanged */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { label: 'New user registrations', default: true },
                  { label: 'Subscription changes', default: true },
                  { label: 'Security alerts', default: true },
                  { label: 'Marketing emails', default: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <p className="font-medium">{item.label}</p>
                    <Switch defaultChecked={item.default} />
                  </div>
                ))}
              </div>

              <Separator />

              <Button variant="outline">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Tab - NOW CONNECTED TO THEME */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="font-medium">Theme</p>
                <div className="flex gap-3">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => document.documentElement.classList.remove('dark')}
                  >
                    Light
                  </Button>

                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => document.documentElement.classList.add('dark')}
                  >
                    Dark
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                      document.documentElement.classList.toggle('dark', isDark);
                    }}
                  >
                    System
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Language</p>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Urdu</option>
                </select>
              </div>

              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Appearance
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}