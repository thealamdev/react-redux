import React from 'react'
import List from './List'

export default function ListItem() {
    return (
        <div>
            <div
                className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
            >

                <List />

            </div>

            <hr className="mt-4" />
        </div>
    )
}
