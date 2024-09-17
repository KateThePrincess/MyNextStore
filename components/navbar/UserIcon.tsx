import { auth, currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { RxPerson } from 'react-icons/rx';
export default async function UserIcon() {
  const { userId } = auth();
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <div className='relative w-6 h-6'>
        <Image
          src={profileImage}
          alt={user.firstName?.toString() || 'User profile'}
          className='w-6 h-6 rounded-full object-cover'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    );
  }
  return <RxPerson className='w-6 h-6 rounded-full bg-primary text-white ' />;
}
