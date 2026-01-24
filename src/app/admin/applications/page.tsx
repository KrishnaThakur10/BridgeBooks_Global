'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface JobApplication {
  _id: string;
  name: string;
  email: string;
  phone: string;
  currentSalary: string;
  expectedSalary: string;
  message: string;
  cvFileName: string;
  cvData: string;
  status: 'new' | 'reviewing' | 'shortlisted' | 'interviewed' | 'hired' | 'rejected';
  appliedDate: string;
}

export default function ApplicationsAdmin() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/job-applications');
      const data = await response.json();
      setApplications(data.applications || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true;
    return app.status === filter;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      reviewing: 'bg-yellow-100 text-yellow-800',
      shortlisted: 'bg-purple-100 text-purple-800',
      interviewed: 'bg-indigo-100 text-indigo-800',
      hired: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const downloadCV = (app: JobApplication) => {
    if (!app.cvData) {
      alert('No CV available');
      return;
    }

    // Create download link from base64
    const link = document.createElement('a');
    link.href = app.cvData;
    link.download = app.cvFileName || `${app.name}_CV.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold text-primary">Job Applications</h1>
                <p className="text-sm text-gray-500">{applications.length} total applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-xs font-bold text-gray-500 uppercase mb-2">Total</div>
            <p className="text-2xl font-black text-primary">{applications.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-xs font-bold text-blue-500 uppercase mb-2">New</div>
            <p className="text-2xl font-black text-blue-600">
              {applications.filter(a => a.status === 'new').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-xs font-bold text-yellow-500 uppercase mb-2">Reviewing</div>
            <p className="text-2xl font-black text-yellow-600">
              {applications.filter(a => a.status === 'reviewing').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-xs font-bold text-purple-500 uppercase mb-2">Shortlisted</div>
            <p className="text-2xl font-black text-purple-600">
              {applications.filter(a => a.status === 'shortlisted').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-xs font-bold text-indigo-500 uppercase mb-2">Interviewed</div>
            <p className="text-2xl font-black text-indigo-600">
              {applications.filter(a => a.status === 'interviewed').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-xs font-bold text-green-500 uppercase mb-2">Hired</div>
            <p className="text-2xl font-black text-green-600">
              {applications.filter(a => a.status === 'hired').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
          <div className="flex flex-wrap gap-2">
            {['all', 'new', 'reviewing', 'shortlisted', 'interviewed', 'hired', 'rejected'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
                  filter === status ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Candidate</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Expected Salary</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Applied Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    Loading applications...
                  </td>
                </tr>
              ) : filteredApplications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No applications found
                  </td>
                </tr>
              ) : (
                filteredApplications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-primary">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.cvFileName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <a href={`mailto:${app.email}`} className="text-accent hover:underline block">
                          {app.email}
                        </a>
                        <span className="text-gray-500">{app.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold">{app.expectedSalary}</div>
                      <div className="text-xs text-gray-500">Current: {app.currentSalary}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(app.appliedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <span className="material-symbols-outlined text-sm text-blue-600">visibility</span>
                        </button>
                        <button
                          onClick={() => downloadCV(app)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Download CV"
                        >
                          <span className="material-symbols-outlined text-sm text-green-600">download</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-primary">Application Details</h2>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Candidate Name</label>
                  <p className="text-lg font-bold text-primary">{selectedApp.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <p className="text-sm">{selectedApp.email}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                    <p className="text-sm">{selectedApp.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Current Salary</label>
                    <p className="text-sm font-semibold">{selectedApp.currentSalary}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Expected Salary</label>
                    <p className="text-sm font-semibold text-accent">{selectedApp.expectedSalary}</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">CV Attached</label>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm">{selectedApp.cvFileName}</span>
                    <button
                      onClick={() => downloadCV(selectedApp)}
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-bold hover:bg-accent/90"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      Download CV
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                  <p className="text-sm bg-gray-50 p-4 rounded-lg mt-2">{selectedApp.message}</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Status</label>
                  <select
                    value={selectedApp.status}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  >
                    <option value="new">New</option>
                    <option value="reviewing">Reviewing</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="hired">Hired</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div className="pt-4 flex gap-3">
                  <a
                    href={`mailto:${selectedApp.email}`}
                    className="flex-1 bg-accent text-white text-center font-bold py-3 rounded-xl hover:bg-accent/90"
                  >
                    Email Candidate
                  </a>
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="px-6 py-3 border border-gray-200 rounded-xl font-bold hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}