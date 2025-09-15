"use client";

import {
  User,
  GraduationCap,
  Code,
  Link,
  FolderOpen,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReviewStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

export default function ReviewStep({ formData }: ReviewStepProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const getBranchName = (branch: string) => {
    const branchNames: { [key: string]: string } = {
      CSD: "Computer Science and Design",
      AIDS: "Artificial Intelligence and Data Science",
      COMPS: "Computer Engineering",
      CIVIL: "Civil Engineering",
      MTRX: "Mechanical Engineering",
      MECH: "Mechanical Engineering",
    };
    return branchNames[branch] || branch;
  };

  const getYearName = (year: string) => {
    const yearNames: { [key: string]: string } = {
      FE: "First Year",
      SE: "Second Year",
      TE: "Third Year",
      BE: "Final Year",
    };
    return yearNames[year] || year;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Review Your Profile
        </h3>
        <p className="text-gray-600">
          Please review all information before submitting
        </p>
      </div>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Name:</span>
              <p className="text-gray-900">{formData.name}</p>
            </div>
            {formData.ien && (
              <div>
                <span className="text-sm font-medium text-gray-600">IEN:</span>
                <p className="text-gray-900">{formData.ien}</p>
              </div>
            )}
            <div>
              <span className="text-sm font-medium text-gray-600">Branch:</span>
              <p className="text-gray-900">{getBranchName(formData.branch)}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">
                Year of Study:
              </span>
              <p className="text-gray-900">
                {getYearName(formData.yearofStudy)}
              </p>
            </div>
            {formData.phoneNumber && (
              <div>
                <span className="text-sm font-medium text-gray-600">
                  Phone:
                </span>
                <p className="text-gray-900">{formData.phoneNumber}</p>
              </div>
            )}
          </div>
          {formData.bio && (
            <div>
              <span className="text-sm font-medium text-gray-600">Bio:</span>
              <p className="text-gray-900 mt-1">{formData.bio}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Academic Information */}
      {(formData.cgpa ||
        formData.percentage10th ||
        formData.percentage12th) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Academic Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {formData.cgpa && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    CGPA:
                  </span>
                  <p className="text-gray-900">{formData.cgpa}/10</p>
                </div>
              )}
              {formData.percentage10th && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    10th %:
                  </span>
                  <p className="text-gray-900">{formData.percentage10th}%</p>
                </div>
              )}
              {formData.percentage12th && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    12th %:
                  </span>
                  <p className="text-gray-900">{formData.percentage12th}%</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Skills */}
      {formData.skills && formData.skills.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill: string) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Social Links */}
      {(formData.githubUrl ||
        formData.linkedinUrl ||
        formData.twitterUrl ||
        formData.portfolioUrl ||
        formData.resumeUrl) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="w-5 h-5" />
              Social Links & Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {formData.githubUrl && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    GitHub:
                  </span>
                  <a
                    href={formData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {formData.githubUrl}
                  </a>
                </div>
              )}
              {formData.linkedinUrl && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    LinkedIn:
                  </span>
                  <a
                    href={formData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {formData.linkedinUrl}
                  </a>
                </div>
              )}
              {formData.twitterUrl && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Twitter:
                  </span>
                  <a
                    href={formData.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {formData.twitterUrl}
                  </a>
                </div>
              )}
              {formData.portfolioUrl && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Portfolio:
                  </span>
                  <a
                    href={formData.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {formData.portfolioUrl}
                  </a>
                </div>
              )}
              {formData.resumeUrl && (
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Resume:
                  </span>
                  <a
                    href={formData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {formData.resumeUrl}
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Projects */}
      {formData.projects && formData.projects.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Projects ({formData.projects.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {formData.projects.map((project: any, index: number) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Certifications */}
      {formData.certifications && formData.certifications.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certifications ({formData.certifications.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {formData.certifications.map((cert: any, index: number) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">{cert.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {cert.description}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                    >
                      Verify Certification →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Work Experience */}
      {formData.workExperiences && formData.workExperiences.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Work Experience ({formData.workExperiences.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {formData.workExperiences.map((exp: any, index: number) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{exp.role}</h4>
                      <p className="text-gray-600">{exp.companyName}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(exp.startDate)} -{" "}
                      {exp.currentlyWorking
                        ? "Present"
                        : formatDate(exp.endDate || "")}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-green-900">Ready to Submit</h4>
            <p className="text-sm text-green-700 mt-1">
              Your profile looks great! Click "Complete Profile" to create your
              account and start exploring opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
