import React from 'react';
import SavedOpportunities from './Backpack';

function SaveOpportunitiesPage() {
  const savedOpportunities = JSON.parse(localStorage.getItem('savedOpportunities')) || [];

  return (
    <div>
      <SavedOpportunities savedOpportunities={savedOpportunities} />
    </div>
  );
}

export default SaveOpportunitiesPage;
