import React from 'react'
import { ArrowDownIcon } from './Icons/ArrowDownIcon'
import { Button } from './Button'
import { BriefcaseIcon } from './Icons/BriefcaseIcon'
import Image from 'next/image'

import logoUREEQA from '../images/logos/ureeqa.png'
import logoTulip from '../images/logos/tulip.png'
import logoSurge from '../images/logos/surge.png'
import logoSkrumble from '../images/logos/skrumble.svg'
import Link from 'next/link'

function Resume() {
    let resume = [
      {
        company: 'UREEQA',
        title: 'CTO',
        logo: logoUREEQA,
        start: '2021',
        url: 'https://ureeqa.com',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear(),
        },
      },
      {
        company: 'Surge Learning',
        title: 'Director of Programming',
        logo: logoSurge,
        url: 'https://surgelearning.ca',
        start: '2019',
        end: '2021',
      },
      {
        company: 'Tulip Retail',
        title: 'Snr. Software Engineer (Contract)',
        logo: logoTulip,
        url: 'https://tulip.com',
        start: '2019',
        end: '2019',
      },
      {
        company: 'Skrumble Network',
        title: 'Lead Developer',
        logo: logoSkrumble,
        url: 'https://skumble.network',
        start: '2016',
        end: '2019',
      },
    ]
  
    return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <Link href={role.url} target="_blank" legacyBehavior>
                  {role.company}
                  </Link>
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button> */}
      </div>
    )
  }

export default Resume