import { Activity } from '../../../app/layout/models/activity';
import ActivityList from './ActivityList';

interface Props {
  readonly activities: Activity[];
}

export default function ActivitiesDashboard({ activities }: Props) {
  // const [isShowing, setIsShowing] = useContext(false);

  // const [detail, setDetail] = useState<Activity>({} as Activity);

  return (
    <ul role='list' className='divide-y divide-gray-100'>
      <ActivityList activities={activities} />
    </ul>
  );
}
