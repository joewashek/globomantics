import { promises as fs } from "fs"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {

  const file = await fs.readFile(process.cwd()+'/houseDB.json','utf8');

  await new Promise(resolve => setTimeout(resolve,2000));
  
  return Response.json(JSON.parse(file));
}

export async function POST() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  })
 
  const data = await res.json()
 
  return Response.json(data)
}