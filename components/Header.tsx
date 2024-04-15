'use client'

import React from 'react';
import Link from 'next/link';
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
    <div className="left">
      <Link href="/" className="italic" data-active={isActive('/')}>
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
      <div className="right">
        <Link href="/auth" data-active={isActive('/signup')}>
          hack
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
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
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }

          button {
            border: none;
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav className="flex p-6 items-center border-b-2 border-b-solid border-b-neutral-200">
      {left}
      {right}
    </nav>
  );
};

export default Header;