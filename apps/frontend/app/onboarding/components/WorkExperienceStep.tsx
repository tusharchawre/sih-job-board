"use client";

import { Plus, X, Building2, Calendar, Briefcase } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperienceStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

export default function WorkExperienceStep({
  form,
  formData,
  setFormData,
}: WorkExperienceStepProps) {
  const workExperiences = formData.workExperiences || [];

  const addWorkExperience = () => {
    const newExperience = {
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    };
    setFormData({
      ...formData,
      workExperiences: [...workExperiences, newExperience],
    });
  };

  const removeWorkExperience = (index: number) => {
    setFormData({
      ...formData,
      workExperiences: workExperiences.filter(
        (_: any, i: number) => i !== index
      ),
    });
  };

  const updateWorkExperience = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };

    // If currently working is checked, clear end date
    if (field === "currentlyWorking" && value === true) {
      updatedExperiences[index].endDate = "";
    }

    setFormData({ ...formData, workExperiences: updatedExperiences });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Briefcase className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
        <p className="text-gray-600">
          Share your professional experience and internships
        </p>
      </div>

      {/* Work Experience List */}
      <div className="space-y-4">
        {workExperiences.map((experience: any, index: number) => (
          <Card key={index} className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700">
                    Experience {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeWorkExperience(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor={`company-${index}`}
                      className="text-sm font-medium"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id={`company-${index}`}
                      placeholder="e.g., Google, Microsoft, Startup Inc."
                      value={experience.companyName}
                      onChange={(e) =>
                        updateWorkExperience(
                          index,
                          "companyName",
                          e.target.value
                        )
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor={`role-${index}`}
                      className="text-sm font-medium"
                    >
                      Role/Position *
                    </Label>
                    <Input
                      id={`role-${index}`}
                      placeholder="e.g., Software Engineer Intern, Frontend Developer"
                      value={experience.role}
                      onChange={(e) =>
                        updateWorkExperience(index, "role", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label
                      htmlFor={`start-date-${index}`}
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Start Date *
                    </Label>
                    <Input
                      id={`start-date-${index}`}
                      type="month"
                      value={experience.startDate}
                      onChange={(e) =>
                        updateWorkExperience(index, "startDate", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor={`end-date-${index}`}
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      End Date
                    </Label>
                    <Input
                      id={`end-date-${index}`}
                      type="month"
                      value={experience.endDate || ""}
                      onChange={(e) =>
                        updateWorkExperience(index, "endDate", e.target.value)
                      }
                      disabled={experience.currentlyWorking}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-end">
                    <div className="flex items-center space-x-2">
                      <input
                        id={`currently-working-${index}`}
                        type="checkbox"
                        checked={experience.currentlyWorking}
                        onChange={(e) =>
                          updateWorkExperience(
                            index,
                            "currentlyWorking",
                            e.target.checked
                          )
                        }
                        className="rounded border-gray-300"
                      />
                      <Label
                        htmlFor={`currently-working-${index}`}
                        className="text-sm font-medium"
                      >
                        Currently Working
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor={`description-${index}`}
                    className="text-sm font-medium"
                  >
                    Description *
                  </Label>
                  <Textarea
                    id={`description-${index}`}
                    placeholder="Describe your responsibilities, achievements, and key projects..."
                    value={experience.description}
                    onChange={(e) =>
                      updateWorkExperience(index, "description", e.target.value)
                    }
                    rows={3}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add Work Experience Button */}
        <Card className="border-dashed border-2 border-gray-300 hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={addWorkExperience}
              className="w-full h-20 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-primary"
            >
              <Plus className="w-6 h-6" />
              <span>Add Work Experience</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {workExperiences.length === 0 && (
        <div className="text-center py-8">
          <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            No work experience added yet
          </h4>
          <p className="text-gray-600 mb-4">
            Add your internships, part-time jobs, or freelance work
          </p>
          <Button
            onClick={addWorkExperience}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Your First Work Experience
          </Button>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900">Work Experience Tips</h4>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Include internships, part-time jobs, and freelance work</li>
              <li>• Highlight your key achievements and contributions</li>
              <li>• Mention technologies and tools you used</li>
              <li>• Quantify your impact where possible</li>
              <li>• Include both technical and soft skills gained</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
