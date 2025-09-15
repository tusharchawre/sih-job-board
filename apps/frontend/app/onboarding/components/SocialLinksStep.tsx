"use client";

import { Github, Linkedin, Twitter, Globe, FileText, Link } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface SocialLinksStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

const socialLinks = [
  {
    key: "githubUrl",
    label: "GitHub",
    placeholder: "https://github.com/yourusername",
    icon: Github,
    description: "Showcase your code repositories and contributions",
    color: "text-gray-900",
  },
  {
    key: "linkedinUrl",
    label: "LinkedIn",
    placeholder: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
    description: "Professional networking and career opportunities",
    color: "text-blue-600",
  },
  {
    key: "twitterUrl",
    label: "Twitter/X",
    placeholder: "https://twitter.com/yourusername",
    icon: Twitter,
    description: "Share your thoughts and connect with the community",
    color: "text-blue-400",
  },
  {
    key: "portfolioUrl",
    label: "Portfolio Website",
    placeholder: "https://yourportfolio.com",
    icon: Globe,
    description: "Your personal website or portfolio",
    color: "text-green-600",
  },
  {
    key: "resumeUrl",
    label: "Resume/CV",
    placeholder: "https://drive.google.com/file/...",
    icon: FileText,
    description: "Link to your resume or CV",
    color: "text-purple-600",
  },
];

export default function SocialLinksStep({
  form,
  formData,
  setFormData,
}: SocialLinksStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Link className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Social Links & Portfolio
        </h3>
        <p className="text-gray-600">
          Connect your online presence and showcase your work
        </p>
      </div>

      <div className="space-y-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          const currentValue = formData[link.key];

          return (
            <Card key={link.key}>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${link.color}`} />
                    <div>
                      <Label htmlFor={link.key} className="text-sm font-medium">
                        {link.label}
                      </Label>
                      <p className="text-xs text-gray-500">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  <Input
                    id={link.key}
                    type="url"
                    placeholder={link.placeholder}
                    {...form.register(link.key)}
                    value={currentValue || ""}
                    onChange={(e) => {
                      form.setValue(link.key, e.target.value);
                      setFormData({ ...formData, [link.key]: e.target.value });
                    }}
                  />

                  {currentValue && (
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Link added successfully
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Link className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900">Social Links Tips</h4>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• All links are optional - add only what you have</li>
              <li>• Make sure your GitHub profile showcases your best work</li>
              <li>• Keep your LinkedIn profile updated and professional</li>
              <li>
                • A portfolio website can significantly boost your profile
              </li>
              <li>
                • You can update these links anytime after completing your
                profile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
