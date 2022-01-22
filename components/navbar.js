import Link from 'next/link' 
import Router, { useRouter } from 'next/router'

export default function Nav(){
    const route = useRouter();

    return(
    <nav className="border-b p-6 font-mono">
        <div className='flex'>
            <div>
        <h1 className="text-3xl font-bold ml-2"><Link href="/">NFT Marketplace</Link></h1>
        </div>
        <div className="flex mx-auto items-center space-x-6 ">
          <Link href="/">
            <a  className={route.pathname=='/' ? "nav-active" : "nav" } >
              Home
            </a>
          </Link>
          <Link href="/create-item">
          <a  className={route.pathname=='/create-item' ? "nav-active" : "nav" } >
              Create Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
          <a  className={route.pathname=='/my-assets' ? "nav-active" : "nav" } >
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
          <a  className={route.pathname=='/creator-dashboard' ? "nav-active" : "nav" } >
              Creator Dashboard
            </a>
          </Link>
        </div>
        </div>
      </nav>
    )

}