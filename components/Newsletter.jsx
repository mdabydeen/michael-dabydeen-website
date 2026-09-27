import React from 'react'
import { MailIcon } from './Icons/MailIcon'

export function Newsletter() {
    return (
      <div
        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Email updates are not available yet, so no address is collected here.
          The free review kit is available now if you want a useful starting point.
        </p>
        <p className="mt-4 text-sm font-medium text-teal-700 dark:text-teal-400">
          <a href="/resources/review-kit.zip" className="underline">
            Download the free review kit
          </a>
        </p>
      </div>
    )
  }
