import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Eye, 
  FileText, 
  Building2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function CertificatePage() {
  const [activeCert, setActiveCert] = useState('iso-9001');

  const certificates = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Quality Management Systems Certificate',
      shortTitle: 'ISO 9001:2015 Certificate',
      pdfUrl: '/pawan-steel-alloys-iso-9001-certificate.pdf',
      issuer: 'Audittech Certification Pvt. Ltd.',
      accreditation: 'IAF (International Accreditation Forum) & EGAC Accredited',
      accreditationCode: 'QMS Certification CAB# 119012',
      registeredTo: 'PAWAN STEEL ALLOYS',
      registeredAddress: '1st Floor, Office No. 107, 13/21, Seth Virchand Umarsi Building, Panjarapole 3rd Lane, Gulalwadi Girgaon, Mumbai, Maharashtra - 400004 INDIA',
      scope: 'TRADING OF ROD & BAR, PIPE & TUBE, SHEET & PLATE, FLANGES, FASTENERS, BUTTWELD FITTINGS & FORGED FITTINGS, FERRULE FITTINGS IN GRADES: STAINLESS STEEL, CARBON STEEL, MILD STEEL, ALLOY STEEL, DUPLEX, SUPER DUPLEX, MONEL, INCONEL, HASTELLOY, TITANIUM, COPPER NICKEL, BRASS & ALUMINUM.',
      badgeText: 'ISO 9001:2015'
    },
    {
      id: 'udyam',
      title: 'Udyam Registration Certificate (Govt. of India MSME)',
      shortTitle: 'MSME Udyam Certificate',
      pdfUrl: '/pawan-steel-alloys-udyam-registration-certificate.pdf',
      issuer: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
      number: 'UDYAM-MH-19-0449426',
      registeredTo: 'PAWAN STEEL ALLOYS',
      registeredAddress: 'Office No. 107, 1st Floor, 13/21 Seth Virchand Umarsi Building, Panjarapole 3rd Lane, Gulalwadi, Girgaon, Mumbai, Maharashtra - 400004',
      nicCode: '4662 / 46620 - Wholesale of metals and metal ores',
      activity: 'Trading / Wholesale trade of metals and metal ores',
      badgeText: 'MSME Registered'
    }
  ];

  const currentDoc = certificates.find((c) => c.id === activeCert) || certificates[0];

  return (
    <div className="w-full bg-[#F3F7FB] min-h-screen pb-16">
      {/* Header Banner */}
      <section className="bg-[#123467] text-white py-14 relative overflow-hidden border-b-4 border-[#D71932]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467] to-[#1B478A] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Business Credentials</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Certificates & Verification Documents
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              PAWAN STEEL ALLOYS operates in full compliance with recognized quality management frameworks and national enterprise registration bodies. Inspect and download our official verified certificates below.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Certificates</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Certificate Switcher Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActiveCert(cert.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold border transition-all ${
                activeCert === cert.id
                  ? 'bg-[#123467] text-white border-[#123467] shadow-md'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              <FileCheck className={`w-4 h-4 ${activeCert === cert.id ? 'text-[#D71932]' : 'text-slate-400'}`} />
              <span>{cert.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Certificate Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="p-6 sm:p-8 bg-[#123467] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-[#D71932]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentDoc.badgeText}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {currentDoc.title}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Issued to: <strong className="text-white">{currentDoc.registeredTo}</strong>
              </p>
            </div>

            {/* Document Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={currentDoc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#123467] hover:bg-slate-100 text-xs font-bold rounded-md shadow transition"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#D71932]" />
                <span>Open in New Tab</span>
              </a>

              <a
                href={currentDoc.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md shadow transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Certificate Metadata Breakdown */}
          <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Issuing Authority</p>
                <p className="font-bold text-[#123467] mt-0.5">{currentDoc.issuer}</p>
                {currentDoc.accreditation && (
                  <p className="text-xs text-slate-600 mt-1">{currentDoc.accreditation}</p>
                )}
                {currentDoc.accreditationCode && (
                  <p className="text-xs font-mono text-slate-500 mt-0.5">{currentDoc.accreditationCode}</p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Official Enterprise Identifier</p>
                <p className="font-bold text-[#123467] mt-0.5">
                  {currentDoc.number || 'Certified System Registered'}
                </p>
                {currentDoc.nicCode && (
                  <p className="text-xs text-slate-600 mt-1">NIC: {currentDoc.nicCode}</p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Registered Address</p>
                <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                  {currentDoc.registeredAddress}
                </p>
              </div>
            </div>

            {currentDoc.scope && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-[#123467] mb-1.5">
                  Scope of Trading & Certification:
                </p>
                <p className="text-xs text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200 font-mono leading-relaxed">
                  {currentDoc.scope}
                </p>
              </div>
            )}
          </div>

          {/* Clean Embedded Document Viewer */}
          <div className="p-4 sm:p-6 bg-slate-200">
            <div className="bg-white rounded-xl shadow border border-slate-300 overflow-hidden">
              <div className="p-3 bg-slate-100 border-b border-slate-300 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D71932]" />
                  <span>Document Preview: {currentDoc.shortTitle}</span>
                </span>
                <span className="text-[11px] text-slate-500">Official PDF format</span>
              </div>

              {/* PDF Embed Viewer */}
              <div className="w-full h-[650px] sm:h-[800px] bg-slate-900 flex flex-col items-center justify-center relative">
                <iframe
                  src={`${currentDoc.pdfUrl}#toolbar=1&navpanes=0`}
                  title={currentDoc.title}
                  className="w-full h-full border-0"
                />
                
                {/* Fallback bar below if browser blocks embedded preview */}
                <noscript>
                  <p className="text-white text-xs">
                    Please use the download button above to view the certificate.
                  </p>
                </noscript>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2 px-4">
                <span>Direct PDF link verified and hosted on server.</span>
                <a
                  href={currentDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#D71932] hover:underline flex items-center gap-1"
                >
                  <span>Open Full PDF in New Window</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Verification & Compliance Statement */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Authenticity Assurance:</strong> All certificates presented on this portal are authentic documents issued to <strong className="text-slate-800">{COMPANY_INFO.name}</strong>. Certified true copies and third-party inspection certifications (TPI) by agencies such as Bureau Veritas, TUV, DNV, or SGS can be coordinated for major project supply contracts upon request.
          </div>
        </div>

      </div>
    </div>
  );
}

