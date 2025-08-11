import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Copy, User, Mail, Phone, CreditCard, MapPin, Droplet, AlertTriangle, Settings, Stethoscope, FileText, Building, Calendar, Award } from 'lucide-react';

const SignupForm = () => {
  const [role, setRole] = useState('patient');
  const [mrCode, setMrCode] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState({});

  const { register, handleSubmit,  formState: { errors } } = useForm();

  // Simulate URL-based role detection
  useEffect(() => {
    const currentPath = window.location.pathname || '/patient/signup';
    if (currentPath.includes('/doctor/') || currentPath.includes('doctor')) {
      setRole('doctor');
    } else {
      setRole('patient');
    }
  }, []);

  // Generate MR Code
  const generateMRCode = () => {
    const code = `MR-${Math.floor(1000 + Math.random() * 9000)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setMrCode(code);
  };

  // Handle file uploads
  const handleFileUpload = (fieldName, event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [fieldName]: file.name
      }));
    }
  };

  const onSubmit = (data) => {
    console.log('Form Data:', { ...data, role, mrCode, uploadedFiles });
    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} registration submitted successfully!`);
  };

  const copyMRCode = () => {
    navigator.clipboard.writeText(mrCode);
    alert('MR Code copied to clipboard!');
  };

  const renderPatientForm = () => (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-8 shadow-2xl">
      <div className="bg-[#325E6D] text-white text-center py-6 rounded-full mb-8">
        <h1 className="text-3xl font-bold">Sign Up as Patient</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
              <input
                {...register('firstName', { required: 'First name is required' })}
                placeholder="First Name"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1 ml-4">{errors.firstName.message}</p>}
            </div>
            <div className="relative">
              <input
                {...register('lastName')}
                placeholder="Last Name"
                className="w-full px-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1 ml-4">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              placeholder="Email Address"
              type="email"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 ml-4">{errors.email.message}</p>}
          </div>

          {/* Contact Number */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('contactNumber', { required: 'Contact number is required' })}
              placeholder="Contact Number"
              type="tel"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1 ml-4">{errors.contactNumber.message}</p>}
          </div>

          {/* CNIC */}
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('cnic', { required: 'CNIC is required' })}
              placeholder="CNIC"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.cnic && <p className="text-red-500 text-sm mt-1 ml-4">{errors.cnic.message}</p>}
          </div>

          {/* Date of Birth and Gender */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
              <input
                {...register('dob', { required: 'Date of birth is required' })}
                placeholder="Date of Birth"
                type="date"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1 ml-4">{errors.dob.message}</p>}
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
              <select
                {...register('gender', { required: 'Gender is required' })}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1 ml-4">{errors.gender.message}</p>}
            </div>
          </div>

          {/* City */}
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('city', { required: 'City is required' })}
              placeholder="City"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1 ml-4">{errors.city.message}</p>}
          </div>

          {/* Blood Group */}
          <div className="relative">
            <Droplet className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('bloodGroup')}
              placeholder="Enter your Blood Group"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
          </div>

          {/* Allergies */}
          <div className="relative">
            <AlertTriangle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('allergies')}
              placeholder="Enter Any Allergy"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
          </div>

          {/* Chronic Conditions */}
          <div className="relative">
            <Settings className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('chronicConditions')}
              placeholder="Enter Any Chronic Condition"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Right Column - Upload & Actions */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">Upload a picture here</p>
          </div>

          {/* MR Code Generation */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-center font-semibold mb-4">Generate your MR Code</h3>
            <button
              type="button"
              onClick={generateMRCode}
              className="w-full bg-[#325E6D] text-white py-3 rounded-full hover:bg-[#325E6D] transition-colors mb-4"
            >
              Generate Code
            </button>
            {mrCode && (
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                <span className="text-sm">Your MR Code: {mrCode}</span>
                <button type="button" onClick={copyMRCode} className="text-[#325E6D]">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Upload Sections */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 text-center">
              <h4 className="font-medium mb-2">Upload ID / Insurance</h4>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload('idInsurance', e)}
                  accept="image/*,.pdf"
                />
                <div className="bg-[#325E6D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#325E6D] transition-colors">
                  Upload Image or PDF
                </div>
              </label>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center">
              <h4 className="font-medium mb-2">Upload Lab Reports</h4>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload('labReports', e)}
                  accept=".jpg,.pdf"
                />
                <div className="bg-[#325E6D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#325E6D] transition-colors">
                  Upload JPG / PDF
                </div>
              </label>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center">
              <h4 className="font-medium mb-2">Upload Prescription</h4>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload('prescription', e)}
                  accept="image/*,.pdf"
                />
                <div className="bg-[#325E6D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#325E6D] transition-colors">
                  Upload Image or PDF
                </div>
              </label>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center">
              <h4 className="font-medium mb-2">Upload Health Monitoring</h4>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload('healthMonitoring', e)}
                  accept=".csv"
                />
                <div className="bg-[#325E6D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#325E6D] transition-colors">
                  Upload File or CSV
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#325E6D] text-white py-4 rounded-full text-lg font-semibold hover:bg-[#325E6D] transition-colors"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );

  const renderDoctorForm = () => (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-8 shadow-2xl">
      <div className="bg-[#325E6D] text-white text-center py-6 rounded-2xl mb-8">
        <h1 className="text-3xl font-bold">Sign Up as Doctor</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
              <input
                {...register('firstName', { required: 'First name is required' })}
                placeholder="First Name"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1 ml-4">{errors.firstName.message}</p>}
            </div>
            <div className="relative">
              <input
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Last Name"
                className="w-full px-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1 ml-4">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              placeholder="Email Address"
              type="email"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 ml-4">{errors.email.message}</p>}
          </div>

          {/* Contact Number */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('contactNumber', { required: 'Contact number is required' })}
              placeholder="Contact Number"
              type="tel"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1 ml-4">{errors.contactNumber.message}</p>}
          </div>

          {/* CNIC */}
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('cnic', { required: 'CNIC is required' })}
              placeholder="CNIC"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.cnic && <p className="text-red-500 text-sm mt-1 ml-4">{errors.cnic.message}</p>}
          </div>

          {/* Age and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
              <input
                {...register('age', { required: 'Age is required' })}
                placeholder="Age"
                type="number"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              />
              {errors.age && <p className="text-red-500 text-sm mt-1 ml-4">{errors.age.message}</p>}
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
              <select
                {...register('gender', { required: 'Gender is required' })}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1 ml-4">{errors.gender.message}</p>}
            </div>
          </div>

          {/* City */}
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('city', { required: 'City is required' })}
              placeholder="City"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1 ml-4">{errors.city.message}</p>}
          </div>

          {/* Specialization */}
          <div className="relative">
            <Stethoscope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('specialization', { required: 'Specialization is required' })}
              placeholder="Specialization"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.specialization && <p className="text-red-500 text-sm mt-1 ml-4">{errors.specialization.message}</p>}
          </div>

          {/* Medical License Number */}
          <div className="relative">
            <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('medicalLicenseNumber', { required: 'Medical license number is required' })}
              placeholder="Medical License Number"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.medicalLicenseNumber && <p className="text-red-500 text-sm mt-1 ml-4">{errors.medicalLicenseNumber.message}</p>}
          </div>

          {/* Issuing Authority */}
          <div className="relative">
            <Award className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('issuingAuthority', { required: 'Issuing authority is required' })}
              placeholder="Issuing Authority"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.issuingAuthority && <p className="text-red-500 text-sm mt-1 ml-4">{errors.issuingAuthority.message}</p>}
          </div>

          {/* Years of Experience */}
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('yearsOfExperience', { required: 'Years of experience is required' })}
              placeholder="Years of Experience"
              type="number"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
            {errors.yearsOfExperience && <p className="text-red-500 text-sm mt-1 ml-4">{errors.yearsOfExperience.message}</p>}
          </div>

          {/* Hospital/Clinic Affiliation */}
          <div className="relative">
            <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#325E6D] w-5 h-5" />
            <input
              {...register('hospitalAffiliation')}
              placeholder="Hospital / Clinic Affiliation"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border-2 border-gray-300 focus:border-[#325E6D] focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Right Column - Upload & Actions */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">Upload a picture here</p>
          </div>

          {/* MR Code Generation */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-center font-semibold mb-4">Generate your MR Code</h3>
            <button
              type="button"
              onClick={generateMRCode}
              className="w-full bg-[#325E6D] text-white py-3 rounded-full hover:bg-[#325E6D] transition-colors mb-4"
            >
              Generate Code
            </button>
            {mrCode && (
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                <span className="text-sm">Your MR Code: {mrCode}</span>
                <button type="button" onClick={copyMRCode} className="text-[#325E6D]">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Upload Sections */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 text-center">
              <h4 className="font-medium mb-2">Degrees & Certifications</h4>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload('degrees', e)}
                  accept=".pdf"
                />
                <div className="bg-[#325E6D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#325E6D] transition-colors">
                  Upload MBBS,FCPS,MD,etc
                </div>
              </label>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center">
              <h4 className="font-medium mb-2">Medical License/ID Proof</h4>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload('medicalLicense', e)}
                  accept=".pdf"
                />
                <div className="bg-[#325E6D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#325E6D] transition-colors">
                  Upload MBBS,FCPS,MD,etc
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#325E6D] text-white py-4 rounded-full text-lg font-semibold hover:bg-[#325E6D] transition-colors"
          >
            Sign Up Complete
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8 px-4">
      {/* Role Switcher for Demo */}
      <div className="text-center mb-8">
        <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
          <button
            onClick={() => setRole('patient')}
            className={`px-6 py-2 rounded-full transition-colors ${
              role === 'patient' 
                ? 'bg-[#325E6D] text-white' 
                : 'text-[#325E6D] hover:bg-teal-50'
            }`}
          >
            Patient Signup
          </button>
          <button
            onClick={() => setRole('doctor')}
            className={`px-6 py-2 rounded-full transition-colors ${
              role === 'doctor' 
                ? 'bg-[#325E6D] text-white' 
                : 'text-[#325E6D] hover:bg-teal-50'
            }`}
          >
            Doctor Signup
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Current URL simulation: /{role}/signup
        </p>
      </div>

      {role === 'patient' ? renderPatientForm() : renderDoctorForm()}
    </div>
  );
};

export default SignupForm;