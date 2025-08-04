"use client";

import React from 'react';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Youtube, 
  ExternalLink,
  Calendar,
  Clock,
  User,
  Download
} from 'lucide-react';
import Link from 'next/link';

// Mock data for transcripts list
const mockTranscripts = [
  {
    id: '1',
    videoTitle: 'AI Revolution: What&apos;s Next in 2025',
    channelName: 'TechCrunch',
    channelUrl: 'https://youtube.com/@TechCrunch',
    videoUrl: 'https://youtube.com/watch?v=example1',
    duration: '14:32',
    publishedDate: '2025-01-02',
    processedDate: '2025-01-02',
    summaryFormat: 'Standard',
    status: 'completed'
  },
  {
    id: '2',
    videoTitle: 'iPhone 17 Leaks: Everything We Know',
    channelName: 'Marques Brownlee',
    channelUrl: 'https://youtube.com/@MKBHD',
    videoUrl: 'https://youtube.com/watch?v=example2',
    duration: '18:45',
    publishedDate: '2025-01-01',
    processedDate: '2025-01-01',
    summaryFormat: 'Detailed',
    status: 'completed'
  },
  {
    id: '3',
    videoTitle: 'React in 100 Seconds',
    channelName: 'Fireship',
    channelUrl: 'https://youtube.com/@Fireship',
    videoUrl: 'https://youtube.com/watch?v=example3',
    duration: '1:47',
    publishedDate: '2024-12-30',
    processedDate: '2024-12-30',
    summaryFormat: 'Key Insights',
    status: 'completed'
  },
  {
    id: '4',
    videoTitle: 'The Physics of Time Travel',
    channelName: 'Veritasium',
    channelUrl: 'https://youtube.com/@veritasium',
    videoUrl: 'https://youtube.com/watch?v=example4',
    duration: '22:18',
    publishedDate: '2024-12-28',
    processedDate: '2024-12-28',
    summaryFormat: 'Detailed',
    status: 'completed'
  },
  {
    id: '5',
    videoTitle: 'Building a $50,000 Gaming PC',
    channelName: 'Linus Tech Tips',
    channelUrl: 'https://youtube.com/@LinusTechTips',
    videoUrl: 'https://youtube.com/watch?v=example5',
    duration: '28:56',
    publishedDate: '2024-12-27',
    processedDate: '2024-12-27',
    summaryFormat: 'Standard',
    status: 'completed'
  }
];

const TranscriptsPage = () => {
  const [sortBy, setSortBy] = React.useState<'newest' | 'oldest' | 'channel'>('newest');
  const [filterBy, setFilterBy] = React.useState<'all' | 'standard' | 'detailed' | 'key-insights'>('all');

  const filteredAndSortedTranscripts = React.useMemo(() => {
    let filtered = mockTranscripts;
    
    // Filter by format
    if (filterBy !== 'all') {
      filtered = filtered.filter(t => 
        t.summaryFormat.toLowerCase().replace(' ', '-') === filterBy
      );
    }
    
    // Sort
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.processedDate).getTime() - new Date(a.processedDate).getTime());
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.processedDate).getTime() - new Date(b.processedDate).getTime());
      case 'channel':
        return filtered.sort((a, b) => a.channelName.localeCompare(b.channelName));
      default:
        return filtered;
    }
  }, [sortBy, filterBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black mb-2">TRANSCRIPT HISTORY</h1>
          <p className="text-lg text-gray-600 font-bold">
            View and search through all processed video transcripts and summaries
          </p>
        </div>

        {/* Filters and Sort */}
        <Card className="border-4 border-black bg-white mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <label className="text-sm font-bold text-black mr-2">SORT BY:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'channel')}
                  className="border-2 border-black font-bold px-3 py-1 bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="channel">Channel Name</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-black mr-2">FILTER BY FORMAT:</label>
                <select 
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value as 'all' | 'standard' | 'detailed' | 'key-insights')}
                  className="border-2 border-black font-bold px-3 py-1 bg-white"
                >
                  <option value="all">All Formats</option>
                  <option value="standard">Standard</option>
                  <option value="detailed">Detailed</option>
                  <option value="key-insights">Key Insights</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transcripts List */}
        <div className="space-y-6">
          {filteredAndSortedTranscripts.map((transcript) => (
            <Card key={transcript.id} className="border-4 border-black bg-white hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Video Title and Badges */}
                    <div className="flex items-start space-x-3 mb-3">
                      <Youtube className="h-6 w-6 text-red-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-black mb-2">
                          {transcript.videoTitle}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge 
                            variant="outline"
                            className="border-2 border-black font-bold"
                          >
                            {transcript.summaryFormat}
                          </Badge>
                          <Badge 
                            variant="outline"
                            className="border-2 border-black font-bold text-green-600"
                          >
                            COMPLETED
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Channel and Video Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-600" />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Channel</p>
                          <p className="font-black text-black">{transcript.channelName}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Duration</p>
                          <p className="font-black text-black">{transcript.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Published</p>
                          <p className="font-black text-black">{formatDate(transcript.publishedDate)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <div>
                          <p className="text-sm font-bold text-gray-600">Processed</p>
                          <p className="font-black text-black">{formatDate(transcript.processedDate)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap items-center gap-2">
                      <a 
                        href={transcript.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center space-x-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>WATCH ORIGINAL</span>
                      </a>
                      <span className="text-gray-300">|</span>
                      <a 
                        href={transcript.channelUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center space-x-1"
                      >
                        <Youtube className="h-3 w-3" />
                        <span>CHANNEL</span>
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2 ml-6">
                    <Link href={`/transcripts/${transcript.id}`}>
                      <Button className="border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white w-full">
                        VIEW DETAILS
                      </Button>
                    </Link>

                    <Button 
                      variant="outline"
                      className="border-2 border-black font-bold hover:bg-gray-100 w-full"
                      onClick={() => {
                        // Mock download functionality
                        alert('Transcript download feature coming soon!');
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      EXPORT
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredAndSortedTranscripts.length === 0 && (
            <Card className="border-4 border-black bg-white">
              <CardContent className="p-12 text-center">
                <Youtube className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-black mb-2">NO TRANSCRIPTS FOUND</h3>
                <p className="text-gray-600 font-bold mb-6">
                  {filterBy === 'all' 
                    ? 'No video transcripts have been processed yet.'
                    : `No transcripts found with ${filterBy.replace('-', ' ')} format.`
                  }
                </p>
                <Link href="/channels/add">
                  <Button className="border-2 border-black font-bold bg-blue-500 hover:bg-blue-600 text-white">
                    ADD A CHANNEL TO GET STARTED
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

export default TranscriptsPage;
