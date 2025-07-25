import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logoImg from './assets/images/witness2.png';
import backgroundImage from './assets/images/witness10.jpg';

export default function SignUp() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select User Category');
  const [currentStep, setCurrentStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState('right');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    city: '',
    stateOfOperation: '',
    verificationType: '',
    idNumber: '',
    verificationDocument: null,
    selfie: null,
    verificationConsent: false,
    dataProcessingConsent: false,
    termsOfServiceAgreement: false,
    betaTestingWaitlist: false,
    verificationCode: '',
    // Business Owner/SME fields
    businessName: '',
    cacNumber: '',
    businessType: '',
    otherBusinessType: '',
    sector: '',
    otherSector: '',
    numberOfEmployees: '',
    handlesPayroll: '',
    otherHandlesPayroll: '',
    publicProcurement: '',
    otherPublicProcurement: '',
    notificationMethod: '',
    existingContracts: '',
    otherExistingContracts: '',
    primaryBusinessAddress: '',
    employsContractors: '',
    otherEmploysContractors: '',
    multilingualSupport: '',
    selectedLanguages: [],
    // Employee/Worker fields
    employerName: '',
    jobRole: '',
    employmentType: '',
    otherEmploymentType: '',
    // Freelancer/Independent Contractor fields
    primaryService: '',
    otherPrimaryService: '',
    yearsOfExperience: '',
    clientType: '',
    otherClientType: '',
    averageNumberOfClients: '',
    paymentFrequency: '',
    preferredPaymentMethod: '',
    otherPreferredPaymentMethod: '',
    invoiceGenerationNeeds: '',
    contractDrafting: '',
    disputeHistory: '',
    internationalTransactions: '',
    businessRegistrationStatus: '',
    freelancerCacNumber: '',
    // Civilian/Individual fields
    primaryUse: '',
    otherPrimaryUse: '',
    personalContracts: [],
    otherPersonalContracts: '',
    transactionFrequency: '',
    otherTransactionFrequency: '',
    residentialStatus: '',
    otherResidentialStatus: '',
    localGovernmentArea: '',
    documentFormat: '',
    otherDocumentFormat: '',
    personalDisputeHistory: '',
    financialTracking: '',
    legalResources: '',
    communicationChannel: '',
    otherCommunicationChannel: ''
  });

  const categories = [
    'Business Owner/SME',
    'Employee/Worker',
    'Freelancer/Independent Contractor',
    'Individual',
    'Government'
  ];
  const businessTypes = ['Sole Proprietorship', 'Partnership', 'Limited Liability Company', 'Corporation', 'Other'];
  const statesOfOperation = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
    'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
    'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];
  const sectors = ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Other'];
  const employeeRanges = ['1-10', '11-50', '51-200', '201-500', '500+'];
  const payrollOptions = ['Yes', 'No', 'Other'];
  const yesNoOtherOptions = ['Yes', 'No', 'Other'];
  const notificationMethods = ['Email', 'SMS', 'WhatsApp', 'Phone Call', 'Other'];
  const languageOptions = ['English', 'Igbo', 'Yoruba', 'Hausa', 'Other'];
  const verificationTypes = ['National ID (NIN)', 'International Passport', 'Driver’s License', 'Voter’s Card', 'None'];
  const employmentTypes = ['Full-Time', 'Part-Time', 'Contract', 'Temporary', 'Other'];
  const freelancerServices = ['Consulting', 'Graphic Design', 'Writing', 'Artisan', 'IT Services', 'Other'];
  const experienceRanges = ['<1', '1-3', '3-5', '5+'];
  const clientTypes = ['Individuals', 'SMEs', 'Large Corporations', 'Government', 'International Clients', 'Other'];
  const clientRanges = ['1-5', '6-10', '11+'];
  const paymentFrequencies = ['Per Project', 'Weekly', 'Monthly', 'Other'];
  const paymentMethods = ['Bank Transfer', 'Mobile Money', 'Paystack', 'Flutterwave', 'Cash', 'Other'];
  const yesNoOptions = ['Yes', 'No'];
  const contractDraftingOptions = ['Draft My Own', 'Use Client Contracts', 'Both'];
  const primaryUseOptions = ['Tenancy Agreements', 'Personal Loans', 'Purchase Agreements', 'Other Personal Contracts', 'General Document Storage', 'Other'];
  const personalContractTypes = ['Tenancy Agreement', 'Loan Agreement', 'Sale/Purchase Agreement', 'Service Agreement (e.g., with artisans)', 'None', 'Other'];
  const transactionFrequencies = ['Daily', 'Weekly', 'Monthly', 'Occasionally', 'Rarely', 'Other'];
  const residentialStatuses = ['Tenant', 'Landlord', 'Homeowner', 'Other'];
  const documentFormats = ['Digital (PDF)', 'Physical (Printable Templates)', 'Both', 'Other'];
  const communicationChannels = ['Email', 'SMS', 'WhatsApp', 'Phone Call', 'Other'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setFormData({ ...formData, category });
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (name === 'cacNumber' || name === 'freelancerCacNumber') {
      const prefix = value.slice(0, 2).toUpperCase();
      const digits = value.slice(2);
      if (value.length > 9 || !['BN', 'RC'].includes(prefix) || !/^\d{0,7}$/.test(digits)) {
        return;
      }
    }
    if (name === 'idNumber' && formData.verificationType === 'National ID (NIN)' && value.length > 11) {
      return;
    }
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox' && (name === 'selectedLanguages' || name === 'personalContracts')) {
      const field = name === 'selectedLanguages' ? 'selectedLanguages' : 'personalContracts';
      const updatedValues = checked
        ? [...formData[field], value]
        : formData[field].filter((item) => item !== value);
      setFormData({ ...formData, [field]: updatedValues });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    const totalSteps = 5;
    if (currentStep < totalSteps) {
      setSlideDirection('right');
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setSlideDirection('left');
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={`form-section slide-${slideDirection}`}>
            <h2>Personal Information</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="dropdown-container">
              <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedCategory} ▼
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      onClick={() => selectCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <select
              name="selectedLanguages"
              value={formData.selectedLanguages[0] || ''}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Preferred Language
              </option>
              {languageOptions.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            {formData.selectedLanguages.includes('Other') && (
              <input
                type="text"
                name="otherSelectedLanguages"
                placeholder="Specify Other Language"
                value={formData.otherSelectedLanguages}
                onChange={handleInputChange}
              />
            )}
          </div>
        );
      case 2:
        return (
          <div className={`form-section slide-${slideDirection}`}>
            <h2>Contact Information</h2>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number (+234)"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <select
              name="stateOfOperation"
              value={formData.stateOfOperation}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select State
              </option>
              {statesOfOperation.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        );
      case 3:
        if (selectedCategory === 'Business Owner/SME') {
          return (
            <div className={`form-section slide-${slideDirection}`}>
              <h2>Business Information</h2>
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="cacNumber"
                placeholder="CAC Number (e.g., RC1234567)"
                value={formData.cacNumber}
                onChange={handleInputChange}
                maxLength={9}
              />
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Business Type
                </option>
                {businessTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {formData.businessType === 'Other' && (
                <input
                  type="text"
                  name="otherBusinessType"
                  placeholder="Specify Other Business Type"
                  value={formData.otherBusinessType}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Sector
                </option>
                {sectors.map((sector, index) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
              {formData.sector === 'Other' && (
                <input
                  type="text"
                  name="otherSector"
                  placeholder="Specify Other Sector"
                  value={formData.otherSector}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Number of Employees
                </option>
                {employeeRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              <select
                name="handlesPayroll"
                value={formData.handlesPayroll}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Do You Handle Employee Payroll?
                </option>
                {payrollOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formData.handlesPayroll === 'Other' && (
                <input
                  type="text"
                  name="otherHandlesPayroll"
                  placeholder="Specify Payroll Handling"
                  value={formData.otherHandlesPayroll}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="publicProcurement"
                value={formData.publicProcurement}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Do You Engage in Public Procurement or Government Contracts?
                </option>
                {yesNoOtherOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formData.publicProcurement === 'Other' && (
                <input
                  type="text"
                  name="otherPublicProcurement"
                  placeholder="Specify Procurement Details"
                  value={formData.otherPublicProcurement}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="notificationMethod"
                value={formData.notificationMethod}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Preferred Notification Method
                </option>
                {notificationMethods.map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </select>
              {formData.notificationMethod === 'Other' && (
                <input
                  type="text"
                  name="otherNotificationMethod"
                  placeholder="Specify Other Notification Method"
                  value={formData.otherNotificationMethod}
                  onChange={handleInputChange}
                />
              )}
            </div>
          );
        } else if (selectedCategory === 'Employee/Worker') {
          return (
            <div className={`form-section slide-${slideDirection}`}>
              <h2>Employment Information</h2>
              <input
                type="text"
                name="employerName"
                placeholder="Name of Your Employer"
                value={formData.employerName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="jobRole"
                placeholder="Your Job Role"
                value={formData.jobRole}
                onChange={handleInputChange}
              />
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Employment Type
                </option>
                {employmentTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {formData.employmentType === 'Other' && (
                <input
                  type="text"
                  name="otherEmploymentType"
                  placeholder="Specify Other Employment Type"
                  value={formData.otherEmploymentType}
                  onChange={handleInputChange}
                />
              )}
            </div>
          );
        } else if (selectedCategory === 'Freelancer/Independent Contractor') {
          return (
            <div className={`form-section slide-${slideDirection}`}>
              <h2>Freelancer Information</h2>
              <select
                name="primaryService"
                value={formData.primaryService}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  What is your primary service?
                </option>
                {freelancerServices.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {formData.primaryService === 'Other' && (
                <input
                  type="text"
                  name="otherPrimaryService"
                  placeholder="Specify Other Service"
                  value={formData.otherPrimaryService}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Years of Experience
                </option>
                {experienceRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              <select
                name="clientType"
                value={formData.clientType}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Primary Client Type
                </option>
                {clientTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {formData.clientType === 'Other' && (
                <input
                  type="text"
                  name="otherClientType"
                  placeholder="Specify Other Client Type"
                  value={formData.otherClientType}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="averageNumberOfClients"
                value={formData.averageNumberOfClients}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Average Number of Clients per Month
                </option>
                {clientRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              <select
                name="paymentFrequency"
                value={formData.paymentFrequency}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Payment Frequency
                </option>
                {paymentFrequencies.map((freq, index) => (
                  <option key={index} value={freq}>
                    {freq}
                  </option>
                ))}
              </select>
              {formData.paymentFrequency === 'Other' && (
                <input
                  type="text"
                  name="otherPaymentFrequency"
                  placeholder="Specify Other Payment Frequency"
                  value={formData.otherPaymentFrequency}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="preferredPaymentMethod"
                value={formData.preferredPaymentMethod}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Preferred Payment Method
                </option>
                {paymentMethods.map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </select>
              {formData.preferredPaymentMethod === 'Other' && (
                <input
                  type="text"
                  name="otherPreferredPaymentMethod"
                  placeholder="Specify Other Payment Method"
                  value={formData.otherPreferredPaymentMethod}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="invoiceGenerationNeeds"
                value={formData.invoiceGenerationNeeds}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Do you need tools to generate invoices?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="contractDrafting"
                value={formData.contractDrafting}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Do you draft your own contracts or use client-provided contracts?
                </option>
                {contractDraftingOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="disputeHistory"
                value={formData.disputeHistory}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Have you faced payment disputes with clients?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="internationalTransactions"
                value={formData.internationalTransactions}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Do you work with international clients requiring foreign currency payments?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="businessRegistrationStatus"
                value={formData.businessRegistrationStatus}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Is your freelance business registered with CAC?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formData.businessRegistrationStatus === 'Yes' && (
                <input
                  type="text"
                  name="freelancerCacNumber"
                  placeholder="CAC Number (e.g., BN1234567)"
                  value={formData.freelancerCacNumber}
                  onChange={handleInputChange}
                  maxLength={9}
                />
              )}
            </div>
          );
        } else if (selectedCategory === 'Individual') {
          return (
            <div className={`form-section slide-${slideDirection}`}>
              <h2>Individual Information</h2>
              <select
                name="primaryUse"
                value={formData.primaryUse}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  What do you plan to use the app for?
                </option>
                {primaryUseOptions.map((use, index) => (
                  <option key={index} value={use}>
                    {use}
                  </option>
                ))}
              </select>
              {formData.primaryUse === 'Other' && (
                <input
                  type="text"
                  name="otherPrimaryUse"
                  placeholder="Specify Other Use"
                  value={formData.otherPrimaryUse}
                  onChange={handleInputChange}
                />
              )}
              <div className="checkbox-group">
                <label className="checkbox-group-label">Which personal contracts do you currently manage? (Select all that apply)</label>
                <div className="checkbox-options">
                  {personalContractTypes.map((contract, index) => (
                    <div key={index} className="checkbox-option">
                      <input
                        type="checkbox"
                        name="personalContracts"
                        value={contract}
                        checked={formData.personalContracts.includes(contract)}
                        onChange={handleInputChange}
                        id={`personalContract-${index}`}
                      />
                      <label htmlFor={`personalContract-${index}`}>{contract}</label>
                    </div>
                  ))}
                </div>
              </div>
              {formData.personalContracts.includes('Other') && (
                <input
                  type="text"
                  name="otherPersonalContracts"
                  placeholder="Specify Other Contract Type"
                  value={formData.otherPersonalContracts}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="residentialStatus"
                value={formData.residentialStatus}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  What is your residential status?
                </option>
                {residentialStatuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {formData.residentialStatus === 'Other' && (
                <input
                  type="text"
                  name="otherResidentialStatus"
                  placeholder="Specify Other Residential Status"
                  value={formData.otherResidentialStatus}
                  onChange={handleInputChange}
                />
              )}
              <input
                type="text"
                name="localGovernmentArea"
                placeholder="Local Government Area"
                value={formData.localGovernmentArea}
                onChange={handleInputChange}
              />
              <select
                name="transactionFrequency"
                value={formData.transactionFrequency}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  How often do you engage in personal financial or legal transactions?
                </option>
                {transactionFrequencies.map((freq, index) => (
                  <option key={index} value={freq}>
                    {freq}
                  </option>
                ))}
              </select>
              {formData.transactionFrequency === 'Other' && (
                <input
                  type="text"
                  name="otherTransactionFrequency"
                  placeholder="Specify Other Frequency"
                  value={formData.otherTransactionFrequency}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="documentFormat"
                value={formData.documentFormat}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  How would you like to store or receive documents?
                </option>
                {documentFormats.map((format, index) => (
                  <option key={index} value={format}>
                    {format}
                  </option>
                ))}
              </select>
              {formData.documentFormat === 'Other' && (
                <input
                  type="text"
                  name="otherDocumentFormat"
                  placeholder="Specify Other Document Format"
                  value={formData.otherDocumentFormat}
                  onChange={handleInputChange}
                />
              )}
              <select
                name="personalDisputeHistory"
                value={formData.personalDisputeHistory}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Have you faced disputes related to personal contracts?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="financialTracking"
                value={formData.financialTracking}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Do you want to track personal payments (e.g., rent, loans)?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="legalResources"
                value={formData.legalResources}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Would you like access to basic legal guides (e.g., tenant rights)?
                </option>
                {yesNoOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="communicationChannel"
                value={formData.communicationChannel}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  How would you prefer to receive updates or support?
                </option>
                {communicationChannels.map((channel, index) => (
                  <option key={index} value={channel}>
                    {channel}
                  </option>
                ))}
              </select>
              {formData.communicationChannel === 'Other' && (
                <input
                  type="text"
                  name="otherCommunicationChannel"
                  placeholder="Specify Other Communication Channel"
                  value={formData.otherCommunicationChannel}
                  onChange={handleInputChange}
                />
              )}
            </div>
          );
        } else {
          return (
            <div className={`form-section slide-${slideDirection}`}>
              <h2>Verification</h2>
              <input
                type="text"
                name="verificationCode"
                placeholder="Enter Verification Code"
                value={formData.verificationCode}
                onChange={handleInputChange}
              />
              <p>A verification code has been sent to your email. Please enter it above.</p>
              <button className="resend-code">Resend Code</button>
            </div>
          );
        }
      case 4:
        return (
          <div className={`form-section slide-${slideDirection}`}>
            <h2>Verification</h2>
            <select
              name="verificationType"
              value={formData.verificationType}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                What type of verification will you provide?
              </option>
              {verificationTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {formData.verificationType !== 'None' && (
              <input
                type="text"
                name="idNumber"
                placeholder="ID Number"
                value={formData.idNumber}
                onChange={handleInputChange}
                maxLength={formData.verificationType === 'National ID (NIN)' ? 11 : 20}
              />
            )}
            {formData.verificationType !== 'None' && (
              <input
                type="file"
                name="verificationDocument"
                accept="image/*,application/pdf"
                onChange={handleInputChange}
              />
            )}
            <input
              type="file"
              name="selfie"
              accept="image/*"
              onChange={handleInputChange}
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="verificationConsent"
                checked={formData.verificationConsent}
                onChange={handleInputChange}
              />
              <label>I consent to identity verification using my ID and selfie</label>
            </div>
          </div>
        );
      case 5:
        return (
          <div className={`form-section slide-${slideDirection}`}>
            <h2>Compliance and Agreement</h2>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="dataProcessingConsent"
                checked={formData.dataProcessingConsent}
                onChange={handleInputChange}
              />
              <label>I consent to data processing in accordance with the <a href="/privacy-policy">Privacy Policy</a></label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="termsOfServiceAgreement"
                checked={formData.termsOfServiceAgreement}
                onChange={handleInputChange}
              />
              <label>I agree to the <a href="/terms-of-service">Terms of Service</a></label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="betaTestingWaitlist"
                checked={formData.betaTestingWaitlist}
                onChange={handleInputChange}
              />
              <label>Join the beta testing waitlist</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const totalSteps = 5;

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="signup-main-content">
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
          </div>
          <div className="page-title-container">
            <h1 className="page-title">Sign Up</h1>
          </div>
        </header>
        <section className="content">
          <div className="section signup-section">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
            </div>
            <div className="step-indicator">
              <span className={currentStep === 1 ? 'active' : ''}>Step 1</span>
              <span className={currentStep === 2 ? 'active' : ''}>Step 2</span>
              <span className={currentStep === 3 ? 'active' : ''}>Step 3</span>
              <span className={currentStep === 4 ? 'active' : ''}>Step 4</span>
              <span className={currentStep === 5 ? 'active' : ''}>Step 5</span>
            </div>
            {renderStepContent()}
            <div className="navigation-buttons">
              <button
                className="back-button"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <button
                className="next-button"
                onClick={handleNext}
                disabled={currentStep === totalSteps}
              >
                {currentStep === totalSteps ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}