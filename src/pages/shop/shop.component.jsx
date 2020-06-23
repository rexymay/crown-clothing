import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from  '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                <h1>SHOP PAGE</h1>
                {
                    collections.map( ({ id, ...others }) => (
                        <CollectionPreview key={id} {...others} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;