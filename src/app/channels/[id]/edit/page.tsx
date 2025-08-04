"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { 
  Youtube, 
  ArrowLeft,
  Loader2,
  Save,
  ExternalLink,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

interface ChannelData {
  id: string;
  name: string;
  channelUrl: string;
  subscriberCount: string;
  description: string;
  latestVideo: string;
  videoCount: string;
  status: 'active' | 'paused';
  summaryFormat: string;
  emailAddress: string;
  videosProcessed: number;
  dateAdded: string;
}

const EditChannelPage = () => {
  const router = useRouter();
  const params = useParams();
  const channelId = params.id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [channelData, setChannelData] = useState<ChannelData | null>(null);
  const [formData, setFormData] = useState({
    summaryFormat: '',
    emailAddress: '',
    isActive: true
  });

  useEffect(() => {
    // Mock data for specific channel
    const mockChannelData: ChannelData = {
      id: channelId,
      name: 'TechCrunch',
      channelUrl: 'https://youtube.com/@TechCrunch',
      subscriberCount: '2.8M',
      description: 'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups.',
      latestVideo: 'AI Revolution: What&apos;s Next in 2025',
      videoCount: '12,450',
      status: 'active',
      summaryFormat: 'standard',
      emailAddress: 'john.doe@gmail.com',
      videosProcessed: 45,
      dateAdded: '2025-01-15'
    };

    // Simulate API call to fetch channel data
    const fetchChannelData = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setChannelData(mockChannelData);
        setFormData({
          summaryFormat: mockChannelData.summaryFormat,
          emailAddress: mockChannelData.emailAddress,
          isActive: mockChannelData.status === 'active'
        });
      } catch (error) {
        console.error('Failed to fetch channel data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChannelData();
  }, [channelId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.summaryFormat) {
      alert('Please select a summary format');
      return;
    }

    if (!formData.emailAddress) {
      alert('Please enter an email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call to update channel
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success
      router.push('/channels?updated=true');
    } catch (error) {
        console.log('Error updating channel:', error);
      alert('Failed to update channel. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-20 bg-gray-200 border-2 border-black"></div>
              <div>
                <div className="h-8 w-48 bg-gray-200 border-2 border-black mb-2"></div>
                <div className="h-6 w-72 bg-gray-200 border-2 border-black"></div>
              </div>
            </div>
            <Card className="border-4 border-black bg-white">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="h-16 bg-gray-200 border-2 border-black"></div>
                  <div className="h-32 bg-gray-200 border-2 border-black"></div>
                  <div className="h-12 bg-gray-200 border-2 border-black"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!channelData) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Alert className="border-4 border-black bg-red-50">
            <AlertDescription className="font-bold text-red-800">
              Channel not found. Please check the URL and try again.
            </AlertDescription>
          </Alert>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/channels">
            <Button 
              variant="outline"
              className="mr-4 border-2 border-black font-bold hover:bg-blue-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-black text-black mb-2">EDIT CHANNEL</h1>
            <p className="text-lg text-gray-600 font-bold">
              Modify preferences for {channelData.name}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Channel Information (Read-only) */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black">
                CHANNEL INFORMATION
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Card className="border-2 border-black bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                      <Youtube className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-black text-black">
                          {channelData.name}
                        </h3>
                        <a 
                          href={channelData.channelUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-gray-600" />
                          <span className="font-bold text-black">
                            {channelData.subscriberCount} subscribers
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-gray-600" />
                          <span className="font-bold text-black">
                            {channelData.videoCount} videos
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-gray-600" />
                          <span className="font-bold text-black">
                            {channelData.videosProcessed} processed
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 font-bold mb-2">
                        {channelData.description}
                      </p>
                      <div className="bg-white border-2 border-black p-3">
                        <p className="text-sm font-bold text-gray-600">Latest Video:</p>
                        <p className="font-black text-black">
                          {channelData.latestVideo}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black">
                CHANNEL PREFERENCES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Channel Status */}
              <div className="flex items-center justify-between p-4 border-2 border-black bg-blue-50">
                <div>
                  <Label className="text-lg font-bold text-black">
                    Channel Status
                  </Label>
                  <p className="text-sm text-gray-600 font-bold">
                    Enable or disable monitoring for this channel
                  </p>
                </div>
                <Switch
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>

              {/* Summary Format */}
              <div>
                <Label className="text-lg font-bold text-black">
                  Summary Format *
                </Label>
                <Select 
                  value={formData.summaryFormat} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, summaryFormat: value }))}
                >
                  <SelectTrigger className="mt-2 border-2 border-black font-bold text-lg">
                    <SelectValue placeholder="Choose your preferred summary format" />
                  </SelectTrigger>
                  <SelectContent className="border-2 border-black bg-white">
                    <SelectItem value="standard" className="font-bold">
                      <div>
                        <div className="font-black">Standard</div>
                        <div className="text-sm text-gray-600">
                          Balanced summary with key points and takeaways
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="detailed" className="font-bold">
                      <div>
                        <div className="font-black">Detailed</div>
                        <div className="text-sm text-gray-600">
                          Comprehensive summary with timestamps and quotes
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="key-insights" className="font-bold">
                      <div>
                        <div className="font-black">Key Insights</div>
                        <div className="text-sm text-gray-600">
                          Focused on main insights and actionable items
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="emailAddress" className="text-lg font-bold text-black">
                  Email Address *
                </Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, emailAddress: e.target.value }))}
                  className="mt-2 border-2 border-black font-bold text-lg"
                  placeholder="your.email@gmail.com"
                />
                <p className="text-sm text-gray-600 font-bold mt-2">
                  Summaries will be sent to this email address
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-2 border-black bg-gray-50">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-600">
                    {channelData.videosProcessed}
                  </div>
                  <p className="text-sm font-bold text-gray-600">VIDEOS PROCESSED</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600">
                    {channelData.status === 'active' ? 'ACTIVE' : 'PAUSED'}
                  </div>
                  <p className="text-sm font-bold text-gray-600">STATUS</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-black">
                    {new Date(channelData.dateAdded).toLocaleDateString()}
                  </div>
                  <p className="text-sm font-bold text-gray-600">DATE ADDED</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Link href="/channels">
              <Button 
                variant="outline"
                className="border-2 border-black font-bold hover:bg-gray-100 px-8 py-3 text-lg"
                disabled={isSubmitting}
              >
                CANCEL
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={isSubmitting || !formData.summaryFormat || !formData.emailAddress}
              className="border-2 border-black font-bold bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  SAVING CHANGES...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-5 w-5" />
                  SAVE CHANGES
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Help Section */}
        <Card className="border-4 border-black bg-blue-50 mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-black text-black">EDITING TIPS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-black">Channel Status:</p>
                <p className="text-sm text-gray-700 font-bold">
                  Pausing a channel will stop monitoring new videos. You can resume anytime.
                </p>
              </div>
              <div>
                <p className="font-bold text-black">Summary Format Changes:</p>
                <p className="text-sm text-gray-700 font-bold">
                  New format will apply to future videos. Past summaries remain unchanged.
                </p>
              </div>
              <div>
                <p className="font-bold text-black">Email Updates:</p>
                <p className="text-sm text-gray-700 font-bold">
                  Changes take effect immediately for new video notifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EditChannelPage;
