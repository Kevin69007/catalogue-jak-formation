import React from 'react';

const CookiesPolicy = () => {
  return (
    <div style={{ background: "#f8f8f5", minHeight: "100vh", paddingTop: "40px", paddingBottom: "60px" }}>
      <div className="container">
        <div style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "50px 60px",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)"
        }}>
          <h1 style={{ textAlign: "center", color: "#111", marginBottom: "8px", fontSize: "32px" }}>
            Politique de Cookies
          </h1>
          <p style={{ textAlign: "center", color: "#999", fontSize: "14px", marginBottom: "40px" }}>
            Dernière mise à jour : 15 avril 2026
          </p>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>1. Qu'est-ce qu'un cookie ?</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences (langue, affichage, identifiants de session) sur une période donnée, afin de ne pas avoir à les ressaisir à chaque visite.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>2. Types de cookies utilisés</h2>
            <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "16px" }}>
              Nous utilisons les types de cookies suivants :
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "Cookies essentiels", desc: "Nécessaires au fonctionnement du site (authentification, sécurité, panier d'achat). Ils ne peuvent pas être désactivés." },
                { title: "Cookies analytiques", desc: "Nous aident à comprendre comment les visiteurs utilisent le site (Google Analytics). Les données sont anonymisées." },
                { title: "Cookies de fonctionnalité", desc: "Permettent de mémoriser vos préférences (langue, paramètres d'affichage) pour améliorer votre expérience." },
                { title: "Cookies marketing", desc: "Utilisés pour vous proposer des contenus et publicités pertinents (Facebook Pixel). Vous pouvez les refuser." },
              ].map((cookie, i) => (
                <div key={i} style={{
                  background: "#f8f8f5",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  borderLeft: "3px solid #C5A55A"
                }}>
                  <strong style={{ color: "#111" }}>{cookie.title}</strong>
                  <p style={{ color: "#555", margin: "4px 0 0", fontSize: "14px", lineHeight: "1.6" }}>{cookie.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>3. Base légale</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Conformément à la directive européenne 2009/136/CE (ePrivacy) et au Règlement Général sur la Protection des Données (RGPD), nous recueillons votre consentement avant de déposer des cookies non essentiels sur votre appareil. Les cookies essentiels sont déposés sur la base de notre intérêt légitime à assurer le fonctionnement du site.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>4. Gestion des cookies</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies. Vous avez plusieurs options :
            </p>
            <ul style={{ color: "#444", lineHeight: "1.8", paddingLeft: "20px", marginTop: "8px" }}>
              <li>Configurer votre navigateur pour accepter, refuser ou supprimer les cookies</li>
              <li>Utiliser les paramètres de confidentialité de votre navigateur</li>
              <li>Installer des extensions de navigateur pour bloquer les traceurs</li>
            </ul>
            <p style={{ color: "#444", lineHeight: "1.7", marginTop: "12px" }}>
              <strong>Attention :</strong> la désactivation des cookies essentiels peut affecter le bon fonctionnement du site et limiter l'accès à certaines fonctionnalités.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>5. Cookies tiers</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Nous utilisons des services tiers qui peuvent déposer leurs propres cookies :
            </p>
            <ul style={{ color: "#444", lineHeight: "1.8", paddingLeft: "20px", marginTop: "8px" }}>
              <li><strong>Google Analytics</strong> — mesure d'audience et statistiques de visite</li>
              <li><strong>Facebook Pixel (Meta)</strong> — suivi des conversions et ciblage publicitaire</li>
            </ul>
            <p style={{ color: "#444", lineHeight: "1.7", marginTop: "12px" }}>
              Nous n'avons pas de contrôle sur les cookies déposés par ces tiers. Leur utilisation est régie par leurs propres politiques de confidentialité.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>6. Durée de conservation</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Les cookies sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la CNIL. Au-delà de cette période, votre consentement sera à nouveau sollicité.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>7. Vos droits</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Vous pouvez exercer ces droits en nous contactant à : <a href="mailto:formation@jak-company.com" style={{ color: "#C5A55A" }}>formation@jak-company.com</a>
            </p>
          </section>

          <section style={{ marginBottom: "0" }}>
            <h2 style={{ color: "#111", fontSize: "20px", borderBottom: "2px solid #C5A55A", paddingBottom: "8px", marginBottom: "12px" }}>8. Modifications de la politique</h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour actualisée. Nous vous invitons à la consulter régulièrement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
