"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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

import { 
  Youtube, 
  Loader2,
  Users,
  Calendar
} from 'lucide-react';
import Link from 'next/link';



const AddChannelPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    channelUrl: '',
    summaryFormat: '',
    emailAddress: 'john.doe@gmail.com' // Default from Google OAuth
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData(prev => ({ ...prev, channelUrl: url }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.channelUrl.trim()) {
      alert('Please enter a YouTube channel URL');
      return;
    }

    if (!formData.summaryFormat) {
      alert('Please select a summary format');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call to save channel
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success
      router.push('/channels?added=true');
    } catch (error) {
      alert('Failed to add channel. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black mb-2">ADD CHANNEL</h1>
          <p className="text-lg text-gray-600 font-bold">
            Add a new YouTube channel to track and receive summaries
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Channel URL */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black">
                STEP 1: ENTER CHANNEL URL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="channelUrl" className="text-lg font-bold text-black">
                  YouTube Channel URL *
                </Label>
                <Input
                  id="channelUrl"
                  type="url"
                  placeholder="https://youtube.com/@channelname or https://youtube.com/channel/UC..."
                  value={formData.channelUrl}
                  onChange={handleUrlChange}
                  className="mt-2 border-2 border-black font-bold text-lg"
                />
                <p className="text-sm text-gray-600 font-bold mt-2">
                  Supported formats: @username, /channel/ID, /c/customname, /user/username
                </p>
              </div>

            </CardContent>
          </Card>

          {/* Step 2: Preferences */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black">
                STEP 2: CONFIGURE PREFERENCES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                </CardContent>
              </Card>

              {/* Submit Button */}
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
                  disabled={isSubmitting || !formData.summaryFormat}
                  className="border-2 border-black font-bold bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ADDING CHANNEL...
                    </>
                  ) : (
                    'ADD CHANNEL'
                  )}
                </Button>
              </div>
            </form>

        {/* Help Section */}
        <Card className="border-4 border-black bg-blue-50 mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-black text-black">NEED HELP?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-black">How to find a YouTube channel URL:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 font-bold ml-4">
                  <li>Go to the YouTube channel you want to track</li>
                  <li>Copy the URL from your browser's address bar</li>
                  <li>Paste it into the field above and click "Validate"</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-black">Summary Formats:</p>
                <ul className="space-y-1 text-sm text-gray-700 font-bold ml-4">
                  <li><strong>Standard:</strong> 2-3 paragraph summary with main points</li>
                  <li><strong>Detailed:</strong> Comprehensive breakdown with timestamps</li>
                  <li><strong>Key Insights:</strong> Bullet points with actionable takeaways</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AddChannelPage;
