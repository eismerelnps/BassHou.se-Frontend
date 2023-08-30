import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <SearchBar />
            {children}

        </section>

    )
}
