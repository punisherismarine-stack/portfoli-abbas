import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Flag, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const profile = {
  name: "ABBAS HATIM ALI",
  title: "Civil Engineer – Finishing Works | 9+ Years Experience",
  contacts: [
    { icon: Phone, label: "Kuwait", value: "+965-9556-5754", href: "tel:+96595565754" },
    { icon: Phone, label: "India", value: "+91-8559-909-290", href: "tel:+918559909290" },
    { icon: Mail, label: "Email", value: "abbashatimalio3@gmail.com", href: "mailto:abbashatimalio3@gmail.com" },
    { icon: MapPin, label: "Location", value: "Fahaheel, Kuwait" },
    { icon: Flag, label: "Nationality", value: "Indian" },
  ],
  summary:
    "Civil Engineer with 9+ years across residential, commercial, and industrial projects. Strong record delivering finishing scope—masonry, tiling, plaster, paint, waterproofing, joinery—per drawings, BOQ, and method statements. Experienced in site supervision, QA/QC, IRs, ITPs, material testing, quantity verification, and snag closure. Effective coordination with architects, consultants, subcontractors, and QA/QC to achieve schedule, quality, and safety targets.",
  coreCompetencies: [
    "Finishing Works Execution (Masonry, Plaster, Tiling, Painting, Waterproofing, False Ceiling, Doors/Windows)",
    "Site Supervision and Coordination",
    "QA/QC, IR/ITP Compliance",
    "Material Inspection (IS, ASTM, QCS)",
    "Drawing Review and BOQ Interpretation",
    "Quantity Estimation and Cost Control",
    "Snag List Preparation and Closure",
    "Precast Production and Installation",
    "Project Planning and Progress Reporting",
    "Subcontractor Management and Resource Allocation",
    "HSE Compliance",
    "Client and Consultant Coordination",
  ],
  skills: {
    technical: [
      "AutoCAD",
      "STAAD.Pro",
      "Revit",
      "ETABS",
      "IDAT",
      "MS Excel",
      "MS Word",
      "PowerPoint",
    ],
    documentation: [
      "Snag Logs",
      "Inspection Requests",
      "Method Statements",
      "Work Permits",
    ],
    soft: [
      "Leadership",
      "Communication",
      "Analytical Thinking",
      "Problem Solving",
      "Time Management",
      "Team Collaboration",
    ],
  },
  experience: [
    {
      role: "Production Engineer – Finishing and Precast Works",
      company: "Real-Estate Construction & Fabrication Co. (RECAFCO)",
      location: "Mina Abdullah, Kuwait",
      dates: "Oct 2023 – Present",
      bullets: [
        "Supervise and execute finishing works per approved drawings and specifications: masonry, tiling, plastering, painting, waterproofing, and joinery.",
        "Conduct daily inspections and raise IRs as per ITPs; ensure compliance with QCS, IS codes, and project QA/QC procedures.",
        "Coordinate sequencing and material availability with subcontractors, suppliers, and site engineers.",
        "Prepare BOQ take-offs, verify quantities, and optimize resource utilization.",
        "Track schedule, quality, and safety; produce daily progress and monthly status reports.",
        "Assist with snag list compilation, defect rectification, and handover documentation.",
      ],
    },
    {
      role: "CAD Designer – Architectural & Structural Detailing",
      company: "Mohammed Taqi",
      location: "Shuwaikh, Kuwait",
      dates: "Dec 2018 – Sep 2023",
      bullets: [
        "Prepared architectural, interior, and finishing drawings using AutoCAD and Revit for residential and commercial projects.",
        "Resolved interface issues through coordination of finishing and MEP layouts with clients and contractors.",
        "Produced quantity take-offs and supported tender documentation for finishing scope.",
        "Improved drawing quality and reduced rework through detailed coordination.",
      ],
    },
    {
      role: "Structural Design Engineer",
      company: "Beniwal Construction Co. Pvt. Ltd.",
      location: "Jodhpur, India",
      dates: "Aug 2015 – Oct 2017",
      bullets: [
        "Designed RC elements—columns, beams, slabs, foundations—per IS codes and client requirements.",
        "Supported site teams by reviewing drawings and clarifying technical details for execution.",
        "Inspected finishing quality to meet specified tolerances.",
      ],
    },
    {
      role: "Structural Engineer (Intern)",
      company: "TSLABS",
      location: "Pune, India",
      dates: "Jun 2014 – Jul 2015",
      bullets: [
        "Assisted in design and detailing of reinforced concrete elements for multi‑storey projects.",
        "Prepared Excel-based member design packages and corresponding structural drawings.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech (Honours) in Civil Engineering",
      school: "Rajasthan Technical University, Jaipur, India",
      year: "2015",
      details: "Aggregate: 78.81%",
    },
  ],
  certifications: [
    "GATE Qualified (Graduate Aptitude Test in Engineering)",
    "Best Project Award: Traffic Density Management",
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Arabic", level: "Professional" },
  ],
  links: [],
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <div className="h-5 w-1.5 rounded bg-primary" />
    <h3 className="text-lg font-semibold tracking-tight">{children}</h3>
  </div>
);

function Divider() {
  return <div className="h-px w-full bg-border" />;
}

function Header() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{profile.name}</h1>
      <p className="text-sm text-muted-foreground">{profile.title}</p>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: any) {
  const inner = (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 shrink-0" />
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} className="hover:underline" target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function ContactCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Contact</SectionTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {profile.contacts.map((c, i) => (
          <ContactItem key={i} {...c} />
        ))}
        {profile.links?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.links.map((l: any, i: number) => (
              <a
                key={i}
                href={l.href}
                className="inline-flex items-center gap-1 text-sm hover:underline"
              >
                <LinkIcon className="h-4 w-4" /> {l.label}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SummaryCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Professional Summary</SectionTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{profile.summary}</p>
      </CardContent>
    </Card>
  );
}

function ListBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="secondary" className="whitespace-normal text-left font-normal py-1 px-2">
      {children}
    </Badge>
  );
}

function CompetenciesCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Core Competencies</SectionTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {profile.coreCompetencies.map((c, i) => (
          <ListBadge key={i}>{c}</ListBadge>
        ))}
      </CardContent>
    </Card>
  );
}

function SkillsCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Technical Skills</SectionTitle>
      </CardHeader>
      <CardContent className="grid gap-3 text-sm">
        <div>
          <p className="font-semibold">Design & Analysis</p>
          <p className="text-muted-foreground">{profile.skills.technical.join(", ")}</p>
        </div>
        <div>
          <p className="font-semibold">Documentation & Reporting</p>
          <p className="text-muted-foreground">{profile.skills.documentation.join(", ")}</p>
        </div>
        <div>
          <p className="font-semibold">Soft Skills</p>
          <p className="text-muted-foreground">{profile.skills.soft.join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ExperienceItem({ role, company, location, dates, bullets }: any) {
  return (
    <div className="grid gap-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-semibold">{role}</p>
        <p className="text-xs text-muted-foreground">{dates}</p>
      </div>
      <p className="text-sm text-muted-foreground">{company} • {location}</p>
      <ul className="mt-1 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
        {bullets.map((b: string, i: number) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Professional Experience</SectionTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        {profile.experience.map((e, i) => (
          <ExperienceItem key={i} {...e} />
        ))}
      </CardContent>
    </Card>
  );
}

function EducationCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Education</SectionTitle>
      </CardHeader>
      <CardContent className="grid gap-2 text-sm">
        {profile.education.map((ed, i) => (
          <div className="grid gap-0.5" key={i}>
            <p className="font-semibold">{ed.degree}</p>
            <p className="text-muted-foreground">{ed.school}</p>
            <p className="text-muted-foreground">{ed.year} • {ed.details}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CertificationsCard() {
  return (
  <Card className="shadow-none border-muted">
    <CardHeader className="pb-2">
      <SectionTitle>Certifications & Achievements</SectionTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-2">
      {profile.certifications.map((c, i) => (
        <ListBadge key={i}>{c}</ListBadge>
      ))}
    </CardContent>
  </Card>
  );
}

function LanguagesCard() {
  return (
    <Card className="shadow-none border-muted">
      <CardHeader className="pb-2">
        <SectionTitle>Languages</SectionTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {profile.languages.map((l, i) => (
          <Badge key={i} variant="outline" className="py-1 px-2">
            {l.name} — {l.level}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}

const Toolbar = () => (
  <div className="print:hidden mb-4 flex items-center justify-between">
    <div className="text-sm text-muted-foreground">One‑page resume • Print to PDF</div>
    <div className="flex gap-2">
      <Button onClick={() => window.print()} size="sm">Print / Save PDF</Button>
    </div>
  </div>
);

function DevChecks() {
  useEffect(() => {
    console.assert(typeof ExperienceCard === "function", "ExperienceCard should be defined");
    console.assert(Array.isArray(profile.experience) && profile.experience.length > 0, "profile.experience should be non-empty");
  }, []);
  return null;
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 py-6">
        <Toolbar />
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="a4:shadow a4:rounded-2xl a4:border a4:border-border a4:bg-card a4:p-6 a4:m-0 a4:w-auto a4:max-w-none"
        >
          <DevChecks />
          <header className="grid gap-4">
            <Header />
            <Divider />
          </header>

          <main className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left column */}
            <div className="lg:col-span-1 space-y-4">
              <ContactCard />
              <SkillsCard />
              <EducationCard />
              <LanguagesCard />
              <CertificationsCard />
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 space-y-4">
              <SummaryCard />
              <CompetenciesCard />
              <ExperienceCard />
            </div>
          </main>
        </motion.section>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 10mm; }
          .print\\:hidden { display: none !important; }
          .a4\\:shadow { box-shadow: none !important; }
          .a4\\:rounded-2xl { border-radius: 0 !important; }
          .a4\\:border { border: none !important; }
          .a4\\:bg-card { background: transparent !important; }
          .a4\\:p-6 { padding: 0 !important; }
          .a4\\:m-0 { margin: 0 !important; }
        }
      `}</style>
    </div>
  );
}
