import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components'

import { useStateContext } from '../context';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

const { address, contract, getUserCampaigns} = useStateContext();

const fetchCampaigns = async () => {
  setIsLoading(true);
  try {
    const data = await getUserCampaigns();
    setCampaigns(data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}

useEffect(() => {
  if(contract) fetchCampaigns();
}, [address,contract]);

  return (
    <DisplayCampaigns
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaigns}
    />
  )
}

export default Profile