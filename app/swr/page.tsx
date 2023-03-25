import { getData } from "@/api"

export default async function Home() {
    const data = await getData()
    return (<div>hello swr</div>)
}