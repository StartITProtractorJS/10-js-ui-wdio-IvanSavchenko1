import { ProductCardComponent } from "./components/productCard.component"



export class ProductCategoryPage {


    open(url: string) {
        browser.url(url)
    }

    get products(): ProductCardComponent[] {
        return $$('div.product-layout').map(elem => {
            return new ProductCardComponent(elem)
        })
    }

}