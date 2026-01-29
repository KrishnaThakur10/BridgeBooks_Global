'use client';

import { useState } from 'react';

interface JobApplication {
  name: string;
  email: string;
  phone: string;
  currentSalary: string;
  expectedSalary: string;
  message: string;
  cv: File | null;
}

export function JobApplicationForm() {
  const [formData, setFormData] = useState<JobApplication>({
    name: '',
    email: '',
    phone: '',
    currentSalary: '',
    expectedSalary: '',
    message: '',
    cv: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Convert file to base64 for storage
      let cvBase64 = '';
      if (formData.cv) {
        const reader = new FileReader();
        cvBase64 = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(formData.cv!);
        });
      }

      const response = await fetch('/api/job-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cv: cvBase64,
          cvFileName: formData.cv?.name || '',
        }),
      });

      if (response.ok) {
        setSubmitMessage('Application submitted successfully! We\'ll contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          currentSalary: '',
          expectedSalary: '',
          message: '',
          cv: null,
        });
        // Reset file input
        const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitMessage('Error submitting application. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-primary">Name*</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#2B3D4E]">Email*</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-[#2B3D4E]">Phone*</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#2B3D4E]">Current Salary</label>
          <input
            type="text"
            value={formData.currentSalary}
            onChange={(e) => setFormData({ ...formData, currentSalary: e.target.value })}
            className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all"
            placeholder="$80,000"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#2B3D4E]">Expected Salary*</label>
          <input
            type="text"
            required
            value={formData.expectedSalary}
            onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
            className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all"
            placeholder="$100,000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-[#2B3D4E]">Upload Your CV*</label>
        <input
          id="cv-upload"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#1ABC9C] file:text-white file:font-bold hover:file:bg-[#1ABC9C]/90"
        />
        <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-[#2B3D4E]">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full rounded-3xl px-4 py-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-[#2B3D4E] text-sm sm:text-base transition-all resize-none"
          placeholder="Tell us why you're a great fit for this role..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1ABC9C] hover:bg-[#1ABC9C]/90 text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'APPLY FOR JOB'}
      </button>

      {submitMessage && (
        <div className={`p-4 rounded-xl text-center font-medium ${
          submitMessage.includes('success') 
            ? 'bg-green-50 text-green-800' 
            : 'bg-red-50 text-red-800'
        }`}>
          {submitMessage}
        </div>
      )}
    </form>
  );
}