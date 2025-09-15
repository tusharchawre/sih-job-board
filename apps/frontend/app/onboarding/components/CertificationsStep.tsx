"use client";

import { Plus, X, Award, ExternalLink, FileText } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CertificationsStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

export default function CertificationsStep({
  form,
  formData,
  setFormData,
}: CertificationsStepProps) {
  const certifications = formData.certifications || [];

  const addCertification = () => {
    const newCertification = {
      title: "",
      description: "",
      link: "",
    };
    setFormData({
      ...formData,
      certifications: [...certifications, newCertification],
    });
  };

  const removeCertification = (index: number) => {
    setFormData({
      ...formData,
      certifications: certifications.filter((_: any, i: number) => i !== index),
    });
  };

  const updateCertification = (index: number, field: string, value: string) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    };
    setFormData({ ...formData, certifications: updatedCertifications });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Award className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
        <p className="text-gray-600">
          Add your professional certifications and achievements
        </p>
      </div>

      {/* Certifications List */}
      <div className="space-y-4">
        {certifications.map((certification: any, index: number) => (
          <Card key={index} className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-gray-700">
                    Certification {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCertification(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor={`cert-title-${index}`}
                    className="text-sm font-medium"
                  >
                    Certification Title *
                  </Label>
                  <Input
                    id={`cert-title-${index}`}
                    placeholder="e.g., AWS Certified Solutions Architect, Google Analytics Certified"
                    value={certification.title}
                    onChange={(e) =>
                      updateCertification(index, "title", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor={`cert-description-${index}`}
                    className="text-sm font-medium"
                  >
                    Description *
                  </Label>
                  <Textarea
                    id={`cert-description-${index}`}
                    placeholder="Describe what this certification covers and when you obtained it..."
                    value={certification.description}
                    onChange={(e) =>
                      updateCertification(index, "description", e.target.value)
                    }
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor={`cert-link-${index}`}
                    className="text-sm font-medium"
                  >
                    Verification Link (Optional)
                  </Label>
                  <div className="relative mt-1">
                    <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id={`cert-link-${index}`}
                      type="url"
                      placeholder="https://www.credly.com/badges/... or certificate URL"
                      value={certification.link || ""}
                      onChange={(e) =>
                        updateCertification(index, "link", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add Certification Button */}
        <Card className="border-dashed border-2 border-gray-300 hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={addCertification}
              className="w-full h-20 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-primary"
            >
              <Plus className="w-6 h-6" />
              <span>Add Certification</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {certifications.length === 0 && (
        <div className="text-center py-8">
          <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            No certifications added yet
          </h4>
          <p className="text-gray-600 mb-4">
            Add your professional certifications to strengthen your profile
          </p>
          <Button
            onClick={addCertification}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Your First Certification
          </Button>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900">Certification Tips</h4>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Include industry-recognized certifications</li>
              <li>• Add online course certificates (Coursera, Udemy, etc.)</li>
              <li>• Include coding bootcamp certificates</li>
              <li>• Provide verification links when available</li>
              <li>• Mention the issuing organization and date obtained</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
