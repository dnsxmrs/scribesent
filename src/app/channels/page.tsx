"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import { 
  Youtube, 
  Plus,
  Edit,
  Trash2,
  TestTube,
  Clock,
  ExternalLink,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';
import Link from 'next/link';

// Mock data for channels
const mockChannels = [
  {
    id: '1',
    name: 'TechCrunch',
    channelUrl: 'https://youtube.com/@TechCrunch',
    subscriberCount: '2.8M',
    lastVideo: 'AI Revolution: What\'s Next in 2025',
    lastVideoDate: '3 hours ago',
    lastCheck: '2 minutes ago',
    status: 'active',
    summaryFormat: 'Standard',
    emailAddress: 'john.doe@gmail.com',
    videosProcessed: 45
  },
  {
    id: '2', 
    name: 'Marques Brownlee',
    channelUrl: 'https://youtube.com/@MKBHD',
    subscriberCount: '18.1M',
    lastVideo: 'iPhone 17 Leaks: Everything We Know',
    lastVideoDate: '1 day ago',
    lastCheck: '5 minutes ago',
    status: 'active',
    summaryFormat: 'Detailed',
    emailAddress: 'john.doe@gmail.com',
    videosProcessed: 23
  },
  {
    id: '3',
    name: 'Fireship',
    channelUrl: 'https://youtube.com/@Fireship',
    subscriberCount: '3.2M',
    lastVideo: 'React in 100 Seconds',
    lastVideoDate: '2 days ago',
    lastCheck: '1 hour ago', 
    status: 'paused',
    summaryFormat: 'Key Insights',
    emailAddress: 'john.doe@gmail.com',
    videosProcessed: 18
  },
  {
    id: '4',
    name: 'Veritasium',
    channelUrl: 'https://youtube.com/@veritasium',
    subscriberCount: '14.2M',
    lastVideo: 'The Physics of Time Travel',
    lastVideoDate: '4 days ago',
    lastCheck: '15 minutes ago',
    status: 'active',
    summaryFormat: 'Detailed',
    emailAddress: 'john.doe@gmail.com',
    videosProcessed: 31
  },
  {
    id: '5',
    name: 'Linus Tech Tips',
    channelUrl: 'https://youtube.com/@LinusTechTips',
    subscriberCount: '15.7M',
    lastVideo: 'Building a $50,000 Gaming PC',
    lastVideoDate: '12 hours ago',
    lastCheck: '30 seconds ago',
    status: 'active',
    summaryFormat: 'Standard',
    emailAddress: 'john.doe@gmail.com',
    videosProcessed: 67
  }
];

const ChannelsPage = () => {
  const [channels, setChannels] = useState(mockChannels);
  const [testingChannel, setTestingChannel] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<{ [key: string]: { success: boolean; message: string } }>({});

  const handleTestChannel = async (channelId: string) => {
    setTestingChannel(channelId);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock test result
    const success = Math.random() > 0.2; // 80% success rate
    setTestResults(prev => ({
      ...prev,
      [channelId]: {
        success,
        message: success 
          ? 'Test successful! Latest video processed and email sent.'
          : 'Test failed. Unable to process latest video. Check channel settings.'
      }
    }));
    
    setTestingChannel(null);
  };

  const handleDeleteChannel = (channelId: string) => {
    setChannels(prev => prev.filter(channel => channel.id !== channelId));
  };

  const toggleChannelStatus = (channelId: string) => {
    setChannels(prev => prev.map(channel => 
      channel.id === channelId 
        ? { ...channel, status: channel.status === 'active' ? 'paused' : 'active' }
        : channel
    ));
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-black mb-2">CHANNELS</h1>
            <p className="text-lg text-gray-600 font-bold">
              Manage your YouTube channel subscriptions
            </p>
          </div>
          <Link href="/channels/add">
            <Button className="border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3">
              <Plus className="mr-2 h-5 w-5" />
              ADD CHANNEL
            </Button>
          </Link>
        </div>

        {/* Channels List */}
        <div className="space-y-6">
          {channels.map((channel) => (
            <Card key={channel.id} className="border-4 border-black bg-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  {/* Channel Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Youtube className="h-6 w-6 text-red-600" />
                      <h3 className="text-xl font-black text-black">{channel.name}</h3>
                      <Badge 
                        variant={channel.status === 'active' ? 'default' : 'secondary'}
                        className={`border-2 border-black font-bold ${
                          channel.status === 'active' 
                            ? 'bg-green-500 text-white hover:bg-green-600' 
                            : 'bg-gray-400 text-white hover:bg-gray-500'
                        }`}
                      >
                        {channel.status.toUpperCase()}
                      </Badge>
                      <a 
                        href={channel.channelUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-bold text-gray-600">Subscribers</p>
                        <p className="font-black text-black">{channel.subscriberCount}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600">Format</p>
                        <p className="font-black text-black">{channel.summaryFormat}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600">Email</p>
                        <p className="font-black text-black text-sm">{channel.emailAddress}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600">Videos Processed</p>
                        <p className="font-black text-black">{channel.videosProcessed}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-2 border-black p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-gray-600">Latest Video</p>
                          <p className="font-black text-black">{channel.lastVideo}</p>
                          <p className="text-xs text-gray-500 font-bold">{channel.lastVideoDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-600">Last Check</p>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <p className="text-sm font-black text-black">{channel.lastCheck}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Test Results */}
                    {testResults[channel.id] && (
                      <Alert className={`border-2 border-black mb-4 ${
                        testResults[channel.id].success ? 'bg-green-50' : 'bg-red-50'
                      }`}>
                        {testResults[channel.id].success ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        <AlertDescription className="font-bold">
                          {testResults[channel.id].message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-3 ml-6">
                    <Button
                      onClick={() => handleTestChannel(channel.id)}
                      disabled={testingChannel === channel.id}
                      className="border-2 border-black font-bold bg-green-500 hover:bg-green-600 text-white"
                    >
                      {testingChannel === channel.id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          TESTING...
                        </>
                      ) : (
                        <>
                          <TestTube className="mr-2 h-4 w-4" />
                          TEST
                        </>
                      )}
                    </Button>

                    <Link href={`/channels/${channel.id}/edit`}>
                      <Button 
                        variant="outline"
                        className="w-full border-2 border-black font-bold hover:bg-blue-100"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        EDIT
                      </Button>
                    </Link>

                    <Button
                      onClick={() => toggleChannelStatus(channel.id)}
                      variant="outline"
                      className={`w-full border-2 border-black font-bold ${
                        channel.status === 'active' 
                          ? 'hover:bg-orange-100' 
                          : 'hover:bg-green-100'
                      }`}
                    >
                      {channel.status === 'active' ? 'PAUSE' : 'RESUME'}
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button 
                          variant="outline"
                          className="w-full border-2 border-black font-bold hover:bg-red-100 text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          DELETE
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="border-4 border-black bg-white">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-black text-black">
                            DELETE CHANNEL?
                          </AlertDialogTitle>
                          <AlertDialogDescription className="font-bold">
                            Are you sure you want to delete "{channel.name}"? This action cannot be undone. 
                            All processed videos and summaries will be permanently removed.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="border-2 border-black font-bold">
                            CANCEL
                          </AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteChannel(channel.id)}
                            className="border-2 border-black font-bold bg-red-500 hover:bg-red-600 text-white"
                          >
                            DELETE
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {channels.length === 0 && (
            <Card className="border-4 border-black bg-white">
              <CardContent className="p-12 text-center">
                <Youtube className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-black mb-2">NO CHANNELS YET</h3>
                <p className="text-gray-600 font-bold mb-6">
                  Add your first YouTube channel to start receiving video summaries
                </p>
                <Link href="/channels/add">
                  <Button className="border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="mr-2 h-5 w-5" />
                    ADD YOUR FIRST CHANNEL
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChannelsPage;
