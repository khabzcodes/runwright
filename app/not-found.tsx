import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='bg-background flex h-screen w-full items-center justify-center'>
      <Card className='w-full max-w-md rounded-none border-1 border-dashed shadow-none'>
        <CardHeader className='border-b border-dashed p-4'>
          <div className='flex items-center space-x-4'>
            <Terminal />
            <span className='text-sm'>404 - Page Not Found</span>
          </div>
        </CardHeader>
        <CardContent className='pt-6 pb-0'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-muted-foreground'>$</span>
              <span>status</span>
            </div>
            <div className='space-y-1 pl-6'>
              <p className='text-3xl font-bold'>404</p>
              <p className='text-muted-foreground'>Page not found</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='text-muted-foreground'>$</span>
              <div className='flex items-center'>
                <span>locate_page</span>
                <span className='bg-foreground ml-1 inline-block h-5 w-2 animate-pulse' />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='mt-6 border-t border-dashed pt-6'>
          <Button
            variant='outline'
            className='w-full rounded-none border-dashed'
            asChild
          >
            <Link href='/'>$ cd /home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
