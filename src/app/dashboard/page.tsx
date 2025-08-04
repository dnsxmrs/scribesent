"use client";

import React from 'react';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Youtube, 
  Mail, 
  Clock, 
  Users, 
  PlayCircle,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { formatLocalDate } from '@/lib/date-utils';

// Mock data for dashboard
const mockStats = {
  totalChannels: 8,
  videosProcessed: 127,
  emailsSent: 94,
  lastUpdated: '2 minutes ago'
};

const mockChannels = [
  {
    id: '1',
    name: 'TechCrunch',
    channelUrl: 'https://youtube.com/@TechCrunch',
    subscriberCount: '2.8M',
    lastVideo: 'AI Revolution: What&apos;s Next in 2025',
    lastVideoDate: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    summaryFormat: 'Standard'
  },
  {
    id: '2',
    name: 'Marques Brownlee',
    channelUrl: 'https://youtube.com/@MKBHD',
    subscriberCount: '18.1M',
    lastVideo: 'iPhone 17 Leaks: Everything We Know',
    lastVideoDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    summaryFormat: 'Detailed'
  },
  {
    id: '3',
    name: 'Fireship',
    channelUrl: 'https://youtube.com/@Fireship',
    subscriberCount: '3.2M',
    lastVideo: 'React in 100 Seconds',
    lastVideoDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'paused',
    summaryFormat: 'Key Insights'
  }
];

const mockRecentSummaries = [
  {
    id: '1',
    videoTitle: 'AI Revolution: What&apos;s Next in 2025',
    channelName: 'TechCrunch',
    summary: 'This video discusses the rapid advancement of AI technology in 2025, covering breakthrough developments in LLMs, robotics, and autonomous systems. Key highlights include new GPT models, improved reasoning capabilities, and integration into everyday applications.',
    emailSent: true,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    format: 'Standard'
  },
  {
    id: '2',
    videoTitle: 'iPhone 17 Leaks: Everything We Know',
    channelName: 'Marques Brownlee',
    summary: 'Comprehensive overview of iPhone 17 rumors and leaks, including design changes, camera improvements, and new features. The video covers potential release dates, pricing, and comparison with current iPhone models.',
    emailSent: true,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    format: 'Detailed'
  },
  {
    id: '3',
    videoTitle: 'React in 100 Seconds',
    channelName: 'Fireship',
    summary: 'Quick introduction to React fundamentals, covering components, JSX, state management, and hooks. Perfect primer for developers new to React or those needing a refresher.',
    emailSent: false,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    format: 'Key Insights'
  }
];

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black mb-2">DASHBOARD</h1>
          <p className="text-lg text-gray-600 font-bold">
            Monitor your YouTube channels and video summaries
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-black bg-white shadow-lg rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xs font-bold text-gray-500 uppercase tracking-wider">CHANNELS</CardTitle>
                  <div className="text-3xl font-black text-black mt-1">{mockStats.totalChannels}</div>
                  <p className="text-xs text-gray-500">Active subscriptions</p>
                </div>
                <Users className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black bg-white shadow-lg rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xs font-bold text-gray-500 uppercase tracking-wider">PROCESSED</CardTitle>
                  <div className="text-3xl font-black text-black mt-1">{mockStats.videosProcessed}</div>
                  <p className="text-xs text-gray-500">Videos summarized</p>
                </div>
                <PlayCircle className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black bg-white shadow-lg rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xs font-bold text-gray-500 uppercase tracking-wider">EMAILS</CardTitle>
                  <div className="text-3xl font-black text-black mt-1">{mockStats.emailsSent}</div>
                  <p className="text-xs text-gray-500">Summaries delivered</p>
                </div>
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black bg-white shadow-lg rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xs font-bold text-gray-500 uppercase tracking-wider">UPDATED</CardTitle>
                  <div className="text-2xl font-black text-black mt-1">{mockStats.lastUpdated}</div>
                  <p className="text-xs text-gray-500">Last sync</p>
                </div>
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tracked Channels Overview */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-black text-black">TRACKED CHANNELS</CardTitle>
                <Link href="/channels">
                  <Button className="border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white">
                    VIEW ALL
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockChannels.map((channel) => (
                  <div key={channel.id} className="border-2 border-black p-4 bg-blue-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Youtube className="h-5 w-5 text-red-600" />
                        <h3 className="font-black text-black">{channel.name}</h3>
                        <Badge 
                          variant={channel.status === 'active' ? 'default' : 'secondary'}
                          className={`border-2 border-black font-bold ${
                            channel.status === 'active' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-400 text-white'
                          }`}
                        >
                          {channel.status.toUpperCase()}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-600 font-bold">
                        {channel.subscriberCount} subs
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 font-bold mb-1">
                      Latest: {channel.lastVideo}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="font-bold">{formatLocalDate(channel.lastVideoDate)}</span>
                      <span className="font-bold">Format: {channel.summaryFormat}</span>
                    </div>
                  </div>
                ))}
                {mockChannels.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 font-bold">No channels tracked yet</p>
                    <Link href="/channels/add">
                      <Button className="mt-2 border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white">
                        ADD YOUR FIRST CHANNEL
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Video Summaries */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-black text-black">RECENT SUMMARIES</CardTitle>
                <Link href="/transcripts">
                  <Button className="border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white">
                    VIEW ALL
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentSummaries.map((summary) => (
                  <div key={summary.id} className="border-2 border-black p-4 bg-blue-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline"
                          className="border-2 border-black font-bold text-blue-600"
                        >
                          {summary.format}
                        </Badge>
                        <Badge 
                          variant={summary.emailSent ? 'default' : 'secondary'}
                          className={`border-2 border-black font-bold ${
                            summary.emailSent 
                              ? 'bg-green-500 text-white' 
                              : 'bg-orange-500 text-white'
                          }`}
                        >
                          {summary.emailSent ? 'SENT' : 'PENDING'}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-600 font-bold">
                        {formatLocalDate(summary.createdAt)}
                      </span>
                    </div>
                    <h3 className="font-black text-black mb-1 text-sm">
                      {summary.videoTitle}
                    </h3>
                    <p className="text-sm text-gray-600 font-bold mb-2">
                      by {summary.channelName}
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {summary.summary.substring(0, 150)}...
                    </p>
                    <div className="mt-2 flex justify-end">
                      <Link href={`/transcripts/${summary.id}`}>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="border-2 border-black font-bold text-xs hover:bg-blue-100"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          READ FULL
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Alert */}
        <div className="mt-8">
          <Alert className="border-4 border-black bg-blue-50">
            <TrendingUp className="h-4 w-4" />
            <AlertDescription className="font-bold text-black">
              System is running smoothly! Last check completed {mockStats.lastUpdated}. 
              All {mockStats.totalChannels} channels are being monitored automatically.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
