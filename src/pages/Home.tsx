import Navbar from '../components/general/Navbar';

function Home() {
  return (
    <div className="bg-brand-white min-h-screen">
      <Navbar />
      
      <main>
        <div className="container mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 h-96">
            <div className="border-4 border-dashed border-neutral-200 rounded-lg h-full" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
