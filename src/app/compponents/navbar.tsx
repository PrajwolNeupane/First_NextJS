import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='flex flex-row'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about/us"}>About Us</Link>
            <Link href={"/about/client"}>About Client</Link>
            <Link href={"/about/123"}>About ID</Link>
            <Link href={"/listofposts"}>Posts</Link>
        </div>
    )
}