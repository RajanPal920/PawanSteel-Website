import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Eye, 
  Building2, 
  CheckCircle2, 
  Award,
  Calendar,
  FileSpreadsheet
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function CertificatePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const certParam = searchParams.get('cert') || searchParams.get('type') || '';
  const [activeCert, setActiveCert] = useState(certParam === 'udyam' ? 'udyam' : 'iso-9001');

  useEffect(() => {
    if (certParam === 'udyam' || certParam === 'iso-9001') {
      setActiveCert(certParam);
    }
  }, [certParam]);

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
      registeredAddress: 'Office No. 107, 1st Floor, 13/21 Seth Virchand Umarsi Building, 3rd Panjrapole, Gulalwadi, Mumbai – 400004, Maharashtra, India',
      scope: 'TRADING OF ROD & BAR, PIPE & TUBE, SHEET & PLATE, FLANGES, FASTENERS, BUTTWELD FITTINGS & FORGED FITTINGS, FERRULE FITTINGS IN GRADES: STAINLESS STEEL, CARBON STEEL, MILD STEEL, ALLOY STEEL, DUPLEX, SUPER DUPLEX, MONEL, INCONEL, HASTELLOY, TITANIUM, COPPER NICKEL, BRASS & ALUMINUM.',
      badgeText: 'ISO 9001:2015 Certified',
      status: 'Active & Verified',
      color: '#D71932'
    },
    {
      id: 'udyam',
      title: 'Udyam Registration Certificate (Govt. of India MSME)',
      shortTitle: 'MSME Udyam Certificate',
      pdfUrl: '/pawan-steel-alloys-udyam-registration-certificate.pdf',
      issuer: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
      number: 'UDYAM-MH-19-0449426',
      registeredTo: 'PAWAN STEEL ALLOYS',
      registeredAddress: 'Office No. 107, 1st Floor, 13/21 Seth Virchand Umarsi Building, 3rd Panjrapole, Gulalwadi, Mumbai – 400004, Maharashtra, India',
      nicCode: '4662 / 46620 - Wholesale of metals and metal ores',
      activity: 'Trading / Wholesale trade of metals and metal ores',
      badgeText: 'Govt. of India MSME',
      status: 'Registered Enterprise',
      color: '#123467'
    }
  ];

  const currentDoc = certificates.find((c) => c.id === activeCert) || certificates[0];

  const handleSelectCert = (id) => {
    setActiveCert(id);
    setSearchParams({ cert: id });
  };

  return (
    <div className="w-full bg-[#F3F7FB] min-h-screen pb-16">
      {/* Header Banner */}
      <section className="bg-[#123467] text-white py-12 md:py-16 relative overflow-hidden border-b-4 border-[#D71932]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467] to-[#1B478A] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Business Credentials</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Certificates & Verification
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              PAWAN STEEL ALLOYS operates in full compliance with ISO 9001:2015 quality frameworks and national enterprise registration bodies. Inspect and download our official verified certificates below.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors font-medium">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#123467] font-bold">Certificates</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Certificate Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {certificates.map((cert) => {
            const isSelected = activeCert === cert.id;
            return (
              <button
                key={cert.id}
                onClick={() => handleSelectCert(cert.id)}
                className={`flex items-center justify-between p-4 rounded-xl text-left border-2 transition-all cursor-pointer shadow-sm ${
                  isSelected
                    ? 'bg-[#123467] text-white border-[#123467] shadow-lg ring-2 ring-red-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-red-600 text-white' : 'bg-red-50 text-[#D71932]'}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black block tracking-wide uppercase opacity-80">
                      {cert.badgeText}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold">
                      {cert.shortTitle}
                    </h3>
                  </div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {cert.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificate Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          
          {/* Card Header Strip */}
          <div className="p-6 sm:p-8 bg-[#123467] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-[#D71932]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentDoc.badgeText}</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                {currentDoc.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
                Certified Legal Entity: <strong className="text-white underline">{currentDoc.registeredTo}</strong>
              </p>
            </div>

            {/* Document Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href={currentDoc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#123467] hover:bg-slate-100 text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all hover:scale-102"
              >
                <ExternalLink className="w-4 h-4 text-[#D71932]" />
                <span>Open Full PDF</span>
              </a>

              <a
                href={currentDoc.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all hover:scale-102"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Certificate Metadata Breakdown */}
          <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/70">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Issuing Authority</p>
                <p className="font-extrabold text-[#123467] text-sm mt-1">{currentDoc.issuer}</p>
                {currentDoc.accreditation && (
                  <p className="text-xs text-slate-600 mt-1.5 font-medium">{currentDoc.accreditation}</p>
                )}
                {currentDoc.accreditationCode && (
                  <p className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-2">
                    {currentDoc.accreditationCode}
                  </p>
                )}
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Registration Number</p>
                <p className="font-extrabold text-[#123467] text-sm mt-1">
                  {currentDoc.number || 'QMS Certification CAB# 119012'}
                </p>
                {currentDoc.nicCode && (
                  <p className="text-xs text-slate-600 mt-1.5 font-medium">NIC: {currentDoc.nicCode}</p>
                )}
                <p className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-2 font-bold">
                  Status: Active & Verified
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs md:col-span-2 lg:col-span-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Registered Office</p>
                <p className="text-xs text-slate-700 leading-relaxed mt-1 font-medium">
                  {currentDoc.registeredAddress}
                </p>
              </div>
            </div>

            {currentDoc.scope && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-[#123467] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Certified Scope of Trading & Industrial Supply:</span>
                </p>
                <p className="text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200 font-mono leading-relaxed shadow-2xs">
                  {currentDoc.scope}
                </p>
              </div>
            )}
          </div>

          {/* Embedded Document Viewer with Robust Fallback */}
          <div className="p-4 sm:p-6 bg-slate-100">
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#D71932]" />
                  <span>Document Preview: {currentDoc.shortTitle}</span>
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={currentDoc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#D71932] hover:underline flex items-center gap-1"
                  >
                    <span>View Fullscreen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* PDF Embed Object / Iframe Viewer */}
              <div className="w-full h-[600px] sm:h-[750px] md:h-[850px] bg-slate-900 relative">
                <object
                  data={`${currentDoc.pdfUrl}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={`${currentDoc.pdfUrl}#toolbar=1&navpanes=0`}
                    title={currentDoc.title}
                    className="w-full h-full border-0"
                  >
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center text-white bg-slate-900">
                      <FileCheck className="w-16 h-16 text-[#D71932] mb-4" />
                      <h3 className="text-lg font-bold mb-2">View Verified Official Certificate</h3>
                      <p className="text-sm text-slate-300 max-w-md mb-6">
                        Your browser or mobile device does not support embedded PDF frames. You can open or download the high-resolution certificate directly below.
                      </p>
                      <a
                        href={currentDoc.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#D71932] hover:bg-[#B51226] text-white font-bold rounded-lg shadow-lg flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Official PDF Now</span>
                      </a>
                    </div>
                  </iframe>
                </object>
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 px-4 text-xs">
                <span className="text-slate-600 font-medium">
                  Official authentic document hosted on Pawan Steel Alloys secure server.
                </span>
                <div className="flex items-center gap-4 font-bold">
                  <a
                    href={currentDoc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#123467] hover:text-[#D71932] flex items-center gap-1"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href={currentDoc.pdfUrl}
                    download
                    className="text-[#D71932] hover:underline flex items-center gap-1"
                  >
                    <span>Download File</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Verification & Compliance Statement */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Authenticity Assurance:</strong> All certificates presented on this portal are authentic documents issued to <strong className="text-slate-800">{COMPANY_INFO.name}</strong>. Certified true copies and third-party inspection certifications (TPI) by agencies such as Bureau Veritas, TUV, DNV, or SGS can be coordinated for major project supply contracts upon request.
          </div>
        </div>

      </div>
    </div>
  );
}
