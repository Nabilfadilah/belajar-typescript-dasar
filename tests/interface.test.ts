import { Seller } from "../src/seller"

describe('Interface', function () {
    it('should support in typescript', function () {
     
        const seller: Seller = {
            id: 1,
            name: "Toko Gulay",
            nib: "9999999",
            npwp: "7777777"
        }

        seller.name = "Ian None"

        console.info(seller)

    })
})