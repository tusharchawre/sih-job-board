"use client";

import { GraduationCap, Award, TrendingUp } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface AcademicInfoStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

export default function AcademicInfoStep({
  form,
  formData,
  setFormData,
}: AcademicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <GraduationCap className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Academic Performance
        </h3>
        <p className="text-gray-600">Share your academic achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CGPA */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label
                htmlFor="cgpa"
                className="text-sm font-medium flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                Current CGPA
              </Label>
              <Input
                id="cgpa"
                type="number"
                step="0.01"
                min="0"
                max="10"
                placeholder="e.g., 8.5"
                {...form.register("cgpa")}
                value={formData.cgpa || ""}
                onChange={(e) => {
                  form.setValue("cgpa", e.target.value ? parseFloat(e.target.value) : undefined);
                  setFormData({
                    ...formData,
                    cgpa: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  });
                }}
              />
              <p className="text-xs text-gray-500">Out of 10</p>
            </div>
          </CardContent>
        </Card>

        {/* 10th Percentage */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label
                htmlFor="percentage10th"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                10th Percentage
              </Label>
              <Input
                id="percentage10th"
                type="number"
                step="0.01"
                min="0"
                max="100"
                placeholder="e.g., 85.5"
                {...form.register("percentage10th")}
                value={formData.percentage10th || ""}
                onChange={(e) => {
                  form.setValue("percentage10th", e.target.value ? parseFloat(e.target.value) : undefined);
                  setFormData({
                    ...formData,
                    percentage10th: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  });
                }}
              />
              <p className="text-xs text-gray-500">Out of 100</p>
            </div>
          </CardContent>
        </Card>

        {/* 12th Percentage */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label
                htmlFor="percentage12th"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                12th Percentage
              </Label>
              <Input
                id="percentage12th"
                type="number"
                step="0.01"
                min="0"
                max="100"
                placeholder="e.g., 88.2"
                {...form.register("percentage12th")}
                value={formData.percentage12th || ""}
                onChange={(e) => {
                  form.setValue("percentage12th", e.target.value ? parseFloat(e.target.value) : undefined);
                  setFormData({
                    ...formData,
                    percentage12th: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  });
                }}
              />
              <p className="text-xs text-gray-500">Out of 100</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900">Academic Information</h4>
            <p className="text-sm text-blue-700 mt-1">
              All academic fields are optional. You can fill them later or
              update them anytime. This information helps employers understand
              your academic background better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
