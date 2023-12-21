import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Consecutivo() {
    return (
        <div className="mx-auto mt-8">
        <table className="border-collapse border border-green-800 w-full">
          <thead>
            <tr>
              <th className="border border-accent text-center px-4 py-2 text-slate-800 bg-accent/50">Código</th>
              <th className="border border-accent text-center px-4 py-2 text-slate-800 bg-accent/50">Descripción</th>
              <th className="border border-accent text-center px-4 py-2 text-slate-800 bg-accent/50" colSpan={2}>Consecutivo</th>
            </tr>
          </thead>
        </table>
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Nuevo
          </button>
        </div>
      </div>
    )

}