"use client";

import { useState } from "react";
import {
  Plus,
  X,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Frameworks & Libraries",
    icon: Globe,
    color: "bg-green-100 text-green-700",
  },
  { name: "Databases", icon: Database, color: "bg-purple-100 text-purple-700" },
  {
    name: "Mobile Development",
    icon: Smartphone,
    color: "bg-orange-100 text-orange-700",
  },
  { name: "Design & UI/UX", icon: Palette, color: "bg-pink-100 text-pink-700" },
];

const popularSkills = [
  // Programming Languages
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Ruby",
  // Frameworks & Libraries
  "React",
  "Vue.js",
  "Angular",
  "Next.js",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  "Laravel",
  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "Firebase",
  "Supabase",
  // Mobile Development
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Android",
  "iOS",
  // Design & UI/UX
  "Figma",
  "Adobe XD",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "CSS",
  "Tailwind CSS",
  "Sass",
];

export default function SkillsStep({ form, formData, setFormData }: SkillsStepProps) {
  const [newSkill, setNewSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const currentSkills = formData.skills || [];

  const addSkill = (skill: string) => {
    if (skill && !currentSkills.includes(skill)) {
      setFormData({ ...formData, skills: [...currentSkills, skill] });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: currentSkills.filter((skill: string) => skill !== skillToRemove),
    });
  };

  const handleAddCustomSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill("");
    }
  };

  const filteredSkills = selectedCategory
    ? popularSkills.filter((skill) =>
        skillCategories.some(
          (cat) =>
            cat.name.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(cat.name.toLowerCase())
        )
      )
    : popularSkills;

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Code className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Skills & Technologies
        </h3>
        <p className="text-gray-600">
          Add your technical skills and competencies
        </p>
      </div>

      {/* Current Skills */}
      {currentSkills.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <Label className="text-sm font-medium mb-3 block">
              Your Skills ({currentSkills.length})
            </Label>
            <div className="flex flex-wrap gap-2">
              {currentSkills.map((skill: string) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="flex items-center gap-2 px-3 py-1"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:bg-red-100 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Custom Skill */}
      <Card>
        <CardContent className="pt-6">
          <Label className="text-sm font-medium mb-3 block">
            Add Custom Skill
          </Label>
          <div className="flex gap-2">
            <Input
              placeholder="e.g., Machine Learning, Blockchain"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddCustomSkill()}
              className="flex-1"
            />
            <Button
              type="button"
              onClick={handleAddCustomSkill}
              disabled={!newSkill.trim()}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Skills */}
      <Card>
        <CardContent className="pt-6">
          <Label className="text-sm font-medium mb-4 block">
            Popular Skills
          </Label>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              type="button"
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Skills
            </Button>
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.name}
                  type="button"
                  variant={
                    selectedCategory === category.name ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-3 h-3" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filteredSkills.map((skill) => (
              <Button
                key={skill}
                type="button"
                variant={currentSkills.includes(skill) ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  currentSkills.includes(skill)
                    ? removeSkill(skill)
                    : addSkill(skill)
                }
                className="justify-start"
              >
                {skill}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900">Skills Tips</h4>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Add skills you're comfortable working with</li>
              <li>• Include both technical and soft skills</li>
              <li>• You can always update this list later</li>
              <li>• Be honest about your proficiency levels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
