import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();
    router.push('/index')
  return (
    <></>
  )
}
