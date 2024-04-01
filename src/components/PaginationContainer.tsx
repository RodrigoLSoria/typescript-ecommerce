import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination"
import { ProductsResponseWithParams, constructUrl, constructPrevOrNextUrl } from "@/utils"
import { useLoaderData, useLocation } from "react-router-dom"




function PaginationContainer() {
    return (
        <div>PaginationContainer</div>
    )
}
export default PaginationContainer