import React from 'react';
import ListingItem from '../ListingItem';

function Listing({ items }) {
    return (
        <div className="item-list">
            {items.map(item => <ListingItem key={item.listing_id} items={item} />)}
        </div>
    )
}

export default Listing;