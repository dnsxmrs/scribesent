"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Trash2,
  Save,
  CheckCircle,
  AlertTriangle,
  Download,
  Calendar
} from 'lucide-react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  emailNotifications: boolean;
  primaryEmail: string;
  accountStatus: 'active' | 'suspended';
}

const SettingsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  // Mock user profile data
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 'user-123',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    avatar: 'https://github.com/shadcn.png',
    joinDate: '2024-12-15',
    emailNotifications: true,
    primaryEmail: 'john.doe@gmail.com',
    accountStatus: 'active'
  });

  const [formData, setFormData] = useState({
    name: userProfile.name,
    primaryEmail: userProfile.primaryEmail,
    emailNotifications: userProfile.emailNotifications
  });

  const handleSaveChanges = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update user profile
      setUserProfile(prev => ({
        ...prev,
        name: formData.name,
        primaryEmail: formData.primaryEmail,
        emailNotifications: formData.emailNotifications
      }));
      
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000);
    } catch (error) {
      console.log('Error saving settings:', error);
      alert('Failed to save changes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    // Simulate account deletion
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Account deletion process initiated. You will receive a confirmation email.');
  };

  const exportData = () => {
    // Mock data export
    const exportData = {
      profile: userProfile,
      exportDate: new Date().toISOString(),
      note: 'User data export from ScribeSent'
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scribesent-data-export.json';
    a.click();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black mb-2">ACCOUNT SETTINGS</h1>
          <p className="text-lg text-gray-600 font-bold">
            Manage your profile, preferences, and account security
          </p>
        </div>

        {/* Success Alert */}
        {showSuccessAlert && (
          <Alert className="border-2 border-black bg-green-50 mb-6">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="font-bold text-green-800">
              Settings saved successfully!
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-8">
          {/* Profile Information */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black flex items-center">
                <User className="mr-2 h-6 w-6 text-blue-600" />
                PROFILE INFORMATION
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Photo and Basic Info */}
              <div className="flex items-center space-x-6 p-4 border-2 border-black bg-blue-50">
                <Avatar className="h-20 w-20 border-4 border-black">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="bg-blue-500 text-white font-black text-xl">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-black">{userProfile.name}</h3>
                  <p className="text-gray-600 font-bold">{userProfile.email}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-bold text-gray-600">
                        Joined {formatDate(userProfile.joinDate)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className={`h-2 w-2 rounded-full ${
                        userProfile.accountStatus === 'active' ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                      <span className="text-sm font-bold text-gray-600 capitalize">
                        {userProfile.accountStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Edit Profile Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-lg font-bold text-black">
                    Display Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-2 border-2 border-black font-bold"
                    placeholder="Your display name"
                  />
                </div>

                <div>
                  <Label htmlFor="primaryEmail" className="text-lg font-bold text-black">
                    Primary Email Address
                  </Label>
                  <Input
                    id="primaryEmail"
                    type="email"
                    value={formData.primaryEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryEmail: e.target.value }))}
                    className="mt-2 border-2 border-black font-bold"
                    placeholder="your.email@gmail.com"
                  />
                  <p className="text-sm text-gray-600 font-bold mt-1">
                    Video summaries will be sent to this email address
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-black bg-gray-50">
                  <div>
                    <Label className="text-lg font-bold text-black">Email Notifications</Label>
                    <p className="text-sm text-gray-600 font-bold">
                      Receive email notifications for new video summaries
                    </p>
                  </div>
                  <Switch
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, emailNotifications: checked }))}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black flex items-center">
                <Download className="mr-2 h-6 w-6 text-gray-600" />
                DATA & PRIVACY
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border-2 border-black bg-gray-50">
                <h3 className="font-black text-black mb-2">Export Your Data</h3>
                <p className="text-sm text-gray-600 font-bold mb-4">
                  Download a copy of all your data including channels, transcripts, and account information.
                </p>
                <Button 
                  onClick={exportData}
                  className="border-2 border-black font-bold bg-gray-500 hover:bg-gray-600 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  EXPORT DATA
                </Button>
              </div>

              <div className="p-4 border-2 border-black bg-red-50">
                <h3 className="font-black text-black mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                  Delete Account
                </h3>
                <p className="text-sm text-gray-600 font-bold mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                      variant="outline"
                      className="border-2 border-black font-bold hover:bg-red-100 text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      DELETE ACCOUNT
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="border-4 border-black bg-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-black text-black flex items-center">
                        <AlertTriangle className="mr-2 h-6 w-6 text-red-600" />
                        DELETE ACCOUNT?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="font-bold">
                        This action is permanent and cannot be undone. All your data will be deleted including:
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="my-4 p-4 border-2 border-black bg-red-50">
                      <ul className="list-disc list-inside space-y-1 text-sm font-bold text-red-800">
                        <li>All tracked YouTube channels</li>
                        <li>All processed video transcripts</li>
                        <li>Email notification history</li>
                        <li>Account preferences and settings</li>
                        <li>Connected Google account authentication</li>
                      </ul>
                    </div>
                    <AlertDialogDescription className="font-bold">
                      Are you absolutely sure you want to delete your account?
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-2 border-black font-bold">
                        CANCEL
                      </AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleDeleteAccount}
                        className="border-2 border-black font-bold bg-red-500 hover:bg-red-600 text-white"
                      >
                        YES, DELETE ACCOUNT
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>

          {/* Save Changes Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSaveChanges}
              disabled={isLoading}
              className="border-2 border-black font-bold bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            >
              {isLoading ? (
                <>
                  <div className="mr-2 h-5 w-5 animate-spin border-2 border-white border-t-transparent rounded-full"></div>
                  SAVING...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-5 w-5" />
                  SAVE CHANGES
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
