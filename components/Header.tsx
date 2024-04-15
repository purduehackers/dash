'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';
//import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const router = useRouter();
  //const accessToken = cookies().get("phIdAccessToken")?.value;

  const isActive: (pathname: string) => boolean = (pathname) =>
    usePathname() === pathname;

  //const { data: session, status } = useSession();
  let session = {
    user: {
      name: 'testuser',
      email: 'test@email.com'
    }
  }
  session = null
  const status = 'test'

  let left = (
    <div className="flex flex-row items-center">
      <Link href="/" className="italic">
        <Image className="mx-4"
          src="/ph-logo.svg"
          alt="Picture of the author"
          width={40}
          height={40}
        />
      </Link>
      <Link href="/" className="italic">
        dash dash dash dash
      </Link>
    </div>
  );

  let right = null;

  /*if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }*/

  if (!session) {
    right = (
      <div className="ml-auto flex row">
        <Link className="inline-block border-l-2 border-b-[1px] px-10 h-20 flex items-center
                hover:bg-indigo-500 transition duration-200 ease-in-out"
            href="/auth" data-active={isActive('/signup')}>
          sign in
        </Link>
        <Link className="inline-block border-l-2 border-b-[1px] px-10 h-20 flex items-center
                hover:bg-indigo-500 transition duration-200 ease-in-out"
            href="https://passport-data-pages.vercel.app/" target="_blank">
          register
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/" className="bold" data-active={isActive('/')}>
          Feed
        </Link>
        <Link href="/drafts" data-active={isActive('/drafts')}>
          My drafts
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/create">
          <button>
            New post
          </button>
        </Link>
        <button onClick={() => console.log('log out') /*signOut()*/}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <nav className="flex h-20 items-center border-b-2 border-b-solid border-b-neutral-200">
      {left}
      {right}
    </nav>
  );
};

export default Header;