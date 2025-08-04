"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Clock,
  Video,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  PieChart,
  LineChart,
  Activity
} from "lucide-react"

// Mock analytics data
const mockAnalytics = {
  overview: {
    totalVideosProcessed: 1247,
    totalEmailsSent: 1102,
    averageProcessingTime: "3.2 minutes",
    successRate: "94.2%"
  },
  weeklyStats: {
    videosThisWeek: 23,
    emailsThisWeek: 21,
    averageViewsPerVideo: "45.2K",
    topChannel: "TechEntrepreneur"
  },
  channelPerformance: [
    {
      name: "TechEntrepreneur",
      videos: 5,
      emails: 5,
      avgViews: "125K",
      engagement: "8.2%"
    },
    {
      name: "CodeWithSam", 
      videos: 3,
      emails: 3,
      avgViews: "89K",
      engagement: "6.8%"
    },
    {
      name: "StartupStories",
      videos: 4,
      emails: 4,
      avgViews: "67K",
      engagement: "5.4%"
    },
    {
      name: "DevTalks",
      videos: 2,
      emails: 2,
      avgViews: "34K",
      engagement: "4.1%"
    }
  ],
  monthlyTrends: {
    january: { videos: 89, emails: 82 },
    february: { videos: 95, emails: 91 },
    march: { videos: 103, emails: 98 },
    april: { videos: 87, emails: 84 },
    may: { videos: 92, emails: 89 },
    june: { videos: 98, emails: 94 }
  }
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">
            Track your channel performance and summary delivery metrics
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 border-border shadow-neo">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-base">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-main">{mockAnalytics.overview.totalVideosProcessed}</p>
                  <p className="text-sm font-medium text-muted-foreground">Videos Processed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-neo">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-base">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-main">{mockAnalytics.overview.totalEmailsSent}</p>
                  <p className="text-sm font-medium text-muted-foreground">Emails Delivered</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-neo">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-base">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-main">{mockAnalytics.overview.averageProcessingTime}</p>
                  <p className="text-sm font-medium text-muted-foreground">Avg Processing Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-neo">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-base">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-main">{mockAnalytics.overview.successRate}</p>
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-2 border-border shadow-neo">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                This Week's Performance
              </CardTitle>
              <CardDescription>
                Your channel monitoring activity for the past 7 days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 border border-border rounded-base">
                  <p className="text-2xl font-bold text-main">{mockAnalytics.weeklyStats.videosThisWeek}</p>
                  <p className="text-sm text-muted-foreground">Videos Processed</p>
                </div>
                <div className="text-center p-3 border border-border rounded-base">
                  <p className="text-2xl font-bold text-main">{mockAnalytics.weeklyStats.emailsThisWeek}</p>
                  <p className="text-sm text-muted-foreground">Emails Sent</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Average Views</span>
                  <span className="font-medium">{mockAnalytics.weeklyStats.averageViewsPerVideo}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Top Channel</span>
                  <span className="font-medium">{mockAnalytics.weeklyStats.topChannel}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-neo">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Channel Performance
              </CardTitle>
              <CardDescription>
                Top performing channels by engagement and volume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAnalytics.channelPerformance.map((channel, index) => (
                  <div key={channel.name} className="flex items-center justify-between p-3 border border-border rounded-base">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-main/10 rounded-base flex items-center justify-center">
                        <span className="text-xs font-bold text-main">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{channel.name}</p>
                        <p className="text-xs text-muted-foreground">{channel.videos} videos • {channel.emails} emails</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{channel.avgViews}</p>
                      <p className="text-xs text-muted-foreground">{channel.engagement} engagement</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends */}
        <Card className="border-2 border-border shadow-neo">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Monthly Trends
            </CardTitle>
            <CardDescription>
              Video processing and email delivery trends over the past 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.entries(mockAnalytics.monthlyTrends).map(([month, data]) => (
                  <div key={month} className="text-center p-3 border border-border rounded-base">
                    <p className="font-medium capitalize mb-2">{month}</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-1">
                        <Video className="h-3 w-3 text-blue-600" />
                        <span className="text-sm font-medium">{data.videos}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Mail className="h-3 w-3 text-green-600" />
                        <span className="text-sm font-medium">{data.emails}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-2 border-border shadow-neo">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                System Health
              </CardTitle>
              <CardDescription>
                Current status of monitoring and processing systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-base bg-green-50">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Video Processing</span>
                </div>
                <span className="text-sm text-green-600">Operational</span>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-base bg-green-50">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Email Delivery</span>
                </div>
                <span className="text-sm text-green-600">Operational</span>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-base bg-green-50">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Channel Monitoring</span>
                </div>
                <span className="text-sm text-green-600">Operational</span>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-base bg-yellow-50">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium">API Rate Limits</span>
                </div>
                <span className="text-sm text-yellow-600">85% Used</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border shadow-neo">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Processing
              </CardTitle>
              <CardDescription>
                Scheduled video checks and processing queue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground mb-3">
                Next channel checks scheduled:
              </div>
              
              {mockAnalytics.channelPerformance.slice(0, 3).map((channel, index) => (
                <div key={channel.name} className="flex items-center justify-between p-2 border border-border rounded-base">
                  <span className="font-medium">{channel.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {index === 0 ? "In 15 minutes" : index === 1 ? "In 1 hour" : "In 2 hours"}
                  </span>
                </div>
              ))}
              
              <div className="pt-3 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  Processing queue: <span className="font-medium">2 videos pending</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
