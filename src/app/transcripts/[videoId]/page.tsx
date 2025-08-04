"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Youtube, 
  ExternalLink,
  Calendar,
  Clock,
  User,
  Download,
  FileText,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface VideoData {
  id: string;
  title: string;
  channelName: string;
  channelUrl: string;
  videoUrl: string;
  duration: string;
  publishedDate: string;
  processedDate: string;
  summaryFormat: string;
  transcript: string;
  summary: string;
  thumbnailUrl: string;
  viewCount: string;
  likeCount: string;
}

const TranscriptViewerPage = () => {
  const params = useParams();
  const videoId = params.videoId as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  // Mock video data
  const mockVideoData: VideoData = {
    id: videoId,
    title: 'AI Revolution: What\'s Next in 2025',
    channelName: 'TechCrunch',
    channelUrl: 'https://youtube.com/@TechCrunch',
    videoUrl: 'https://youtube.com/watch?v=example1',
    duration: '14:32',
    publishedDate: '2025-01-02',
    processedDate: '2025-01-02',
    summaryFormat: 'Standard',
    thumbnailUrl: 'https://img.youtube.com/vi/example1/maxresdefault.jpg',
    viewCount: '1.2M',
    likeCount: '45K',
    transcript: `[00:00] Welcome back to TechCrunch! Today we're diving deep into the AI revolution and what we can expect in 2025.

[00:15] The landscape of artificial intelligence has changed dramatically over the past year. We've seen breakthrough developments in large language models, with new architectures that are more efficient and capable than ever before.

[00:32] One of the most significant trends we're observing is the integration of AI into everyday applications. From smart assistants that actually understand context to AI-powered development tools that can write complex code, the technology is becoming more accessible.

[00:58] Let's talk about the key players in this space. OpenAI continues to push boundaries with their GPT models, while Google's Gemini and Anthropic's Claude are making significant strides in reasoning capabilities.

[01:25] The hardware side is equally exciting. NVIDIA's new H200 chips are specifically designed for AI workloads, offering unprecedented performance for training and inference.

[01:45] But what does this mean for businesses and consumers? We're seeing three major trends emerge:

[02:00] First, AI democratization. Tools that were once available only to large tech companies are now accessible to small businesses and individual developers.

[02:18] Second, multimodal AI. Systems that can understand and generate text, images, audio, and video are becoming the norm rather than the exception.

[02:35] Third, AI agents. These are systems that can perform complex tasks autonomously, from scheduling meetings to conducting research and even writing code.

[02:52] The implications for the job market are significant. While some roles may be automated, we're also seeing the creation of entirely new categories of jobs focused on AI management, prompt engineering, and human-AI collaboration.

[03:15] Let's examine some specific use cases that are already showing promise...

[03:30] In healthcare, AI is being used for drug discovery, medical imaging analysis, and personalized treatment plans. Companies like DeepMind and Atomwise are making breakthrough discoveries that could revolutionize medicine.

[03:48] In education, personalized learning platforms powered by AI are helping students learn at their own pace with customized content and real-time feedback.

[04:05] The creative industries are being transformed as well. AI tools for video editing, music composition, and graphic design are enabling creators to produce high-quality content faster than ever.

[04:22] However, with great power comes great responsibility. The AI community is grappling with important questions about ethics, bias, and safety.

[04:35] Regulation is starting to catch up. The EU's AI Act and similar legislation in other countries are establishing frameworks for responsible AI development and deployment.

[04:52] One area of particular concern is deepfakes and misinformation. As AI becomes better at generating realistic content, the need for detection and verification tools becomes critical.

[05:10] On the positive side, we're seeing tremendous progress in AI safety research. Techniques like constitutional AI and red teaming are helping developers create more aligned and beneficial systems.

[05:28] Looking ahead to 2025, what can we expect? Here are my top five predictions:

[05:35] Prediction one: AI will become truly multimodal. We'll see systems that can seamlessly work with text, images, audio, and video in ways that feel natural and intuitive.

[05:52] Prediction two: Autonomous AI agents will go mainstream. These digital assistants will be able to complete complex, multi-step tasks with minimal human oversight.

[06:10] Prediction three: AI hardware will diversify. While NVIDIA currently dominates, we'll see more specialized chips from companies like Google, Apple, and emerging startups.

[06:28] Prediction four: The AI skills gap will drive new educational programs. Universities and online platforms will rapidly develop curricula to meet the demand for AI expertise.

[06:45] Prediction five: AI regulation will mature. We'll see clearer guidelines and standards that balance innovation with safety and ethical considerations.

[07:02] The economic impact of AI is already substantial, with McKinsey estimating that AI could contribute up to $13 trillion to global economic output by 2030.

[07:18] For entrepreneurs and investors, the AI space represents one of the most significant opportunities of our time. From infrastructure companies building the picks and shovels to application developers creating AI-powered solutions, there's potential across the entire stack.

[07:35] However, it's important to approach AI investments with realistic expectations. While the technology is powerful, successful implementation requires careful planning, quality data, and often significant technical expertise.

[07:52] For businesses considering AI adoption, my advice is to start small and focus on specific use cases where AI can provide clear value. Don't try to boil the ocean – identify one or two processes that could benefit from automation or enhancement.

[08:10] The talent shortage in AI is real, but it's also creating opportunities. If you're considering a career change, developing AI skills could be one of the best investments you can make in your future.

[08:28] That said, it's not just about technical skills. Understanding the ethical implications, business applications, and societal impact of AI is equally important.

[08:45] Let's talk about some of the challenges that remain. Despite all the progress, AI systems still struggle with common sense reasoning, long-term planning, and understanding context in the way humans do.

[09:02] Hallucinations – when AI systems generate false information with confidence – remain a significant problem that researchers are actively working to solve.

[09:18] The environmental impact of AI training and deployment is another concern. The energy requirements for training large models are substantial, though efficiency improvements are being made.

[09:35] Data privacy and security are critical considerations as AI systems require vast amounts of data to function effectively. Balancing performance with privacy protection is an ongoing challenge.

[09:52] The global nature of AI development also presents geopolitical challenges. Competition between nations for AI supremacy could have far-reaching implications for international relations and economic competitiveness.

[10:10] Despite these challenges, the potential benefits of AI are enormous. From solving climate change to advancing scientific research to improving quality of life, AI could help address some of humanity's greatest challenges.

[10:28] The key is ensuring that the benefits are distributed broadly and that the technology is developed and deployed responsibly.

[10:42] For content creators and media professionals, AI presents both opportunities and challenges. While AI can help with production and distribution, it also raises questions about authenticity and the value of human creativity.

[11:00] The next few years will be critical in shaping how AI integrates into our society. The decisions we make now about development, regulation, and implementation will have lasting consequences.

[11:18] For those looking to stay informed about AI developments, I recommend following key researchers and organizations, attending conferences, and experimenting with AI tools yourself.

[11:35] The democratization of AI means that anyone can start experimenting with these technologies. Platforms like Hugging Face, OpenAI's API, and Google Colab make it easier than ever to get hands-on experience.

[11:52] As we look toward 2025 and beyond, one thing is certain: AI will continue to be a transformative force across industries and society. The question isn't whether AI will change our world – it's how we'll adapt and ensure that change benefits everyone.

[12:10] That's a wrap on today's deep dive into the AI revolution. What are your thoughts on these predictions? Are you optimistic or concerned about AI's trajectory? Let me know in the comments below.

[12:25] Don't forget to subscribe for more tech insights and analysis. Until next time, this is TechCrunch, keeping you informed about the technologies that are shaping our future.

[12:40] Thanks for watching, and I'll see you in the next video!

[14:32] [End of transcript]`,
    summary: `## AI Revolution: Key Insights for 2025

### Main Themes
This TechCrunch video provides a comprehensive overview of the current AI landscape and predictions for 2025, covering technological advances, business implications, and societal challenges.

### Key Developments
- **Large Language Models**: Breakthrough developments in efficiency and capability
- **AI Integration**: Mainstream adoption in everyday applications and business tools
- **Hardware Advances**: NVIDIA's H200 chips and specialized AI hardware
- **Major Players**: OpenAI, Google Gemini, and Anthropic Claude leading innovation

### Three Major Trends
1. **AI Democratization**: Advanced tools becoming accessible to small businesses and individual developers
2. **Multimodal AI**: Systems that understand and generate text, images, audio, and video
3. **AI Agents**: Autonomous systems performing complex tasks independently

### Industry Applications
- **Healthcare**: Drug discovery, medical imaging, personalized treatment
- **Education**: Personalized learning platforms with real-time feedback
- **Creative Industries**: AI-powered video editing, music composition, and graphic design

### 2025 Predictions
1. Truly multimodal AI systems with seamless cross-format capabilities
2. Mainstream adoption of autonomous AI agents
3. Diversification of AI hardware beyond NVIDIA
4. New educational programs addressing the AI skills gap
5. Mature AI regulation balancing innovation with safety

### Challenges and Considerations
- **Technical Limitations**: Common sense reasoning and hallucination problems
- **Environmental Impact**: High energy requirements for model training
- **Ethical Concerns**: Data privacy, bias, and responsible development
- **Economic Impact**: Potential $13 trillion contribution to global output by 2030

### Business Recommendations
- Start with specific, high-value use cases rather than broad implementations
- Invest in AI skills development and talent acquisition
- Consider both technical capabilities and ethical implications
- Focus on quality data and careful planning for successful implementation

### Future Outlook
The video emphasizes that AI will continue to be transformative across industries, with the key being responsible development and broad distribution of benefits. Success will depend on balancing innovation with safety, ethics, and societal considerations.`
  };

  useEffect(() => {
    // Simulate API call to fetch video data
    const fetchVideoData = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setVideoData(mockVideoData);
      } catch (error) {
        console.error('Failed to fetch video data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);



  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <div className="h-10 w-40 bg-gray-200 border-2 border-black"></div>
            <div className="h-16 bg-gray-200 border-2 border-black"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 border-2 border-black"></div>
              <div className="h-96 bg-gray-200 border-2 border-black"></div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!videoData) {
    return (
      <DashboardLayout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Alert className="border-4 border-black bg-red-50">
            <AlertDescription className="font-bold text-red-800">
              Transcript not found. Please check the URL and try again.
            </AlertDescription>
          </Alert>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-black text-black mb-2">{videoData.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4 text-gray-600" />
                <span className="font-bold text-black">{videoData.channelName}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-gray-600" />
                <span className="font-bold text-black">{videoData.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4 text-gray-600" />
                <span className="font-bold text-black">
                  {new Date(videoData.publishedDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <div>
            <a 
              href={videoData.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="border-2 border-black font-bold bg-red-500 hover:bg-red-600 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                WATCH
              </Button>
            </a>
          </div>
        </div>



        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Summary */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black flex items-center">
                <Sparkles className="mr-2 h-6 w-6 text-blue-600" />
                AI SUMMARY
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <div 
                  className="whitespace-pre-wrap font-bold text-black leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: videoData.summary.replace(/### /g, '<h3 class="text-lg font-black text-black mt-4 mb-2">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/• /g, '• ') 
                  }}
                />
              </div>
              <div className="mt-6 pt-4 border-t-2 border-black">
                <Button 
                  variant="outline"
                  onClick={() => {
                    // Mock download functionality
                    const blob = new Blob([videoData.summary], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${videoData.title} - Summary.txt`;
                    a.click();
                  }}
                  className="border-2 border-black font-bold hover:bg-gray-100"
                >
                  <Download className="mr-2 h-4 w-4" />
                  DOWNLOAD
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Full Transcript */}
          <Card className="border-4 border-black bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-black text-black flex items-center">
                <FileText className="mr-2 h-6 w-6 text-gray-600" />
                FULL TRANSCRIPT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 overflow-y-auto bg-gray-50 border-2 border-black p-4">
                <div className="whitespace-pre-wrap font-bold text-sm leading-relaxed text-black">
                  {videoData.transcript}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-black">
                <Button 
                  variant="outline"
                  onClick={() => {
                    // Mock download functionality
                    const blob = new Blob([videoData.transcript], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${videoData.title} - Transcript.txt`;
                    a.click();
                  }}
                  className="border-2 border-black font-bold hover:bg-gray-100"
                >
                  <Download className="mr-2 h-4 w-4" />
                  DOWNLOAD
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TranscriptViewerPage;
