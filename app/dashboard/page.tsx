import Breadcrumb from "../components/Breadcrump/Bread"
import Users from "../components/UserList/UserList"

export default function Home() {
    return (
      <main className="bg-background">
        <Breadcrumb />
        <div className='flex items-center justify-center h-screen'>
          <h1 className='text-6xl text-slate-800'>Dashboard</h1>
          <Users/>
        </div>
      </main>
    )
  }
  