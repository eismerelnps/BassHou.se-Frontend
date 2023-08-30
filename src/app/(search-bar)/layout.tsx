import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

export default function layout({ children }: { children: undefined }) {
    return (
        <section>
            <SearchBar />
            {children}
        </section>

    )
}
