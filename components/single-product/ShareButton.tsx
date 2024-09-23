'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { Button } from '../ui/button';
import { RxShare1 } from 'react-icons/rx';
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';
export default function ShareButton({
  productId,
  name,
}: {
  productId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/products/${productId}`;
  //whats is wrong
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='p-2'>
          <RxShare1 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='top'
        align='end'
        sideOffset={10}
        className='flex items-center gap-x-2 justify-center w-full '
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon
            size={32}
            iconFillColor='#fff'
            round
            bgStyle={{ fill: '#5c6670' }}
          />
        </TwitterShareButton>
        <EmailShareButton url={shareLink} title={name}>
          <EmailIcon
            size={32}
            iconFillColor='#fff'
            round
            bgStyle={{ fill: '#5c6670' }}
          />
        </EmailShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon
            size={32}
            round
            iconFillColor='#fff'
            bgStyle={{ fill: '#5c6670' }}
          />
        </LinkedinShareButton>
      </PopoverContent>
    </Popover>
  );
}
