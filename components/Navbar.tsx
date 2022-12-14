import React, {useEffect, useContext, useState, useRef}  from 'react'
import {AuthContext,AuthContextProps} from "../context/AuthContext";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const {account, connect, disconnect} = useContext<AuthContextProps>(AuthContext);
  const router = useRouter();
  const [path,setPath] = useState<string>(router.pathname);
  
  useEffect(() => {
    const getPageLocation = () => {
        const res = router.pathname;
        setPath(res);
    }
    getPageLocation();
})
  
  return (
    <div className="absolute z-20 w-screen flex items-center justify-between  p-5">

      <Link href={'/Landing'}>
        <Image src={'/alkyne.png'} width={50} height={50} alt="alyne"/>
      </Link>

      {account&&<div className="Mulish font-[200] flex w-[40%] justify-evenly">
        <Link href={'/'}>
          <p style={{color:path==='/'?'#d1318c':'#f1f1f1'}}>Home</p>
        </Link>
        <Link href={'/Leaderboard'}>
          <p style={{color:path==='/Leaderboard'?'#d1318c':'#f1f1f1'}}>Leaderboard</p>
        </Link>
        <Link href={'/Guilds'}>
          <p style={{color:path==='/Guilds'?'#d1318c':'#f1f1f1'}}>Guilds</p>
        </Link>
        <Link href={'/Trade'}>
          <p style={{color:path==='/Trade'?'#d1318c':'#f1f1f1'}}>Trade</p>
        </Link>
        <Link href={'/Notifs'}>
          <p style={{color:path==='/Notifs'?'#d1318c':'#f1f1f1'}}>Notifications</p>
        </Link>
      </div>}

      <button className="button p-2" onClick={account?()=>{disconnect();router.push('/Landing')}:()=>{connect()}}>
        {account?'Logout':'Login'}
      </button>

    </div>
  )
}

export default Navbar