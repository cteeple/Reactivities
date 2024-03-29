import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Activity } from '../../../app/layout/models/activity';

interface Props {
  activity: Activity;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ActivityDetails({
  activity,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        open={isOpen}
        onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>
        <Dialog.Panel>
          <img
            alt={`${activity.category}`}
            src={`/assets/categoryImages/${activity.category?.toLowerCase()}.jpg`}
          />
          <Dialog.Title>{activity.title}</Dialog.Title>
          <Dialog.Description>{activity.description}</Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
