import { Facebook, Linkedin, Slack } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
}

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'twitter' | 'clipboard';

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkdIn',
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: any) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: any) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: any) => `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`
  },
}