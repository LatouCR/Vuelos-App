import { LoginForm } from "./Form";

export default function LoginPage() {
  return (
    <>
      <section className="bg-background min-h-screen">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10 shadow-md shadow-background-2/40 rounded-md">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
