import { Form, useLoaderData, Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { ProductsResponseWithParams } from "@/utils"
import { FormInput } from "."
import { FormSelect } from "."
import { FormRange } from "."
import { FormCheckbox } from "."


function Filters() {
    const { meta, params } = useLoaderData() as ProductsResponseWithParams
    const { search, company, category, shipping, order, price } = params
    return (
        <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3
       lg:grid-cols-4 items-center">
            <FormInput type="search" label="search product" name="search" defaultValue={search} />

            <FormSelect label='select category' name="category" options={meta?.categories}
                defaultValue={category} />

            <FormSelect label='select company' name="company" options={meta?.companies}
                defaultValue={company} />

            <FormSelect label='order by' name="order" options={['a-z', 'z-a', 'high', 'low']}
                defaultValue={order} />

            <FormRange label='price' name='price' defaultValue={price} />
            <FormCheckbox label='free shipping' name='shipping' defaultValue='shipping' />

            <Button type="submit" size={'sm'} className="self-end mb-2">Search</Button>
            <Button type="button" asChild size={'sm'} variant={'outline'} className="self-end 
            mb-2">
                <Link to={'/products'}>reset</Link>
            </Button>
        </Form>
    )
}
export default Filters