"use client";

import { User, Phone, FileText } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface BasicInfoStepProps {
  form: any;
  formData: any;
  setFormData: (data: any) => void;
}

const BRANCH_OPTIONS = ["CSD", "AIDS", "COMPS", "CIVIL", "MTRX", "MECH"];
const YEAR_OPTIONS = ["FE", "SE", "TE", "BE"];

export default function BasicInfoStep({
  form,
  formData,
  setFormData,
}: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <User className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Tell us about yourself
        </h3>
        <p className="text-gray-600">Let's start with your basic information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                {...form.register("name", { required: "Full name is required" })}
                value={formData.name}
                onChange={(e) => {
                  form.setValue("name", e.target.value);
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* IEN */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="ien" className="text-sm font-medium">
                IEN
              </Label>
              <Input
                id="ien"
                type="number"
                placeholder="Enter your IEN"
                {...form.register("ien")}
                value={formData.ien || ""}
                onChange={(e) => {
                  form.setValue("ien", e.target.value ? parseInt(e.target.value) : undefined);
                  setFormData({
                    ...formData,
                    ien: e.target.value ? parseInt(e.target.value) : undefined,
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Branch */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="branch" className="text-sm font-medium">
                Branch *
              </Label>
              <Select
                {...form.register("branch", { required: "Branch is required" })}
                value={formData.branch}
                onValueChange={(value) => {
                  form.setValue("branch", value);
                  setFormData({ ...formData, branch: value });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent>
                  {BRANCH_OPTIONS.map((branch) => (
                    <SelectItem key={branch} value={branch}>
                      {branch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.branch && (
                <p className="text-sm text-red-600">{form.formState.errors.branch.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Year of Study */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="yearofStudy" className="text-sm font-medium">
                Year of Study *
              </Label>
              <Select
                {...form.register("yearofStudy", { required: "Year of study is required" })}
                value={formData.yearofStudy}
                onValueChange={(value) => {
                  form.setValue("yearofStudy", value);
                  setFormData({ ...formData, yearofStudy: value });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  {YEAR_OPTIONS.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year === "FE"
                        ? "First Year"
                        : year === "SE"
                          ? "Second Year"
                          : year === "TE"
                            ? "Third Year"
                            : "Final Year"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.yearofStudy && (
                <p className="text-sm text-red-600">{form.formState.errors.yearofStudy.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Phone Number */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="number"
                placeholder="Enter your phone number"
                {...form.register("phoneNumber")}
                value={formData.phoneNumber || ""}
                onChange={(e) => {
                  form.setValue("phoneNumber", e.target.value ? parseInt(e.target.value) : undefined);
                  setFormData({
                    ...formData,
                    phoneNumber: e.target.value
                      ? parseInt(e.target.value)
                      : undefined,
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Bio */}
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label
                htmlFor="bio"
                className="text-sm font-medium flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us a bit about yourself, your interests, and goals..."
                {...form.register("bio")}
                value={formData.bio || ""}
                onChange={(e) => {
                  form.setValue("bio", e.target.value);
                  setFormData({ ...formData, bio: e.target.value });
                }}
                rows={4}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span></span>
                <span>{formData.bio?.length || 0}/500</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
