import React, { useEffect } from 'react';

const RedirectToPlayStore = () => {
  useEffect(() => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.chennaigames.mrracer.premium&utm_source=GAMESCOM2024&utm_campaign=GAMESCOM2024&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
  }, []);

  return null;
};

export default RedirectToPlayStore;
