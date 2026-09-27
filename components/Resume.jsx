export default function Resume() {
  const roles = [
    ['Purolator Digital Lab', 'Manager of Software Development'],
    ['UREEQA', 'VP of Engineering'],
    ['Sheridan and Conestoga', 'Instructor'],
  ]
  return (
    <section className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Current work</h2>
      <dl className="mt-6 space-y-5">
        {roles.map(([organisation, role]) => (
          <div key={organisation}>
            <dt className="font-medium text-zinc-900 dark:text-zinc-100">{organisation}</dt>
            <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{role}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
