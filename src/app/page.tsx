import ArtistList from '@/components/ArtistList/ArtistList'
import HomePage from '@/components/HomePage/HomePage'

export default function Home() {
  return (
    <main className="my-5 ">
      <div className='bg-[#efed84] fixed top-72 my-5 w-full h-20  z-0'></div>
      <ArtistList />
    </main>
  )
}
