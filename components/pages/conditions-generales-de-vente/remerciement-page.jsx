import React from 'react';
import Head from 'next/head';

const CGV = () => {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente - JAK Formation</title>
      </Head>
      <div className="container my-5">
        <div className="p-4">
          <h1 className="text-center mb-4">Conditions Générales de Vente (CGV)</h1>
          <p className="text-light fst-italic">Dernière mise à jour : 2 Juin 2025</p>

          <div className="mb-4">
            <h2>1. Objet</h2>
            <p>
              Les présentes CGV définissent les conditions applicables à toute commande de formation en ligne réalisée sur le Site. Le Client reconnaît avoir pris connaissance et accepté sans réserve les présentes CGV avant toute commande.
            </p>
          </div>

          <div className="mb-4">
            <h2>2. Identité du Vendeur</h2>
            <p>
              <strong>Raison sociale :</strong> JAK Formation<br />
              <strong>Adresse :</strong> 7 Coronation Road, Dephna House Launches – London NW10 7PQ<br />
              <strong>Email :</strong> formation@jak-company.com
            </p>
          </div>

          <div className="mb-4">
            <h2>3. Produits et Services</h2>
            <p>
              Le Site propose des formations en ligne destinées aux professionnels du secteur dentaire. Chaque formation comprend des modules pédagogiques, des supports téléchargeables, des exercices pratiques et des conseils d’experts.
            </p>
          </div>

          <div className="mb-4">
            <h2>4. Prix</h2>
            <p>
              Les prix affichés sur le Site sont exprimés en euros (€), toutes taxes comprises (TTC). Le Vendeur se réserve le droit de modifier ses prix à tout moment. Les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
            </p>
          </div>

          <div className="mb-4">
            <h2>5. Commande</h2>
            <p>
              La validation d’une commande implique l’acceptation pleine et entière des présentes CGV. Toute commande est considérée comme définitive après confirmation du paiement. Une confirmation de commande est envoyée automatiquement par email.
            </p>
          </div>

          <div className="mb-4">
            <h2>6. Modalités de Paiement</h2>
            <p>
              Les paiements sont sécurisés et peuvent être effectués par carte bancaire ou via les prestataires indiqués sur le Site. Le paiement intégral est requis au moment de la commande. Une facture est générée automatiquement et envoyée par email après validation du paiement.
            </p>
          </div>

          <div className="mb-4">
            <h2>7. Accès aux Formations</h2>
            <p>
              L’accès à la formation est accordé dans un délai de 48 heures ouvrées après la validation du paiement, sauf mention contraire. Le Client reçoit un lien personnel et sécurisé pour accéder à son espace de formation.
            </p>
            <p>
              Sauf indication contraire, l’accès est valable pendant une durée de 12 mois à compter de la date de mise à disposition.
            </p>
          </div>

          <div className="mb-4">
            <h2>8. Droit de Rétractation</h2>
            <p>
              Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas aux contenus numériques fournis sur un support immatériel, dès lors que leur exécution a commencé avec l’accord du Client. En acceptant les présentes CGV, le Client renonce expressément à son droit de rétractation.
            </p>
          </div>

          <div className="mb-4">
            <h2>9. Obligations du Client</h2>
            <p>
              Le Client s’engage à utiliser les contenus de formation dans un cadre strictement personnel ou professionnel. Toute reproduction, diffusion, revente ou partage non autorisé est strictement interdit.
            </p>
          </div>

          <div className="mb-4">
            <h2>10. Responsabilité</h2>
            <p>
              JAK Formation ne pourra être tenue responsable de l’inadéquation des formations à un objectif spécifique du Client. Ce dernier demeure seul responsable de l’usage des connaissances acquises.
            </p>
          </div>

          <div className="mb-4">
            <h2>11. Propriété Intellectuelle</h2>
            <p>
              Tous les contenus (vidéos, documents, visuels, logos, textes) sont protégés par le droit d’auteur. Toute reproduction ou utilisation non autorisée est interdite.
            </p>
          </div>

          <div className="mb-4">
            <h2>12. Données Personnelles</h2>
            <p>
              JAK Formation collecte et traite les données personnelles du Client conformément au Règlement Général sur la Protection des Données (RGPD).<br />
              Pour plus d’informations, veuillez consulter notre <a href="/politique-confidentialite" target="_blank" rel="noopener noreferrer">Politique de Confidentialité</a>.
            </p>
          </div>

          <div className="mb-4">
            <h2>13. Médiation</h2>
            <p>
              Conformément aux articles L.612-1 et suivants du Code de la consommation, le Client peut recourir gratuitement à un médiateur en cas de litige. Les coordonnées du médiateur seront fournies sur demande.
            </p>
          </div>

          <div className="mb-4">
            <h2>14. Loi Applicable et Juridiction</h2>
            <p>
              Les présentes CGV sont régies par le droit français. En cas de litige, compétence exclusive est attribuée aux tribunaux du ressort du siège social de JAK Formation.
            </p>
          </div>

          <div className="mb-4">
            <h2>15. Service Client</h2>
            <p>
              Pour toute question ou réclamation, le Client peut contacter le service client à l’adresse suivante :<br />
              📧 <a href="mailto:formation@jak-company.com">formation@jak-company.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CGV;
