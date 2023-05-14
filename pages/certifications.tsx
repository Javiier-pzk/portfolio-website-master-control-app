import SectionTitle from "@/components/sectionTitle";
import CertificationCard from "@/components/certificationCard";
import hackwagonCert from "@/public/assets/images/hackwagon-cert.png";
import orbitalCert from "@/public/assets/images/orbital-cert.png";
import Head from "next/head";
import { useSession } from "next-auth/react"

const Certifications = () => {
  useSession({ required: true })
  return (
    <div className="min-h-[90vh] sml:min-h-[88vh] flex items-center mt-[10vh] sml:mt-0 py-10 mdl:py-20">
      <Head>
        <title>Javiier-pzk | Certifications</title>
      </Head>
      <main>
        <SectionTitle title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          <CertificationCard
            certTitle="Orbital - Apollo 11 (Advanced)"
            certUrl="https://credentials.nus.edu.sg/74fdeb08-c7cc-41d6-a601-3d127fdaf7c9"
            certIssuer="National University of Singapore"
            certIssueDate="Aug 2021"
            certImage={orbitalCert}
            loadingDelay={0.1}
          />
          <CertificationCard
            certTitle="DS102: Data Analytics With Python"
            certUrl="https://learn.hackwagon.com/certificate/ckeje8h4f269811jutoe401tq"
            certIssuer="Hackwagon Academy"
            certIssueDate="Aug 2020"
            certImage={hackwagonCert}
            loadingDelay={0.15}
          />
          <CertificationCard
            certTitle="DS101: Introduction To Python Programming"
            certUrl="https://learn.hackwagon.com/certificate/EGosiLF2SsMYyRGMG"
            certIssuer="Hackwagon Academy"
            certIssueDate="May 2020"
            certImage={hackwagonCert}
            loadingDelay={0.2}
          />
        </div>
      </main>
    </div>
  );
};

export default Certifications;
