import { useRouter } from 'next/router'
import Head from 'next/head'


export default function Restaurant() {
    const router = useRouter()
    return (
        <h1>Dynamic Restaurant Page {router.query.restaurant}</h1>
    )
}