import { Activity } from '../../../app/layout/models/activity';
import ActivityList from './ActivityList';

interface Props {
  activities: Activity[];
}

export default function ActivitiesDashboard({ activities }: Props) {
  return (
    <ul role='list' className='divide-y divide-gray-100'>
      <ActivityList activities={activities} />
    </ul>
  );
}
