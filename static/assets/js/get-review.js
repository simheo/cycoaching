// Fonction pour charger et afficher les avis à partir du fichier JSON
async function loadReviews() {
  // Supposons que vous ayez un élément div avec l'ID "reviews-container" où les avis seront affichés.
  const reviewsContainer = document.getElementById('review-wrapper');
  try {
    const response = await fetch('static/assets/js/reviews.json'); // Charge le fichier JSON
    const data = await response.json(); // Convertit le JSON en objet JavaScript

    data.avis.forEach(avis => {
      console.log(avis);
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('review-card');

      const reviewCardHeader = document.createElement('div');
      reviewCardHeader.classList.add('review-card-header');

      const reviewCardInfo = document.createElement('div');
      reviewCardInfo.classList.add('review-card-info');

      const auteurElement = document.createElement('h4');
      auteurElement.textContent = avis.auteur;
      reviewCardInfo.appendChild(auteurElement);
      
      const ratingElement = document.createElement('div');
      ratingElement.classList.add('rating');
      for (let i = 0; i < avis.note; i++) {
        const starElement = document.createElement('span');
        starElement.classList.add('star', 'fas', 'fa-star');
        ratingElement.appendChild(starElement);
      }
      reviewCardInfo.appendChild(ratingElement);
      
      reviewCardHeader.appendChild(reviewCardInfo);
      reviewCard.appendChild(reviewCardHeader);
      
      const reviewCardContent = document.createElement('div');
      reviewCardContent.classList.add('review-card-content');
      
      const commentaireElement = document.createElement('p');
      commentaireElement.textContent = avis.commentaire;
      reviewCardContent.appendChild(commentaireElement);
      
      reviewCard.appendChild(reviewCardContent);
      
      reviewsContainer.appendChild(reviewCard);
      console.log('Card');
    });
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}