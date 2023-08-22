import React from 'react'

// Artists interface
import { Artist } from '@/interfaces/Artists'
import ArtistCard from '../ArtistCard/ArtistCard'

const artists: Artist[] =
    [
        {
            id: 1902134234,
            artistName: 'Martin Garrix',
            activeSince: new Date("2023-8-22"),
            briefDescription: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement",
            biography: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement in a career already filled with defining moments. After a vertiginous live streamed show from the top of New York’s Empire State Building, he tells DJ Mag about working with U2, writing music on guitar, how he stays grounded, his charity work and his STMPD label — and explains that staying independent has been a recipe for happiness and success. Martin Garrix has once more ascended to the apex of the Top 100 DJs poll for 2022. The prodigious young Dutchman is still only 26, having broken through onto the scene in his mid- teens via his proto - EDM tune ‘Animals’, and scooped the Top 100 DJs crown in 2016 and the subsequent two years.His great friend and mentor David Guetta won the poll the last two years, and now Garrix is back on top.It’s a placing that is well deserved — and not completely unexpected.Garrix really is up there in the superstar bracket now, transcending the dance scene to mingle alongside the likes of Ed Sheeran, Dua Lipa, Usher and U2, all of whom he has collaborated with.His fourth victory takes him above Guetta and his other great friend and mentor, Tiësto, in the all - time DJ popularity stakes, and is second only to Dutch trance overlord Armin van Buuren, with his five No.1s.How does that notoriety feel to Martin ? ",
            songs: ["lorem", "ipsum", "quiet"],
            profiles: [{ name: "X", link: "#" }, { name: "Facebook", link: "#" }],
            images: ["https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2022-10/MGlifestyle-3.jpg.webp?itok=0fb-09-9"]
        },
        {
            id: 19901134234,
            artistName: 'Martin Garrix',
            activeSince: new Date("2010-10-1"),
            briefDescription: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement",
            biography: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement in a career already filled with defining moments. After a vertiginous live streamed show from the top of New York’s Empire State Building, he tells DJ Mag about working with U2, writing music on guitar, how he stays grounded, his charity work and his STMPD label — and explains that staying independent has been a recipe for happiness and success. Martin Garrix has once more ascended to the apex of the Top 100 DJs poll for 2022. The prodigious young Dutchman is still only 26, having broken through onto the scene in his mid- teens via his proto - EDM tune ‘Animals’, and scooped the Top 100 DJs crown in 2016 and the subsequent two years.His great friend and mentor David Guetta won the poll the last two years, and now Garrix is back on top.It’s a placing that is well deserved — and not completely unexpected.Garrix really is up there in the superstar bracket now, transcending the dance scene to mingle alongside the likes of Ed Sheeran, Dua Lipa, Usher and U2, all of whom he has collaborated with.His fourth victory takes him above Guetta and his other great friend and mentor, Tiësto, in the all - time DJ popularity stakes, and is second only to Dutch trance overlord Armin van Buuren, with his five No.1s.How does that notoriety feel to Martin ? ",
            songs: ["lorem", "ipsum", "quiet"],
            profiles: [{ name: "X", link: "#" }, { name: "Facebook", link: "#" }],
            images: ["https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2022-10/MGlifestyle-3.jpg.webp?itok=0fb-09-9"]
        },
        {
            id: 1193134234,
            artistName: 'Martin Garrix',
            activeSince: new Date("2012-9-12"),
            briefDescription: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement",
            biography: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement in a career already filled with defining moments. After a vertiginous live streamed show from the top of New York’s Empire State Building, he tells DJ Mag about working with U2, writing music on guitar, how he stays grounded, his charity work and his STMPD label — and explains that staying independent has been a recipe for happiness and success. Martin Garrix has once more ascended to the apex of the Top 100 DJs poll for 2022. The prodigious young Dutchman is still only 26, having broken through onto the scene in his mid- teens via his proto - EDM tune ‘Animals’, and scooped the Top 100 DJs crown in 2016 and the subsequent two years.His great friend and mentor David Guetta won the poll the last two years, and now Garrix is back on top.It’s a placing that is well deserved — and not completely unexpected.Garrix really is up there in the superstar bracket now, transcending the dance scene to mingle alongside the likes of Ed Sheeran, Dua Lipa, Usher and U2, all of whom he has collaborated with.His fourth victory takes him above Guetta and his other great friend and mentor, Tiësto, in the all - time DJ popularity stakes, and is second only to Dutch trance overlord Armin van Buuren, with his five No.1s.How does that notoriety feel to Martin ? ",
            songs: ["lorem", "ipsum", "quiet"],
            profiles: [{ name: "X", link: "#" }, { name: "Facebook", link: "#" }],
            images: ["https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2022-10/MGlifestyle-3.jpg.webp?itok=0fb-09-9"]
        },
        {
            id: 1902119234,
            artistName: 'Martin Garrix',
            activeSince: new Date("2020-1-3"),
            briefDescription: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement",
            biography: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement in a career already filled with defining moments. After a vertiginous live streamed show from the top of New York’s Empire State Building, he tells DJ Mag about working with U2, writing music on guitar, how he stays grounded, his charity work and his STMPD label — and explains that staying independent has been a recipe for happiness and success. Martin Garrix has once more ascended to the apex of the Top 100 DJs poll for 2022. The prodigious young Dutchman is still only 26, having broken through onto the scene in his mid- teens via his proto - EDM tune ‘Animals’, and scooped the Top 100 DJs crown in 2016 and the subsequent two years.His great friend and mentor David Guetta won the poll the last two years, and now Garrix is back on top.It’s a placing that is well deserved — and not completely unexpected.Garrix really is up there in the superstar bracket now, transcending the dance scene to mingle alongside the likes of Ed Sheeran, Dua Lipa, Usher and U2, all of whom he has collaborated with.His fourth victory takes him above Guetta and his other great friend and mentor, Tiësto, in the all - time DJ popularity stakes, and is second only to Dutch trance overlord Armin van Buuren, with his five No.1s.How does that notoriety feel to Martin ? ",
            songs: ["lorem", "ipsum", "quiet"],
            profiles: [{ name: "X", link: "#" }, { name: "Facebook", link: "#" }],
            images: ["https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2022-10/MGlifestyle-3.jpg.webp?itok=0fb-09-9"]
        },
        {
            id: 1902334234,
            artistName: 'Martin Garrix',
            activeSince: new Date("2002-1-1"),
            briefDescription: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement",
            biography: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement in a career already filled with defining moments. After a vertiginous live streamed show from the top of New York’s Empire State Building, he tells DJ Mag about working with U2, writing music on guitar, how he stays grounded, his charity work and his STMPD label — and explains that staying independent has been a recipe for happiness and success. Martin Garrix has once more ascended to the apex of the Top 100 DJs poll for 2022. The prodigious young Dutchman is still only 26, having broken through onto the scene in his mid- teens via his proto - EDM tune ‘Animals’, and scooped the Top 100 DJs crown in 2016 and the subsequent two years.His great friend and mentor David Guetta won the poll the last two years, and now Garrix is back on top.It’s a placing that is well deserved — and not completely unexpected.Garrix really is up there in the superstar bracket now, transcending the dance scene to mingle alongside the likes of Ed Sheeran, Dua Lipa, Usher and U2, all of whom he has collaborated with.His fourth victory takes him above Guetta and his other great friend and mentor, Tiësto, in the all - time DJ popularity stakes, and is second only to Dutch trance overlord Armin van Buuren, with his five No.1s.How does that notoriety feel to Martin ? ",
            songs: ["lorem", "ipsum", "quiet"],
            profiles: [{ name: "X", link: "#" }, { name: "Facebook", link: "#" }],
            images: ["https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2022-10/MGlifestyle-3.jpg.webp?itok=0fb-09-9"]
        },
        {
            id: 1102134234,
            artistName: 'Martin Garrix',
            activeSince: new Date("2000-1-1"),
            briefDescription: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement",
            biography: "Martin Garrix has hit No. 1 in the Top 100 DJs poll for the fourth time, an astonishing achievement in a career already filled with defining moments. After a vertiginous live streamed show from the top of New York’s Empire State Building, he tells DJ Mag about working with U2, writing music on guitar, how he stays grounded, his charity work and his STMPD label — and explains that staying independent has been a recipe for happiness and success. Martin Garrix has once more ascended to the apex of the Top 100 DJs poll for 2022. The prodigious young Dutchman is still only 26, having broken through onto the scene in his mid- teens via his proto - EDM tune ‘Animals’, and scooped the Top 100 DJs crown in 2016 and the subsequent two years.His great friend and mentor David Guetta won the poll the last two years, and now Garrix is back on top.It’s a placing that is well deserved — and not completely unexpected.Garrix really is up there in the superstar bracket now, transcending the dance scene to mingle alongside the likes of Ed Sheeran, Dua Lipa, Usher and U2, all of whom he has collaborated with.His fourth victory takes him above Guetta and his other great friend and mentor, Tiësto, in the all - time DJ popularity stakes, and is second only to Dutch trance overlord Armin van Buuren, with his five No.1s.How does that notoriety feel to Martin ? ",
            songs: ["lorem", "ipsum", "quiet"],
            profiles: [{ name: "X", link: "#" }, { name: "Facebook", link: "#" }],
            images: ["https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2022-10/MGlifestyle-3.jpg.webp?itok=0fb-09-9"]
        },
    ]

// interface Props {
//     artists: Artist
// }


export default function ArtistList() {
    return (
        <section className='flex flex-wrap flex-col sm:flex-row m-12 lg:mx-24 place-content-start'>
            {artists.map((artist: Artist) => (
                <ArtistCard key={artist.id} item={artist} />
            ))}
        </section>
    )
}
