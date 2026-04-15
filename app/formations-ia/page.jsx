"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterThree from "@/components/layout/footers/footer-three";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import Link from "next/link";

const formations = [
  { name: "Architecture", url: "https://ia-en-architectes.kelaj-company.com/" },
  { name: "Chauffagistes", url: "https://ia-expert-chauffagistes.kelaj-company.com/" },
  { name: "Coachs Sportifs", url: "https://ia-expert-coachs-sportifs.kelaj-company.com/" },
  { name: "Conseillers en Gestion de Patrimoine", url: "https://ia-expert-conseillers-gestion-patrimoine.kelaj-company.com/" },
  { name: "Couvreurs", url: "https://ia-expert-couvreurs.kelaj-company.com/" },
  { name: "Dentisterie", url: "https://ia-dentistes.kelaj-company.com/" },
  { name: "Droit", url: "https://ia-droit.kelaj-company.com/" },
  { name: "Électriciens", url: "https://ia-expert-electriciens.kelaj-company.com/" },
  { name: "Entreprise", url: "https://ia-en-entreprise.kelaj-company.com/" },
  { name: "Expert Comptable", url: "https://ia-expcomptable.kelaj-company.com/" },
  { name: "Infirmiers Libéraux", url: "https://ia-expert-infirmiers-liberaux.kelaj-company.com/" },
  { name: "Juristes", url: "https://ia-juristes.kelaj-company.com/" },
  { name: "Kinésithérapeutes", url: "https://ia-expert-kinesitherapeutes.kelaj-company.com/" },
  { name: "Maçons", url: "https://ia-expert-macons.kelaj-company.com/" },
  { name: "Médecins Généralistes", url: "https://ia-expert-medecins-generalistes.kelaj-company.com/" },
  { name: "Menuisiers", url: "https://ia-expert-menuisiers.kelaj-company.com/" },
  { name: "Notaires", url: "https://ia-notariat.kelaj-company.com/" },
  { name: "Orthodontistes", url: "https://ia-expert-orthodontistes.kelaj-company.com/" },
  { name: "Ostéopathes", url: "https://ia-expert-osteopathes.kelaj-company.com/" },
  { name: "Paysagistes", url: "https://ia-expert-paysagistes.kelaj-company.com/" },
  { name: "Peintres Décorateurs", url: "https://ia-expert-peintres-decorateurs.kelaj-company.com/" },
  { name: "Plombiers", url: "https://ia-expert-plombiers.kelaj-company.com/" },
  { name: "Psychologues", url: "https://ia-expert-psychologues.kelaj-company.com/" },
  { name: "Radiologues", url: "https://ia-radiologues.kelaj-company.com/" },
  { name: "Serruriers", url: "https://ia-expert-serruriers.kelaj-company.com/" },
  { name: "Vétérinaires", url: "https://ia-expert-veterinaires.kelaj-company.com/" },
];

const FormationsIA = () => {
  return (
    <>
      <SEO pageTitle="Formations IA Professionnelles - JAK Formation" />
      <HeaderOne />
      <BreadCrumb title="Nos Formations Professionnelles IA" innerTitle="Formations IA" />
      <div className="section-padding" style={{ background: "#f8f8f5", minHeight: "60vh" }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-50">
            <div className="col-xl-8">
              <h2 style={{ color: "#111111", marginBottom: "15px" }}>
                L'Intelligence Artificielle au service de votre métier
              </h2>
              <p style={{ color: "#555", fontSize: "17px", lineHeight: "1.7" }}>
                Découvrez nos formations IA spécialisées par profession. Chaque programme est conçu
                pour intégrer l'IA dans votre pratique quotidienne et booster votre productivité.
              </p>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            {formations.map((f, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
                <Link
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "#111111",
                    borderRadius: "12px",
                    padding: "28px 24px",
                    textAlign: "center",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    border: "1px solid #222",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C5A55A";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(197,165,90,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#222";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #C5A55A, #D4AF37)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: "20px",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    IA
                  </div>
                  <h5
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "0",
                      lineHeight: "1.4",
                    }}
                  >
                    {f.name}
                  </h5>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      color: "#C5A55A",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Découvrir la formation →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterThree />
      <ScrollToTop />
    </>
  );
};

export default FormationsIA;
