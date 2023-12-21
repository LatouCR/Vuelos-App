import ChangePassword from "../components/ChangePass/ChangePass"
import Breadcrumb from "../components/Breadcrump/Bread"

export default function Home() {
    return (
      <main className="bg-background">
          <Breadcrumb/>
        <div className='flex items-center justify-center h-screen'>
            <ChangePassword/>
        </div>
      </main>
    )
  }
  