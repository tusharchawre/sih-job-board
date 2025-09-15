"use client";

import { Plus, X, ExternalLink, Code, FolderOpen } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectsStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

export default function ProjectsStep({
  form,
  formData,
  setFormData,
}: ProjectsStepProps) {
  const projects = formData.projects || [];

  const addProject = () => {
    const newProject = {
      title: "",
      description: "",
      link: "",
    };
    setFormData({ ...formData, projects: [...projects, newProject] });
  };

  const removeProject = (index: number) => {
    setFormData({
      ...formData,
      projects: projects.filter((_: any, i: number) => i !== index),
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setFormData({ ...formData, projects: updatedProjects });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Code className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
        <p className="text-gray-600">
          Showcase your best work and side projects
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project: any, index: number) => (
          <Card key={index} className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700">
                    Project {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor={`project-title-${index}`}
                    className="text-sm font-medium"
                  >
                    Project Title *
                  </Label>
                  <Input
                    id={`project-title-${index}`}
                    placeholder="e.g., E-commerce Website, Mobile App"
                    value={project.title}
                    onChange={(e) =>
                      updateProject(index, "title", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor={`project-description-${index}`}
                    className="text-sm font-medium"
                  >
                    Description *
                  </Label>
                  <Textarea
                    id={`project-description-${index}`}
                    placeholder="Describe your project, technologies used, and your role..."
                    value={project.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor={`project-link-${index}`}
                    className="text-sm font-medium"
                  >
                    Project Link (Optional)
                  </Label>
                  <div className="relative mt-1">
                    <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id={`project-link-${index}`}
                      type="url"
                      placeholder="https://github.com/username/project or https://yourproject.com"
                      value={project.link || ""}
                      onChange={(e) =>
                        updateProject(index, "link", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add Project Button */}
        <Card className="border-dashed border-2 border-gray-300 hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={addProject}
              className="w-full h-20 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-primary"
            >
              <Plus className="w-6 h-6" />
              <span>Add Project</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {projects.length === 0 && (
        <div className="text-center py-8">
          <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            No projects added yet
          </h4>
          <p className="text-gray-600 mb-4">
            Add your projects to showcase your skills and experience
          </p>
          <Button onClick={addProject} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Your First Project
          </Button>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900">Project Tips</h4>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Include projects that demonstrate your skills</li>
              <li>• Add both personal and academic projects</li>
              <li>
                • Provide clear descriptions of your role and technologies used
              </li>
              <li>• Include links to live demos or GitHub repositories</li>
              <li>• Quality over quantity - showcase your best work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
