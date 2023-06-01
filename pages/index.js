import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-black text-white">
    <div className="flex flex-row justify-center m-5">
      <h1>Hearth Productions</h1>
    </div>
    <div className="flex flex-row justify-center m-5">
      <h3>Who we are</h3>
      <p>
      </p>
    </div>
    <div className="flex flex-row justify-center m-5">
      <p>The Soundsystem</p>
    </div>
    <div className="flex flex-row justify-center m-5">
      <h3>Upcoming events</h3>
    </div>
    <div>

    </div>
    <div className="flex flex-row justify-center m-5">
      <h3>Photos</h3>
    </div>
    </main>
  )
}
