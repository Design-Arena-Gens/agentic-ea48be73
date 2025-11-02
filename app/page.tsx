'use client'

import { useState } from 'react'
import { Search, Building2, MapPin, Briefcase, Users, Mail, Phone, Globe, Loader2 } from 'lucide-react'

interface JobListing {
  id: string
  title: string
  company: string
  location: string
  type: string
  experience: string
  salary: string
  posted: string
  hrContact: {
    name: string
    email: string
    phone: string
    linkedin: string
  }
  companyDetails: {
    size: string
    industry: string
    founded: string
    website: string
    description: string
  }
}

export default function Home() {
  const [jobProfile, setJobProfile] = useState('')
  const [location, setLocation] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<JobListing[]>([])
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null)

  const searchJobs = async () => {
    if (!jobProfile.trim()) return

    setIsSearching(true)
    setResults([])
    setSelectedJob(null)

    // Simulate API call with realistic data
    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockResults: JobListing[] = [
      {
        id: '1',
        title: jobProfile || 'Software Engineer',
        company: 'TechCorp India',
        location: location || 'Bangalore, India',
        type: 'Full-time',
        experience: '2-5 years',
        salary: '₹12-18 LPA',
        posted: '2 days ago',
        hrContact: {
          name: 'Priya Sharma',
          email: 'priya.sharma@techcorp.in',
          phone: '+91 98765 43210',
          linkedin: 'linkedin.com/in/priyasharma'
        },
        companyDetails: {
          size: '500-1000 employees',
          industry: 'Information Technology',
          founded: '2015',
          website: 'www.techcorp.in',
          description: 'Leading IT solutions provider specializing in cloud services and enterprise applications.'
        }
      },
      {
        id: '2',
        title: jobProfile || 'Software Engineer',
        company: 'InnovateSoft Solutions',
        location: location || 'Mumbai, India',
        type: 'Full-time',
        experience: '3-6 years',
        salary: '₹15-22 LPA',
        posted: '5 days ago',
        hrContact: {
          name: 'Rajesh Kumar',
          email: 'rajesh.kumar@innovatesoft.com',
          phone: '+91 99876 54321',
          linkedin: 'linkedin.com/in/rajeshkumar'
        },
        companyDetails: {
          size: '1000-5000 employees',
          industry: 'Software Development',
          founded: '2010',
          website: 'www.innovatesoft.com',
          description: 'Global software company focused on AI and machine learning solutions for enterprises.'
        }
      },
      {
        id: '3',
        title: jobProfile || 'Software Engineer',
        company: 'Digital Dynamics',
        location: location || 'Hyderabad, India',
        type: 'Full-time',
        experience: '1-4 years',
        salary: '₹10-16 LPA',
        posted: '1 week ago',
        hrContact: {
          name: 'Anita Desai',
          email: 'anita.desai@digitaldynamics.co.in',
          phone: '+91 97654 32109',
          linkedin: 'linkedin.com/in/anitadesai'
        },
        companyDetails: {
          size: '200-500 employees',
          industry: 'Digital Marketing & IT',
          founded: '2018',
          website: 'www.digitaldynamics.co.in',
          description: 'Fast-growing digital solutions company specializing in web and mobile applications.'
        }
      },
      {
        id: '4',
        title: jobProfile || 'Software Engineer',
        company: 'Global Tech Services',
        location: location || 'Pune, India',
        type: 'Full-time',
        experience: '2-7 years',
        salary: '₹14-20 LPA',
        posted: '3 days ago',
        hrContact: {
          name: 'Michael Fernandes',
          email: 'michael.f@globaltech.com',
          phone: '+91 96543 21098',
          linkedin: 'linkedin.com/in/michaelfernandes'
        },
        companyDetails: {
          size: '5000+ employees',
          industry: 'IT Services & Consulting',
          founded: '2005',
          website: 'www.globaltech.com',
          description: 'Multinational IT services company providing technology consulting and outsourcing services.'
        }
      },
      {
        id: '5',
        title: jobProfile || 'Software Engineer',
        company: 'StartupHub Technologies',
        location: location || 'Delhi NCR, India',
        type: 'Full-time',
        experience: '1-3 years',
        salary: '₹8-14 LPA',
        posted: '4 days ago',
        hrContact: {
          name: 'Sneha Patel',
          email: 'sneha.patel@startuphub.in',
          phone: '+91 95432 10987',
          linkedin: 'linkedin.com/in/snehapatel'
        },
        companyDetails: {
          size: '50-200 employees',
          industry: 'Technology Startup',
          founded: '2020',
          website: 'www.startuphub.in',
          description: 'Innovative startup building next-generation SaaS products for small and medium businesses.'
        }
      }
    ]

    setResults(mockResults)
    setIsSearching(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchJobs()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Job Search Agent
          </h1>
          <p className="text-lg text-gray-600">
            Find HR contacts and company details for job opportunities worldwide
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Profile / Role
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={jobProfile}
                    onChange={(e) => setJobProfile(e.target.value)}
                    placeholder="e.g., Software Engineer, Data Analyst, HR Manager"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location (Optional)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., Mumbai, India or Remote"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSearching || !jobProfile.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Searching for jobs...
                </>
              ) : (
                <>
                  <Search size={20} />
                  Search Jobs
                </>
              )}
            </button>
          </form>
        </div>

        {results.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Found {results.length} Opportunities
              </h2>

              {results.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`bg-white rounded-xl shadow-md p-5 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedJob?.id === job.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building2 size={16} />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {job.experience}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {job.salary}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Posted {job.posted}</p>
                </div>
              ))}
            </div>

            <div className="md:sticky md:top-4 md:self-start">
              {selectedJob ? (
                <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedJob.title}
                    </h2>
                    <p className="text-lg text-gray-700 font-medium">
                      {selectedJob.company}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users size={20} className="text-blue-600" />
                      HR Contact Details
                    </h3>
                    <div className="space-y-3 bg-blue-50 p-4 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">HR Name</p>
                        <p className="font-semibold text-gray-900">{selectedJob.hrContact.name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-blue-600" />
                        <a
                          href={`mailto:${selectedJob.hrContact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {selectedJob.hrContact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-green-600" />
                        <a
                          href={`tel:${selectedJob.hrContact.phone}`}
                          className="text-gray-900"
                        >
                          {selectedJob.hrContact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-blue-600" />
                        <a
                          href={`https://${selectedJob.hrContact.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Building2 size={20} className="text-purple-600" />
                      Company Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Globe size={16} className="text-purple-600 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Website</p>
                          <a
                            href={`https://${selectedJob.companyDetails.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {selectedJob.companyDetails.website}
                          </a>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Industry</p>
                        <p className="font-medium text-gray-900">{selectedJob.companyDetails.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Company Size</p>
                        <p className="font-medium text-gray-900">{selectedJob.companyDetails.size}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Founded</p>
                        <p className="font-medium text-gray-900">{selectedJob.companyDetails.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">About</p>
                        <p className="text-gray-700 leading-relaxed">{selectedJob.companyDetails.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${selectedJob.hrContact.email}?subject=Application for ${selectedJob.title} at ${selectedJob.company}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-center"
                      >
                        Email HR
                      </a>
                      <a
                        href={`https://${selectedJob.companyDetails.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-4 rounded-lg transition duration-200 text-center"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
                  <Building2 size={48} className="mx-auto mb-4 text-gray-400" />
                  <p>Select a job listing to view HR and company details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
