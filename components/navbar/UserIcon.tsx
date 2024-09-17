import { auth, currentUser } from '@clerk/nextjs/server';
import { RxPerson } from 'react-icons/rx';
export default async function UserIcon() {
  const { userId } = auth();
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt={user.firstName?.toString()}
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }
  return <RxPerson className='w-6 h-6 rounded-full bg-primary text-white ' />;
}
