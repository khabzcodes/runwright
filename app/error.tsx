'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Terminal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='bg-background flex h-screen w-full items-center justify-center'>
      <Card className='w-full max-w-md rounded-none border-1 border-dashed shadow-none'>
        <CardHeader className='border-b border-dashed pb-4'>
          <div className='flex items-center space-x-2'>
            <Terminal className='h-5 w-5' />
            <span className='font-mono text-sm'>system_failure.sh</span>
          </div>
        </CardHeader>
        <CardContent className='pt-6 pb-0 font-mono'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-muted-foreground'>$</span>
              <span>status</span>
            </div>
            <div className='space-y-1 pl-6'>
              <p className='text-3xl font-bold'>500</p>
              <p className='text-muted-foreground'>Server error encountered</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='text-muted-foreground'>$</span>
              <span>error_trace</span>
            </div>
            <div className='text-muted-foreground pl-6 text-sm'>
              <p className='truncate'>
                {error?.digest || 'Unknown error occurred'}
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='text-muted-foreground'>$</span>
              <div className='flex items-center'>
                <span>repair_system</span>
                <span className='bg-foreground ml-1 inline-block h-5 w-2 animate-pulse' />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='mt-6 flex flex-col flex-wrap gap-2 border-t border-dashed pt-6 sm:flex-row'>
          <Button
            variant='outline'
            className='w-full rounded-none border-dashed'
            onClick={reset}
          >
            <RefreshCw className='mr-2 h-4 w-4' />$ system_restart
          </Button>
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
