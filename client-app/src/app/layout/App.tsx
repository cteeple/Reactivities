import { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from './models/activity';
import NavBar from './NavBar';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error Response: ', error);
      });
  }, []);

  return (
    <div className='min-h-full'>
      <NavBar />

      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
            Activities
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          <ActivitiesDashboard activities={activities} />
        </div>
      </main>
    </div>
  );
}

export default App;
