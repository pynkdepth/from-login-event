import RegisterForm from "./forms/RegisterForm.tsx";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Register Event
        </h1>

        <RegisterForm />
      </div>
    </div>
  );
}

export default App;