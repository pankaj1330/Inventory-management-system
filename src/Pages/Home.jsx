import Inventory from "../components/Inventory"

function Home() {
  return (
    <>
        <div className="text-center py-4 bg-blue-400">
          <h1 className="font-bold text-white text-3xl">Inventory Management System</h1>
        </div>
        <Inventory />
    </>
  )
}

export default Home