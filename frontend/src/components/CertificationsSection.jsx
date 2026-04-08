import React, { useState, useRef } from 'react';
import { Award, Calendar, ExternalLink, X, Download, Eye, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { profileData } from '../data/mock';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
const HAS_BACKEND = Boolean(BACKEND_URL);

const ISSUER_LOGO_MAP = {
  "CompTIA": "https://cdn.simpleicons.org/comptia/d9fb06",
  "Splunk": "https://cdn.simpleicons.org/splunk/d9fb06",
  "Microsoft": "https://cdn.simpleicons.org/microsoft/d9fb06",
  "Microsoft & LinkedIn": "https://cdn.simpleicons.org/microsoft/d9fb06",
  "NEBOSH": "https://cdn.simpleicons.org/nebosh/1B8D3E",
};

// Map cert id → expected filename (must match backend ALLOWED_CERT_FILENAMES)
const CERT_FILENAME_MAP = {
  1: "comptia-security-plus.pdf",
  2: "comptia-network-plus.pdf",
  3: "comptia-cysa-plus.pdf",
  4: "splunk-cybersecurity-defense-analyst.pdf",
  5: "career-essentials-system-administration.pdf",
  6: "comptia-csap.pdf",
  7: "microsoft-sc-300.pdf",
};

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState({});

  // Upload state
  const [uploadingId, setUploadingId] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({}); // { [certId]: 'success' | 'error' | null }
  const fileInputRefs = useRef({});

  const handleCertClick = (cert) => {
    if (cert.certificateUrl) {
      setSelectedCert(cert);
      setIsModalOpen(true);
    }
  };

  const handleDownload = () => {
    if (selectedCert?.certificateUrl) {
      window.open(selectedCert.certificateUrl, '_blank');
    }
  };

  const handleUploadClick = (e, certId) => {
    e.stopPropagation();
    if (!fileInputRefs.current[certId]) return;
    fileInputRefs.current[certId].click();
  };

  const handleFileChange = async (e, cert) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const targetFilename = CERT_FILENAME_MAP[cert.id];
    if (!targetFilename) return;

    setUploadingId(cert.id);
    setUploadStatus((prev) => ({ ...prev, [cert.id]: null }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        `${BACKEND_URL}/api/upload-certificate?filename=${encodeURIComponent(targetFilename)}`,
        { method: "POST", body: formData }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Upload failed");
      }

      setUploadStatus((prev) => ({ ...prev, [cert.id]: "success" }));
      // Reload the page after a short delay so the new URL is fetched
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      console.error(err);
      setUploadStatus((prev) => ({ ...prev, [cert.id]: "error" }));
    } finally {
      setUploadingId(null);
      // Reset input so the same file can be re-selected if needed
      if (fileInputRefs.current[cert.id]) {
        fileInputRefs.current[cert.id].value = "";
      }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#ffffff]">
      <span id="certificates" className="block relative -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Credentials</span>
            <span className="px-3 py-1 bg-[#3b82f6] text-white text-xs font-bold rounded-full">{profileData.certifications.length}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4">
            Professional <span className="text-[#4b5563]">Certificates</span>
          </h2>
          <p className="text-[#4b5563] mt-4 max-w-2xl">
            Industry-recognized certifications validating expertise in cybersecurity, networking, and cloud technologies. Click on any certificate to view the original credential.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.certifications.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => handleCertClick(cert)}
              className={`group p-6 bg-white/60 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 hover:border-[#3b82f6]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                cert.certificateUrl ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#d1d5db] rounded-lg flex items-center justify-center group-hover:bg-[#3b82f6] transition-colors duration-300">
                  <Award className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
                </div>
                {cert.certificateUrl ? (
                  <div className="flex items-center gap-1 text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs font-medium">View</span>
                  </div>
                ) : (
                  <ExternalLink className="w-5 h-5 text-[#4b5563] opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>

              <div className="mb-2 min-h-[80px] flex items-center">
                {cert.badgeLogo && !logoLoadError[`badge-${cert.id}`] ? (
                  <img
                    src={cert.badgeLogo}
                    alt={`${cert.name} badge`}
                    className="h-[72px] md:h-[88px] w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setLogoLoadError((prev) => ({
                        ...prev,
                        [`badge-${cert.id}`]: true,
                      }))
                    }
                  />
                ) : ISSUER_LOGO_MAP[cert.issuer] && !logoLoadError[`issuer-${cert.id}`] ? (
                  <img
                    src={ISSUER_LOGO_MAP[cert.issuer]}
                    alt={`${cert.issuer} logo`}
                    className="h-16 md:h-[72px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setLogoLoadError((prev) => ({
                        ...prev,
                        [`issuer-${cert.id}`]: true,
                      }))
                    }
                  />
                ) : (
                  <h3 className="text-[#111827] font-semibold group-hover:text-[#3b82f6] transition-colors">
                    {cert.name}
                  </h3>
                )}
              </div>

              <p className="text-[#3b82f6] text-sm font-medium mb-3">
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#4b5563] text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                {cert.certificateUrl && (
                  <span className="text-xs text-[#4b5563] bg-[#ffffff] px-2 py-1 rounded-full">
                    {cert.certificateType === 'pdf' ? 'PDF' : 'Image'}
                  </span>
                )}
              </div>

              {/* Upload row – only shown when a backend API is available */}
              {HAS_BACKEND && <div className="mt-4 pt-4 border-t border-[#d1d5db]/50">
                {/* Hidden file input */}
                <input
                  ref={(el) => { fileInputRefs.current[cert.id] = el; }}
                  type="file"
                  accept=".pdf,application/pdf"
                  className="hidden"
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleFileChange(e, cert)}
                />

                <button
                  onClick={(e) => handleUploadClick(e, cert.id)}
                  disabled={uploadingId === cert.id}
                  className="flex items-center gap-2 text-xs font-semibold text-[#4b5563] hover:text-[#3b82f6] transition-colors disabled:opacity-50"
                >
                  {uploadingId === cert.id ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                      </svg>
                      Uploading…
                    </>
                  ) : uploadStatus[cert.id] === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Uploaded!</span>
                    </>
                  ) : uploadStatus[cert.id] === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-400">Failed – retry</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Upload PDF
                    </>
                  )}
                </button>
              </div>}
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#d1d5db] to-[#f3f4f6] rounded-2xl border border-[#d1d5db]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">CompTIA Triple Certified</h3>
              <p className="text-[#4b5563]">Security+, Network+, and CySA+ certified professional</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-6 py-3 bg-[#ffffff] rounded-xl">
              <div className="text-3xl font-black text-[#3b82f6]">8</div>
              <div className="text-xs text-[#4b5563] uppercase tracking-wider">Certifications</div>
            </div>
            <div className="text-center px-6 py-3 bg-[#ffffff] rounded-xl">
              <div className="text-3xl font-black text-[#3b82f6]">5</div>
                <div className="text-xs text-[#4b5563] uppercase tracking-wider">Issuers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-[#ffffff] border-[#d1d5db] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b border-[#d1d5db]">
            <div className="flex items-start justify-between">
              <div>
                <DialogTitle className="text-xl font-bold text-[#111827] mb-1">
                  {selectedCert?.name}
                </DialogTitle>
                <p className="text-[#3b82f6] text-sm font-medium">
                  Issued by {selectedCert?.issuer} • {selectedCert?.date}
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6] text-white rounded-full font-semibold text-sm hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4" />
                Open Full
              </button>
            </div>
          </DialogHeader>
          
          <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
            {selectedCert?.certificateType === 'image' ? (
              <img
                src={selectedCert.certificateUrl}
                alt={`${selectedCert.name} Certificate`}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            ) : selectedCert?.certificateType === 'pdf' ? (
              <div className="w-full">
                <div className="bg-[#f3f4f6] rounded-xl p-8 text-center border border-[#d1d5db]">
                  <div className="w-20 h-20 bg-[#d1d5db] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-[#3b82f6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{selectedCert.name}</h3>
                  <p className="text-[#4b5563] mb-6">
                    This certificate is available as a PDF document. Click the button below to view or download the official credential.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
                  >
                    <Download className="w-5 h-5" />
                    View PDF Certificate
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;
