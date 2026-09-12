export const giHubLoader = async () => {
  const res = await fetch('https://api.github.com/users/srinjoy420')

  if (!res.ok) {
    throw new Response('Failed to load GitHub profile', { status: res.status })
  }

  return res.json()
}
