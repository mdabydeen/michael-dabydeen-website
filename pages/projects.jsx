import Head from 'next/head'

import { Card } from '../components/Card'
import { SimpleLayout } from '../components/SimpleLayout'

const projects = [
  {
    name: 'Stopline',
    description: 'An experimental decision gate for browser agents. A model classifies each proposed action and a policy in code decides whether it runs. The repository documents the mechanism and its limits.',
    link: { href: 'https://github.com/mdabydeen/stopline', label: 'Inspect Stopline on GitHub' },
    secondaryLink: { href: 'https://github.com/mdabydeen/stopline/releases/latest', label: 'Read the latest release' },
    tertiaryLink: { href: '/workshops/ai-assisted-code-review', label: 'Explore the team workshop' },
  },
  {
    name: 'Metron',
    description: 'A small terminal coding agent for local AI development, with bounded tools and explicit approval for patches. Read the repository documentation before using it on your own code.',
    link: { href: 'https://github.com/mdabydeen/metron', label: 'Inspect Metron on GitHub' },
    secondaryLink: { href: 'https://github.com/mdabydeen/metron/discussions/21', label: 'Share model and setup feedback' },
    tertiaryLink: { href: 'https://github.com/mdabydeen/metron/releases/latest', label: 'Read the latest release' },
  },
  {
    name: 'Code review kit',
    description: 'An illustrative shipment-mapping exercise with runnable JavaScript, a worksheet, and a worked answer. It examines an unsupported default that the original fixtures miss. Free to use without signup.',
    link: { href: '/resources/review-kit.zip', label: 'Download the complete kit (ZIP)' },
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Mike Dabydeen</title>
        <meta
          name="description"
          content="Code and exercises you can inspect."
        />
      </Head>
      <SimpleLayout
        title="Code and exercises you can inspect."
        intro="I use these public projects to explore agent behaviour and engineering review. Each example has a bounded purpose; its documentation explains what it does and what remains unproven."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
              {project.secondaryLink && (
                <p className="relative z-10 mt-3 text-sm font-medium text-teal-700 dark:text-teal-400">
                  <a href={project.secondaryLink.href} className="underline">
                    {project.secondaryLink.label}
                  </a>
                </p>
              )}
              {project.tertiaryLink && (
                <p className="relative z-10 mt-3 text-sm font-medium text-teal-700 dark:text-teal-400">
                  <a href={project.tertiaryLink.href} className="underline">
                    {project.tertiaryLink.label}
                  </a>
                </p>
              )}
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
