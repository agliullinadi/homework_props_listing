function ListingItem({ items }) {

    if (items.state !== 'active') {
        return null;
    }

    const showTitle = (title) => {
        return title.length > 50 ? `${title.slice(0, 50)}...` : title;
    }

    const showCurrency = (code, price) => {
        if (code === 'USD') {
            return `$${price}`;
        }
        if (code === 'EUR') {
            return `€${price}`;
        }
        return `${price} ${code}`;
    }

    const showQuantity = (quantity) => {
        if (quantity < 10) {
            return 'level-low';
        }
        if (quantity > 20) {
            return 'level-high';
        }
        return 'level-medium'
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                    <img src={items.MainImage.url_570xN} alt="" />
                </a>
            </div>
            <div>
                <p className="item-title">{showTitle(items.title)}</p>
                <p className="item-price">{showCurrency(items.currency_code, items.price)}</p>
                <p className={`item-quantity ${showQuantity(items.quantity)}`}>{items.quantity} left</p>
            </div>
        </div>
    );
}

export default ListingItem;