// src/pages/Logout.tsx
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Logout() {
  const navigate = useNavigate();

  const confirmLogout = () => {
    // Clear auth here
    localStorage.removeItem('token');
    // useAuthStore.getState().logout(); // if using store

    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Log out?</CardTitle>
          <CardDescription>
            You will be signed out of your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button variant="destructive" onClick={confirmLogout}>
            Yes, Log Out
          </Button>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}