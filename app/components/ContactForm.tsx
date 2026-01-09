'use client';

import { useState, useTransition } from 'react';
import { submitContactForm } from '../actions/contact';
import toast from 'react-hot-toast';
import { BUSINESS_INFO } from '../lib/constants';

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success(result.message, {
          duration: 5000,
          position: 'top-center',
          icon: '✅',
        });
        // Reset form
        e.currentTarget.reset();
      } else {
        if (result.errors) {
          setErrors(result.errors);
          toast.error('Please check the form for errors', {
            duration: 4000,
            position: 'top-center',
          });
        } else {
          toast.error(result.message, {
            duration: 5000,
            position: 'top-center',
          });
        }
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoFocus
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.firstName[0]}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.lastName[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="(616) 555-1234"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
          Property Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          placeholder="123 Main St, Lansing, MI 48933"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-invalid={errors.address ? 'true' : 'false'}
          aria-describedby={errors.address ? 'address-error' : undefined}
        />
        {errors.address && (
          <p id="address-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.address[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
          Type of Service Needed *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-invalid={errors.serviceType ? 'true' : 'false'}
          aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
        >
          <option value="">Select a service...</option>
          <option value="water-damage">Water Damage Restoration</option>
          <option value="fire-damage">Fire Damage Cleanup</option>
          <option value="mold-remediation">Mold Remediation</option>
          <option value="storm-damage">Storm Damage Restoration</option>
          <option value="biohazard">Biohazard Cleanup</option>
          <option value="cleaning">Professional Cleaning</option>
          <option value="other">Other (please describe)</option>
        </select>
        {errors.serviceType && (
          <p id="serviceType-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.serviceType[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
          Describe the Damage/Situation *
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          placeholder="Describe when the damage occurred and any urgent concerns..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-invalid={errors.description ? 'true' : 'false'}
          aria-describedby={errors.description ? 'description-error' : undefined}
        ></textarea>
        {errors.description && (
          <p id="description-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.description[0]}
          </p>
        )}
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="emergency"
          name="emergency"
          className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-slate-300 rounded"
        />
        <label htmlFor="emergency" className="ml-2 text-sm text-slate-600">
          <svg className="w-4 h-4 inline text-red-600 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          This is an emergency requiring immediate attention
        </label>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div className="text-sm text-amber-800">
            <strong>Emergency?</strong> For immediate assistance, call us directly at{' '}
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="font-bold underline hover:text-amber-900">
              {BUSINESS_INFO.phone}
            </a>.
            We respond to emergencies 24/7 and typically arrive within 60 minutes.
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        aria-busy={isPending}
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Request for Free Estimate'
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to receive communications from M&M Restoration.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
