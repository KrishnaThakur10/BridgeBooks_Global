'use client';

import { useState, useEffect } from 'react';

interface Lead {
    _id: string;
    fullName?: string;
    email: string;
    phone: string;
    company?: string;
    country?: string;
    service?: string;
    message?: string;
    status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
    createdAt: string;
}
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Check localStorage for saved password on mount
  useEffect(() => {
    const savedPassword = localStorage.getItem('adminPassword');
    if (savedPassword && (savedPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || savedPassword === 'Krishna@1234')) {
      setIsAuthenticated(true);
      setPassword(savedPassword);
      fetchLeads();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'Krishna@1234') {
      localStorage.setItem('adminPassword', password);
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    setIsAuthenticated(false);
    setPassword('');
    setLeads([]);
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, status: newStatus }),
      });
      fetchLeads();
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Country', 'Service', 'Status', 'Date'];
    const rows = filteredLeads.map(lead => [
      lead.fullName || 'none',
      lead.email,
      lead.phone,
      lead.company || '',
      lead.country || '',
      lead.service || '',
      lead.status,
      new Date(lead.createdAt).toLocaleDateString()
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredLeads = leads.filter(lead => {
    const matchesFilter = filter === 'all' || lead.status === filter;
    const matchesSearch = 
      (lead.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.company || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-purple-100 text-purple-800',
      converted: 'bg-green-100 text-green-800',
      lost: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-white text-3xl">admin_panel_settings</span>
            </div>
            <h1 className="text-2xl font-extrabold text-primary">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Enter password to access leads</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-accent/90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">dashboard</span>
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-primary">Lead Management</h1>
                <p className="text-xs text-gray-500">{leads.length} total leads</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                href="/admin/applications"
                className="flex items-center gap-2 px-4 py-2 bg-[#2B3D4E] text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
              >
                <span className="material-symbols-outlined text-sm">work</span>
                Job Applications
              </Link>
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-[#10BB9D] text-white rounded-lg font-bold text-sm hover:bg-accent/90 w-full sm:w-auto justify-center"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg font-bold text-sm hover:bg-gray-50 w-full sm:w-auto justify-center"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase">All Leads</span>
              <span className="material-symbols-outlined text-gray-400">group</span>
            </div>
            <p className="text-2xl font-black text-primary">{leads.length}</p>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-500 uppercase">New</span>
              <span className="material-symbols-outlined text-blue-400">fiber_new</span>
            </div>
            <p className="text-2xl font-black text-blue-600">
              {leads.filter(l => l.status === 'new').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-yellow-500 uppercase">Contacted</span>
              <span className="material-symbols-outlined text-yellow-400">call</span>
            </div>
            <p className="text-2xl font-black text-yellow-600">
              {leads.filter(l => l.status === 'contacted').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-purple-500 uppercase">Qualified</span>
              <span className="material-symbols-outlined text-purple-400">verified</span>
            </div>
            <p className="text-2xl font-black text-purple-600">
              {leads.filter(l => l.status === 'qualified').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-green-500 uppercase">Converted</span>
              <span className="material-symbols-outlined text-green-400">check_circle</span>
            </div>
            <p className="text-2xl font-black text-green-600">
              {leads.filter(l => l.status === 'converted').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-5 sm:p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, email, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-sm sm:text-base"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-sm sm:text-base"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Name</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Company</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Email</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Service</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Status</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Date</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-bold text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      Loading leads...
                    </td>
                  </tr>
                ) : filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50">
                      <td className="px-4 sm:px-6 py-4">
                        <div className="font-bold text-primary text-sm sm:text-base">{lead.fullName}</div>
                        <div className="text-xs text-gray-500">{lead.phone}</div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm">{lead.company || '-'}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <a href={`mailto:${lead.email}`} className="text-accent hover:underline text-sm break-all">
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm">{lead.service || '-'}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                          className={`text-xs font-bold px-3 py-1 rounded-full border-0 ${getStatusColor(lead.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-accent hover:text-accent/80 text-sm font-bold"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-primary">Lead Details</h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                  <p className="text-lg font-bold text-primary">{selectedLead.fullName}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <p className="text-sm">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                    <p className="text-sm">{selectedLead.phone || 'Not provided'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Company</label>
                    <p className="text-sm">{selectedLead.company || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Country</label>
                    <p className="text-sm">{selectedLead.country || 'Not provided'}</p>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Service Interest</label>
                  <p className="text-sm">{selectedLead.service || 'Not specified'}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Message/Challenges</label>
                  <p className="text-sm bg-gray-50 p-4 rounded-lg">{selectedLead.message || 'No message'}</p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="flex-1 bg-accent text-white text-center font-bold py-3 rounded-xl hover:bg-accent/90"
                  >
                    Email {selectedLead.fullName?.split(' ')[0] || 'Contact'}
                  </a>
                  <button
                    onClick={() => setSelectedLead(null)}
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