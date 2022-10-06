import './App.css';
import React from 'react'
import PriceCard from './components/PriceCard';

let data = [
  {
    plan:"Free",
    price:"0",
    users:"Single User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false,
  },

  {
    plan:"Plus",
    price:"9",
    users:"5 User",
    usersEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false,
  },

  {
    plan:"Pro",
    price:"49",
    users:"Unlimited User",
    usersEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Unlimited Free Subdomain",
    subdomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:true,
  }
]

function App() {
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <PriceCard data={data[0]}/>
      <PriceCard data={data[1]}/>
      <PriceCard data={data[2]}/>
    </div>
  </div>
</section>
</>
  }
export default App;
