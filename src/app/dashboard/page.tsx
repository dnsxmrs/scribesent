"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-bounce-subtle mb-4">
            <Logo />
          </div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Logo />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-base border-2 border-border"
                  />
                )}
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">
                    {session.user?.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {session.user?.email}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, {session.user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Here&apos;s what&apos;s happening with your ScribeSent account today.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Email Analytics Card */}
          <Card className="p-6 border-2 border-border shadow-neo">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Email Analytics</h3>
              <div className="text-2xl">📧</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Emails Sent</span>
                <span className="font-bold text-main">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Open Rate</span>
                <span className="font-bold text-main">68.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Click Rate</span>
                <span className="font-bold text-main">24.3%</span>
              </div>
            </div>
          </Card>

          {/* Templates Card */}
          <Card className="p-6 border-2 border-border shadow-neo">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Templates</h3>
              <div className="text-2xl">📝</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Templates</span>
                <span className="font-bold text-main">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Most Used</span>
                <span className="font-bold text-main">Welcome Series</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Conversion Rate</span>
                <span className="font-bold text-main">45.2%</span>
              </div>
            </div>
          </Card>

          {/* Recent Activity Card */}
          <Card className="p-6 border-2 border-border shadow-neo">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Recent Activity</h3>
              <div className="text-2xl">⚡</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Campaign</span>
                <span className="font-bold text-main">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Templates Created</span>
                <span className="font-bold text-main">3 today</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-bold text-green-600">Active</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-16 text-base" variant="default">
            📧 Send Campaign
          </Button>
          <Button className="h-16 text-base" variant="outline">
            📝 Create Template
          </Button>
          <Button className="h-16 text-base" variant="outline">
            📊 View Analytics
          </Button>
          <Button className="h-16 text-base" variant="outline">
            ⚙️ Settings
          </Button>
        </div>

        {/* User Profile Card */}
        <div className="mt-8">
          <Card className="p-6 border-2 border-border shadow-neo">
            <h3 className="text-lg font-bold text-foreground mb-4">Account Information</h3>
            <div className="flex items-center space-x-4">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-16 h-16 rounded-base border-2 border-border"
                />
              )}
              <div className="space-y-1">
                <p className="font-bold text-foreground">{session.user?.name}</p>
                <p className="text-muted-foreground">{session.user?.email}</p>
                <p className="text-sm text-muted-foreground">User ID: {session.user?.id}</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
