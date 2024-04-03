import { CartButton, LinksDropDown, Logo, ModeToggle, Navlinks } from '.'

export default function NavBar() {
    return (
        <nav className='bg-muted py-4'>
            <div className='align-element flex justify-between items-center'>
                <Logo />
                <LinksDropDown />
                <Navlinks />
                <div className='flex justify-center items-center gap-x-4'>
                    <ModeToggle />
                    <CartButton />

                </div>
            </div>
        </nav>
    )
}
