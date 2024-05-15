export default defineEventHandler(async (event) => {
  const res = await fetch('https://api.github.com/repos/billsboards/cdn/contents/content')
  const json = (await res.json()) as any[]

  const data: {
    file: string
    url: string
  }[] = []

  json.forEach((i) => {
    data.push({
      file: i.name,
      url: i.download_url
    })
  })

  return data
})
