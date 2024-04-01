import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Cart() {
  return (
    <div>
      <Link to={'/'} className="text-7xl text-red-800">Back Home</Link>
      <Button asChild size={'lg'}>
        <Link to={'/'}>Home</Link>
      </Button>
    </div>
  )
}
