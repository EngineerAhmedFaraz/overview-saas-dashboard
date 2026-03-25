import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Save, Upload } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/stores/useAuthStore';

export default function Profile() {
  const { user } = useAuthStore();

  // Dynamic user data with fallbacks
  const fullName = user?.name || 'Ahmed Faraz';
  const email = user?.email || 'ahmed@example.com';
  const location = user?.location || 'Hyderabad, Sindh, Pakistan';
  const phone = user?.phone || '+92 300 1234567';
  const joinedDate = user?.joinedDate || 'January 15, 2025';

  // Generate initials (e.g., AF, JD, etc.)
  const initials = fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">My Profile</h1>

      {/* Profile Header / Avatar Section */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                <AvatarImage src="/placeholder-avatar.jpg" alt={fullName} />
                <AvatarFallback className="text-3xl bg-primary/10 text-primary font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>

              {/* Camera icon overlay */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full border-2 border-background"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 space-y-2 text-center sm:text-left">
              <h2 className="text-2xl font-bold">{fullName}</h2>
              <p className="text-muted-foreground">{email}</p>
              <p className="text-sm text-muted-foreground">
                Joined on {joinedDate} • Admin
              </p>
            </div>
          </div>

          <Separator />

          {/* Form */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" defaultValue={fullName} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue={phone} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue={location} />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button variant="outline">Cancel</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Additional sections */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Last login:</span>
                <span className="text-muted-foreground">March 25, 2026 02:31 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Devices:</span>
                <span className="text-muted-foreground">2 active sessions</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Profile Picture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm font-medium">Drag & drop or click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG or GIF (max 2MB)
              </p>
              <Button variant="secondary" size="sm" className="mt-4">
                Choose file
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}