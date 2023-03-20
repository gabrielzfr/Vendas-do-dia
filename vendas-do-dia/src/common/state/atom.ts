import { atom, useRecoilValue } from "recoil";
import { ISales } from "../interfaces/ISales";
import { SaleType } from "../types/SaleType";

const localStorageSales = localStorage.getItem('Sales')
const localStorageCashdesk = localStorage.getItem('Cashdesk')

let windowWidth = window.innerWidth

//Sales
export const salesState = atom<ISales[]>({
    key: "salesState",
    default: localStorageSales ? JSON.parse(localStorageSales) as ISales[] : [],
})

//Selected Sale
export const selectedSaleTypeState = atom<SaleType>({
    key: "selectedSaleTypeState",
    default: 'Money'
})

//Show Components
export const showComponentsState = atom({
    key: 'showComponentsState',
    default: {
        SalesComponent: {
            isShow: true
        },
        AddSalesComponent: {
            isShow: windowWidth > 590
        },
        ReportComponent: {
            isShow: false
        },
        CashDeskComponent: {
            isShow: false
        }
    }
    }
)

// Cashdesk 

export const CashDeskState = atom({
    key: "CashDeskState",
    default: localStorageCashdesk ? JSON.parse(localStorageCashdesk) as number : 0
})