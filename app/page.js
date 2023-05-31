import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-3 gap-4 bg-white">
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-red-400 text-center">1</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-orange-400 text-center">2</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-yellow-400 text-center">3</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-green-400 text-center">4</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-blue-400 text-center">5</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-purple-400 text-center">6</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-sky-400 text-center">7</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-teal-400 text-center">8</div>
          <div className="text-black bg-gray-200 p-11 rounded-lg hover:bg-pink-s400 text-center">9</div>
        </div>

        {/*  */}
    </main>
  )
}
