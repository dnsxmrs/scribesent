# Requirements Document

## Introduction

Scribesent is an open-source platform that automatically monitors YouTube channels, transcribes new videos, generates AI-powered summaries, and delivers them via email. The system enables users to self-host the service to track their favorite channels without manually watching every video, targeting content professionals, learning enthusiasts, and busy executives who need efficient ways to stay updated with video content.

## Requirements

### Requirement 1

**User Story:** As a user, I want to authenticate with Google OAuth, so that I can securely access the platform and have my email automatically configured.

#### Acceptance Criteria

1. WHEN a user visits the login page THEN the system SHALL display a Google OAuth login button
2. WHEN a user clicks the Google OAuth button THEN the system SHALL redirect to Google's authentication service
3. WHEN authentication is successful THEN the system SHALL create or update the user record in Supabase
4. WHEN a user is authenticated THEN the system SHALL redirect them to the dashboard
5. WHEN a user's Google OAuth email is retrieved THEN the system SHALL set it as their primary email address

### Requirement 2

**User Story:** As a user, I want to add YouTube channels to monitor, so that I can receive automated summaries of new videos from channels I'm interested in.

#### Acceptance Criteria

1. WHEN a user provides a YouTube channel URL THEN the system SHALL validate the channel exists using YouTube Data API
2. WHEN a channel is validated THEN the system SHALL allow the user to configure summary preferences
3. WHEN configuring preferences THEN the system SHALL offer summary formats: Standard, Detailed, Executive
4. WHEN configuring preferences THEN the system SHALL offer summary styles: Professional (default), Conversational, Academic, Bullet Points
5. WHEN a user saves channel configuration THEN the system SHALL store the channel and preferences in PostgreSQL
6. WHEN a user clicks "Test Latest Video" THEN the system SHALL immediately process the channel's most recent video
7. WHEN testing is complete THEN the system SHALL display test results and send a test email

### Requirement 3

**User Story:** As a user, I want to manage my tracked channels, so that I can view, edit, or remove channels from my monitoring list.

#### Acceptance Criteria

1. WHEN a user visits the channels page THEN the system SHALL display all tracked channels with status indicators
2. WHEN a user clicks edit on a channel THEN the system SHALL allow modification of summary preferences
3. WHEN a user clicks delete on a channel THEN the system SHALL remove the channel from monitoring
4. WHEN a user views channels THEN the system SHALL show last check timestamp for each channel
5. WHEN a user clicks "Test Latest Video" on an existing channel THEN the system SHALL process the latest video immediately

### Requirement 4

**User Story:** As the system, I want to automatically monitor channels for new videos, so that users receive timely summaries without manual intervention.

#### Acceptance Criteria

1. WHEN the background service runs every 15 minutes THEN the system SHALL poll all tracked channels via YouTube Data API
2. WHEN new videos are detected THEN the system SHALL store video metadata in the database
3. WHEN a new video is found THEN the system SHALL attempt to retrieve the transcript using youtube-transcript-api
4. IF a transcript is available THEN the system SHALL store it in the database
5. IF a transcript is unavailable THEN the system SHALL mark the video as transcript unavailable
6. WHEN processing videos THEN the system SHALL handle videos up to 4 hours in length
7. WHEN processing videos THEN the system SHALL support 10+ languages automatically

### Requirement 5

**User Story:** As the system, I want to generate AI-powered summaries, so that users receive concise, relevant content based on their preferences.

#### Acceptance Criteria

1. WHEN a transcript is available THEN the system SHALL send it to Gemini API with user's configured format and style
2. WHEN generating summaries THEN the system SHALL use channel-specific user preferences from the database
3. WHEN using Standard format THEN the system SHALL generate 1 paragraph summaries
4. WHEN using Detailed format THEN the system SHALL generate multiple paragraph summaries
5. WHEN using Executive format THEN the system SHALL generate key points and action items
6. WHEN generating summaries THEN the system SHALL maintain 90%+ transcription accuracy
7. WHEN summaries are generated THEN the system SHALL store them linked to the video record

### Requirement 6

**User Story:** As a user, I want to receive email notifications with video summaries, so that I can stay updated without visiting the platform.

#### Acceptance Criteria

1. WHEN a summary is generated THEN the system SHALL format an HTML email with the summary
2. WHEN sending emails THEN the system SHALL use the user's primary email address
3. WHEN sending emails THEN the system SHALL queue emails through Brevo API
4. WHEN emails are sent THEN the system SHALL achieve 95%+ delivery rate
5. WHEN emails are delivered THEN the system SHALL update video status in PostgreSQL
6. WHEN emails contain summaries THEN the system SHALL include links to full transcripts in the dashboard

### Requirement 7

**User Story:** As a user, I want to access my video history and transcripts, so that I can search and review past content.

#### Acceptance Criteria

1. WHEN a user visits the dashboard THEN the system SHALL display recent video summaries and quick stats
2. WHEN a user views history THEN the system SHALL list all processed videos with summaries
3. WHEN a user searches history THEN the system SHALL provide search and filter functionality
4. WHEN a user clicks on a video THEN the system SHALL display the full transcript
5. WHEN viewing transcripts THEN the system SHALL show video metadata and link to original YouTube video
6. WHEN storing transcripts THEN the system SHALL retain them for 30 days

### Requirement 8

**User Story:** As a user, I want to manage my account settings, so that I can control my email preferences and account data.

#### Acceptance Criteria

1. WHEN a user visits account settings THEN the system SHALL display profile information and connected Google account
2. WHEN a user visits email settings THEN the system SHALL show primary email address from Google OAuth
3. WHEN a user wants to change email THEN the system SHALL allow editing of primary email address
4. WHEN a user requests account deletion THEN the system SHALL delete all user data in compliance with GDPR/CCPA
5. WHEN managing settings THEN the system SHALL maintain user preferences per channel

### Requirement 9

**User Story:** As the system, I want to ensure reliable performance and security, so that users have a stable and secure experience.

#### Acceptance Criteria

1. WHEN the system operates THEN it SHALL support 100+ concurrent users initially
2. WHEN processing videos THEN the system SHALL handle 100+ videos per hour during peak times
3. WHEN users access the dashboard THEN pages SHALL load within 3 seconds
4. WHEN the system runs THEN it SHALL maintain 99% uptime with automatic retry for failed jobs
5. WHEN processing videos THEN the system SHALL implement smart duplicate detection
6. WHEN handling user data THEN the system SHALL implement RLS policies in Supabase
7. WHEN managing API keys THEN the system SHALL store them securely via environment variables