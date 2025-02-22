"use client";
import { Github, Globe2 } from "lucide-react";
import Link from "next/link";
{/*import { Button } from "@/components/ui/button";*/}
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: JSX.Element;
}

const productLinks: FooterSection = {
  title: "Resources",
  links: [
    { label: "Find Jobs", href: "https://placedynamics.co.za/jobs.html" },
    // { label: "Tool 1", href: "/about" },
    // { label: "Tool 2", href: "/resume/create" },
  ],
};

const supportLinks: FooterSection = {
  title: "Support",
  links: [
    { 
      label: "Contact",
      href: "mailto:aidan@adventusgroup.co.za",
      external: true
    },
  ],
};

// Updated socialLinks: Changed GitHub link and replaced email with a website link.
const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/Adventusgroup",
    icon: <Github className="h-5 w-5" />,
  },
  {
    platform: "Website",
    href: "https://adventusgroup.co.za",
    icon: <Globe2 className="h-5 w-5" />,
  },
];

const FooterSection = ({ section }: { section: FooterSection }) => (
  <div className="flex flex-col items-center md:items-start">
    <h3 className="font-semibold mb-2">{section.title}</h3>
    <ul className="space-y-2 text-sm">
      {section.links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
    <h3 className="font-semibold mb-2">Connect</h3>
    <div className="flex space-x-4">
      <TooltipProvider>
        {socialLinks.map(({ platform, href, icon }) => (
          <Tooltip key={platform}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{platform}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  </div>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-8">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Link href="/" className="group">
            <h2 className="text-xl font-bold group-hover:opacity-90 transition-opacity">
            PrecisionCV AI
            </h2>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
          AI-Powered Precision for a Standout CV
          </p>
          <div className="mt-4">
            {/*<Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top
            </Button>*/}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          <FooterSection section={productLinks} />
          <FooterSection section={supportLinks} />
          <SocialLinks />
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 px-4">
          {/* Line 1 */}
          <p className="text-center text-sm text-muted-foreground">
            A Product of the{" "}
            <a
              href="https://adventusgroup.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              AdVentus Group
            </a>
            . Designed by
          </p>

          {/* Line 2: Clickable Logo */}
          <p className="text-center mt-2">
            <a
              href="https://adventusgroup.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/logo.png"
                alt="AdVentus Group Logo"
                className="mx-auto h-16"
              />
            </a>
          </p>

          {/* Line 3: MIT Link now points to the GitHub README */}
           <p className="text-center text-sm text-muted-foreground mt-2">
           © {currentYear} PrecisionCV AI.{" "}
           <a
           href="https://github.com/maheshpaulj/ResumeItNow/blob/master/README.md"
           target="_blank"
           rel="noopener noreferrer"
            className="underline"
      >
             Licensed under MIT
          </a>
         </p>
       </div>
      </div>
    </footer>
  );
}