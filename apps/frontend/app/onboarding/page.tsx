"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Import step components
import BasicInfoStep from "./components/BasicInfoStep";
import AcademicInfoStep from "./components/AcademicInfoStep";
import SkillsStep from "./components/SkillsStep";
import SocialLinksStep from "./components/SocialLinksStep";
import ProjectsStep from "./components/ProjectsStep";
import CertificationsStep from "./components/CertificationsStep";
import WorkExperienceStep from "./components/WorkExperienceStep";
import ReviewStep from "./components/ReviewStep";

const TOTAL_STEPS = 8;

const stepTitles = [
  "Basic Information",
  "Academic Details",
  "Skills & Technologies",
  "Social Links",
  "Projects",
  "Certifications",
  "Work Experience",
  "Review & Submit",
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    branch: "CSD",
    yearofStudy: "FE",
    skills: [],
    projects: [],
    certifications: [],
    workExperiences: [],
  });

  const form = useForm({
    defaultValues: formData,
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
    trigger,
  } = form;

  const nextStep = async () => {
    if (currentStep < TOTAL_STEPS) {
      // Validate current step before proceeding
      const isValid = await trigger();
      if (isValid) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call here
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle success (redirect or show success message)
      alert("Profile created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error creating profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  const renderStep = () => {
    const stepProps = { form, formData, setFormData };

    switch (currentStep) {
      case 1:
        return <BasicInfoStep {...stepProps} />;
      case 2:
        return <AcademicInfoStep {...stepProps} />;
      case 3:
        return <SkillsStep {...stepProps} />;
      case 4:
        return <SocialLinksStep {...stepProps} />;
      case 5:
        return <ProjectsStep {...stepProps} />;
      case 6:
        return <CertificationsStep {...stepProps} />;
      case 7:
        return <WorkExperienceStep {...stepProps} />;
      case 8:
        return <ReviewStep {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Complete Your Profile
          </h1>
          <p className="text-gray-600">
            Help us get to know you better by filling out your profile
            information
          </p>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />

            {/* Step indicators */}
            <div className="flex justify-between mt-4">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map(
                (step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      step <= currentStep
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step < currentStep ? <Check className="w-4 h-4" /> : step}
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {stepTitles[currentStep - 1]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                {currentStep < TOTAL_STEPS ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creating Profile...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Complete Profile
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
