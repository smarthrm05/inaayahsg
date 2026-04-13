import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Link } from 'react-router-dom';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  source: string;
  created_at: string;
  updated_at: string;
}

interface NewsletterSignup {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  new: { bg: '#E8F5E9', text: '#2E7D32' },
  read: { bg: '#E3F2FD', text: '#1565C0' },
  replied: { bg: '#FFF3E0', text: '#E65100' },
  archived: { bg: '#F5F5F5', text: '#757575' },
};

const Admin: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'submissions' | 'newsletter'>('submissions');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase.from('contact_submissions').select('*').order('created_at', { ascending: false });
      if (statusFilter !== 'all') query = query.eq('status', statusFilter);
      if (dateFilter !== 'all') {
        const now = new Date();
        let from: Date;
        if (dateFilter === 'today') { from = new Date(now.getFullYear(), now.getMonth(), now.getDate()); }
        else if (dateFilter === 'week') { from = new Date(now.getTime() - 7 * 86400000); }
        else if (dateFilter === 'month') { from = new Date(now.getTime() - 30 * 86400000); }
        else { from = new Date(0); }
        query = query.gte('created_at', from.toISOString());
      }
      const { data: subs } = await query;
      setSubmissions(subs || []);

      const { data: nl } = await supabase.from('newsletter_signups').select('*').order('created_at', { ascending: false });
      setNewsletter(nl || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, dateFilter]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const updateStatus = async (id: string, newStatus: string) => {
    await supabase.from('contact_submissions').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', id);
    setSubmissions((prev) => prev.map((s) => s.id === id ? { ...s, status: newStatus, updated_at: new Date().toISOString() } : s));
    if (selectedSubmission?.id === id) setSelectedSubmission({ ...selectedSubmission, status: newStatus });
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  const counts = {
    total: submissions.length,
    new: submissions.filter((s) => s.status === 'new').length,
    read: submissions.filter((s) => s.status === 'read').length,
    replied: submissions.filter((s) => s.status === 'replied').length,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5EDE4', fontFamily: '"Cormorant Garamond", serif' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8B6F47' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
              </div>
              <span className="font-heading text-lg font-bold" style={{ color: '#8B6F47' }}>INAAYAH SG</span>
            </Link>
            <span className="text-sm font-body px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(139,111,71,0.1)', color: '#8B6F47' }}>Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchData} className="px-4 py-2 rounded-lg font-body text-sm font-medium transition-all hover:shadow-md" style={{ backgroundColor: '#8B6F47', color: '#fff' }}>
              Refresh
            </button>
            <Link to="/" className="px-4 py-2 rounded-lg font-body text-sm font-medium border transition-all hover:shadow-md" style={{ borderColor: '#8B6F47', color: '#8B6F47' }}>
              View Site
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Submissions', value: counts.total, color: '#8B6F47' },
            { label: 'New', value: counts.new, color: '#2E7D32' },
            { label: 'Read', value: counts.read, color: '#1565C0' },
            { label: 'Newsletter Subscribers', value: newsletter.length, color: '#C9A961' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-body text-sm mb-1" style={{ color: '#6B6B6B' }}>{stat.label}</p>
              <p className="font-heading text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['submissions', 'newsletter'] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-5 py-2.5 rounded-xl font-body text-sm font-semibold capitalize transition-all" style={{ backgroundColor: activeTab === tab ? '#8B6F47' : '#fff', color: activeTab === tab ? '#fff' : '#2C2C2C' }}>
              {tab === 'submissions' ? 'Contact Submissions' : 'Newsletter Signups'}
            </button>
          ))}
        </div>

        {activeTab === 'submissions' && (
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2.5 rounded-xl font-body text-sm bg-white outline-none" style={{ border: '1px solid #ddd', color: '#2C2C2C' }}>
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
              <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="px-4 py-2.5 rounded-xl font-body text-sm bg-white outline-none" style={{ border: '1px solid #ddd', color: '#2C2C2C' }}>
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-12 text-center font-body" style={{ color: '#6B6B6B' }}>Loading submissions...</div>
              ) : submissions.length === 0 ? (
                <div className="p-12 text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" className="mx-auto mb-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  <p className="font-body text-lg" style={{ color: '#6B6B6B' }}>No submissions found</p>
                  <p className="font-body text-sm" style={{ color: '#999' }}>Submissions from the contact form will appear here.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ backgroundColor: '#FAFAFA' }}>
                        {['Name', 'Email', 'Message', 'Status', 'Date', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-5 py-3.5 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: '#8B6F47', borderBottom: '1px solid #eee' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => { setSelectedSubmission(sub); if (sub.status === 'new') updateStatus(sub.id, 'read'); }}>
                          <td className="px-5 py-4 font-body text-sm font-semibold" style={{ color: '#2C2C2C', borderBottom: '1px solid #f5f5f5' }}>{sub.name}</td>
                          <td className="px-5 py-4 font-body text-sm" style={{ color: '#6B6B6B', borderBottom: '1px solid #f5f5f5' }}>{sub.email}</td>
                          <td className="px-5 py-4 font-body text-sm max-w-xs truncate" style={{ color: '#6B6B6B', borderBottom: '1px solid #f5f5f5' }}>{sub.message}</td>
                          <td className="px-5 py-4" style={{ borderBottom: '1px solid #f5f5f5' }}>
                            <span className="px-3 py-1 rounded-full font-body text-xs font-semibold capitalize" style={{ backgroundColor: statusColors[sub.status]?.bg || '#f5f5f5', color: statusColors[sub.status]?.text || '#666' }}>{sub.status}</span>
                          </td>
                          <td className="px-5 py-4 font-body text-xs whitespace-nowrap" style={{ color: '#999', borderBottom: '1px solid #f5f5f5' }}>{formatDate(sub.created_at)}</td>
                          <td className="px-5 py-4" style={{ borderBottom: '1px solid #f5f5f5' }}>
                            <select value={sub.status} onClick={(e) => e.stopPropagation()} onChange={(e) => updateStatus(sub.id, e.target.value)} className="px-2 py-1 rounded-lg font-body text-xs bg-transparent outline-none" style={{ border: '1px solid #ddd', color: '#2C2C2C' }}>
                              <option value="new">New</option>
                              <option value="read">Read</option>
                              <option value="replied">Replied</option>
                              <option value="archived">Archived</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === 'newsletter' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-12 text-center font-body" style={{ color: '#6B6B6B' }}>Loading...</div>
            ) : newsletter.length === 0 ? (
              <div className="p-12 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" className="mx-auto mb-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <p className="font-body text-lg" style={{ color: '#6B6B6B' }}>No subscribers yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#FAFAFA' }}>
                      {['Email', 'Subscribed', 'Date'].map((h) => (
                        <th key={h} className="text-left px-5 py-3.5 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: '#8B6F47', borderBottom: '1px solid #eee' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {newsletter.map((nl) => (
                      <tr key={nl.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4 font-body text-sm" style={{ color: '#2C2C2C', borderBottom: '1px solid #f5f5f5' }}>{nl.email}</td>
                        <td className="px-5 py-4" style={{ borderBottom: '1px solid #f5f5f5' }}>
                          <span className="px-3 py-1 rounded-full font-body text-xs font-semibold" style={{ backgroundColor: nl.subscribed ? '#E8F5E9' : '#FFEBEE', color: nl.subscribed ? '#2E7D32' : '#C62828' }}>{nl.subscribed ? 'Active' : 'Unsubscribed'}</span>
                        </td>
                        <td className="px-5 py-4 font-body text-xs" style={{ color: '#999', borderBottom: '1px solid #f5f5f5' }}>{formatDate(nl.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setSelectedSubmission(null)}>
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-2xl font-bold" style={{ color: '#2C2C2C' }}>Submission Details</h3>
              <button onClick={() => setSelectedSubmission(null)} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="space-y-4">
              <div><p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: '#8B6F47' }}>Name</p><p className="font-body text-base" style={{ color: '#2C2C2C' }}>{selectedSubmission.name}</p></div>
              <div><p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: '#8B6F47' }}>Email</p><a href={`mailto:${selectedSubmission.email}`} className="font-body text-base underline" style={{ color: '#2C2C2C' }}>{selectedSubmission.email}</a></div>
              <div><p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: '#8B6F47' }}>Message</p><p className="font-body text-base leading-relaxed" style={{ color: '#2C2C2C' }}>{selectedSubmission.message}</p></div>
              <div className="flex items-center gap-4">
                <div><p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: '#8B6F47' }}>Status</p><span className="px-3 py-1 rounded-full font-body text-xs font-semibold capitalize" style={{ backgroundColor: statusColors[selectedSubmission.status]?.bg, color: statusColors[selectedSubmission.status]?.text }}>{selectedSubmission.status}</span></div>
                <div><p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: '#8B6F47' }}>Received</p><p className="font-body text-sm" style={{ color: '#6B6B6B' }}>{formatDate(selectedSubmission.created_at)}</p></div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a href={`mailto:${selectedSubmission.email}?subject=Re: Your inquiry to INAAYAH SG`} onClick={() => updateStatus(selectedSubmission.id, 'replied')} className="flex-1 py-3 rounded-xl font-body font-semibold text-sm text-center transition-all hover:shadow-md" style={{ backgroundColor: '#8B6F47', color: '#fff' }}>Reply via Email</a>
              <a href={`https://wa.me/${selectedSubmission.email.includes('@') ? '' : selectedSubmission.email}`} target="_blank" rel="noopener noreferrer" className="py-3 px-5 rounded-xl font-body font-semibold text-sm text-center transition-all hover:shadow-md" style={{ backgroundColor: '#25D366', color: '#fff' }}>WhatsApp</a>
              <button onClick={() => { updateStatus(selectedSubmission.id, 'archived'); setSelectedSubmission(null); }} className="py-3 px-5 rounded-xl font-body font-semibold text-sm transition-all hover:shadow-md" style={{ backgroundColor: '#f5f5f5', color: '#666' }}>Archive</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
