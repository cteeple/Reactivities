import { useState } from 'react';
import { Activity } from '../../../app/layout/models/activity';
import ActivityDetails from '../details/ActivityDetails';

interface Props {
  activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
  const [isShowing, setIsShowing] = useState(false);

  const [detail, setDetail] = useState<Activity>({} as Activity);

  const handleToggleDetails = (activity: Activity) => {
    setIsShowing(!isShowing);
    setDetail(activity);
  };

  return (
    <div>
      <ul>
        {activities.map((activity) => (
          <li
            key={activity.id}
            className='flex justify-between gap-x-6 py-5 items-center'>
            <div className='flex min-w-0 gap-x-4'></div>
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                {activity.title}
              </p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                {activity.description}
              </p>
              <p className='mt-1'>{activity.city}</p>
              <p className='mt-1 text-sm'>{activity.category}</p>
            </div>
            <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
              <button
                type='button'
                title='View'
                className='text-sm leading-6 text-white bg-gray-900'
                onClick={() => handleToggleDetails(activity)}>
                View
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ActivityDetails
        activity={detail}
        isOpen={isShowing}
        setIsOpen={(isShowing) => setIsShowing(isShowing)}
      />
    </div>
  );
}
